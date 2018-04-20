import { Component, OnInit, Input } from '@angular/core';


import { Message } from '../../message';
import { DialogflowService } from '../../services/dialogflow.service';
import { MatCardModule} from '@angular/material';


@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }
  onKeydown(event) {
    if (event.keyCode === 13 && event.shiftKey)
    {
      console.log(event)
    }
    ;
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.timestamp)
      );
    });

    this.message = new Message('', 'assets/images/user.png');
  }

}
