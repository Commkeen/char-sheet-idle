import { getRegionDef } from "../staticData/regionDefinitions";


export class RegionRating {
  name: string;
  rank: number = 0;
  progress: number = 0;
  progressMax: number = 100;

  constructor(name: string) {
    this.name = name;
  }
}

export class Region {
  name: string; // internal name
  unlocked: boolean = false;
  ratings: RegionRating[] = [];

  init(name: string) {
    this.name = name;

    const def = getRegionDef(name);
    this.unlocked = def.alwaysUnlocked;
    def.ratings.forEach(x => {
      const rating = new RegionRating(x.name);
      rating.rank = x.initialRank;
      rating.progressMax = x.baseCost;
      this.ratings.push(rating);
    });
  }
}
