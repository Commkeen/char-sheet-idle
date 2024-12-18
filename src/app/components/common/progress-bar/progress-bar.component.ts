import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() value: number = 15;
  @Input() max: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  getWidth(): number {
    let result = this.value / this.max;
    result = result*100;
    result = Math.min(result, 100);
    result = Math.max(0, result);
    return result;
  }

}
