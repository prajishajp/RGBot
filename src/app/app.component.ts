import { Component } from '@angular/core';
import { Message } from './message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];


  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Hello! I am RGBot. What can I do for you?', 'assets/images/bot.png', new Date())
    ]; 
  }
}