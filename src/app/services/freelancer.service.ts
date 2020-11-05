import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIService } from '../API.service';
@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  private allFreelancerSource = new BehaviorSubject(null);
  currentAllFreelancers = this.allFreelancerSource.asObservable();
  constructor(
    public apiService :APIService
  ) { 
    this.updateAllFreelancers();
  }
  async updateAllFreelancers(){
    let allFreelancers = await this.getAllfreelancers();
    this.changeAllFreelancers(allFreelancers);
  }
  async onInit(){
    let allfreelancers = await this.getAllfreelancers();
    this.changeAllFreelancers(allfreelancers);
  }
  changeAllFreelancers(allFreelancer){
    this.allFreelancerSource.next(allFreelancer);
  } 
  async getAllfreelancers(){
    let freelancersTemp = this.apiService.GetUsersByUserRole("vendor");
    let freelancers = (await freelancersTemp).items;
    return freelancers;
  }
  async getAllFreelancersByTeamId(teamId){
    let freelancerstemp = await this.apiService.GetTeamByManagerId(teamId);
    let freelancers = freelancerstemp.items;
    if(freelancers.length != 1)
      return null
    return freelancers[0].invites;
  }
  async deleteFreelancerOnTeam(teamInviteId){
    console.log("id",teamInviteId);
    let deletedTeamInvite = this.apiService.DeleteTeamInvite({id:teamInviteId});
    return deletedTeamInvite;
  }
  async invite(email){
    
  }
}
