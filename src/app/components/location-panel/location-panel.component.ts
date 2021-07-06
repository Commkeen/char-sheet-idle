import { Component, OnInit } from '@angular/core';
import { Venture } from 'src/app/models/venture';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-location-panel',
  templateUrl: './location-panel.component.html',
  styleUrls: ['./location-panel.component.scss']
})
export class LocationPanelComponent implements OnInit {

  constructor(private _gameService: GameService) { }

  public localVentures: Venture[] = [];

  ngOnInit(): void {
  }

  getVentures(): Venture[] {
    return this._gameService.ventures;
  }

  // ======Display Getters======

  // ======Click Handlers======
  selectVenture(v: Venture): void {
    this._gameService.selectVenture(v);
  }

}
