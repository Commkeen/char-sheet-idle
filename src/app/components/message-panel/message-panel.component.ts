import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.scss']
})
export class MessagePanelComponent implements OnInit {

  constructor(private _messageService: MessageService) { }

  public messageBuffer: string[] = [];
  public messageBufferSize: number = 10;

  ngOnInit(): void {
    this._messageService.msgFeed.subscribe(x => this.onMessage(x));
  }

  onMessage(msg: string): void {
    this.messageBuffer.push(msg);
    while (this.messageBuffer.length > this.messageBufferSize) {
      this.messageBuffer.splice(0,1);
    }
  }

}
