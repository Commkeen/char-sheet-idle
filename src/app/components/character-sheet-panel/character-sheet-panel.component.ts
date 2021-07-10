import { Component, OnInit } from '@angular/core';
import { Stat } from 'src/app/common/gameConstants';
import { Character, Perk } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { GameService } from 'src/app/services/game.service';
import { UpgradeService } from 'src/app/services/upgrade.service';
import { getPerkDef } from 'src/app/staticData/perkDefinitions';

@Component({
  selector: 'app-character-sheet-panel',
  templateUrl: './character-sheet-panel.component.html',
  styleUrls: ['./character-sheet-panel.component.scss']
})
export class CharacterSheetPanelComponent implements OnInit {

  constructor(private _gameService: GameService, private _characterService: CharacterService,
              private _upgradeService: UpgradeService) { }

  ngOnInit(): void {
  }

  getCharacter(): Character {
    return this._characterService.character;
  }

  // ======Display Getters======

  get name() {
    return this.getCharacter().name;
  }

  get level() {
    return this.getCharacter().level;
  }

  get xp() {
    return this.getCharacter().xp;
  }

  get statPoints() {
    return this._characterService.statPointsToSpend;
  }

  get stats() {
    return this.getCharacter().getStats();
  }

  statValue(stat: Stat) {
    return this.getCharacter().stat(stat);
  }

  statNotRolled(stat: Stat) {
    return this.getCharacter().statNotRolled(stat);
  }

  canSpendStatPoints(stat: Stat) {
    return this._characterService.statPointsToSpend > 0 && !this.statNotRolled(stat);
  }

  get activePerks() {
    return this.getCharacter().perks;
  }

  get availablePerks() {
    return this._characterService.availablePerks;
  }

  get perkPoints() {
    return this._characterService.perkPointsToSpend;
  }

  perkCost(perk: Perk) {
    return getPerkDef(perk.name).cost;
  }

  get availableUpgrades() {
    return this._upgradeService.getAvailableGlobalUpgrades();
  }

  upgradeVisible(name: string) {
    return this._upgradeService.canSeeUpgrade(name);
  }

  upgradeRank(name: string) {
    return this._upgradeService.getUpgradeRank(name);
  }

  upgradeCost(name: string) {
    return this._upgradeService.upgradeCost(name);
  }

  get dieCount() {
    return this._gameService.getCurrentDie().count;
  }

  get dieFaces() {
    return this._gameService.getCurrentDie().faces;
  }

  // ======Click Handlers======

  retire() {
    this._characterService.initNewCharacter();
  }

  rollStat(stat: Stat) {
    this._characterService.rollStat(stat);
  }

  spendStatPoint(stat: Stat) {
    this._characterService.spendStatPoint(stat);
  }

  selectPerk(perk: Perk) {
    this._characterService.buyPerk(perk.name);
  }

  buyUpgrade(upgrade: string) {
    this._upgradeService.buyUpgrade(upgrade);
  }



}
