import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Venture } from 'src/app/models/venture';
import { CharacterService } from 'src/app/services/character.service';
import { GameService } from 'src/app/services/game.service';

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

  getVentures(): Venture[] {
    return this._gameService.getVenturesForCurrentLocation();
  }

  // ======Display Getters======

  // ======Click Handlers======
  selectVenture(v: Venture): void {
    this._gameService.selectVenture(v);
  }

}
