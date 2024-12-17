import { Stat } from "../common/gameConstants";

export type UpgradeType = "die" | "stat" | "statPoint" | "unlockRegion"
export type UpgradeCategory = "shop" | "building"

export class UpgradeDef {

  // Identity
  public name: string;
  public region: string = null;
  public upgradeType: UpgradeType = null;
  public upgradeCategory: UpgradeCategory = null;

  // Costs
  public baseCost: number = 100;

  // Requirements


  // Effects
  public repeatable: boolean = true;
  public maxRank: number = 0;
  public needUpgrade: string = null;

  public arg: any = null;

  public constructor(name: string) {
    this.name = name;
  }

  public oneShot() {
    this.repeatable = false;
    this.maxRank = 1;
    return this;
  }

  public max(value: number) {
    this.maxRank = value;
    return this;
  }

  public cost(value: number) {
    this.baseCost = value;
    return this;
  }

  public setNeededUpgrade(upgrade: string) {
    this.needUpgrade = upgrade;
    return this;
  }

  public setRegion(region: string) {
    this.region = region;
    return this;
  }

  public allRegions() {
    this.region = "all";
    return this;
  }

  public setType(type: UpgradeType) {
    this.upgradeType = type;
    return this;
  }

  public unlocksStat(stat: Stat) {
    this.upgradeType = "stat";
    this.arg = stat;
    this.repeatable = false;
    return this;
  }
}

export function getUpgradeDef(name: string) {
  return UPGRADE_LIBRARY.find(x => x.name == name);
}

export const UPGRADE_LIBRARY: UpgradeDef[] = [
  new UpgradeDef("Sleeping Bag"),

  /*
  new UpgradeDef("Upgrade die").setType("die"),
  new UpgradeDef("Bonus Stat Point").setType("statPoint").max(5),
  new UpgradeDef("Unlock agility").unlocksStat("agility"),
  new UpgradeDef("Unlock mind").unlocksStat("mind").setNeededUpgrade("Unlock agility"),
  new UpgradeDef("Unlock psyche").unlocksStat("psyche").setNeededUpgrade("Unlock mind"),
  new UpgradeDef("Unlock perception").unlocksStat("perception").setNeededUpgrade("Unlock psyche"),
  new UpgradeDef("Bank"),
  new UpgradeDef("Academy"),

  new UpgradeDef("Cartographer").allRegions(),
  new UpgradeDef("Inn").allRegions(),
  new UpgradeDef("Statue").allRegions()
  */

]
