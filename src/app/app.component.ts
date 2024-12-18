import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';
import { GameService } from './services/game.service';
import { TimeService } from './services/time.service';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'char-sheet-idle';

  showLocation = false;
  showCharacterSheet = true;

  constructor(private _timeService: TimeService, private _gameService: GameService,
    private _characterService: CharacterService) { }

  ngOnInit(): void {
    this._timeService.startGame();

    // For testing
    this.onSelectRegion("village");
    this._characterService.character.creationComplete = true;
  }

  // ======Nav handlers======
  onSelectCharSheet() {
    this.showCharacterSheet = true;
    this.showLocation = false;
  }

  onSelectRegion(region: string) {
    this._gameService.setCurrentRegion(region);
    this.showLocation = true;
    this.showCharacterSheet = false;
  }
}
