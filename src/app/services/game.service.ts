import { Injectable } from '@angular/core';
import { Stat } from '../common/gameConstants';
import { Character, Skill } from '../models/character';
import { Venture } from '../models/venture';
import { DieDef, DIE_LIBRARY } from '../staticData/dieDefinitions';
import { EncounterDef, ENCOUNTER_LIBRARY } from '../staticData/encounterDefinitions';
import { ItemDef, ITEM_LIBRARY } from '../staticData/itemDefinitions';
import { SkillDef, SKILL_LIBRARY } from '../staticData/skillDefinitions';
import { VentureDef, VENTURE_LIBRARY } from '../staticData/ventureDefinitions';
import { MessageService } from './message.service';
import { TimeService } from './time.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public character: Character = null;
  public ventures: Venture[] = [];
  public items: string[] = [];

  public ap: number = 0;
  public dieRank: number = 0;
  public unlockedStats: Stat[] = ["body"];

  public targetVenture: string;
  public resting: boolean = false;

  private _init: boolean = false;

  constructor(private _timeService: TimeService, private _messageService: MessageService) { }

  initVentures(): void {
    this.ventures = [];
    VENTURE_LIBRARY.forEach(def => {
      const v = new Venture();
      v.name = def.name;
      this.ventures.push(v);
    });
  }

  initSim(): void {
    if (this._init) {return;}
    this._timeService.tick.subscribe(x => this.tick(x));
    this._init = true;
  }

  // ======Simulation======

  tick(dT: number): void {
    if (this.character == null) {return;}

    // Do Rest
    if (this.resting) {
      this.character.stamina += 5*dT;
      if (this.character.stamina >= this.character.maxStamina) {
        this.character.stamina = this.character.maxStamina;
        this.resting = false;
      }
    }

    // Progress current venture
    else if (this.targetVenture != null) {
      const venture = this.ventures.find(x => x.name == this.targetVenture);
      if (venture == null) {return;}

      // If there isn't an encounter, init an encounter
      if (venture.encounterName == null) {
        this.startEncounter(venture);
      }

      const encDef = this.getEncounterDef(venture.encounterName);

      const bestSkill = this.bestSkillForEncounter(encDef);
      if (bestSkill != null) {
        const encSkill = encDef.skills.find(x => x.skill == bestSkill);
        const charSkillStr = this.character.skill(bestSkill).total();
        venture.progress += encSkill.strength*charSkillStr*dT;
        this.advanceSkill(bestSkill, dT);
      }

      venture.progress += 7*this.character.stat("body")*encDef.getSkill("melee")*dT;
      this.character.stamina -= dT*encDef.staminaDrain;

      if (this.character.stamina <= 0) {this.resting = true;}

      if (venture.progress > venture.progressMax) {
        venture.completions++;
        venture.progress = 0;
        this._messageService.addMessage("You slay the " + venture.encounterName + ".");

        this.gainXp(encDef.xpReward);
        if (encDef.itemReward != null) {
          this.gainItem(encDef.itemReward);
        }

        this.startEncounter(venture);
      }

    }

    // Degen venture progress
    this.ventures.forEach(x => {
      if (x.progress > 0 && (this.resting || this.targetVenture != x.name)) {
        const encDef = this.getEncounterDef(x.encounterName);
        const progDegen = x.progressMax*(encDef.progressDegenPct/100);
        x.progress -= progDegen*dT;
        if (x.progress <= 0) {
          x.progress = 0;
          this._messageService.addMessage(`The ${x.encounterName} wandered off while you were asleep.`);
          x.encounterName = null;
        }
      }
    });
  }

  advanceSkill(skill: string, dT: number) {
    const s = this.character.skill(skill);
    const sDef = this.getSkillDef(skill);
    const relatedStat = this.character.stat(sDef.stat);
    s.progress += relatedStat*relatedStat*dT;

    const nextRankCost = this.getSkillRankCost(skill, s.rank+1);
    if (s.progress >= nextRankCost) {
      s.progress -= nextRankCost;
      s.rank++;
      this._messageService.addMessage(`Your ${skill} skill has increased to ${s.rank}.`);
    }
  }

  // ======Character Operations======

  rollNewCharacter(): void {
    const die = this.getCurrentDie();
    this.character = new Character();
    this.character.name = "Bob the Adventurer";
    this.character.xp = 0;
    this.character.level = 1;

    this.unlockedStats.forEach(x => {
      this.character.setStat(x, die.roll());
    });

    this.initSkills();

    // TODO: Sell old items
    this.items = [];

    this.character.maxStamina = (this.character.stat("body")+2)*3;
    this.character.stamina = this.character.maxStamina;

    this.targetVenture = null;
    this.resting = false;

    this._messageService.addMessage("Welcome, " + this.character.name + "!");

    this.initVentures();
    this.initSim();

    this.updateSkills();
  }

  initSkills(): void {
    this.character.skills = [];
    SKILL_LIBRARY.forEach(x => {
      this.character.skills.push(new Skill(x.name));
    });
  }

  updateSkills(): void {
    this.character.skills.forEach(x => {
      x.itemBonus = 0;
    });

    this.items.forEach(x => {
      const def = this.getItemDef(x);

      let canUse = true;
      if (def.requiredStat != null) {
        if (def.requiredStatAmount > this.character.stat(def.requiredStat)) {canUse = false;}
      }

      if (canUse) {
        const skill = this.character.skill(def.skill);
        if (skill != null) {
          skill.itemBonus += def.strength;
        }
      }

    });
  }

  bestSkillForEncounter(encounter: EncounterDef): string {
    let bestSkill = null;
    let bestStrength = 0;
    encounter.skills.forEach(s => {
      if (!this.character.hasSkill(s.skill)) {return;}
      const skillDef = this.getSkillDef(s.skill);
      if (this.character.stat(skillDef.stat) <= 0) {return;} // Can't use a skill with no supporting stat
      const str = this.character.skill(s.skill).total() * s.strength;
      if (str > bestStrength) {
        bestSkill = s.skill;
        bestStrength = str;
      }
    });

    return bestSkill;
  }

  getSkillRankCost(skill: string, rank: number): number {
    const def = this.getSkillDef(skill);
    return 25 + (((rank*rank)-2)*45*def.cost);
  }

  getLevelCost(level: number): number {
    return 150 + (((level*level)-4)*135);
  }

  rest(): void {
    this.resting = true;
  }

  gainXp(xp: number): void {
    this.character.xp += xp;

    const nextLevelCost = this.getLevelCost(this.character.level+1);
    if (this.character.xp >= nextLevelCost) {
      this.character.xp -= nextLevelCost;
      this.gainLevel();
    }
  }

  gainLevel(): void {
    this.character.level++;
    const newLevel = this.character.level;
    this._messageService.addMessage("You have reached level " + newLevel + "!");

    const die = this.getCurrentDie();
    for (let stat of this.character.getStats()) {
      const curStat = this.character.stat(stat);
      const increase = Math.floor(die.roll()/3);
      if (increase > 0) {
        this._messageService.addMessage(`Your ${stat} has increased by ${increase}.`);
        this.character.setStat(stat, curStat + increase);
      }
    }

    this.character.maxStamina = (this.character.stat("body")+2)*3;
    this.character.stamina = this.character.maxStamina;

    const newAp = Math.max(0, newLevel*newLevel - 3);
    this.ap += newAp;
    this._messageService.addMessage("You have gained " + newAp + " AP.");

    this.updateSkills();
  }

  gainItem(item: string): void {
    this._messageService.addMessage(`You found a ${item}.`);

    if (this.items.indexOf(item) != -1) {
      this._messageService.addMessage(`You already have one, so you sold it.`);
    }
    else {
      this.items.push(item);
    }

    this.updateSkills();
  }

  getSkillDef(name: string): SkillDef {
    return SKILL_LIBRARY.find(x => x.name == name);
  }

  getItemDef(name: string): ItemDef {
    return ITEM_LIBRARY.find(x => x.name == name);
  }

  //======Venture Operations======

  getVentureDef(name: string): VentureDef {
    return VENTURE_LIBRARY.find(x => x.name == name);
  }

  getEncounterDef(name: string): EncounterDef {
    return ENCOUNTER_LIBRARY.find(x => x.name == name);
  }

  selectVenture(venture: Venture): void {
    this.targetVenture = venture.name;
  }

  startEncounter(venture: Venture): void {
    const def = this.getVentureDef(venture.name);
    const encounter = def.getRandomEncounter();
    const encDef = this.getEncounterDef(encounter);
    venture.encounterName = encounter;
    venture.progressMax = 25*Math.pow(encDef.progressNeeded, 4.5);
  }

  //======Die Operations======

  getCurrentDie(): DieDef {
    return DIE_LIBRARY[this.dieRank];
  }

  getNextDie(): DieDef {
    if (DIE_LIBRARY.length <= this.dieRank+1) {return null;}
    return DIE_LIBRARY[this.dieRank+1];
  }

  upgradeDie(): void {
    if (DIE_LIBRARY.length <= this.dieRank+1) {return;}
    this.dieRank++;
  }

  //======AP Unlocks======

  getNextStatUnlock() {
    if (this.unlockedStats.length == 1) {
      return {stat: "agility", cost: 10};
    }
    if (this.unlockedStats.length == 2) {
      return {stat: "mind", cost: 25};
    }
    return null;
  }

  unlockStat() {
    const unlock = this.getNextStatUnlock();
    if (unlock == null) {return;}
    this.unlockedStats.push(unlock.stat as Stat);
  }

}
