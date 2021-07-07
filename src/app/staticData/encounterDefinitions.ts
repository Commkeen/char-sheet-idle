
export class EncounterSkillDef {
  skill: string;
  strength: number;

  constructor(skill: string, strength = 1) {
    this.skill = skill;
    this.strength = strength;
  }
}

export class EncounterDef {
  name: string;
  progressNeeded: number = 1; // Multiplied by 100
  progressDegenPct: number = 7;
  staminaDrain: number = 1;
  xpReward: number = 100;
  itemReward: string = null;
  skills: EncounterSkillDef[] = [];


  constructor(name: string) {
    this.name = name;
  }

  getSkill(skill: string) {
    const s = this.skills.find(x => x.skill == skill);
    if (s == null) {return 0;}
    return s.strength;
  }

  setDifficulty(num: number) {
    this.progressNeeded = num;
    this.staminaDrain = num;
    return this;
  }

  xp(num: number) {
    this.xpReward = num;
    return this;
  }

  item(item: string) {
    this.itemReward = item;
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
}

export class CombatEncounterDef extends EncounterDef {
  constructor(name: string) {
    super(name);
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

export const ENCOUNTER_LIBRARY: EncounterDef[] = [
  new CombatEncounterDef("rat")
    .xp(10).item("shortbow"),
  new CombatEncounterDef("slime mold").resist("ranged")
    .xp(5),
  new CombatEncounterDef("brutal rat").setDifficulty(1.5)
    .xp(15).item("knife"),
  new CombatEncounterDef("wolf").setDifficulty(1.8),
  new CombatEncounterDef("felsprite").setDifficulty(1.4)
    .resist("melee").resist("ranged"),
  new CombatEncounterDef("dire rat").setDifficulty(1.7),
  new CombatEncounterDef("goblin scout").setDifficulty(1.75),
  new CombatEncounterDef("goblin guard").setDifficulty(2.2),
  new CombatEncounterDef("goblin sage").setDifficulty(2.1)
    .resist("magic"),
  new CombatEncounterDef("hobgoblin overseer").setDifficulty(2.7)
    .resist("ranged"),
  new CombatEncounterDef("goblin shaman").setDifficulty(2.5)
    .resist("magic"),
  new CombatEncounterDef("hobgoblin graverobber").setDifficulty(3)
    .resist("ranged"),
  new CombatEncounterDef("corpse wight").setDifficulty(2.9)
    .resist("melee").resist("ranged"),
  new CombatEncounterDef("tomb lord").setDifficulty(3.5)
    .item("staff of ancients")

];
