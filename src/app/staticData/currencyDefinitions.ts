

export class CurrencyDef {
  name: string;
  displayName: string;
  baseMax: number;
  displayRegion: string;

  constructor(name: string) {
    this.name = name;
    this.displayName = name;
    this.baseMax = 10;
    this.displayRegion = null;
  }
}


export const CURRENCY_LIBRARY: CurrencyDef[] = [
  new CurrencyDef("tattered map"),
  new CurrencyDef("goblin ear"),

];
