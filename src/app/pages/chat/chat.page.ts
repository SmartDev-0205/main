import { Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(ConversationComponent, { static: true}) conversationComponent: ConversationComponent;
  filteredOptions: Observable<any[]>;
  controler = new FormControl();
  private currentUserId = "";
  private newUser;
  private selectedConversationId = -1;
  private firstConversation = [];
  private allFriends = [];
  private selectedConversation;
  constructor(
    private menuCtrl: MenuController,
    private conversationService:ConversationService,
    private userService:UserService,
    private messageService:MessageService,
    private apiService:APIService,
    private chatService:ChatService,
  ) { 
    this.menuCtrl.enable(false);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  listenMessage(message){
    let updateTime = new Date();
    let updateTimeString = updateTime.toISOString();
    if(message.senderId == this.currentUserId || message.recepterID == this.currentUserId){
      let conversation;
      for(let i = 0 ; i < this.firstConversation.length ; i++){
        if(this.firstConversation[i].id == message.conversationId){
          conversation = this.firstConversation[i];
          if(this.selectedConversation && this.selectedConversation && message.conversationId == this.selectedConversation.id){
            this.firstConversation[i].badge = 0;
            this.firstConversation[i].updatedAt = updateTimeString;
          }
          else{
            this.firstConversation[i].badge += 1;
            this.firstConversation[i].updatedAt = updateTimeString;
          }
          let updateConverstion = {
            id:conversation.id,
            nextConversation:conversation.nextConversation,
            firstUserId:conversation.firstUserId,
            secondUserId:conversation.secondUserId,
            badge:conversation.badge
          }
          console.log("update conversation",updateConverstion)
          this.conversationService.updateConversation(updateConverstion);
          break;
        }
      }
      this.sortConversations();
      }
  }
  sortConversations(){
    this.firstConversation.sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt));
  }
  // async test(){
  //   console.log("test function ")
  //   let messages = [];
  //   let message = await this.apiService.GetMessageByConversationId("b3eb4a72-9608-43a8-8d69-24117d333df3",10);   
  //   messages.push(message.items);
  //   while(message.nextToken){
  //     message = await this.apiService.GetMessageByConversationId("b3eb4a72-9608-43a8-8d69-24117d333df3",10,message.nextToken);   
  //     messages.push
  //   }
  //   console.log("test message",messages);
  // }
  ngOnInit() {
    this.chatService
    .getMessages()
    .subscribe((message) => {
      this.listenMessage(message);             
    });
    this.userService.id.subscribe(async(id)=>{
      this.currentUserId = id;
      
      let friends = await this.userService.listAllUser();
      if(friends){
        const result = friends.filter(friend => friend.id != id);
        this.allFriends = result;
      }
      this.conversationService.currentUserId = id;
      this.filteredOptions = this.controler.valueChanges
        .pipe(
          startWith(""),
          map(value => typeof value === 'string' ? value : value.profile.email),
          map(email => email ? this._filter(email) : this.allFriends.slice())
        );
        console.log("start");
      this.firstConversation = await this.conversationService.getFirstConversation();
      console.log("end");
      this.firstConversation.forEach((conversation,index)=>{
        this.messageService.getUnReadMessagesCount(conversation).then(counter=>{
          this.firstConversation[index].badge = counter;
        })
      })
      this.sortConversations();
      this.conversationService.apiService.OnCreateConversationListener.subscribe(conversationTeplate=>{
        let conversation = conversationTeplate["value"];
        let conversationData = conversation.data.onCreateConversation;
        if(conversationData.firstUserId == id)
          this.firstConversation.unshift(conversationData);
      })
    })
  }
  private _filter(value): any[] {
    const filterValue = value.toLowerCase();
    return this.allFriends.filter(option => option.profile.email.toLowerCase().includes(filterValue));
  }

  displayFn(value): string {
    return value && value.profile ? value.profile.email : '';
  }
  addFriend(){
    let result = this.firstConversation.filter(conversation => conversation.secondUserId == this.newUser.id);
    if(result.length > 0)
      return;
    this.conversationService.createConversation(this.currentUserId,this.newUser.id);
    this.controler.setValue("");
  }
  selecteConversation(i){
    this.firstConversation[i].badge = 0;
    this.selectedConversationId = i;
    this.selectedConversation = this.firstConversation[i];
    this.conversationComponent.firstCoversation = this.firstConversation[i];
    
    let messages = this.firstConversation[i].messages.items;
    messages.sort((a,b) => a.createdAt.localeCompare(b.createdAt));
    this.firstConversation[i].messages.items = messages;
    setTimeout(()=>{
      this.conversationComponent.scrollToBottom();  
    }, 100);
    
    for(let i = messages.length - 1 ; i >= 0; i--){
      let message = messages[i];
      if(message.isRead == "false"){
        delete (message as any).__typename;
        delete (message as any).conversation;
        delete (message as any).createdAt;
        delete (message as any).updatedAt;
        message.isRead = "true";
        this.messageService.updateMessage(message);
      }
      else{
         this.firstConversation[this.selectedConversationId];
        let conversation = {
          id:this.selectedConversation.id,
          nextConversation:this.selectedConversation.nextConversation,
          firstUserId:this.selectedConversation.firstUserId,
          secondUserId:this.selectedConversation.secondUserId,          
          badge:0
        }
        this.conversationService.updateConversation(conversation);
        break;
      }
    }
  }
  checkCurrentConversation(i){
    if(!this.selectedConversation)
      return false;
    let conversation = this.firstConversation[i];
    if(conversation.id == this.selectedConversation.id)
      return true;
    else
      return  false;
  }

 
}
