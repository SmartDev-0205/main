import {Injectable} from "@angular/core";

import {Profile} from "../interfaces/profile.interface";
import {User} from "../interfaces/user.interface";

import API, { graphqlOperation } from "@aws-amplify/api";

import {APIService} from "../API.service";

import {UserService} from './user.service';
import {filter, take} from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class ProlocalizeDB {

  constructor(
    private api: APIService,
    private user: UserService
  ) { }

  public async listUsers(filters?: any, limit?: number, nextToken?: string) {
    return await this.api.ListUsers(filters, limit, nextToken);
  }

  public createUser(user: User) {
    this.user.id$.pipe(
      filter(id => id !== undefined),
      take(1)
    ).subscribe(async (id: string) => {
      try {
        let result = await this.api.CreateUser({
          id: id,
          ...user
        });
      } catch(error) {
        console.log(error)
      }
    });
  }

  public getCurrentUserNames() {
    console.log("this neesd to be done");
  }

  public async getUser(id: string) {
    return await this.api.GetUser(id);
  }

  public updateTranslators() {
    console.log("updateTranslators");
  }

  public getCurrentTranslators() {
    console.log("getCurrentTranslators");
  }

  public async getProjectsByUserId(userId?: string) {
    const statement = `query GetProjectsByUserId($userId: ID) {
        getProjectsByUserId(userId: $userId) {
          items {
            id
            userId
            user {
              id
              role
              profile {
                givenName
                familyName
              }
            }
            name
            description
            status
            budget
            createdAt
            updatedAt
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    gqlAPIServiceArguments.userId = userId;
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments))
    ) as any;
    return response.data.getProjectsByUserId;
  }

}
