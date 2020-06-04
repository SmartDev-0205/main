import {Component, OnInit} from "@angular/core";
import {UserService} from "src/app/services/user.service";
import {Profile} from "src/app/interfaces/profile.interface";

import * as cloneDeep from "lodash/cloneDeep";

import {trigger, transition, style, animate} from "@angular/animations";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
  animations: [
    trigger("fadeInAnimation", [
      transition(":enter", [
        style({ opacity: "0" }),
        animate(".5s ease-out", style({ opacity: "1" }))
      ])
    ]),

    trigger("alertAnimation", [
      transition(":enter", [
        style({ transform: "translateY(100%)" }),
        animate("400ms", style({ transform: "translateY(0%)" }))
      ]),
      transition(":leave", [
        style({ transform: "translateY(0%)" }),
        animate("400ms", style({ transform: "translateY(100%)" }))
      ])
    ])
  ]
})
export class ProfilePage implements OnInit {
  constructor(public user: UserService) {}

  ngOnInit() {}

  public userProfile: Profile = {};
  ionViewWillEnter() {
    this.user.refreshUser().then(() => {
      this.userProfile = cloneDeep(this.user.profile$.getValue());
    });
  }

  public editingProfile: boolean = false;

  public saveProfile() {
    this.user.updateProfile(this.userProfile);
    this.editingProfile = false;
  }

  private cancelEditing() {
    this.userProfile = cloneDeep(this.user.profile$.getValue());
    this.editingProfile = false;
  }

  public toggleEditing() {
    if (!this.editingProfile) {
      this.editingProfile = true;
      return;
    } else {
      this.cancelEditing();
    }
  }

}
