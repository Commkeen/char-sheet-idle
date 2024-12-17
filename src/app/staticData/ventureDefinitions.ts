import { Criteria } from "./criteria";
import { EncounterDef } from "./encounterDefinitions";
import { RewardDef } from "./rewardDefinitions";

export type VentureCategory = "venture" | "task";

export class VentureDef {
  name: string;
  region: string;
  category: VentureCategory = "venture";
  repeatable: boolean = true;
  masteryBase: number = 1;
  encounters: string[] = [];
  rewards: RewardDef[] = [];

  taskEncounterDef: EncounterDef;
  perilousTask: boolean = false;

  visiblityCriteria: Criteria[] = [];
  useCriteria: Criteria[] = [];
  costCriteria: Criteria[] = [];

  constructor (
    name: string,
    region: string
  ) {
    this.name = name;
    this.region = region;
  }

  public getRandomEncounter(): string {
    const random = Math.floor(Math.random()*this.encounters.length);
    return this.encounters[random];
  }

  public task(taskDesc: string, skill: string, level: number) {
    this.category = "task";
    this.taskEncounterDef = new EncounterDef(taskDesc, level);
    this.taskEncounterDef.activeDesc = taskDesc;
    this.taskEncounterDef.addSkill(skill, level);
    this.taskEncounterDef.noDrain();
    return this;
  }

  public currencyReward(currency: string, amount: number = 1) {
    const reward = new RewardDef(currency, "currency");
    reward.amount = amount;
    this.rewards.push(reward);
    return this;
  }

  public ratingReward(rating: string, amount: number) {
    const reward = new RewardDef(rating, "rating");
    reward.amount = amount;
    this.rewards.push(reward);
    return this;
  }

  public unlockRegionReward(region: string) {
    const reward = new RewardDef(region, "unlockRegion");
    this.rewards.push(reward);
    return this;
  }

  public perilous() {
    this.perilousTask = true;
    return this;
  }

  public nonrepeatable() {
    this.repeatable = false;
    return this;
  }

  public addEncounter(name: string) {
    this.encounters.push(name);
    return this;
  }

  public ventureMasteryPrereq(name: string, rank: number) {
    const criteria = new Criteria("ventureMastery", name, rank);
    this.useCriteria.push(criteria);
    return this;
  }

  public localRatingPrereq(rating: string, rank: number) {
    const criteria = new Criteria("localRating", rating, rank);
    this.useCriteria.push(criteria);
    return this;
  }

  public skillPrereq(name: string, rank: number) {
    const criteria = new Criteria("skill", name, rank);
    this.useCriteria.push(criteria);
    return this;
  }

  public currencyCost(currency: string, amount: number) {
    const criteria = new Criteria("currency", currency, amount);
    this.costCriteria.push(criteria);
    return this;
  }
}

export const VENTURE_LIBRARY: VentureDef[] = [
  new VentureDef("The Innkeeper's Basement", "village")
    .currencyReward("prowess", 3)
    .addEncounter("rat")
    .addEncounter("slime mold"),
  new VentureDef("The Thicket", "village")
    .ventureMasteryPrereq("The Innkeeper's Basement", 2)
    .addEncounter("brutal rat")
    .addEncounter("wolf")
    .addEncounter("felsprite")
    .addEncounter("dire rat")
    .addEncounter("goblin scout"),
  new VentureDef("The Goblin Caves", "village")
    .ventureMasteryPrereq("The Thicket", 2)
    .addEncounter("dire rat")
    .addEncounter("goblin scout")
    .addEncounter("goblin guard")
    .addEncounter("goblin sage")
    .addEncounter("hobgoblin overseer"),
  new VentureDef("The Lost Tomb", "village")
    .ventureMasteryPrereq("The Goblin Caves", 2)
    .addEncounter("goblin sage")
    .addEncounter("goblin shaman")
    .addEncounter("hobgoblin graverobber")
    .addEncounter("corpse wight")
    .addEncounter("tomb lord"),

  new VentureDef("decipher map", "village")
    .task("deciphering map", "scouting", 1)
    .ratingReward("scouting", 50)
    //.ventureMasteryPrereq("The Innkeeper's Basement", 2)
    .currencyCost("tattered map", 1),

  new VentureDef("chop brushwood", "village")
    .task("chopping brushwood", "conditioning", 1)
    .currencyReward("lumber", 1)
    .ventureMasteryPrereq("The Thicket", 2)
    .currencyCost("brushwood", 5),

  new VentureDef("scout path", "village")
    .task("scouting path", "scouting", 1)
    .perilous()
    .unlockRegionReward("woods"),

  new VentureDef("The Faerie Circle", "woods")
    .addEncounter("wolf"),

  new VentureDef("The Great Catacombs", "city")
    .addEncounter("corpse wight"),

  new VentureDef("The Ruby Depths", "mountain")
    .addEncounter("hobgoblin overseer"),

  new VentureDef("The Oubliette", "keep")
    .addEncounter("dire rat"),

  new VentureDef("The Pale Sea", "astral")
    .addEncounter("goblin sage"),

  new VentureDef("Dark Lord's Gate", "dark")
    .addEncounter("goblin guard"),
  new VentureDef("Warding Sigils", "dark")
    .addEncounter("darkWards"),

  new VentureDef("The Throne Room", "dark")
    .addEncounter("dark lord")
];
