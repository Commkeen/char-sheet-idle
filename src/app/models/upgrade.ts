

export class Upgrade {
  name: string;
  level: number;

  constructor(name: string) {
    this.name = name;
    this.level = 0;
  }
}

export class UpgradeCollection {
  public upgrades: Upgrade[] = [];

  addUpgrade(name: string): Upgrade {
    let upgrade = this.getUpgrade(name)
    if (upgrade != null) {return upgrade;}
    upgrade = new Upgrade(name);
    this.upgrades.push(upgrade);
    return upgrade;
  }

  getUpgrade(name: string): Upgrade {
    return this.upgrades.find(x => x.name == name);
  }

  getLevel(name: string): number {
    const upgrade = this.getUpgrade(name);
    if (upgrade == null) {return 0;}
    return upgrade.level;
  }

  setLevel(name: string, level: number) {
    let upgrade = this.getUpgrade(name);
    if (upgrade == null) {upgrade = this.addUpgrade(name);}
    upgrade.level = level;
  }

  increment(name: string) {
    let upgrade = this.getUpgrade(name);
    if (upgrade == null) {upgrade = this.addUpgrade(name);}
    upgrade.level = upgrade.level + 1;
  }
}
