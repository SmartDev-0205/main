import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "src/app/services/auth.service";
import {UserService} from 'src/app/services/user.service';
import { APIService } from 'src/app/API.service';
import { __values } from 'tslib';
import { async } from '@angular/core/testing';
import { DataService } from 'src/app/services/data.service';
import { ChatService } from 'src/app/services/chat.service';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: "menu",
  templateUrl: "./menu.html",
  styleUrls: ["./menu.scss"]
})
export class MenuComponent implements OnInit {
  private currentUserId;
  private unReadChatStatus = false;
  private badge = 0;
  appPages: any = [
    {
      title: "Projects",
      url: "/projects",
      icon: "document"
    },
    {
      title: "Add Project",
      url: "/projects/add",
      icon: "add-circle"
    },
    {
      title: "Profile",
      url: "/profile",
      icon: "person"
    }
  ];
  private userRole = "";
  constructor(
    private router: Router,
    private auth: AuthService,
    public user: UserService,
    private apiService:APIService,
    private dataService:DataService,
    private chatService:ChatService,
    private messageService:MessageService
  ) {}

  async ngOnInit() {
    await this.user.awaitRole();
    this.userRole = this.user.role$.getValue();
    console.log("user role",this.userRole);
    this.user.id.subscribe(
      async(id)=>{
        this.chatEventManage(id);
        this.currentUserId = id;
        let changedUser = await this.user.getUser(id);
        if(!changedUser)
          return;
        this.user.loginedUser = changedUser;
        this.userRole = changedUser.role;
        this.getEvents();
      }
    );
    this.apiService.OnCreateEventListener.subscribe({
      next: data => {
        if(!this.currentUserId)
          return;
        let value = data['value'];
        let eventData = value.data;
        let userId = eventData.onCreateEvent.userId;
        if (this.currentUserId == userId){
          this.badge += 1;
        }
        this.getEvents();
      },
      error: error => {
        console.warn("error",error);
      }
    });

    this.apiService.OnUpdateEventListener.subscribe({
      next:event=>{
        if(event && this.currentUserId){
          let value = event['value'];
          let eventData = value.data;
          let userId = eventData.onUpdateEvent.userId;
          if (this.badge == 0)
            return;
          if(this.currentUserId = userId)
            this.badge -= 1
        }
        
      }
    })
  }
  chatEventManage(id){
    this.messageService.getUnreadMessage(id).then(messages=>{
      if(!messages)
        return;
      if(messages.items.length > 0)
        this.unReadChatStatus = true;
      else  
        this.unReadChatStatus = false;
      this.chatService
        .getMessages()
        .subscribe((message) => {
          if(message.recepterID == id)
            this.unReadChatStatus = true;
        });
      this.messageService.apiService.OnUpdateMessageListener.subscribe(message=>{
        console.log("nessssssssssssssssssssssssssssssss");
        message.recepterID == id;
        this.unReadChatStatus = false;
      })
    });    
  }
  private getEvents(){
    if(!this.currentUserId)
      return;
    this.apiService.GetUnShownEvents(this.currentUserId,{ eq:"UnShown"}).then((eventsTemp)=>{
    let events = eventsTemp.items;
    this.badge = events.length
    })
    this.apiService.GetEventByUserId(this.currentUserId).then((eventsTemp)=>{
      let events = eventsTemp.items;
      this.dataService.changeCurrentEvents(events);
    })
    

  }
  public async signOut() {
    await this.auth.signOut();
    this.router.navigateByUrl("/signin");
  }
  goToDashboard(){
    this.router.navigateByUrl("/project/list");
  }
  chatLink(){
    let url = this.router.serializeUrl(this.router.createUrlTree(['/chat']));
    window.open(url,'_blank');
  }
}
