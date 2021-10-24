import { Stat } from "../common/gameConstants";


// Stores progress that carries over between characters.
export class Progress {
  public upgrades: UpgradeProgress = new UpgradeProgress();
  public unlockedStats: Stat[] = ["body"];
  public dieRank: number = 0;
  public statPoints: number = 0;
  public gold: number = 0;
}


export class UpgradeProgress {

  private _upgrades: Map<string, number> = new Map<string, number>();

  hasUpgrade(name: string) {
    return this._upgrades.has(name);
  }

  getRank(name: string) {
    if (!this.hasUpgrade(name)) {return 0;}
    return this._upgrades.get(name);
  }

  incrementUpgrade(name: string) {
    this._upgrades.set(name, this.getRank(name)+1);
  }
}
