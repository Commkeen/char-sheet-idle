
export class RegionDef {
  public name: string;
  public internalName: string;

  constructor(name: string) {
    this.name = name;
  }

  setShortName(name: string) {
    this.internalName = name;
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
];
