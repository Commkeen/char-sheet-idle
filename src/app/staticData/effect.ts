
// Unlocks are not an effect, those are handled by Criteria
// Effects are passive modifiers evaluated per tick


export type EffectType =
  "baseCurrencyGain" |              // Passive generation
  "currencyCap"  |                  // Raise currency cap
  "currencyGainRate" |              // Multiply all gains
  "ventureCurrencyPerTickDiscount"  // Cost less stamina per tick


export class Effect {
  public type: EffectType;

}

export class CurrencyEffect extends Effect {
  public currency: string;
  public value: number;
}

export class VentureCurrencyEffect extends Effect {
  public venture: string;
  public currency: string;
  public value: number;
}

export class EffectDefFactory {
  public static addBaseCurrencyCap(currency: string, value: number): Effect {
    let effect = new CurrencyEffect();
    effect.type = "currencyCap";
    effect.currency = currency;
    effect.value = value;
    return effect;
  }
}
