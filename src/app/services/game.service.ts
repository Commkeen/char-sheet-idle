import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Venture } from '../models/venture';
import { DieDef, DIE_LIBRARY } from '../staticData/dieDefinitions';
import { EncounterDef, ENCOUNTER_LIBRARY } from '../staticData/encounterDefinitions';
import { VentureDef, VENTURE_LIBRARY } from '../staticData/ventureDefinitions';
import { MessageService } from './message.service';
import { TimeService } from './time.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public character: Character = null;
  public ventures: Venture[] = [];

  public ap: number = 0;
  public dieRank: number = 0;

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

      venture.progress += 7*this.character.body*encDef.getSkill("melee")*dT;
      this.character.stamina -= dT*encDef.staminaDrain;

      if (this.character.stamina <= 0) {this.resting = true;}

      if (venture.progress > venture.progressMax) {
        venture.completions++;
        venture.progress = 0;
        this._messageService.addMessage("You slay the " + venture.encounterName + ".");
        this.startEncounter(venture);
        this.gainXp(encDef.xpReward);
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
          x.encounterName = null;
        }
      }
    });
  }

  // ======Character Operations======

  rollNewCharacter(): void {
    const die = this.getCurrentDie();
    this.character = new Character();
    this.character.name = "Bob the Adventurer";
    this.character.xp = 0;
    this.character.level = 1;

    this.character.body = die.roll();

    this.character.maxStamina = (this.character.body+2)*3;
    this.character.stamina = this.character.maxStamina;

    this.targetVenture = null;
    this.resting = false;

    this._messageService.addMessage("Welcome, " + this.character.name + "!");

    this.initVentures();
    this.initSim();
  }

  getLevelCost(level: number): number {
    return 150 + (((level*level)-2)*135);
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
    const bodyIncrease = Math.floor(die.roll()/3);
    if (bodyIncrease > 0) {
      this._messageService.addMessage("Your Body has increased by " + bodyIncrease + ".");
      this.character.body += bodyIncrease;
    }

    this.character.maxStamina = (this.character.body+2)*3;
    this.character.stamina = this.character.maxStamina;

    const newAp = Math.max(0, newLevel*newLevel - 3);
    this.ap += newAp;
    this._messageService.addMessage("You have gained " + newAp + " AP.");
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

}
