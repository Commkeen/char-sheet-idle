import { Stat } from "../common/gameConstants";
import { CostDef } from "./costDefinitions";
import { CurrencyEffect, Effect, EffectDefFactory } from "./effect";

export class SkillDef {

  public name: string;
  public stat: Stat = null;
  public cost: CostDef;
  public group: string = "other";
  public effects: Effect[];

  constructor(name: string) {
    this.name = name;
    this.effects = [];
    this.cost = new CostDef("prowess");
  }

  setGroup(group: string) {
    this.group = group;
    return this;
  }

  setStat(stat: Stat) {
    this.stat = stat;
    return this;
  }

  setCost(currency: string, base: number) {
    this.cost = new CostDef(currency);
    this.cost.base = base;
    return this;
  }

  addBaseCurrencyCap(currency: string, value: number) {
    let effect = EffectDefFactory.addBaseCurrencyCap(currency, value);
    this.effects.push(effect);
    return this;
  }

}

export function getSkillDef(name: string): SkillDef {
  return SKILL_LIBRARY.find(x => x.name == name);
}

export const SKILL_LIBRARY: SkillDef[] = [

  new SkillDef("brawl").setStat("body")
  .setCost("prowess", 6)
  .addBaseCurrencyCap("prowess", 4),

  new SkillDef("melee").setStat("body").setGroup("combat"),
  new SkillDef("ranged").setStat("agility").setGroup("combat"),
  new SkillDef("magic").setStat("mind").setGroup("combat"),

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
