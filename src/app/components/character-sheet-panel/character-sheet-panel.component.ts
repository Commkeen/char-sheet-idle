import { Component, OnInit } from '@angular/core';
import { Character, Perk } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { GameService } from 'src/app/services/game.service';
import { getPerkDef } from 'src/app/staticData/perkDefinitions';

@Component({
  selector: 'app-character-sheet-panel',
  templateUrl: './character-sheet-panel.component.html',
  styleUrls: ['./character-sheet-panel.component.scss']
})
export class CharacterSheetPanelComponent implements OnInit {

  constructor(private _gameService: GameService, private _characterService: CharacterService) { }

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

  get stats() {
    return this.getCharacter().stats;
  }

  get activePerks() {
    return this.getCharacter().perks;
  }

  get availablePerks() {
    return this._characterService.availablePerks;
  }

  perkCost(perk: Perk) {
    return getPerkDef(perk.name).cost;
  }

  // ======Click Handlers======

  selectPerk(perk: Perk) {
    this._characterService.buyPerk(perk.name);
  }

}
