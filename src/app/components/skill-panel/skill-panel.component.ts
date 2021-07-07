import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/character';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrls: ['./skill-panel.component.scss']
})
export class SkillPanelComponent implements OnInit {

  constructor(private _gameService: GameService) { }

  ngOnInit(): void {
  }

  getSkills(): Skill[] {
    if (this._gameService.character == null) {return null;}
    return this._gameService.character.skills;
  }

  // ======Display Getters======
  progressMax(skill: Skill): number {
    return this._gameService.getSkillRankCost(skill.name, skill.rank+1);
  }

}
