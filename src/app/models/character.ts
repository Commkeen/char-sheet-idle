import { Stat } from "../common/gameConstants";


export class Character {
  name: string;

  creationComplete: boolean = false;

  stamina: number = 0;
  maxStamina: number = 0;

  level: number = 1;
  xp: number = 0;

  stats: Map<Stat, number> = new Map<Stat, number>();

  skills: Skill[] = [];

  perks: Perk[] = [];

  stat(stat: Stat) {
    if (!this.stats.has(stat)) {return 0;}
    return this.stats.get(stat);
  }

  hasStat(stat: Stat) {
    return this.stats.has(stat);
  }

  setStat(stat: Stat, value: number) {
    this.stats.set(stat, value);
  }

  getStats() {
    return Array.from(this.stats.keys());
  }

  statNotRolled(stat: Stat): boolean {
    return this.stat(stat) == 0;
  }

  hasUnrolledStats(): boolean {
    let hasUnrolledStat = false;
    this.stats.forEach(x => {if (x == 0){hasUnrolledStat = true;}});
    return hasUnrolledStat;
  }

  skill(skill: string) {
    return this.skills.find(x => x.name == skill);
  }

  hasSkill(skill: string) {
    return this.skills.some(x => x.name == skill);
  }

  addPerk(name: string) {
    this.perks.push(new Perk(name));
  }

  hasPerk(name: string) {
    return this.perks.some(x => x.name == name);
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

export class Perk {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
