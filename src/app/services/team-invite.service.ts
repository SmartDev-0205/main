import { Injectable} from '@angular/core';
import {APIService} from "../API.service";
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import {OnDeleteTeamInviteSubscription} from '../API.service'
// import * from "../../graphql/subscriptions.graphql"

@Injectable({
  providedIn: 'root'
})
export class TeamInviteService {
  constructor(
    private apiSerivce:APIService
  ) { 
    console.log("team invite service started");
    const subscription = this.apiSerivce.OnDeleteTeamInviteListener.subscribe(teamInvite=>{
    });
  }
  async createTeamInvite(teamInvite){
    let newTeamInvite = await this.apiSerivce.CreateTeamInvite(teamInvite);
    return newTeamInvite;
  }
  async updateTeamInvite(teamInvite){
    let updatedTeamInvite = await this.apiSerivce.UpdateTeamInvite(teamInvite);
    return updatedTeamInvite;
  }
  async getTeamInvite(id){
    let teamInvite = await this.apiSerivce.GetTeamInvite(id);
    return teamInvite;
  }
  async getTeamInviteByTeamId(id){
    let teaminvites = await this.apiSerivce.GetTeamInvitebyTeamId(id);
    return teaminvites.items;
  }
  async getTeamInviteByUserId(id){
    let teaminvites = await this.apiSerivce.GetTeamInvitebyuserId(id);
    return teaminvites.items;
  }
}
