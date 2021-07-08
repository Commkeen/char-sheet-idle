
export class RegionDef {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}


export const REGION_LIBRARY: RegionDef[] = [
  new RegionDef("The Village"),
  new RegionDef("Lost Woods"),
  new RegionDef("City of Isling"),
  new RegionDef("Undermountain"),
  new RegionDef("Chaos Keep"),
  new RegionDef("Astral Reach"),
  new RegionDef("Dark Dimension")
];
