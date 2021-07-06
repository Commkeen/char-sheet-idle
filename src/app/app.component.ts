import { Component, OnInit } from '@angular/core';
import { TimeService } from './services/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'char-sheet-idle';

  constructor(private _timeService: TimeService) { }

  ngOnInit(): void {
    this._timeService.startGame();
  }
}
