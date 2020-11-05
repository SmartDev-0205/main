import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { EventTableComponent } from 'src/app/components/event-table/event-table.component';
import { APIService } from 'src/app/API.service';
import { UserService } from 'src/app/services/user.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  @ViewChild(EventTableComponent, { static: true}) eventComponent: EventTableComponent;
  private currentUserId = "";
  private isDeleteEventSetted = false;
  constructor(
    private dataService:DataService,
    private apiService:APIService,
    private user:UserService,
    private eventService:EventService
  ) { }

  ngOnInit() {
    this.dataService.currentEvent.subscribe(events=>{
      console.log("currente events",events);
      if(!events)
        return;
      this.eventComponent.updateEvents(events);
    })

    this.user.id.subscribe(
      async(id)=>{
        this.currentUserId = id;
        if(this.currentUserId)
          this.changeAllEventsToShown();
      }
    );
    
  }
  changeAllEventsToShown(){
    this.apiService.GetUnShownEvents(this.currentUserId,{eq:"UnShown"}).then(
      (eventsTemp)=>{
        let events = eventsTemp.items;
        for(let i  = 0 ; i < events.length; i ++){
          let event = events[i];
          delete (event as any).__typename;
          delete (event as any).createdAt;
          delete (event as any).updatedAt;
          delete (event as any).user;
          delete (event as any).manager;
          event.flagShowHide = "Shown"
          this.apiService.UpdateEvent(event);
        }
      }
    )
  }
  async deleteEvents(){
    let rows = this.eventComponent.selection.selected;
    for (let i = 0 ; i < rows.length;i ++){
      await this.eventService.deleteEvent(rows[i].id)
    }
    this.apiService.GetEventByUserId(this.currentUserId).then((eventsTemp)=>{
      let events = eventsTemp.items;
      this.dataService.changeCurrentEvents(events);
    })
    
  }

}
