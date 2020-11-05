import { Injectable } from '@angular/core';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    public apiService:APIService
  ) { }
  async createMessage(message){
    let newMessage = await this.apiService.CreateMessage(message);
    console.log("creasted message")
    return newMessage;
  }
  async updateMessage(message){
    let updatedMessage = await this.apiService.UpdateMessage(message);
    console.log("message updated");
    return updatedMessage;
  }
  async getUnReadMessagesCount(conversation){
    let messages = await this.apiService.GetUnReadMessageByUser(conversation.id,{eq:"false"})  
    return messages.items.length;
  }
  async getUnreadMessage(id){
    let messages = await this.apiService.GetUserUnReadMessageByUser(id,{eq:"false"})
    return messages;
  }
}
