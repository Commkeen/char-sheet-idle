import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { REGION_LIBRARY } from 'src/app/staticData/regionDefinitions';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss']
})
export class NavPanelComponent implements OnInit {

  @Output() selectRegion = new EventEmitter<string>();
  @Output() selectCharSheet = new EventEmitter<void>();

  constructor(private _characterService: CharacterService) { }

  ngOnInit(): void {
  }

  getCharacter(): Character {
    return this._characterService.character;
  }

  // ======Display getters======
  get regions(): string[] {
    return REGION_LIBRARY.map(x => x.name);
  }

  get showCharSheetButton() {
    return this.getCharacter().creationComplete;
  }

  get showRegionButtons() {
    return this.getCharacter().creationComplete;
  }

  // ======Click Handlers======

  onSelectCharSheet() {
    this.selectCharSheet.emit();
  }

  onSelectRegion(region: string) {
    this.selectRegion.emit(region);
  }

}
