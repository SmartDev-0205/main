import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';
import { ItemService } from 'src/app/services/item.service';
import { DataService } from 'src/app/services/data.service';
import { AlertService } from 'src/app/services/alert.service';

// export class Item{
//   paymentId?:string
//   code?:string;
//   description?:string;
//   quantity?:string;
//   unit?:string;
//   pricePerUnit?:string;
//   amount?:string;
//   currency?:string;
//   services?:string
//   languages?:string
//   stratDate?:string
//   deliveryDate?:string
// }
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
  selector: 'app-quote-view',
  templateUrl: './quote-view.page.html',
  styleUrls: ['./quote-view.page.scss'],
})
export class QuoteViewPage implements OnInit {

  private selectedIndex = 0;
  private quote:Quotes = new Quotes;
  private projectId;
  private componyLogoBlob:any;
  @ViewChild("content", {static: false}) content: ElementRef;  
  constructor(
    private alertMsg:AlertService,
    private dataService:DataService,
    private quoteService:QuoteService,
    private itemService:ItemService,
    private router:ActivatedRoute,
    private naviatater:Router,
  ) { }
  private items = [];
  private title;
  private documentTitle = "";
  private collections=[];
  private allCurrency = [];
  async ngOnInit() {
    this.selectedIndex = 0;
    this.collections = this.dataService.collectionTerms;
    this.allCurrency = this.dataService.currences;
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
  async ionViewWillEnter() {
    let quoteId = this.router.snapshot.params['quote']; 
    let quoteTemp =  await this.quoteService.getQuote(quoteId);
    let project = quoteTemp.project;
    this.items = quoteTemp.items.items;
    delete (quoteTemp as any).__typename;
    delete (quoteTemp as any).items;
    delete (quoteTemp as any).project;
    delete (quoteTemp as any).createdAt;
    delete (quoteTemp as any).updatedAt;
    this.quote = quoteTemp;
    if(!this.quote.projectName){
      this.quote.projectName = project.name;
    }
    if(!this.quote.clientName){
      if(project.client){
        let clientName = project.client.profile.givenName + project.client.profile.familyName;
        this.quote.clientName = clientName;
      }
    }
    this.title = this.quote.direction;
    if(this.title ==  "Client Quotation")
      this.documentTitle = "Quotation";
    else
      this.documentTitle = "Purchase Order"
    if(!this.title)
      this.title = "Client Quotation";
    
  }
  createNewItem(){
    let item = {
      description:"",
      quantity:"",
      unit:"",
      pricePerUnit:"",
      amount:"",
      currency:"USD",
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
  async update(){
    if(!this.quote.documentNo || this.quote.documentNo == ""){
      this.alertMsg.show('Quote should have "Document No". Please fill that.');
      return;
    }
    let quote = this.content.nativeElement.innerHTML;
    let quoteHeader = this.dataService.invoiceScss;
    let htmlContent = quoteHeader + quote;
    htmlContent += "</html>";
    this.quote.financeString = htmlContent;
    let newQuote = await this.quoteService.updatQuote(this.quote);
    if(this.items.length > 0){
      this.items.forEach(async(item) => {
        delete (item as any).__typename;
        delete (item as any).createdAt;
        delete (item as any).updatedAt;
        item.paymentId = newQuote.id;
        if(!item.id)
          await this.itemService.createItem(item);        
        else
          await this.itemService.updateUtem(item);
      })
    }
    let url = this.naviatater.url;
    url = url.replace(/quote-view[\s\S]+/g,"");
    this.naviatater.navigate([url,{title:this.title}]);
  }
  calculateTotal(){
    let total = 0;
    this.items.forEach(item=>{
      if(item.amount)
        total += Number(item.amount);
    })    
    this.quote.total = total.toFixed(2);
    this.quote.vat = (total* 0.07).toFixed(2);
    this.quote.discount = (total* 0.03).toFixed(2);
    this.quote.grandTotal = (total* 1.07).toFixed(2);
    this.quote.totalAfterDiscount = (total* 1.04).toFixed(2);
  }
}
