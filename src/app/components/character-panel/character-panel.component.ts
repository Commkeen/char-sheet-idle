import { Component, OnInit } from '@angular/core';
import { Stat } from 'src/app/common/gameConstants';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { GameService } from 'src/app/services/game.service';
import { DieDef } from 'src/app/staticData/dieDefinitions';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss']
})
export class CharacterPanelComponent implements OnInit {

  constructor(private _gameService: GameService, private _characterService: CharacterService) { }

  ngOnInit(): void {
  }

  getCharacter(): Character {
    return this._characterService.character;
  }

  getAP(): number {
    return this._gameService.ap;
  }

  getDie(): DieDef {
    return this._gameService.getCurrentDie();
  }

  getNextDieCost(): number {
    let result = null;
    const nextDie = this._gameService.getNextDie();
    if (nextDie != null) {result = nextDie.cost;}
    return result;
  }

  getNextStatUnlockName() {
    const nextUnlock = this._gameService.getNextStatUnlock();
    if (nextUnlock == null) {return null;}
    return nextUnlock.stat;
  }

  getNextStatUnlockCost() {
    const nextUnlock = this._gameService.getNextStatUnlock();
    if (nextUnlock == null) {return null;}
    return nextUnlock.cost;
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

  get xpMax() {
    return this._characterService.getLevelCost(this.level+1);
  }

  get stamina() {
    return this.getCharacter().stamina;
  }

  get maxStamina() {
    return this.getCharacter().maxStamina;
  }

  get stats() {
    return this.getCharacter().stats;
  }

  getStat(stat: Stat) {
    return this.getCharacter().stat(stat);
  }

  get ap() {
    return this._gameService.ap;
  }

  get dieCount() {
    return this.getDie().count;
  }

  get dieFaces() {
    return this.getDie().faces;
  }

  // ======Click Handlers======

  rollNewCharacter(): void {
    this._characterService.rollNewCharacter();
  }

  upgradeDie(): void {
    this._gameService.upgradeDie();
  }

  unlockStat(): void {
    this._gameService.unlockStat();
  }

  rest(): void {
    this._gameService.rest();
  }

}
