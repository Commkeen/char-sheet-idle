

export class CurrencyDef {
  name: string;
  displayName: string;
  baseMax: number;
  displayRegion: string;
  category: string;

  constructor(name: string) {
    this.name = name;
    this.displayName = name;
    this.baseMax = 10;
    this.displayRegion = null;
    this.category = null;
  }

  setBaseMax(value: number): CurrencyDef {
    this.baseMax = value;
    return this;
  }

  setCategory(value: string): CurrencyDef {
    this.category = value;
    return this;
  }
}

export function getCurrencyDef(name: string): CurrencyDef {
  return CURRENCY_LIBRARY.find(x => x.name == name || x.displayName == name);
}

export const CURRENCY_LIBRARY: CurrencyDef[] = [
  new CurrencyDef("stamina").setCategory("body"),
  new CurrencyDef("prowess"),
  new CurrencyDef("gold").setCategory("money"),
  new CurrencyDef("tattered map"),
  new CurrencyDef("goblin ear"),
  new CurrencyDef("brushwood"),
  new CurrencyDef("lumber").setCategory("building"),
  new CurrencyDef("reputation").setCategory("social"),

];
