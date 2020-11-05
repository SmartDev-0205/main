import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'https://thawing-tundra-59527.herokuapp.com/';
  private socket;
  constructor(
  ) {
    this.socket = io(this.url);
   }

  public sendMessage(message) {
      this.socket.emit('new-message', message);
  }

  public getMessages = () => {
      return Observable.create((observer) => {
              this.socket.on('new-message', (message) => {
                  observer.next(message);
              });
      });
  }
}
