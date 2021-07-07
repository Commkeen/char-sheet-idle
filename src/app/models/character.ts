import { Stat } from "../common/gameConstants";


export class Character {
  name: string;

  stamina: number;
  maxStamina: number;

  level: number;
  xp: number;

  stats: Map<Stat, number> = new Map<Stat, number>();

  skills: Skill[] = [];

  stat(stat: Stat) {
    if (!this.stats.has(stat)) {return 0;}
    return this.stats.get(stat);
  }

  setStat(stat: Stat, value: number) {
    this.stats.set(stat, value);
  }

  getStats() {
    return this.stats.keys();
  }

  skill(skill: string) {
    return this.skills.find(x => x.name == skill);
  }

  hasSkill(skill: string) {
    return this.skills.some(x => x.name == skill);
  }
}

export class Skill {
  name: string;

  rank: number = 1;
  progress: number = 0;

  itemBonus: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  total(): number {
    return this.rank + this.itemBonus;
  }
}
