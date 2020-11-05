import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { APIService,ModelSortDirection} from '../API.service';
import { LoadingService } from './loading.service';
import { BehaviorSubject } from 'rxjs';
import { AddTeamDialogComponent } from '../shared/dialogs/add-team-dialog/add-team-dialog.component';
import API, {graphqlOperation} from "@aws-amplify/api";


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamSource = new BehaviorSubject(null);
  currentTeams = this.teamSource.asObservable();

  changeTeams(teams) {
    this.teamSource.next(teams)
  }

  constructor(
    private userService:UserService,
    private api:APIService,
    private loading:LoadingService
  ) { }

  async updateTeams(){
    let currentTeams = [];
    let teams = await this.getTeams();
    for (let i = 0 ; i < teams.length ; i ++){
      currentTeams.push(teams[i]);  
    }
    this.changeTeams(currentTeams);
  }
  async addTeam(teamName){
    const loadingDialog = await this.loading.create({
      message: "Adding team..."
    })
    await this.userService.awaitId();
    let managerId = "";
    managerId = this.userService.id$.getValue();
    let team = {
      managerId:managerId,
      teamName:teamName
    }
    await this.api.CreateTeam(team);
    loadingDialog.dismiss();
    this.updateTeams();
  }
  async getTeams(){
    await this.userService.awaitId();
    let managerId = "";
    managerId = this.userService.id$.getValue();
    let teamResult = await this.GetTeamByManagerId(managerId);
    return teamResult.items;
  }
  async deleteTeam(teamId){
    await this.api.DeleteTeam({id:teamId});
    this.updateTeams();
  }
  async getManagerTeamMembers(){
    let teams = await this.getTeams();
    let teamMembers = [];
    for (let i = 0 ; i < teams.length;i ++){
      let team = teams[i];
      let teamInvites = team.invites.items;
      for (let j = 0 ; j < teamInvites.length; j ++){
        let user = teamInvites[j].user;
        teamMembers.push(user);
      }
    }
    return teamMembers;
  }
  async GetTeamByManagerId(
    managerId?: string,
    sortDirection?: ModelSortDirection,
    limit?: number,
    nextToken?: string
  ) {
    const statement = `query GetTeamByManagerId($managerId: ID, $sortDirection: ModelSortDirection, $limit: Int, $nextToken: String) {
        getTeamByManagerId(managerId: $managerId, sortDirection: $sortDirection, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            teamName
            manager {
              __typename
              role
              profile {
                __typename
                accountType
                companyAddress
                Zip
                taxNumber
                note
                givenName
                familyName
                company
                birthday
                email
                email_2
                website
                postal
                city
                country
                timezone
                address_2
                postal_2
                city_2
                country_2
                timezone_2
                phone
                phone_2
                skype
                line
                rate
              }
              createdAt
              updatedAt
            }
            invites {
              __typename
              items {
                __typename
                id
                teamId
                userId
                user{
                  __typename
                  id
                  role
                  profile {
                    __typename
                    accountType
                    companyAddress
                    Zip
                    taxNumber
                    note
                    givenName
                    familyName
                    company
                    birthday
                    email
                    email_2
                    website
                    postal
                    city
                    country
                    timezone
                    address_2
                    postal_2
                    city_2
                    country_2
                    timezone_2
                    phone
                    phone_2
                    skype
                    line
                    rate
                  }
                  createdAt
                  updatedAt
                }
                status
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (managerId) {
      gqlAPIServiceArguments.managerId = managerId;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return response.data.getTeamByManagerId;
  }
}
