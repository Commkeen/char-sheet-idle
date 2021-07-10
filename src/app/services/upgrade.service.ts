import { Injectable } from '@angular/core';
import { Stat } from '../common/gameConstants';
import { getUpgradeDef, UPGRADE_LIBRARY } from '../staticData/upgradeDefinitions';
import { GameService } from './game.service';

@Injectable({
  providedIn: 'root'
})
export class UpgradeService {

  constructor(private _gameService: GameService) { }

  getAvailableGlobalUpgrades(): string[] {
    return this.getAvailableRegionUpgrades(null);
  }

  getAvailableRegionUpgrades(region: string): string[] {
    return UPGRADE_LIBRARY.filter(x => x.region == region).map(x => x.name);
  }

  getUpgradeRank(name: string) {
    return this._gameService.progress.upgrades.getRank(name);
  }

  canSeeUpgrade(name: string) {
    const def = getUpgradeDef(name);
    if (!def.repeatable && this.getUpgradeRank(name) > 0) {return false;}
    if (def.maxRank > 0 && this.getUpgradeRank(name) >= def.maxRank) {return false;}
    if (def.upgradeType == "die" && this._gameService.getNextDie() == null) {return false;}
    if (def.needUpgrade != null && !this._gameService.progress.upgrades.hasUpgrade(def.needUpgrade)) {return false;}
    return true;
  }

  canBuyUpgrade(name: string) {
    return true;
  }

  upgradeCost(name: string) {
    const baseCost = getUpgradeDef(name).baseCost;
    return baseCost + baseCost * Math.floor(Math.pow(this.getUpgradeRank(name), 2.1));
  }

  buyUpgrade(name: string) {
    const cost = this.upgradeCost(name);
    //if (this._gameService.progress.gold < cost) {return;}
    //this._gameService.progress.gold -= cost;
    this._gameService.progress.upgrades.incrementUpgrade(name);

    // Do effects...
    const def = getUpgradeDef(name);
    if (def.upgradeType == "die") {
      this._gameService.upgradeDie();
    }
    if (def.upgradeType == "stat") {
      this._gameService.unlockStat(def.arg as Stat);
    }
    if (def.upgradeType == "statPoint") {
      this._gameService.progress.statPoints++;
    }
  }
}
