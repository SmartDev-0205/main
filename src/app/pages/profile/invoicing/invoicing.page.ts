import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import {UserService} from "src/app/services/user.service";
import { ActivatedRoute } from '@angular/router';
import * as cloneDeep from "lodash/cloneDeep";
import {trigger, transition, style, animate} from "@angular/animations";
import { DataService } from 'src/app/services/data.service';
import { ClientService } from 'src/app/services/client.service';
import { ProfilePage } from '../profile.page';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import * as _moment from 'moment';
const moment =_moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};
@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.page.html',
  styleUrls: ['./invoicing.page.scss'],
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
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class InvoicingPage implements OnInit {
  private oldProfile = {};
  @ViewChild('fruitInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  allFruits: string[] = [] ;
  
  public userProfile = {};
  private userId = "";// this is client id or user id 
  private managerId ="";
  private paymentTerm = [];
  private paymentMethod = [];
  private payDays = [];
  private dayOption = "";
  private payDay ;
  // private dayOption = "in__days";
  constructor(
    public user: UserService,
    private route: ActivatedRoute,
    private dataService:DataService,
    private userService:UserService,
    private clientService:ClientService
    ) {}
    ngOnInit() {
      this.payDays = this.dataService.payDays;
      this.paymentMethod = this.dataService.methodlist;
      this.paymentTerm = this.dataService.collectionTerms;
      this.allFruits = this.paymentMethod;
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
      this.dataService.userIdForSetting.subscribe(id=>this.userId = id);
      this.dataService.profileForSetting.subscribe(profile=>{
        this.userProfile = profile;
        let payDayString = "";
        if(this.userProfile && !this.userProfile["paymentMethod"]){
          this.userProfile["paymentMethod"]  = [];
        }
        if(this.userProfile){
          payDayString = this.userProfile["payDay"];
        }
        this.payDay = new Date(payDayString);
        console.log("this is the user profie payday",this.payDay);
      });
      this.userService.id.subscribe(managerId =>this.managerId = managerId);
    }
    public editingProfile: boolean = false;
    public saveProfile() {
      if(this.userId == ""){
        console.log(typeof(this.payDay));
        this.userProfile["payDay"] = this.payDay.toString();
        this.user.updateProfile(this.userProfile);
        this.editingProfile = false;
      }
      else{
        console.log(this.userProfile);
        if(this.managerId){
          delete (this.userProfile as any).__typename;
          delete (this.userProfile as any).createdAt;
          delete (this.userProfile as any).updatedAt;
          this.userProfile["payDay"] = this.payDays;
          let client = {
            id:this.userId,
            managerId:this.managerId,
            profile:this.userProfile
          }
          this.clientService.updateClient(client).then(updatedClient=>console.log(updatedClient));
        }
      }
    }
    changeDayOption(){
      this.payDay = "";
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
    add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
  
      // Add our fruit
      if ((value || '').trim()) {
        this.userProfile["paymentMethod"].push(value.trim());
      }
  
      // Reset the input value
      if (input) {
        input.value = '';
      }
  
      this.fruitCtrl.setValue(null);
    }
  
    remove(fruit: string): void {
      const index = this.userProfile["paymentMethod"].indexOf(fruit);
  
      if (index >= 0) {
        this.userProfile["paymentMethod"].splice(index, 1);
      }
    }
  
    selected(event: MatAutocompleteSelectedEvent): void {
      this.userProfile["paymentMethod"].push(event.option.viewValue);
      this.fruitInput.nativeElement.value = '';
      this.fruitCtrl.setValue(null);
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }

}
