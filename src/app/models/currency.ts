import { getCurrencyDef } from "../staticData/currencyDefinitions";


export class Currency {
  public name: string;
  public displayName: string;
  public amount: number;
  public maxAmount: number;

  constructor(name: string) {
    const def = getCurrencyDef(name);
    this.name = name;
    this.displayName = def.displayName;
    this.amount = 0;
    this.maxAmount = def.baseMax;
  }
}

export class CurrencyCollection {
  public currencies: Currency[] = [];

  getCurrency(name: string): Currency {
    return this.currencies.find(x => x.name == name || x.displayName == name);
  }

  initCurrency(name: string): Currency {
    const currency = new Currency(name);
    this.currencies.push(currency);
    return currency;
  }

  add(name: string, amount: number) {
    let currency = this.getCurrency(name);
    if (currency == null) {currency = this.initCurrency(name);}
    currency.amount += amount;
    if (currency.amount > currency.maxAmount) {
      currency.amount = currency.maxAmount;
    }
  }

  remove(name: string, amount: number): boolean {
    let result = true;
    const currency = this.getCurrency(name);
    if (currency.amount < amount) {result = false;}
    currency.amount -= amount;
    if (currency.amount < 0) {currency.amount = 0;}
    return result;
  }

  has(name: string, amount: number): boolean {
    const currency = this.getCurrency(name);
    if (currency == null) {return false;}
    return currency.amount >= amount;
  }

  setMax(name: string, newMax: number) {
    let currency = this.getCurrency(name);
    if (currency == null) {currency = this.initCurrency(name);}
    currency.maxAmount = newMax;
    if (currency.amount > currency.maxAmount) {currency.amount = currency.maxAmount;}
  }
}
