

export class VentureDef {
  name: string;
  encounters: string[] = [];

  constructor (
    name: string
  ) {
    this.name = name;
  }

  public addEncounter(name: string) {
    this.encounters.push(name);
  }
}

export const VENTURE_LIBRARY: VentureDef[] = [];
