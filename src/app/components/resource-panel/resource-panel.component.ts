import { Component } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-resource-panel',
  standalone: false,
  templateUrl: './resource-panel.component.html',
  styleUrl: './resource-panel.component.scss'
})
export class ResourcePanelComponent {

  constructor(private _characterService: CharacterService) {}

  getCurrencies(): Currency[] {
    if (this._characterService.currencies == null) {return null;}
    return this._characterService.currencies.currencies;
  }

}
