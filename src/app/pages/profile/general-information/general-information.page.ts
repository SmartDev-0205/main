import {Component, OnInit} from "@angular/core";
import {UserService} from "src/app/services/user.service";
import { ActivatedRoute } from '@angular/router';
import * as cloneDeep from "lodash/cloneDeep";
import {trigger, transition, style, animate} from "@angular/animations";
import { DataService } from 'src/app/services/data.service';
import { ClientService } from 'src/app/services/client.service';
import { ProfilePage } from '../profile.page';
import { Http } from '@angular/http';
@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.page.html',
  styleUrls: ['./general-information.page.scss'],
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
export class GeneralInformationPage implements OnInit {
  private oldProfile = {};
  private userProfile = {};
  private compayLogo;
  private userId = "";// this is client id or user id 
  private managerId ="";
  private logoBlob;
  private oldLogoUrl = "";
  private accountTypes = [];
  private allCountries = [];
  private allPositions = [];
  private allTimezones = [];
  constructor(
    private http:Http,
    public user: UserService,
    private route: ActivatedRoute,
    private dataService:DataService,
    private userService:UserService,
    private clientService:ClientService
    ) {}
  ngOnInit() {
    this.allPositions = this.dataService.allPosition;
    this.accountTypes = this.dataService.accountTypes;
    this.allCountries = this.dataService.allCountries;
    this.allTimezones = this.dataService.allTimezons;
    this.dataService.userIdForSetting.subscribe(id=>this.userId = id);
    this.dataService.profileForSetting.subscribe(profile=>{
      this.userProfile = profile;
      if(this.userProfile && this.userProfile["logoKey"]){
        let strKey = this.userProfile["logoKey"];
        this.dataService.downloadLoloFileUrl(strKey).then(url=>{
          this.logoBlob = url;
        })
      }
      else
        this.logoBlob = "/assets/user.png";
    });
    this.userService.id.subscribe(managerId =>this.managerId = managerId);
  }
  public editingProfile: boolean = false;
  public saveProfile() {
    if(this.userId == ""){
      this.user.updateProfile(this.userProfile);
      this.editingProfile = false;
    }
    else{
      if(this.managerId){
        delete (this.userProfile as any).__typename;
        delete (this.userProfile as any).createdAt;
        delete (this.userProfile as any).updatedAt;
        let client = {
          id:this.userId,
          managerId:this.managerId,
          profile:this.userProfile
        }
        this.clientService.updateClient(client).then(updatedClient=>console.log(updatedClient));
      }
    }
    
  }

  private cancelEditing() {
    this.userProfile = this.oldProfile;
    this.editingProfile = false;
    this.logoBlob = this.oldLogoUrl;
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
  changeLogo(event){
    let file = event.target.files[0];
    let fileName = file.name;
    console.log(file);
    let storageFileName = "";
    storageFileName = this.userId;
    if(this.userId == ""){
      storageFileName = this.managerId;
    }
    this.oldLogoUrl = this.logoBlob;
    storageFileName += "_" + fileName;
    this.dataService.uploadLogoFile(storageFileName,file).then(filekey=>{
      let strKey = filekey['key'];
      console.log("this is the file key from key",strKey);
      this.userProfile['logoKey'] = strKey;
      this.dataService.downloadLoloFileUrl(strKey).then(url=>{
        this.logoBlob = url;
      })
    })
  }
}
