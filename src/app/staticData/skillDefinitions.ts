import { Stat } from "../common/gameConstants";

export class SkillDef {

  public name: string;
  public stat: Stat = null;
  public cost: number = 1; // Multiplier
  public costRatio: number = 1.15;
  public group: string = "other";

  constructor(name: string) {
    this.name = name;
  }

  setGroup(group: string) {
    this.group = group;
    return this;
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

export function getSkillDef(name: string): SkillDef {
  return SKILL_LIBRARY.find(x => x.name == name);
}

export const SKILL_LIBRARY: SkillDef[] = [
  new SkillDef("melee").setStat("body").setGroup("combat").setCost(1),
  new SkillDef("ranged").setStat("agility").setGroup("combat").setCost(1),
  new SkillDef("magic").setStat("mind").setGroup("combat").setCost(1),

  new SkillDef("armor").setGroup("defense"),
  new SkillDef("dodge").setGroup("defense"),
  new SkillDef("clarity").setGroup("defense"),

  new SkillDef("conditioning"),
  new SkillDef("tactics"),
  new SkillDef("martial"),
  new SkillDef("negotiation"),
  new SkillDef("investigation"),
  new SkillDef("scout"),
  new SkillDef("concentration"),
  new SkillDef("ritual"),
  new SkillDef("deception"),
  new SkillDef("sneak"),

];
