
export type EncounterType = "general" | "combat"

export class EncounterModifierDef {
  public target: string;
  public levelMultiplier: number;
  public compound: boolean;

  constructor(target: string, levelMultiplier: number, compound: boolean) {
    this.target = target;
    this.levelMultiplier = levelMultiplier;
    this.compound = compound;
  }
}

export class EncounterSkillDef {
  skill: string;
  strength: number;

  constructor(skill: string, strength = 1) {
    this.skill = skill;
    this.strength = strength;
  }
}

export type EncounterRewardType = "rating" | "item" | "currency"

export class EncounterRewardDef {
  public name: string;
  public type: EncounterRewardType;
  public chance: number = 100;
  public amount: number = 1;

  constructor(name: string, type: EncounterRewardType) {
    this.name = name;
    this.type = type;
  }
}

export class EncounterDef {
  name: string;
  level: number;
  encounterType: EncounterType = "general";
  activeDesc: string;
  progressDegenPct: number = 7;
  staminaDrain: number = 1;
  skills: EncounterSkillDef[] = [];
  modifiers: EncounterModifierDef[] = [];
  rewards: EncounterRewardDef[] = [];


  constructor(name: string, level: number) {
    this.name = name;
    this.activeDesc = name;
    this.level = level;
  }

  getSkill(skill: string) {
    const s = this.skills.find(x => x.skill == skill);
    if (s == null) {return 0;}
    return s.strength;
  }

  setActiveDesc(desc: string) {
    this.activeDesc = desc;
    return this;
  }

  item(item: string) {
    const reward = new EncounterRewardDef(item, "item");
    this.rewards.push(reward);
    return this;
  }

  currency(currency: string) {
    const reward = new EncounterRewardDef(currency, "currency");
    this.rewards.push(reward);
    return this;
  }

  ratingReward(rating: string, amount: number) {
    const reward = new EncounterRewardDef(rating, "rating");
    reward.amount = amount;
    this.rewards.push(reward);
    return this;
  }

  addSkill(skill: string, strength = 1) {
    let def = this.skills.find(x => x.skill == skill);
    if (def == null) {
      def = new EncounterSkillDef(skill);
      this.skills.push(def);
    }
    def.strength = strength;
    return this;
  }

  addLocalRatingModifier(rating: string, multiplier: number, compound: boolean) {
    let def = new EncounterModifierDef(rating, multiplier, compound);
    this.modifiers.push(def);

    return this;
  }
}

export class CombatEncounterDef extends EncounterDef {
  constructor(name: string, level: number) {
    super(name, level);
    this.encounterType = "combat";
    this.initCombatSkills();
  }

  initCombatSkills() {
    this.skills.push(new EncounterSkillDef("melee"));
    this.skills.push(new EncounterSkillDef("ranged"));
    this.skills.push(new EncounterSkillDef("magic"));
  }

  resist(skill: string) {
    this.addSkill(skill, 0.5);
    return this;
  }

  weak(skill: string) {
    this.addSkill(skill, 2);
    return this;
  }
}

export function getEncounterDef(name: string) {
  return ENCOUNTER_LIBRARY.find(x => x.name == name);
}

export const ENCOUNTER_LIBRARY: EncounterDef[] = [
  new CombatEncounterDef("rat", 1)
    .item("shortbow")
    .currency("tattered map"),
  new CombatEncounterDef("slime mold", 1).resist("ranged")
    .ratingReward("scouting", 70)
    .currency("tattered map"),
  new CombatEncounterDef("brutal rat", 2)
    .item("knife")
    .currency("tattered map"),
  new CombatEncounterDef("wolf", 3),
  new CombatEncounterDef("felsprite", 2)
    .resist("melee").resist("ranged"),
  new CombatEncounterDef("dire rat", 3),
  new CombatEncounterDef("goblin scout", 5),
  new CombatEncounterDef("goblin guard", 7),
  new CombatEncounterDef("goblin sage", 8)
    .resist("magic"),
  new CombatEncounterDef("hobgoblin overseer", 10)
    .resist("ranged"),
  new CombatEncounterDef("goblin shaman", 9)
    .resist("magic"),
  new CombatEncounterDef("hobgoblin graverobber", 15)
    .resist("ranged"),
  new CombatEncounterDef("corpse wight", 18)
    .resist("melee").resist("ranged"),
  new CombatEncounterDef("tomb lord", 20)
    .item("staff of ancients"),

  new CombatEncounterDef("dark lord", 50)
    .addLocalRatingModifier("control", 1.15, true),

  new EncounterDef("darkWards", 1)
    .setActiveDesc("dispelling warding glyphs")
    .addSkill("magic", 1)
    .ratingReward("control", -80)
];
