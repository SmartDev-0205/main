import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material';
import {MatChipInputEvent} from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { DataService } from 'src/app/services/data.service';
import { FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {
  public newOrderName = "";
  public newOrderServices = [];
  public newOrderSource = "";
  public newOrderTarget = "";
  public newOrderSubject = "";
  public newOrderDeadline = "";
  public newOrderQuantity = "";
  public newOrderRate = "";
  public newOrderCurrency = "";
  public newOrderMore = "";
  public newOrderUnit = "";


  public addOrderForm: FormGroup;
  @ViewChild('seriviceInput', {static: false}) seriviceInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;
  constructor(
    private dataService:DataService,
    private userService:UserService,
    private router:Router,
    private orderService:OrderService
  ) { }
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  languages = ['english','spanish'];
  filteredLanguages :Observable<string[]>;
  filteredTargetLanguages :Observable<string[]>;
  services = [];
  selectedServices = [];
  serviceCtrl = new FormControl();
  sourLanguageCtrl = new FormControl('', [Validators.required]);
  targetLanguageCtrl = new FormControl('', [Validators.required]);
  filteredServices: Observable<string[]>;
  files: any[] = [];
  private currentUserId = "";
  ngOnInit() {
    this.languages = this.dataService.allLanguages;
    this.services = this.dataService.services;
    this.filteredServices = this.serviceCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.services.slice()));

      this.addOrderForm = new FormGroup({
        orderName: new FormControl('', [Validators.required]),
        orderServices: new FormControl(''),
        orderSourceLanguage:this.sourLanguageCtrl ,
        orderTargetLanguage: this.targetLanguageCtrl,
        orderSubject: new FormControl(''),
        orderDeadline: new FormControl(''),
        orderQuantity: new FormControl(''),
        orderUnit: new FormControl(''),
        orderRate: new FormControl(''),
        orderCurrency: new FormControl(''),
        orderProjectMore: new FormControl('', [Validators.required]),
      });

      this.filteredLanguages = this.sourLanguageCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._sourceFilter(value))
      );

      this.filteredTargetLanguages = this.targetLanguageCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._targetFilter(value))
      );

      this.userService.id.subscribe(
        async(id)=>{
          this.currentUserId = id;
        }
      );

  }
  public checkError(controlName: string, errorName: string) {
    if(this.addOrderForm.controls[controlName].touched){
      if(controlName == 'orderServices'){
        if(this.selectedServices.length > 0)
          return false;
        else
          return true;
      }
      return this.addOrderForm.controls[controlName].hasError(errorName);
    }
      
    else
      return false;
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.services.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.selectedServices.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.serviceCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.services.indexOf(fruit);

    if (index >= 0) {
      this.selectedServices.splice(index, 1);
    }
  }


  selected(event: MatAutocompleteSelectedEvent): void {
      this.selectedServices.push(event.option.viewValue);
      this.seriviceInput.nativeElement.value = '';
      this.serviceCtrl.setValue(null);
    }

  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }
  
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  private _sourceFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.languages.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  private _targetFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.languages.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  async goto(url){
    let newOrder = {
        clientId:this.currentUserId,
        orderName:this.newOrderName,
        orderServices:this.selectedServices,
        orderSourceLanguage:this.newOrderSource,
        orderTargetLanguage:this.newOrderTarget,
        orderSubject:this.newOrderSubject,
        orderDeadline:this.newOrderDeadline,
        orderQuntity:this.newOrderQuantity,
        orderUnit:this.newOrderUnit,
        orderBestRate:this.newOrderRate,
        orderCurrency:this.newOrderCurrency,
        orderProjectMore:this.newOrderMore
    }
    await this.orderService.createOrder(newOrder);
    this.router.navigateByUrl("/" + url)
  }
}
