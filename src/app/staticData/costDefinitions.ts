

export class CostDef {
  currency: string;
  base: number;
  coefficient: number; // Level [n+1] costs level [n]'s cost * ratio

  constructor(currency: string) {
    this.currency = currency;
    this.base = 1;
    this.coefficient = 1.125;
  }

  getCostForLevel(level: number) {
    if (level <= 1) {return this.base;}
    return this.base * Math.pow(this.coefficient, level-1);
  }
}
