import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate} from "@angular/animations";
import { DataService } from 'src/app/services/data.service';
import { NetRateService } from 'src/app/services/net-rate.service';
import { computeStackId } from '@ionic/angular/dist/directives/navigation/stack-utils';
@Component({
  selector: 'app-net-rate',
  templateUrl: './net-rate.page.html',
  styleUrls: ['./net-rate.page.scss'],
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
export class NetRatePage implements OnInit {

  // private tmRepetitions = "";
  // private mtRepetitions = "";
  // private tmOverHundred = "";
  // private mtOverHundred = "";
  // private tmHundred = "";
  // private mthundred = "";
  // private tmNineFive = "";
  // private mtNineFive = "";
  // private tmEightFive = "";
  // private mtEightFive = "";
  // private tmSevenFive = "";
  // private mtSevenFive = "";
  // private tmFive = "";
  // private mtFive = "";
  // private tmNewWord = "";
  // private mtNewWord = "";
  private editingProfile = false;
  private userId = "";
  private oldNetRate = {};
  private currentNetRate = {};
  constructor(
    private dataService:DataService,
    private netRateService:NetRateService
  ) { }
  ngOnInit() {
    this.dataService.userIdForSetting.subscribe(id=>{
      this.userId = id;
    });
  }
  ionViewWillEnter(){
    this.getClientNetRate();
  }
  async getClientNetRate(){
    if(!this.userId || this.userId == "")
    return [];
    console.log("this is the current user id",this.userId);
    let netRates = await this.netRateService.getClientNetRate(this.userId);
    if(netRates.length == 1)
      this.currentNetRate = netRates[0];
  }
  public saveProfile() {
    if(this.currentNetRate["id"]){
      this.netRateService.updateNetRate(this.currentNetRate).then(netRate=>
        this.currentNetRate = netRate
        );
    }
    else{
      this.currentNetRate["clientId"] = this.userId;
      console.log("this is the new net rate ",this.currentNetRate);
      this.netRateService.createNetRate(this.currentNetRate).then(netRate=>{
        this.currentNetRate = netRate;
      });
    }
    this.editingProfile = false;
  }
  private cancelEditing() {
    this.currentNetRate = this.oldNetRate;
    this.editingProfile = false;
  }
  public toggleEditing() {
    if (!this.editingProfile) {
      this.editingProfile = true;
      this.oldNetRate ={...this.currentNetRate} ;
      return;
    } else {
      this.cancelEditing();
    }
  }

}
