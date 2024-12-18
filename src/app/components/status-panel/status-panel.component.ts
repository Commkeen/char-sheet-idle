import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { Venture } from 'src/app/models/venture';
import { CharacterService } from 'src/app/services/character.service';
import { GameService } from 'src/app/services/game.service';
import { getEncounterDef } from 'src/app/staticData/encounterDefinitions';

@Component({
  standalone: false,
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.scss']
})
export class StatusPanelComponent implements OnInit {

  constructor(private _gameService: GameService, private _characterService: CharacterService) { }

  ngOnInit(): void {
  }

  getCharacter(): Character {
    return this._characterService.character;
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
    return this._characterService.getLevelCost(this.level+1);
  }

  get stamina() {
    return this.getCharacter().stamina;
  }

  get maxStamina() {
    return this.getCharacter().maxStamina;
  }

  get ventureName() {
    const venture = this.getTargetVenture();
    if (venture == null) {return "";}
    let result = venture.name;
    if (venture.encounterName != null) {
      const encounter = getEncounterDef(venture.encounterName);
      result += ` - ${encounter.activeDesc}`;
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
