import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Currency } from 'src/app/models/currency';
import { RegionRating } from 'src/app/models/region';
import { Venture } from 'src/app/models/venture';
import { CharacterService } from 'src/app/services/character.service';
import { GameService } from 'src/app/services/game.service';
import { getEncounterDef } from 'src/app/staticData/encounterDefinitions';

@Component({
  selector: 'app-location-panel',
  templateUrl: './location-panel.component.html',
  styleUrls: ['./location-panel.component.scss']
})
export class LocationPanelComponent implements OnInit {

  constructor(private _gameService: GameService, private _characterService: CharacterService) { }

  ngOnInit(): void {
  }

  getCharacter(): Character {
    return this._characterService.character;
  }

  getRatings(): RegionRating[] {
    return this._gameService.getRatingsForCurrentRegion();
  }

  getVentures(): Venture[] {
    return this._gameService.getVenturesForCurrentLocation();
  }

  getCurrencies(): Currency[] {
    return this._characterService.currencies.currencies;
  }

  // ======Display Getters======

  getEncounterDesc(encounterName: string) {
    const encounter = getEncounterDef(encounterName);
    if (encounter == null) {return '';}
    return encounter.activeDesc;
  }

  // ======Click Handlers======
  selectVenture(v: Venture): void {
    this._gameService.selectVenture(v);
  }

}
