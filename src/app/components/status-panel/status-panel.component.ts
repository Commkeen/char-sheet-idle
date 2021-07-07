import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Venture } from 'src/app/models/venture';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.scss']
})
export class StatusPanelComponent implements OnInit {

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
  }

  getCharacter(): Character {
    return this._gameService.character;
  }

  getTargetVenture(): Venture {
    const tgt = this._gameService.targetVenture;
    if (tgt == null) {return null;}
    return this._gameService.ventures.find(x => x.name == tgt);
  }

  // ======Display Getters======

  get level() {
    return this.getCharacter().level;
  }

  get xp() {
    return this.getCharacter().xp;
  }

  get xpMax() {
    return this._gameService.getLevelCost(this.level+1);
  }

  get stamina() {
    return this.getCharacter().stamina;
  }

  get maxStamina() {
    return this.getCharacter().maxStamina;
  }

  get ap() {
    return this._gameService.ap;
  }

  get ventureName() {
    const venture = this.getTargetVenture();
    if (venture == null) {return "";}
    let result = venture.name;
    if (venture.encounterName != null) {
      result += ` - ${venture.encounterName}`;
    }
    return result;
  }

  get ventureProgress() {
    const venture = this.getTargetVenture();
    if (venture == null) {return 0;}
    return venture.progress;
  }

  get ventureProgressMax() {
    const venture = this.getTargetVenture();
    if (venture == null) {return 100;}
    return venture.progressMax;
  }
}
