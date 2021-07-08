import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { REGION_LIBRARY } from 'src/app/staticData/regionDefinitions';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss']
})
export class NavPanelComponent implements OnInit {

  @Output() selectRegion = new EventEmitter<string>();
  @Output() selectCharSheet = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  get regions(): string[] {
    return REGION_LIBRARY.map(x => x.name);
  }

  // ======Click Handlers======

  onSelectCharSheet() {
    this.selectCharSheet.emit();
  }

  onSelectRegion(region: string) {
    this.selectRegion.emit(region);
  }

}
