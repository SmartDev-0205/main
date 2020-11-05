import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';
import { ItemService } from 'src/app/services/item.service';
import { DataService } from 'src/app/services/data.service';
import { AlertService } from 'src/app/services/alert.service';
import { ProjectService } from 'src/app/services/project.service';

export class Quotes{
  direction:string;
  projectId:string;
  companyName?:string = "Prolocalize Co., Ltd. (Head Office)";
  companyAddress?:string = "25/17 Rama 6., Rd., Rongmuang Pathumwan, Bangkok, 10300,Thailan";
  taxId?:string;
  tel?:string = "+66909265579";
  mobile?:string = "+66909265579";
  siteUrl?:string = "https://www.prolocalize.com";
  clientName?:string;
  documentNo?:string;
  date?:string;
  credit?:string;
  dueDate?:string;
  seller?:string;
  reference?:string;
  projectName?:string;
  total?:string;
  discount?:string
  totalAfterDiscount?:string;
  vat?:string;
  grandTotal?:string;
  remark?:string;
  status?:string = "Pending";
  financeString:string;
}
@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.page.html',
  styleUrls: ['./quote-create.page.scss'],
})
export class QuoteCreatePage implements OnInit {
  private selectedIndex = 0;
  private quote:Quotes = new Quotes;
  private projectId;
  private componyLogoBlob:any;
  private collections=[];
  private allCurrency = [];
  @ViewChild("content", {static: false}) content: ElementRef;  
  constructor(
    private alertMsg:AlertService,
    private dataService:DataService,
    private quoteService:QuoteService,
    private itemService:ItemService,
    private router:ActivatedRoute,
    private naviatater:Router,
    private projectService:ProjectService
  ) { }
  private items = [];
  private title;
  private documentTitle = "";

  async ngOnInit() {
    this.title = this.router.snapshot.params['title'];
    if(!this.title)
      this.title = "Client Quotation";
    this.selectedIndex = 0;
    this.collections = this.dataService.collectionTerms;
    this.allCurrency = this.dataService.currences;
    let url = window.location.href;
    let temp = url.match('project/([^/]*)/transaction');
    if (temp.length < 1)
      this.projectId = "";
    else
      this.projectId = temp[1];
    console.log("current project Id", this.projectId);
    this.quote.projectId = this.projectId;    
    this.quote.direction = this.title;
    let project = await this.projectService.getProjectForNameAndClient(this.projectId);
    this.quote.projectName = project.name;
    if(project.client){
      let clientName = project.client.profile.givenName + project.client.profile.familyName;
      this.quote.clientName = clientName;
    }
    this.convertImgToBlob()
  }
  async convertImgToBlob() {
    let path = "assets/prolocalize-logo.jpg"
    let response = await fetch(path);
    let blob = await response.blob();
    
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = (event)=> {
      this.componyLogoBlob = reader.result;
    }
  }
  ionViewWillEnter() {
    if(this.title ==  "Client Quotation")
      this.documentTitle = "Quotation";
    else
      this.documentTitle = "Purchase Order"
  }
  createNewItem(){
    let item = {
      description:"",
      quantity:"",
      unit:"",
      pricePerUnit:"",
      amount:"",
      currency:"",
    }
    this.items.push(item)
  }
  selectItem(i){
    this.selectedIndex = i;
  }
  deleteItem(){
    if(this.selectedIndex >= this.items.length)
      return;
    this.items.splice(this.selectedIndex,1);
  }
  async create(){
    if(!this.quote.documentNo || this.quote.documentNo == ""){
      this.alertMsg.show('Quote should have "Document No". Please fill that.');
      return;
    }
    let quote = this.content.nativeElement.innerHTML;
    let quoteHeader = this.dataService.invoiceScss;
    let htmlContent = quoteHeader + quote;
    htmlContent += "</html>";
    this.quote.financeString = htmlContent;
    let newQuote = await this.quoteService.createQuote(this.quote);
    if(this.items.length > 0){
      this.items.forEach(async(item) => {
        item.paymentId = newQuote.id;
        await this.itemService.createItem(item);        
      })
    }
    let url = this.naviatater.url;
    url = url.replace(/quote-create[\s\S]+/g,"");
    this.naviatater.navigate([url,{title:this.title}]);
  }
  
}
