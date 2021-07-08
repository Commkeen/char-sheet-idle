import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';
import { GameService } from 'src/app/services/game.service';
import { getSkillDef } from 'src/app/staticData/skillDefinitions';

@Component({
  selector: 'app-skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrls: ['./skill-panel.component.scss']
})
export class SkillPanelComponent implements OnInit {

  constructor(private _gameService: GameService, private _characterService: CharacterService) { }

  ngOnInit(): void {
  }

  getCombatSkills(): Skill[] {
    return this.getSkills().filter(x => getSkillDef(x.name).group == "combat");
  }

  getDefenseSkills(): Skill[] {
    return this.getSkills().filter(x => getSkillDef(x.name).group == "defense");
  }

  getOtherSkills(): Skill[] {
    return this.getSkills().filter(x => getSkillDef(x.name).group == "other");
  }

  getSkills(): Skill[] {
    if (this._characterService.character == null) {return null;}
    return this._characterService.character.skills;
  }

  // ======Display Getters======
  progressMax(skill: Skill): number {
    return this._characterService.getSkillRankCost(skill.name, skill.rank+1);
  }

}
