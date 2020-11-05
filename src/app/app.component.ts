import {Component} from "@angular/core";

import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";
import {Platform} from "@ionic/angular";
import {AuthService} from './services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from './services/message.service';
import { APIService } from './API.service';
import { ChatService } from './services/chat.service';
import { UserService } from './services/user.service';
import { DataService } from './services/data.service';
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  private drawerMenuFlag = false;
  private currentSelectorName = "translator";
  private currentUserId;
  private userRole = "";
  private unReadChatStatus = false;
  private badge = 0;
  private navFlag = true;
  private logoBlob = "/assets/user.png";
  private urls = ["","/signin","/signup","/order/create-order"]
  constructor(
    private auth: AuthService,
    private dataService:DataService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private messageService:MessageService,
    private apiService:APIService,
    private chatService:ChatService,
    private user:UserService
  ) {
    this.auth.activatePersistentSignin();
    this.initializeApp();
    router.events.subscribe(url=>{
      let currentUrl = router.url;
      if (this.urls.indexOf(currentUrl) > -1)
        this.navFlag = true;
      else
        this.navFlag = false;
    })
  }
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
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  chatLink(){
    let url = this.router.serializeUrl(this.router.createUrlTree(['/chat']));
    window.open(url,'_blank');
  }
  goto(url){
    this.currentSelectorName = url;
    this.router.navigateByUrl("/" + url)
  }
  outDrawer(drawer){
    if (this.drawerMenuFlag){
      this.drawerMenuFlag = false;
      return;
    }
    drawer.close();
      
  }
}
