import { Stat } from "../common/gameConstants";

export class PerkDef {

  public name: string;
  public cost: number = 1;
  public creationOnly: boolean = false;
  public requiredLevel: number = 1;
  public requiredStat: Stat = null;
  public requiredStatValue: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  setRequiredStat(stat: Stat, value: number) {
    this.requiredStat = stat;
    this.requiredStatValue = value;
    return this;
  }

  setLevel(level: number) {
    this.requiredLevel = level;
    return this;
  }

  setCreationOnly() {
    this.creationOnly = true;
    return this;
  }
}

export function getPerkDef(name: string): PerkDef {
  return PERK_LIBRARY.find(x => x.name == name);
}

export const PERK_LIBRARY: PerkDef[] = [
  new PerkDef("Alchemy"),
  new PerkDef("Pathfinding"),
  new PerkDef("Feint"),
  new PerkDef("Divine Rites")
]
