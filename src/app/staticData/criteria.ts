
export type CriteriaType = "upgrade" | "skill" | "item" | "stat" | "perk" | "level" | "ventureMastery" | "localRating";

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
}
