import {Injectable} from "@angular/core";
import {filter, take} from 'rxjs/operators';

import {Profile} from "../interfaces/profile.interface";

import {APIService} from "../API.service";
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class UserService {

  public id$: BehaviorSubject<string> = new BehaviorSubject(undefined);
  public role$: BehaviorSubject<string> = new BehaviorSubject(undefined);
  public profile$: BehaviorSubject<Profile> = new BehaviorSubject(undefined);

  public authState$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor(private api: APIService) {
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

  public refreshUser() {
    return new Promise((resolve) => {
      this.id$.pipe(
        filter(id => id !== undefined),
        take(1)
      ).subscribe(async () => {
        console.log(`SignedIn user: ${this.id$.getValue()}`);
        const user = await this.api.GetUser(this.id$.getValue());
        const profile = user.profile;
        const role = user.role;
        this.profile$.next(profile);
        this.role$.next(role);
        resolve();
      });
    });
  }

  public async updateProfile(updatedProfile: Profile) {
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

}
