import { Injectable } from '@angular/core';
import { Stat } from '../common/gameConstants';
import { Character, Skill } from '../models/character';
import { Progress } from '../models/progress';
import { Venture } from '../models/venture';
import { DieDef, DIE_LIBRARY } from '../staticData/dieDefinitions';
import { EncounterDef, ENCOUNTER_LIBRARY } from '../staticData/encounterDefinitions';
import { ItemDef, ITEM_LIBRARY } from '../staticData/itemDefinitions';
import { SkillDef, SKILL_LIBRARY } from '../staticData/skillDefinitions';
import { VentureDef, VENTURE_LIBRARY } from '../staticData/ventureDefinitions';
import { CharacterService } from './character.service';
import { MessageService } from './message.service';
import { TimeService } from './time.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public ventures: Venture[] = [];


  public progress: Progress = new Progress();

  public targetVenture: string;
  public resting: boolean = false;

  private _init: boolean = false;

  constructor(private _timeService: TimeService, private _messageService: MessageService,
              private _characterService: CharacterService) {
    _characterService.setGameService(this);

    this._characterService.initNewCharacter();
  }

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
    const character = this._characterService.character;
    if (character == null) {return;}

    // Do Rest
    if (this.resting) {
      character.stamina += 5*dT;
      if (character.stamina >= character.maxStamina) {
        character.stamina = character.maxStamina;
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

      const bestSkill = this._characterService.bestSkillForEncounter(encDef);
      if (bestSkill != null) {
        const encSkill = encDef.skills.find(x => x.skill == bestSkill);
        const charSkillStr = character.skill(bestSkill).total();
        venture.progress += 6*encSkill.strength*charSkillStr*dT;
        this._characterService.advanceSkill(bestSkill, dT);
      }
      else {
        venture.progress += dT;
      }

      character.stamina -= dT*encDef.staminaDrain;

      if (character.stamina <= 0) {this.resting = true;}

      if (venture.progress > venture.progressMax) {
        venture.completions++;
        venture.progress = 0;
        this._messageService.addMessage("You slay the " + venture.encounterName + ".");

        let xpReward = 65 + (Math.pow(encDef.level, 1.5)*15);

        this._characterService.gainXp(xpReward);
        if (encDef.itemReward != null) {
          this._characterService.gainItem(encDef.itemReward);
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

  // ======Character Operations======

  rest(): void {
    this.resting = true;
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
    venture.progressMax = 15*Math.pow(encDef.level, 2.2);
  }

  //======Die Operations======

  getCurrentDie(): DieDef {
    return DIE_LIBRARY[this.progress.dieRank];
  }

  getNextDie(): DieDef {
    if (this.getMaxDieRank() <= this.progress.dieRank) {return null;}
    return DIE_LIBRARY[this.progress.dieRank+1];
  }

  getMaxDieRank(): number {
    return DIE_LIBRARY.length - 1;
  }

  upgradeDie(): void {
    if (this.getMaxDieRank() <= this.progress.dieRank) {return;}
    this.progress.dieRank++;
  }

  //======Stat Unlocks======

  unlockStat(stat: Stat) {
    this.progress.unlockedStats.push(stat);
  }

}
