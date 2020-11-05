import {Component, OnInit} from "@angular/core";
import {UserService} from "src/app/services/user.service";
import {trigger, transition, style, animate} from "@angular/animations";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.page.html',
  styleUrls: ['./contact-information.page.scss'],
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
export class ContactInformationPage implements OnInit {
  private oldProfile = {};
  public userProfile = {};
  private userId = "";
  constructor(
    public user: UserService,
    private dataService:DataService
    ) {}

  ngOnInit() {
    this.dataService.userIdForSetting.subscribe(id=>{
      this.userId = id;
      console.log("current user id",id);
    });
    this.dataService.profileForSetting.subscribe(profile=>this.userProfile = profile);
  }
  public editingProfile: boolean = false;

  public saveProfile() {
    this.user.updateProfile(this.userProfile);
    this.editingProfile = false;
  }

  private cancelEditing() {
    this.userProfile = this.oldProfile;
    this.editingProfile = false;
  }

  public toggleEditing() {
    if (!this.editingProfile) {
      this.editingProfile = true;
      this.oldProfile ={...this.userProfile} ;
      return;
    } else {
      this.cancelEditing();
    }
  }
}
