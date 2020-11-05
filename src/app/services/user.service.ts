import {Injectable} from "@angular/core";
import {filter, take} from 'rxjs/operators';
import {APIService, ProfileInput} from "../API.service";
import {BehaviorSubject} from 'rxjs';
import { User } from '../interfaces/user.interface';
import { title } from 'process';

@Injectable({
  providedIn: "root"
})
export class UserService {

  public id$: BehaviorSubject<string> = new BehaviorSubject(undefined);
  public role$: BehaviorSubject<string> = new BehaviorSubject(undefined);
  public profile$: BehaviorSubject<ProfileInput> = new BehaviorSubject(undefined);
  public email$: BehaviorSubject<string> = new BehaviorSubject(undefined);
  public authState$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  id = this.id$.asObservable();
  public loginedUser:any;
  public userRole = "";
  constructor(
    private api: APIService,
    ) {
  }

  public awaitId() {
    return new Promise((resolve) => {
      this.id$.pipe(
        filter(id => id !== undefined),
        take(1)
      ).subscribe(() => {
        resolve();
      });
    });
  }

  public awaitRole() {
    return new Promise((resolve) => {
      this.role$.pipe(
        filter(id => id !== undefined),
        take(1)
      ).subscribe(() => {
        resolve();
      });
    });
  }

  public awaitEmail() {
    return new Promise((resolve) => {
      this.email$.pipe(
        filter(email => email !== undefined),
        take(1)
      ).subscribe(() => {
        resolve();
      });
    });
  }

  public async refreshUser() {
    try{
      await this.awaitEmail();
      let email = this.email$.getValue();
      return new Promise((resolve) => {
        this.id$.pipe(
          filter(id => id !== undefined),
          take(1)
        ).subscribe(async () => {
          console.log(`SignedIn user: ${this.id$.getValue()}`);
          console.log("User Id:",this.id$.getValue());
          let userId = this.id$.getValue();
          this.id$.next(userId);
          const user = await this.api.GetUser(userId);
          this.loginedUser = user;
          if(!user){
            resolve(false);
            return;
          }
          if(user.role)
            this.userRole = user.role;
          console.log("get user ", user);
          const profile = user.profile;
          profile.email = email;
          const role = user.role;
          this.profile$.next(profile);
          this.role$.next(role);
          resolve(true);
        });
      });
    }
    catch{
      this.loginedUser = null;
      console.log("user sign out");
    }
    
  }

  public async updateProfile(updatedProfile: ProfileInput) {
    if ("__typename" in updatedProfile) {
      delete (updatedProfile as any).__typename;
    }
    this.profile$.next( 
      (await this.api.UpdateUser({
        id: this.id$.getValue(),
        profile: updatedProfile
      })).profile 
    );
  }

  public async createUser(user: User) {
    // this.id$.pipe(
    //   filter(id => id !== undefined),
    //   take(1)
    // ).subscribe(async (id: string) => {
    //   try {
    //     let result = await this.api.CreateUser({
    //       id:id,
    //       ...user
    //     });
    //   } catch(error) {
    //     console.log(error)
    //   }
    // });
    let createdUser = await this.api.CreateUser(user);
    return createdUser;
  }
  public async getUser(userId){
    let user = await this.api.GetUser(userId);
    return user;
  }
  async listAllUser(){
    let usersTemp = await this.api.ListUsers();
    let users = usersTemp.items;
    await this.awaitId();
    let id = this.id$.getValue();
    let user  = await this.api.GetUser(id);
    let index = users.indexOf(user);
    if(index > 0){
       users.splice(index,1);
    }
    return users;    
  }

}
