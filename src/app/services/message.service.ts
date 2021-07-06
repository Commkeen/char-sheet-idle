import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  msgFeed: Subject<string> = new Subject();

  constructor() { }

  addMessage(message: string) {
    this.msgFeed.next(message);
  }
}
