import { Stat } from "../common/gameConstants";

export class SkillDef {

  public name: string;
  public stat: Stat = null;
  public cost: number = 1; // Multiplier

  constructor(name: string) {
    this.name = name;
  }

  setStat(stat: Stat) {
    this.stat = stat;
    return this;
  }

  setCost(cost: number) {
    this.cost = cost;
    return this;
  }

}

export const SKILL_LIBRARY: SkillDef[] = [
  new SkillDef("melee").setStat("body").setCost(1),
  new SkillDef("ranged").setStat("agility").setCost(1),
  new SkillDef("magic").setStat("mind").setCost(1),
];
