

export class EncounterDef {
  name: string;
  progressCost: number = 1;
  progressDegen: number = 0.5;
  staminaDrain: number = 1;
  xpReward: number = 100;

  constructor(name: string) {
    this.name = name;
  }
}

export const ENCOUNTER_LIBRARY: EncounterDef[] = [];
