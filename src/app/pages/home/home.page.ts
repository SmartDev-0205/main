import {Component} from "@angular/core";
import {UserService} from "src/app/services/user.service";
import {MenuController} from "@ionic/angular";
import { EventService } from 'src/app/services/event.service';
import { APIService } from 'src/app/API.service';
import { TeamInviteService } from 'src/app/services/team-invite.service';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  private allInvites = [];
  constructor(
    private menuCtrl: MenuController,
    public user: UserService,
    public eventService:EventService,
    private apiService:APIService,
    private teamInviteService:TeamInviteService
  ) {}
  private currentUserId;
  private invites = [];
  ngOnInit() {
    // this.user.id.subscribe(
    //   async(id)=>{
    //     this.currentUserId = id;
    //     if(!id)
    //       return;
    //     let events = await this.eventService.getEventsByUserId(id);
    //     for (let i  = 0 ; i < events.length;i ++){
    //       await this.eventService.deleteEvent(events[i].id);
    //     }
    //     this.apiService.OnCreateEventListener.subscribe({
    //       next: data => {
    //         if(!this.currentUserId)
    //           return;
    //         let value = data['value'];
    //         let eventData = value.data;
    //         let userId = eventData.onCreateEvent.userId;
    //         console.log("event userID",userId,this.currentUserId);
    //         if (this.currentUserId == userId){
    //             this.updateEvents();            
    //         }
    //       },
    //       error: error => {
    //         console.warn("error",error);
    //       }
    //     });
    //     this.updateEvents();
    //   }
    // );

  }
  async updateEvents(){
    // let userId = this.currentUserId;
    // console.log("current user id",userId);
    // let teamInvites = await this.teamInviteService.getTeamInviteByUserId(userId);
    // this.invites = teamInvites;
    // console.log("current team invites",this.invites);
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
  assept(index){
    let currentInvite = this.invites[index];
    delete (currentInvite as any).__typename;
    delete (currentInvite as any).createdAt;
    delete (currentInvite as any).updatedAt;
    delete (currentInvite as any).team;
    delete (currentInvite as any).user;
    this.invites[index].status = "accepted"
    console.log("accepted invite", currentInvite)
    this.teamInviteService.updateTeamInvite(currentInvite);
  }
  reject(index){
    this.invites[index].status = "rejected"
    this.teamInviteService.updateTeamInvite(this.invites[index]);
  }
  idDisabled(invite){
    if(invite.status == "pending")
      return false;
    else
      return true;
  }


}
