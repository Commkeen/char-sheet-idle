

export class VentureDef {
  name: string;
  encounters: string[] = [];
  prereqName: string;
  prereqRank: number;

  constructor (
    name: string
  ) {
    this.name = name;
  }

  public getRandomEncounter(): string {
    const random = Math.floor(Math.random()*this.encounters.length);
    return this.encounters[random];
  }

  public addEncounter(name: string) {
    this.encounters.push(name);
    return this;
  }

  public addPrereq(name: string, rank: number) {
    this.prereqName = name;
    this.prereqRank = rank;
    return this;
  }
}

export const VENTURE_LIBRARY: VentureDef[] = [
  new VentureDef("The Innkeeper's Basement")
    .addEncounter("rat")
    .addEncounter("slime mold")
    .addEncounter("brutal rat"),
  new VentureDef("The Thicket")
    .addPrereq("The Innkeeper's Basement", 5)
    .addEncounter("brutal rat")
    .addEncounter("wolf")
    .addEncounter("felsprite")
    .addEncounter("dire rat")
    .addEncounter("goblin scout"),
  new VentureDef("The Goblin Caves")
    .addPrereq("The Thicket", 5)
    .addEncounter("dire rat")
    .addEncounter("goblin scout")
    .addEncounter("goblin guard")
    .addEncounter("goblin sage")
    .addEncounter("hobgoblin overseer"),
  new VentureDef("The Lost Tomb")
    .addPrereq("The Lost Tomb", 5)
    .addEncounter("goblin sage")
    .addEncounter("goblin shaman")
    .addEncounter("hobgoblin graverobber")
    .addEncounter("corpse wight")
    .addEncounter("tomb lord")
];
