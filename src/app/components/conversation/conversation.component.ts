import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { send } from 'process';
import { observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent implements OnInit {
  @ViewChild("chatBox", {static: false}) chatBox: ElementRef;  
  public firstCoversation;
  private message = "";
  constructor(
    private messageService:MessageService,
    private chatService:ChatService
  ) { }
  listenMessage(message){
    if(!this.firstCoversation)     
        return;
    let currentUserId = this.firstCoversation.firstUserId;
    let nextUserId =  this.firstCoversation.secondUserId;
    let firstCondition =  message.conversationId == this.firstCoversation.id;
    let secondCondition = message.conversationId == this.firstCoversation.nextConversation;
    if(firstCondition){
      this.firstCoversation.messages.items.push(message);
      if(message.isRead == "false"){
        delete (message as any).__typename;
        delete (message as any).conversation;
        delete (message as any).createdAt;
        delete (message as any).updatedAt;
        message.isRead = "true";
        this.messageService.updateMessage(message);
      }
    }
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    
    let chatbox = document.getElementById("chatbox");
    console.log("get message",chatbox);
    if(chatbox){
      chatbox.scrollTop = chatbox.scrollHeight;
    }
    
}
  ngOnInit() {
    this.chatService
    .getMessages()
    .subscribe((message) => {
      this.listenMessage(message);             
    });
  }
  getClasses(message) {
    return {
      incoming: message.senderId != this.firstCoversation.firstUserId,
      outgoing: message.senderId == this.firstCoversation.firstUserId,
    };
  }
  sendMessage(){
    if(this.message == "")
      return;
    let createdTime = new Date();
    let createdTimeString = createdTime.toISOString();
    let firstMessage = {
      conversationId:this.firstCoversation.id,
      senderId:this.firstCoversation.firstUserId,
      recepterID:this.firstCoversation.secondUserId,
      content:this.message,
      isRead:"True",
    }
    let firstMessageTemp = {
      conversationId:this.firstCoversation.id,
      senderId:this.firstCoversation.firstUserId,
      recepterID:this.firstCoversation.secondUserId,
      content:this.message,
      isRead:"True",
      createdAt:createdTimeString
    }
    this.chatService.sendMessage(firstMessageTemp);
    let secondMessage = {
      conversationId:this.firstCoversation.nextConversation,
      senderId:this.firstCoversation.firstUserId,
      recepterID:this.firstCoversation.secondUserId,
      content:this.message,
      isRead:"false ",
    }
    let secondMessageTemp = {
      conversationId:this.firstCoversation.nextConversation,
      senderId:this.firstCoversation.firstUserId,
      recepterID:this.firstCoversation.secondUserId,
      content:this.message,
      isRead:"false ",
      createdAt:createdTimeString
    }
    this.chatService.sendMessage(secondMessageTemp);
    this.messageService.createMessage(firstMessage);
    this.messageService.createMessage(secondMessage);
    this.message = "";
  }
  onEnter(){
    if(this.message != "")
      this.sendMessage();
  }
}
