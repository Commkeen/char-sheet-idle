import { VENTURE_LIBRARY } from "../staticData/ventureDefinitions";

export class Venture {
  public name: string;
  public encounterName: string = null;
  public progress: number = 0;
  public progressMax: number = 100;
  public completions: number = 0;
  public mastery: number = 0;
  public masteryProgress: number = 0;
}

export class LocationVentures {
  public name: string;
  public ventures: Venture[];

  init(name: string) {
    this.name = name;
    this.ventures = [];

    VENTURE_LIBRARY.filter(def => {return def.region == name}).forEach(def => {
      const v = new Venture();
      v.name = def.name;
      this.ventures.push(v);
    });
  }
}
