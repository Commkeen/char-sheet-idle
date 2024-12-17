import { Injectable } from '@angular/core';
import { Stat } from '../common/gameConstants';
import { Character, Skill } from '../models/character';
import { Progress } from '../models/progress';
import { Region, RegionRating } from '../models/region';
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
import { RewardDef } from '../staticData/rewardDefinitions';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public currentRegion: string = REGION_LIBRARY[0].internalName;

  public regions: Region[] = [];

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

  initRegions(): void {
    this.regions = [];
    REGION_LIBRARY.forEach(def => {
      const r = new Region();
      r.init(def.internalName);
      this.regions.push(r);
    });
  }

  initVentures(): void {
    this.ventures = [];
    this.locationVentures = [];
    REGION_LIBRARY.forEach(def => {
      const lv = new LocationVentures();
      lv.init(def.internalName);
      this.locationVentures.push(lv);
    });

    this.locationVentures.forEach(lv => {
      this.ventures = this.ventures.concat(lv.ventures);
      this.ventures = this.ventures.concat(lv.tasks);
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
      const ventureDef = this.getVentureDef(venture.name);

      // If there isn't an encounter, init an encounter
      if (venture.encounterName == null) {
        this.startEncounter(venture);
      }

      // Update progress max in case some multipliers have changed
      venture.progressMax = this.calculateVentureProgressMax(venture);

      let encDef = this.getEncounterDef(venture.encounterName);
      if (ventureDef.taskEncounterDef != null) {
        encDef = ventureDef.taskEncounterDef;
      }

      const bestSkill = this._characterService.bestSkillForEncounter(encDef);
      if (bestSkill != null) {
        const encSkill = encDef.skills.find(x => x.skill == bestSkill);
        const charSkillStr = character.skill(bestSkill).total();
        venture.progress += 6*encSkill.strength*charSkillStr*dT;
        //this._characterService.advanceSkill(bestSkill, dT);
      }
      else {
        venture.progress += dT;
      }

      character.stamina -= dT*encDef.staminaDrain;

      if (character.stamina <= 0) {this.resting = true;}

      if (venture.progress >= venture.progressMax) {
        venture.completions++;
        venture.progress = 0;

        // TODO: Resolve perilous task

        if (encDef.encounterType == "combat") {
          this._messageService.addMessage("You slay the " + venture.encounterName + ".");
        }

        this.grantEncounterRewards(venture, encDef);
        this.grantVentureRewards(venture);

        // Advance venture mastery rating on successful completion
        let masteryReward = 1; //TODO
        let masteryNeeded = this.getVentureMasteryCost(venture.name, venture.mastery + 1);
        venture.masteryProgress += masteryReward;
        if (venture.masteryProgress >= masteryNeeded) {
          venture.mastery++;
          venture.masteryProgress -= masteryNeeded;
        }

        if (ventureDef.repeatable && this.canSelectVenture(venture)) {
          this.startEncounter(venture);
        }
        else {
          this.targetVenture = null;
        }
      }

    }

    // Degen venture progress
    this.ventures.forEach(x => {
      if (x.progress > 0 && (this.resting || this.targetVenture != x.name)) {
        const ventureDef = this.getVentureDef(x.name);
        let encDef = this.getEncounterDef(x.encounterName);
        if (ventureDef.taskEncounterDef != null) {
          encDef = ventureDef.taskEncounterDef;
        }
        const progDegen = x.progressMax*(encDef.progressDegenPct/100);
        x.progress -= progDegen*dT;
        if (x.progress <= 0) {
          x.progress = 0;
          if (encDef.encounterType == "combat") {
            this._messageService.addMessage(`The ${x.encounterName} wandered off while you were asleep.`);
          }
          x.encounterName = null;
        }
      }
    });
  }

  grantEncounterRewards(venture: Venture, encDef: EncounterDef) {

    let xpReward = 65 + (Math.pow(encDef.level, 1.5)*15);
    this._characterService.gainXp(xpReward);

    encDef.rewards.forEach(reward => {this.grantReward(reward, venture)});
  }

  grantVentureRewards(venture: Venture) {
    const def = this.getVentureDef(venture.name);
    def.rewards.forEach(reward => this.grantReward(reward, venture));
  }

  grantReward(reward: RewardDef, venture: Venture) {
    if (reward.type == "item") {
      this._characterService.gainItem(reward.name);
    }
    if (reward.type == "currency") {
      this._characterService.addCurrency(reward.name, reward.amount);
    }
    if (reward.type == "rating") {
      this.advanceRating(venture.region, reward.name, reward.amount);
    }
    if (reward.type == "unlockRegion") {
      this.unlockRegion(reward.name);
    }
  }

  // ======Character Operations======

  rest(): void {
    this.resting = true;
  }

  // ======Region Operations======

  getRegionInfo(name: string): Region {
    const regionInfo = this.regions.find(x => x.name == name);
    console.assert(regionInfo != undefined);
    return regionInfo;
  }

  getCurrentRegion(): string {
    return this.currentRegion;
  }

  setCurrentRegion(name: string) {
    const regionDef = getRegionDef(name);
    const regionInfo = this.getRegionInfo(regionDef.internalName);

    // TODO: Verify region was found and valid, assert otherwise?
    if (!regionInfo.unlocked) {return;}

    this.currentRegion = regionDef.internalName;
  }

  unlockRegion(name: string) {
    const regionInfo = this.getRegionInfo(name);
    regionInfo.unlocked = true;
  }

  getRating(name: string, region: string): RegionRating {
    const regionInfo = this.getRegionInfo(region);
    const rating = regionInfo.ratings.find(x => x.name == name);
    console.assert(rating != undefined, "could not find region %s rating %s", region, name);
    return rating;
  }

  getLocalRating(name: string): RegionRating {
    return this.getRating(name, this.currentRegion);
  }

  getRatingsForRegion(name: string): RegionRating[] {
    return this.regions.find(x => x.name == name).ratings;
  }

  getRatingsForCurrentRegion(): RegionRating[] {
    return this.getRatingsForRegion(this.currentRegion);
  }

  advanceRating(region: string, rating: string, progress: number) {
    // TODO: update maxProgress

    const ratingInfo = this.getRating(rating, region);
    const def = getRegionDef(this.currentRegion).ratings.find(x => x.name == region);
    ratingInfo.progress += progress;
    if (ratingInfo.progress > ratingInfo.progressMax) {
      ratingInfo.rank++;
      ratingInfo.progress -= ratingInfo.progressMax;
    }
    else if (ratingInfo.progress < 0) {
      ratingInfo.rank--;
      ratingInfo.progress = ratingInfo.progressMax + ratingInfo.progress;
      if (ratingInfo.rank < 0) {
        ratingInfo.rank = 0;
        ratingInfo.progress = 0;
      }
    }
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

  getTasksForLocation(name: string): Venture[] {
    return this.locationVentures.find(x => x.name == name).tasks;
  }

  getVenturesForCurrentLocation(): Venture[] {
    return this.getVenturesForLocation(this.currentRegion);
  }

  getTasksForCurrentLocation(): Venture[] {
    return this.getTasksForLocation(this.currentRegion);
  }

  getVentureMastery(name: string): number {
    return this.ventures.find(x => x.name == name).mastery;
  }

  getVentureMasteryCost(name: string, level: number): number {
    return 5; //TODO
  }

  selectVenture(venture: Venture): void {
    if (!this.canSelectVenture(venture)) {return;}
    this.targetVenture = venture.name;
  }

  selectTask(task: Venture): void {
    if (!this.canSelectVenture(task)) {return;}
    this.targetVenture = task.name;
  }

  canSelectVenture(venture: Venture): boolean {
    if (venture.progress > 0) {return true;}
    const def = this.getVentureDef(venture.name);
    if (!this.allCriteriaMet(def.visiblityCriteria)) {return false;}
    if (!this.allCriteriaMet(def.useCriteria)) {return false;}
    if (!this.allCriteriaMet(def.costCriteria)) {return false;}
    return true;
  }

  startEncounter(venture: Venture): void {
    const def = this.getVentureDef(venture.name);
    const encounter = def.getRandomEncounter();
    const encDef = this.getEncounterDef(encounter);
    const spendSuccessful = this.spendCosts(def.costCriteria);
    if (!spendSuccessful) {return;}
    venture.encounterName = encounter;
    venture.progressMax = this.calculateVentureProgressMax(venture);
  }

  calculateVentureProgressMax(venture: Venture): number {
    const ventureDef = this.getVentureDef(venture.name);
    let encDef = this.getEncounterDef(venture.encounterName);
    if (ventureDef.taskEncounterDef != null) {
      encDef = ventureDef.taskEncounterDef;
    }
    let level = encDef.level;

    encDef.modifiers.forEach(mod => {
      const ratingRank = this.getRating(mod.target, venture.region).rank;
      let multiplier = 1 + (mod.levelMultiplier - 1) * ratingRank;
      if (mod.compound) {
        multiplier = level * Math.pow(mod.levelMultiplier, ratingRank);
      }
      level = level * multiplier;
    });

    return 15*Math.pow(level, 2.2);
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

  spendCosts(costList: Criteria[]): boolean {
    costList.forEach(x => this.spendCost(x));
    return true;
  }

  spendCost(cost: Criteria): boolean {
    switch (cost.criteriaType) {
      case "currency":
        return this._characterService.currencies.remove(cost.target, cost.value);
      default:
        this._messageService.addMessage("error: no spend handler for criteriatype " + cost.criteriaType);
    }
    return false;
  }

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
      case "localRating":
        return this.localRatingCriteriaMet(criteria);
      case "currency":
        return this.currencyCriteriaMet(criteria);
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

  localRatingCriteriaMet(criteria: Criteria): boolean {
    return true;
  }

  currencyCriteriaMet(criteria: Criteria): boolean {
    return this._characterService.currencies.has(criteria.target, criteria.value);
  }

}
