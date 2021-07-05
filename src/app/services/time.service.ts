import { Injectable } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';

const tickRate = 100;

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  tick: Subject<number> = new Subject();
  private _timerSubscription: Subscription = null;

  constructor() { }

  startGame() {
    if (this._timerSubscription != null) {
      this._timerSubscription.unsubscribe();
    }
    this._timerSubscription = interval(tickRate).subscribe(x => this.tick.next(tickRate*100));
  }
}
