import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private apiService:APIService
  ) { }
  async creatEvent(event){
    let createdEvent = await this.apiService.CreateEvent(event);
    return createdEvent;
  }
  async deleteEvent(id){
    let deletedEvent = await this.apiService.DeleteEvent({id:id});
    return deletedEvent;
  }
  async getEventsByUserId(userId){
    let tempEvent = await this.apiService.GetEventByUserId(userId);
    return tempEvent.items;
  }
}
