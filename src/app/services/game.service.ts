import { Injectable } from '@angular/core';
import { Stat } from '../common/gameConstants';
import { Character, Skill } from '../models/character';
import { Progress } from '../models/progress';
import { Venture, LocationVentures } from '../models/venture';
import { Criteria } from '../staticData/criteria';
import { DieDef, DIE_LIBRARY } from '../staticData/dieDefinitions';
import { EncounterDef, ENCOUNTER_LIBRARY } from '../staticData/encounterDefinitions';
import { ItemDef, ITEM_LIBRARY } from '../staticData/itemDefinitions';
import { getRegionDef, REGION_LIBRARY } from '../staticData/regionDefinitions';
import { SkillDef, SKILL_LIBRARY } from '../staticData/skillDefinitions';
import { VentureDef, VENTURE_LIBRARY } from '../staticData/ventureDefinitions';
import { CharacterService } from './character.service';
import { MessageService } from './message.service';
import { TimeService } from './time.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public currentRegion: string = REGION_LIBRARY[0].internalName;

  public locationVentures: LocationVentures[] = []; // Ventures by location
  public ventures: Venture[] = []; // Same ventures, in flat array

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
    this.locationVentures = [];
    REGION_LIBRARY.forEach(def => {
      const lv = new LocationVentures();
      lv.init(def.internalName);
      this.locationVentures.push(lv);
    });

    this.locationVentures.forEach(lv => {
      this.ventures = this.ventures.concat(lv.ventures);
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

      if (venture.progress >= venture.progressMax) {
        venture.completions++;
        venture.progress = 0;
        this._messageService.addMessage("You slay the " + venture.encounterName + ".");

        // Reward xp and items to player
        let xpReward = 65 + (Math.pow(encDef.level, 1.5)*15);

        this._characterService.gainXp(xpReward);
        if (encDef.itemReward != null) {
          this._characterService.gainItem(encDef.itemReward);
        }

        // Advance venture mastery rating on successful completion
        let masteryReward = 1; //TODO
        let masteryNeeded = this.getVentureMasteryCost(venture.name, venture.mastery + 1);
        venture.masteryProgress += masteryReward;
        if (venture.masteryProgress >= masteryNeeded) {
          venture.mastery++;
          venture.masteryProgress -= masteryNeeded;
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

  // ======Region Operations======

  getCurrentRegion(): string {
    return this.currentRegion;
  }

  setCurrentRegion(name: string) {
    const region = getRegionDef(name);
    // TODO: Verify region was found?
    this.currentRegion = region.internalName;
  }

  //======Venture Operations======

  getVentureDef(name: string): VentureDef {
    return VENTURE_LIBRARY.find(x => x.name == name);
  }

  getEncounterDef(name: string): EncounterDef {
    return ENCOUNTER_LIBRARY.find(x => x.name == name);
  }

  getAllVentures(): Venture[] {
    return this.ventures;
  }

  getVenturesForLocation(name: string): Venture[] {
    return this.locationVentures.find(x => x.name == name).ventures;
  }

  getVenturesForCurrentLocation(): Venture[] {
    return this.getVenturesForLocation(this.currentRegion);
  }

  getVentureMastery(name: string): number {
    return this.ventures.find(x => x.name == name).mastery;
  }

  getVentureMasteryCost(name: string, level: number): number {
    return 5; //TODO
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

  //======Criteria Operations======

  allCriteriaMet(criteriaList: Criteria[]): boolean {
    return criteriaList.every(x => this.criteriaMet(x));
  }

  criteriaMet(criteria: Criteria): boolean {
    switch (criteria.criteriaType) {
      case "upgrade":
        return this.upgradeCriteriaMet(criteria);
      case "skill":
        return this.skillCriteriaMet(criteria);
      case "item":
        return this.itemCriteriaMet(criteria);
      case "stat":
        return this.statCriteriaMet(criteria);
      case "perk":
        return this.perkCriteriaMet(criteria);
      case "level":
        return this.levelCriteriaMet(criteria);
      case "ventureMastery":
        return this.ventureMasteryCriteriaMet(criteria);
      case "scouting":
        return this.scoutingCriteriaMet(criteria);
      case "renown":
        return this.renownCriteriaMet(criteria);
      case "infamy":
        return this.infamyCriteriaMet(criteria);
      default:
        this._messageService.addMessage("error: no handler for criteriatype " + criteria.criteriaType);
    }
    return true;
  }

  upgradeCriteriaMet(criteria: Criteria): boolean {
    const result = this.progress.upgrades.getRank(criteria.target) >= criteria.value;
    if (criteria.lessThan) return !result;
    return result;
  }

  skillCriteriaMet(criteria: Criteria): boolean {
    const skill = this._characterService.character.skill(criteria.target);
    if (skill == null && !criteria.lessThan) {return false;}
    const result = skill.rank >= criteria.value;
    if (criteria.lessThan) return !result;
    return result;
  }

  itemCriteriaMet(criteria: Criteria): boolean {
    return this._characterService.hasItem(criteria.target);
  }

  statCriteriaMet(criteria: Criteria): boolean {
    return this._characterService.character.stat(criteria.target as Stat) >= criteria.value;
  }

  perkCriteriaMet(criteria: Criteria): boolean {
    return this._characterService.character.hasPerk(criteria.target);
  }

  levelCriteriaMet(criteria: Criteria): boolean {
    return this._characterService.character.level >= criteria.value;
  }

  ventureMasteryCriteriaMet(criteria: Criteria): boolean {
    return this.getVentureMastery(criteria.target) >= criteria.value;
  }

  scoutingCriteriaMet(criteria: Criteria): boolean {
    return true;
  }

  renownCriteriaMet(criteria: Criteria): boolean {
    return true;
  }

  infamyCriteriaMet(criteria: Criteria): boolean {
    return true;
  }

}
