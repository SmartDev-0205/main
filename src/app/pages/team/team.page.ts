import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { isNull } from 'util';
import { MatDialog } from '@angular/material';
import { AddTeamDialogComponent } from 'src/app/shared/dialogs/add-team-dialog/add-team-dialog.component';
import { TeamService } from 'src/app/services/team.service';
import { timeStamp } from 'console';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { AddFreelancerComponent } from 'src/app/shared/dialogs/add-freelancer/add-freelancer.component';
import { FreelancerTableComponent } from 'src/app/components/freelancer-table/freelancer-table.component';
import { UserService } from 'src/app/services/user.service';
import API, { graphqlOperation } from "@aws-amplify/api";
import { AlertService } from 'src/app/services/alert.service';
import { TeamInviteService } from 'src/app/services/team-invite.service';
import { DataService } from 'src/app/services/data.service';
import { LoadingService } from 'src/app/services/loading.service';
import { EventService } from 'src/app/services/event.service';
import { async } from '@angular/core/testing';
import { EmailService } from 'src/app/services/email.service';
export interface User {
  name: string;
  email:string;
  status:string;
}
export interface Team {
  id:string;
  name: string;
}
@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})

export class TeamPage implements OnInit {
  @ViewChild(FreelancerTableComponent, { static: true}) freelancerTableComponent: FreelancerTableComponent;
  constructor(
    private matDialog: MatDialog,
    private teamService:TeamService,
    private freelancerService:FreelancerService,
    private userService:UserService,
    private alertMsg: AlertService,
    private teamInviteService:TeamInviteService,
    private dataService:DataService,
    private loading:LoadingService,
    private eventService:EventService,
    private emailService:EmailService
  ) { }
  myControl = new FormControl();
  private currentTeam;
  private selectedTeam;
  private currentTeams;
  options: User[] = [
  ];
  teamMemembers = [];
  private allFreelancers;
  private allUsers = [];
  private currentUserId= "";
  private currentUser;
  ngOnInit() {
    this.userService.id.subscribe(async(id)=>{
      this.currentUserId = id;
      console.log("current user Id",this.currentUserId);
      let user =  await this.userService.getUser(this.currentUserId);
      if(user)
        this.currentUser = user;
    });
    this.freelancerService.currentAllFreelancers.subscribe(allFreelancers =>{
      this.allFreelancers = allFreelancers;
      if (isNull(allFreelancers))
        return;
      this.allUsers = [];
      for (let i = 0 ; i < allFreelancers.length; i ++){
        let user = {
          id:allFreelancers[i].id,
          name:allFreelancers[i].profile.givenName + allFreelancers[i].profile.familyName,
          email:allFreelancers[i].email
        }
        this.allUsers.push(user);
      }
    })
    this.teamService.currentTeams.subscribe(teams => {
      this.currentTeams = teams;
    })
    this.teamService.updateTeams();
  }
  addFreelancer(){
    const dialogRef = this.matDialog.open(AddFreelancerComponent, {
      width: '500px',
      data:{users:this.teamMemembers}
    });
    dialogRef.afterClosed().subscribe(user => {
      if (user){
        console.log("selected user",user);
        let email = user.profile.email;
        let userName = user.profile.givenName + user.profile.familyName;
        let currentProfile = this.userService.profile$.getValue();
        let managerName = currentProfile.givenName + currentProfile.familyName;
        let userId = user.id;
        this.invite(email,userName,managerName,userId);
      }
    })
  }
  async deleteSelectedFreelancer(){
      let rows = this.freelancerTableComponent.selection.selected;
      if (rows.length > 0){
        const loadingDialog = await this.loading.create({
          message: "Deleting freelancers..."
        })
        for (let i = rows.length - 1 ; i > -1  ; i --){
          let deletedTeaminvite = await this.freelancerService.deleteFreelancerOnTeam(rows[i].id)
          console.log(deletedTeaminvite)
        }
        this.onSelectedTeam();
        loadingDialog.dismiss();
      }
    }
    async invite(email,userName,managerName,userId){
    let tempTeamInvite = {
      teamId:this.currentTeam.id,
      userId:userId,
      status:"pending"
    }
    
    let createdTeamInvite = await this.freelancerService.apiService.CreateTeamInvite(tempTeamInvite);
    // add event so we can subscribe!!
    
    let teamInviteId = createdTeamInvite.id;
    let hostingUrl = this.dataService.teamInviteUrl + teamInviteId;
    console.log("hosting url",hostingUrl) 
    if(!this.currentTeam){
      this.alertMsg.show("Please select team");
      return;
    }
    let emailConttent = "Hi " + userName + "\n";
    emailConttent += managerName.toUpperCase() + " ";
    emailConttent += "invite you to his team";
    this.emailService.email(email,"Project Invite",emailConttent,hostingUrl);
    this.onSelectedTeam();
    let textContnet = managerName.toUpperCase() + " ";
    textContnet += "invite you to ";
    textContnet += createdTeamInvite.team.teamName + ".";
    let newEvent = {
      userId:userId,
      managerId:this.currentUserId,
      textContent:textContnet,
      link:hostingUrl,
      type:"TeamInvite",
      flagShowHide:"UnShown"
    }
    let createdEvent = await this.eventService.creatEvent(newEvent);
  }
  addNewTeam(){
    const dialogRef = this.matDialog.open(AddTeamDialogComponent, {
      width: '500px',
    });
  }
  deleteCurrentTeam(){
    let teamId = this.currentTeam.id;
    this.teamService.deleteTeam(teamId);
  }
  async onSelectedTeam(){
    let teamId = this.currentTeam.id;
    console.log(teamId);
    let tempTeamInvites = await this.teamInviteService.getTeamInviteByTeamId(teamId);
    this.freelancerTableComponent.updateFreelancers(tempTeamInvites);
  }
}