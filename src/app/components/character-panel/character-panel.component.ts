import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { GameService } from 'src/app/services/game.service';
import { DieDef } from 'src/app/staticData/dieDefinitions';

@Component({
  selector: 'app-character-panel',
  templateUrl: './character-panel.component.html',
  styleUrls: ['./character-panel.component.scss']
})
export class CharacterPanelComponent implements OnInit {

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
  }

  getCharacter(): Character {
    return this._gameService.character;
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
    return this._gameService.getLevelCost(this.level+1);
  }

  get stamina() {
    return this.getCharacter().stamina;
  }

  get maxStamina() {
    return this.getCharacter().maxStamina;
  }

  get body() {
    return this.getCharacter().body;
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
    this._gameService.rollNewCharacter();
  }

  upgradeDie(): void {
    this._gameService.upgradeDie();
  }

  rest(): void {
    this._gameService.rest();
  }

}
