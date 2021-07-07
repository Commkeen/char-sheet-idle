import { Stat } from "../common/gameConstants";

export class ItemDef {
  public name: string;
  public skill: string = null;
  public strength: number = 0;
  public requiredStat: Stat = null;
  public requiredStatAmount: number = 0;
  public gold: number = 1;

  constructor(name: string) {
    this.name = name;
  }

  setSkill(skill: string, strength: number) {
    this.skill = skill;
    this.strength = strength;
    return this;
  }

  setReq(stat: Stat, amount: number) {
    this.requiredStat = stat;
    this.requiredStatAmount = amount;
    return this;
  }

  setValue(gold: number) {
    this.gold = gold;
  }
}

export const ITEM_LIBRARY: ItemDef[] = [
  new ItemDef("knife").setSkill("melee", 2)
    .setReq("body", 2),
  new ItemDef("shortbow").setSkill("ranged", 7)
    .setReq("body", 2),
  new ItemDef("longbow").setSkill("ranged", 14)
    .setReq("body", 5),
  new ItemDef("staff of ancients").setSkill("magic", 25)
    .setReq("mind", 15)
];
