import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  public currentUserId = "";
  constructor(
    public apiService:APIService
  ) { 

  }
  async updateConversation(conversation){
    let updatedCoversation = await this.apiService.UpdateConversation(conversation);
    console.log("conversation updated",updatedCoversation);
    return updatedCoversation;
  }
  async getFirstConversation(){
    // let conversationsTemp = await this.apiService.GetConversationByFirstUser(this.currentUserId);
    let conversationsTemp = await this.apiService.GetConversationByFirstUser(this.currentUserId);
    return conversationsTemp.items;
  }
  async getSecondConversations(){
    let conversationsTemp = await this.apiService.GetConversationBySecondUser(this.currentUserId);
    return conversationsTemp.items;
  } 
  async createConversation(firstId,secondId){
    let conversation = {
      firstUserId:firstId,
      secondUserId:secondId,
      nextConversation:"none"
    }
    let firstConversation = await this.apiService.CreateConversation(conversation);
    conversation = {
      firstUserId:secondId,
      secondUserId:firstId,
      nextConversation:firstConversation.id
    }
    let secondConversation = await this.apiService.CreateConversation(conversation);
    let updatingConversation = {
      id:firstConversation.id,
      firstUserId:firstId,
      secondUserId:secondId,
      nextConversation:secondConversation.id
    }
    firstConversation = await this.apiService.UpdateConversation(updatingConversation);
    let conversations = [firstConversation,secondConversation];
    return conversations;
  }
}
