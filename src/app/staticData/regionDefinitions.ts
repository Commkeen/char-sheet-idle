
export class RegionRatingDef {
  public name: string;
  public baseCost: number = 100;
  public costRatio: number = 1.15;
  public baseMaxRank: number = 5;
  public initialRank: number = 0;
  public invertCost: boolean = false;

  constructor(name: string) {
    this.name = name;
  }
}

export class RegionDef {
  public name: string;
  public internalName: string;
  public ratings: RegionRatingDef[] = [];

  constructor(name: string) {
    this.name = name;

    this.ratings.push(new RegionRatingDef("scouting"));
    this.ratings.push(new RegionRatingDef("renown"));
    this.ratings.push(new RegionRatingDef("infamy"));
  }

  setShortName(name: string) {
    this.internalName = name;
    return this;
  }

  addRating(name: string) {
    const def = new RegionRatingDef(name);
    this.ratings.push(def);
    return this;
  }

  addInverseRating(name: string, initialRank: number, baseCost: number,
    costRatio: number) {
    const def = new RegionRatingDef(name);
    def.invertCost = true;
    def.initialRank = initialRank;
    def.baseMaxRank = initialRank;
    def.baseCost = baseCost;
    def.costRatio = costRatio;
    this.ratings.push(def);
    return this;
  }
}

export function getRegionDef(name: string) {
  return REGION_LIBRARY.find(x => x.name == name || x.internalName == name);
}

export const REGION_LIBRARY: RegionDef[] = [
  new RegionDef("The Village").setShortName("village"),
  new RegionDef("Lost Woods").setShortName("woods"),
  new RegionDef("City of Isling").setShortName("city"),
  new RegionDef("Undermountain").setShortName("mountain"),
  new RegionDef("Chaos Keep").setShortName("keep"),
  new RegionDef("Astral Reach").setShortName("astral"),
  new RegionDef("Dark Dimension").setShortName("dark")
    .addInverseRating("control", 500, 100, 1.15)
];
