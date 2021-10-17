import { Criteria } from "./criteria";


export class VentureDef {
  name: string;
  region: string;
  encounters: string[] = [];
  visiblityCriteria: Criteria[] = [];
  useCriteria: Criteria[] = [];

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

  public addEncounter(name: string) {
    this.encounters.push(name);
    return this;
  }

  public ventureMasteryPrereq(name: string, rank: number) {
    const criteria = new Criteria("ventureMastery", name, rank);
    this.useCriteria.push(criteria);
    return this;
  }
}

export const VENTURE_LIBRARY: VentureDef[] = [
  new VentureDef("The Innkeeper's Basement", "village")
    .addEncounter("rat")
    .addEncounter("slime mold")
    .addEncounter("brutal rat"),
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
