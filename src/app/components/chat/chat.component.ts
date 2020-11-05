import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MenuController } from '@ionic/angular';
import { ConversationService } from 'src/app/services/conversation.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { ConversationComponent } from 'src/app/components/conversation/conversation.component';
import { APIService, ModelSortDirection } from 'src/app/API.service';
import { MessageService } from 'src/app/services/message.service';
import { ChatService } from 'src/app/services/chat.service';
import { OrderMessageService } from 'src/app/services/order-message.service';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @ViewChild("container",{static:false}) container:ElementRef;
  @ViewChild("chatcontent",{static:false}) chatContent:ElementRef;
  @ViewChild("messageInput",{static:false}) messageInput:ElementRef;
  private orderId = "";
  private userRole = ""
  private updateScroll = true;
  private orderMessages = [];
  private messageValue = "";
  constructor(
    private orderMessageServic:OrderMessageService,
    private userService:UserService
  ){ }
  ngOnInit(){
    if(this.userService.userRole)    
      this.userRole = this.userService.userRole;
    else{
      this.userService.awaitRole().then(()=>{
        this.userRole = this.userService.role$.getValue();
      });
    }
    console.log("init funcitons")
  }
  ngAfterViewChecked(){
    
    // let message
    // let height = this.container.nativeElement.offsetHeight;
    // this.chatContent.nativeElement.style.height = (height - 80) + "px";
    this.messageInput.nativeElement.style.height = "1px";
    let messageHeight = 5 + this.messageInput.nativeElement.scrollHeight;
    this.messageInput.nativeElement.style.height = messageHeight+"px";
    let containerHeight = this.container.nativeElement.offsetHeight;
    this.chatContent.nativeElement.style.height = (containerHeight - 50 -  messageHeight) + "px";
    
  }
  updateContentScroll(){
    console.log("scroll updated" ,this.chatContent.nativeElement.scrollHeight);
    this.chatContent.nativeElement.scrollTop = this.chatContent.nativeElement.scrollHeight;
  }
  updateOrderId(id){
    console.log(id)
    this.orderId = id;
  }
  updateOrderMessage(messages){
    console.log(messages)
    this.orderMessages = messages;
  }
  sendMessage(message){
    let senderId = "client";
    let recepterId = "admin";
    if(this.userRole != "client"){
      let senderId = "admin";
      let recepterId = "client";
    }
    let currentTime =  new Date();
    let time = currentTime.getHours() + ":" + currentTime.getMinutes();
    let currentTimeString = currentTime.toISOString();
    let order= {
      content:message,
      orderId:this.orderId,
      senderId:senderId,
      recepterID:recepterId,
      isRead:false,
      createdAt:currentTimeString,
      time:time
    }
    this.orderMessageServic.createOrderMessage(order).then(createdOrder=>{
      this.orderMessages.push(createdOrder);
      setTimeout(() => {
        this.updateContentScroll();  
      }, 100);
    })
  }
  keyup(event){
    if(event.keyCode == 13 && event.shiftKey){
      return true
    }
    else if (event.keyCode == 13){
      this.sendMessage(this.messageValue);
      this.messageValue = "";
      return false;
    }
  }
}
