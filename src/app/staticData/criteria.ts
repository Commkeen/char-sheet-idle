
export type CriteriaType = "upgrade" | "skill" | "item" | "stat" | "perk" | "level" | "ventureMastery" | "localRating" | "currency";

export class Criteria {
  public criteriaType: CriteriaType;
  public target: string;
  public value: number;
  public lessThan: boolean = false;

  constructor(type: CriteriaType, target: string, value: number) {
    this.criteriaType = type;
    this.target = target;
    this.value = value;
  }

  toString(): string {
    switch (this.criteriaType) {
      case "skill":
      case "stat":
      case "ventureMastery":
        return `Requires ${this.value} ${this.target}`;
      default:
        return "Locked";
    }
    return "Locked";
  }
}
