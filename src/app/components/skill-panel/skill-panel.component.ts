import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/character';
import { Currency } from 'src/app/models/currency';
import { CharacterService } from 'src/app/services/character.service';
import { GameService } from 'src/app/services/game.service';
import { getSkillDef } from 'src/app/staticData/skillDefinitions';

@Component({
  standalone: false,
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

  getBodySkills(): Skill[] {
    return this.getSkills().filter(x => getSkillDef(x.name).stat == "body");
  }

  getSkills(): Skill[] {
    if (this._characterService.character == null) {return null;}
    return this._characterService.character.skills;
  }

  getAttributes(): string {
    return ""; //TODO
  }

  getProwess(): Currency {
    return this._characterService.currencies.getCurrency("prowess");
  }

  getCurrencyForAttribute(): Currency {
    return null; //TODO
  }

  getSkillsForAttribute(attribute: string): Skill[] {
    return []; //TODO
  }

  // ======Display Getters======
  progressMax(skill: Skill): number {
    return this._characterService.getSkillRankCost(skill.name, skill.rank+1);
  }

  skillRankCurrencyCost(skill: Skill): number {
    const def = getSkillDef(skill.name);
    return def.cost.getCostForLevel(skill.rank+1);
  }

  // ======Actions======
  tryBuySkillRank(skill: Skill) {
    this._characterService.buyNextSkillRank(skill.name);
  }

}
