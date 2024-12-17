export type RewardType = "rating" | "item" | "currency" | "unlockRegion"

export class RewardDef {
  public name: string;
  public type: RewardType;
  public chance: number = 100;
  public amount: number = 1;

  constructor(name: string, type: RewardType) {
    this.name = name;
    this.type = type;
  }
}
