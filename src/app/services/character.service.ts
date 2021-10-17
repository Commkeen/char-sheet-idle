import { Injectable } from '@angular/core';
import { Stat } from '../common/gameConstants';
import { Character, Perk, Skill } from '../models/character';
import { EncounterDef } from '../staticData/encounterDefinitions';
import { getItemDef } from '../staticData/itemDefinitions';
import { PERK_LIBRARY } from '../staticData/perkDefinitions';
import { getSkillDef, SKILL_LIBRARY } from '../staticData/skillDefinitions';
import { GameService } from './game.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private _gameService: GameService;

  public character: Character = null;

  public startingPerkAvailable: boolean = false;
  public statPointsToSpend: number = 0;
  public perkPointsToSpend: number = 0;
  public availablePerks: Perk[] = [];

  public items: string[] = [];

  constructor(private _messageService: MessageService) { }

  setGameService(svc: GameService) {
    this._gameService = svc;
  }

  initNewCharacter(): void {
    const die = this._gameService.getCurrentDie();
    this.character = new Character();
    this.character.name = "Bob the Adventurer";
    this.character.xp = 0;
    this.character.level = 1;
    this.character.creationComplete = false;

    this.statPointsToSpend = this._gameService.progress.statPoints;

    this._gameService.progress.unlockedStats.forEach(x => {
      this.character.setStat(x, 0);
    });

    this.initSkills();

    // TODO: Sell old items
    this.items = [];

    this.character.maxStamina = (this.character.stat("body")+2)*3;
    this.character.stamina = this.character.maxStamina;

    this._gameService.targetVenture = null;
    this._gameService.resting = false;

    this._gameService.initRegions();
    this._gameService.initVentures();
    this._gameService.initSim();

    this.updateSkills();
    this.updateAvailablePerks();
  }

  rollStat(stat: Stat): void {
    const die = this._gameService.getCurrentDie();
    this.character.setStat(stat, die.roll());
    this.checkCharCreationComplete();
  }

  spendStatPoint(stat: Stat): void {
    if (this.statPointsToSpend <= 0) {return;}
    this.character.setStat(stat, this.character.stat(stat)+1);
    this.statPointsToSpend--;
    this.checkCharCreationComplete();
  }

  checkCharCreationComplete(): void {
    if (this.character.hasUnrolledStats()) {return;}
    if (this.statPointsToSpend > 0) {return;}
    if (this.startingPerkAvailable) {return;}
    this.character.creationComplete = true;
    this._messageService.addMessage("Welcome, " + this.character.name + "!");
  }

  // ======Level======

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

    const die = this._gameService.getCurrentDie();
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

    this.updateSkills();
  }

  getLevelCost(level: number): number {
    return 150 + (((level*level)-4)*135);
  }

  // ======Skills======

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
      const def = getItemDef(x);

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
      const skillDef = getSkillDef(s.skill);
      if (this.character.stat(skillDef.stat) <= 0) {return;} // Can't use a skill with no supporting stat
      const str = this.character.skill(s.skill).total() * s.strength;
      if (str > bestStrength) {
        bestSkill = s.skill;
        bestStrength = str;
      }
    });

    return bestSkill;
  }

  advanceSkill(skill: string, dT: number) {
    const s = this.character.skill(skill);
    const sDef = getSkillDef(skill);
    const relatedStat = this.character.stat(sDef.stat);
    s.progress += relatedStat*relatedStat*dT;

    const nextRankCost = this.getSkillRankCost(skill, s.rank+1);
    if (s.progress >= nextRankCost) {
      s.progress -= nextRankCost;
      s.rank++;
      this._messageService.addMessage(`Your ${skill} skill has increased to ${s.rank}.`);
    }
  }

  getSkillRankCost(skill: string, rank: number): number {
    const def = getSkillDef(skill);
    return 25 + (((rank*rank)-2)*45*def.cost);
  }


  // ======Perks======

  buyPerk(name: string): void {
    this.character.addPerk(name);
    this.updateAvailablePerks();
  }

  updateAvailablePerks(): void {
    this.availablePerks = [];
    PERK_LIBRARY.forEach(x => {
      if (this.character.hasPerk(x.name)) {return;}
      this.availablePerks.push(new Perk(x.name));
    });
  }

  // ======Items======

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

  hasItem(item: string): boolean {
    return this.items.indexOf(item) > -1;
  }


}
