import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-new-rate',
  templateUrl: './new-rate.page.html',
  styleUrls: ['./new-rate.page.scss'],
})
export class NewRatePage implements OnInit {

  private title = "";
  private rateId = "";
  private service = "";
  private sourceLanguage = ""
  private targetLanguage = "";
  private unit="";
  private allUnit = [];
  private allLanguages = [];
  private allServices = [];
  private unitPrice = "";
  private managerId = "";
  private userId = "";
  private userName = "";
  private currency = "";
  private allCurrency = [];
  private specialize = "";
  constructor(
    private dataService:DataService,
    private router:Router,
    private activeRouter:ActivatedRoute,
    private userService:UserService,
    private rateService:RateService
  ) { }

  ngOnInit() {
    this.allCurrency = this.dataService.currences;
    this.allUnit = this.dataService.allUnit;
    this.allLanguages = this.dataService.allLanguages;
    this.allServices = this.dataService.services;
    this.userService.id.subscribe(managerId =>this.managerId = managerId);
    this.dataService.userIdForSetting.subscribe(id=>this.userId = id);
    this.dataService.profileForSetting.subscribe(profile=>{
      if(profile){
        this.userName = profile.givenName + profile.familyName;
      }
    });
    
  }
  ionViewWillEnter(){
    let rateId = this.activeRouter.snapshot.params['rate']; 
    if(rateId){
      this.rateService.getRate(rateId).then(rate=>{
        this.service = rate.service;
        this.rateId = rate.id;
        this.title = "Edit Rate";
        let languagePair = rate.languagePair;
        console.log("language pair",languagePair);
        let languages = languagePair.split('->');
        let sourceLang = "";
        let targetLang = "";
        console.log(languages);
        if(languages.length > 0){
          sourceLang = languages[0];
          sourceLang = sourceLang.slice(0,-1);
          console.log("source language",sourceLang);
        }
        if(languages.length > 1){
          targetLang = languages[1];
          targetLang = targetLang.substring(1); 
          console.log("target language",targetLang);
        }
        this.sourceLanguage = sourceLang;
        this.targetLanguage = targetLang;
        this.unit = rate.unit;
        this.currency = rate.currency;
        this.specialize = rate.specialization;
        this.unitPrice = rate.rate;
      })
    }
    else{
      this.title = "New Rate";
      this.service = "";
      this.sourceLanguage = "";
      this.targetLanguage = "";
      this.unit = "";
      this.currency = "";
      this.specialize = "";
      this.unitPrice = "";
    }
    
  }
  cancel(){
    this.router.navigate(["../../../rate"], { relativeTo: this.activeRouter });
  }
  save(){
    let lanaugePair = this.sourceLanguage + " -> " + this.sourceLanguage; 
    if(this.title == "New Rate"){
      let rate = {
        managerId:this.managerId,
        clientId:this.userId,
        clientName:this.userName,
        service:this.service,
        languagePair:lanaugePair,
        rate:this.unitPrice,
        currency:this.currency,
        unit:this.unit,
        specialization:this.specialize
      }
      console.log(rate);
      this.rateService.createRate(rate);
    }
    else{
      let rate = {
        id:this.rateId,
        managerId:this.managerId,
        clientId:this.userId,
        clientName:this.userName,
        service:this.service,
        languagePair:lanaugePair,
        rate:this.unitPrice,
        currency:this.currency,
        unit:this.unit,
        specialization:this.specialize
      }
      console.log(rate);
      this.rateService.updateRate(rate);
    }
    this.router.navigate(["../../../rate"], { relativeTo: this.activeRouter });
  }
  

}
