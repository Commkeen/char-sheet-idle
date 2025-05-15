import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Venture } from 'src/app/models/venture';
import { GameService } from 'src/app/services/game.service';
import { VENTURE_LIBRARY } from 'src/app/staticData/ventureDefinitions';

@Component({
  standalone: false,
  selector: 'venture-button',
  templateUrl: './venture-button.component.html',
  styleUrls: ['./venture-button.component.scss']
})
export class VentureButtonComponent implements OnInit {

  @Input() venture: Venture;
  @Output() click = new EventEmitter<void>();

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
  }

  onClick(event: MouseEvent) {
    event.stopPropagation();
    this.click.emit();
  }

  getVenture(): Venture {
    return this.venture;
  }

  getProgressPercent(): number {
    let result = this.venture.progress / this.venture.progressMax;
    result = result*100;
    result = Math.min(result, 100);
    result = Math.max(0, result);
    return result;
  }

  getExperiencePercent(): number {
    let result = this.venture.masteryProgress / 5;
    result = result*100;
    result = Math.min(result, 100);
    result = Math.max(0, result);
    return result;
  }

  isLocked(): boolean {
    let def = this._gameService.getVentureDef(this.venture.name);
    return !this._gameService.allCriteriaMet(def.useCriteria);
  }

  isTarget(): boolean {
    return this._gameService.isTargetVenture(this.venture);
  }

  getUnlockRequirements(): string {
    let def = this._gameService.getVentureDef(this.venture.name);
    let criteriaList = def.useCriteria;
    if (criteriaList == null || criteriaList.length == 0) {return "";}
    if (criteriaList.length == 1) {return criteriaList[0].toString();}
    let result = "";
    criteriaList.forEach(c => result += c.toString() + "\n");
    return result;
  }

}
