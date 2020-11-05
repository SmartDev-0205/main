import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ItemService } from 'src/app/services/item.service';
import { PdfService } from 'src/app/services/pdf.service';
import { DataService } from 'src/app/services/data.service';
import { AlertService } from 'src/app/services/alert.service';
import { QuoteCreatePageModule } from '../quote-create/quote-create.module';
// export class Item{
//   paymentId?:string
//   code?:string;
//   description?:string;
//   quantity?:string;
//   unit?:string;
//   pricePerUnit?:string;
//   amount?:string;
//   currency?:string;
// }
export class Invoice{
  projectId:string;
  direction:string;
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
  financeString?:string;
}

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.page.html',
  styleUrls: ['./invoice-view.page.scss'],
})
export class InvoiceViewPage implements OnInit {
  private selectedIndex = 0;
  private invoice:Invoice = new Invoice;
  private projectId;
  private items = [];
  private title;
  private componyLogoBlob:any;
  private collections=[];
  private allCurrency = [];
  @ViewChild("content", {static: false}) content: ElementRef;  
  constructor(
    private router:ActivatedRoute,
    private naviatater:Router,
    private invoiceService:InvoiceService,
    private itemService:ItemService,
    private pdfService:PdfService,
    private dataService:DataService,
    private alertMsg:AlertService
  ) { }

  async ngOnInit() {
    this.collections = this.dataService.collectionTerms;
    this.allCurrency = this.dataService.currences;
    this.convertImgToBlob();
  }
  async ionViewWillEnter() {
    let invoiceId = this.router.snapshot.params['invoice'];
    let invoiceTemp  = await this.invoiceService.getInvoice(invoiceId);
    let project = invoiceTemp.project;
    this.items = invoiceTemp.items.items;
    delete (invoiceTemp as any).__typename;
    delete (invoiceTemp as any).items;
    delete (invoiceTemp as any).project;
    delete (invoiceTemp as any).createdAt;
    delete (invoiceTemp as any).updatedAt;
    this.invoice = invoiceTemp;
    this.title = this.invoice.direction;
    this.selectedIndex = 0;
    if(!this.invoice.projectName){
      this.invoice.projectName = project.name;
    }
    if(!this.invoice.clientName){
      if(project.client){
        let clientName = project.client.profile.givenName + project.client.profile.familyName;
        this.invoice.clientName = clientName;
      }
    }

    console.log("This is clientname and project name",this.invoice.clientName,this.invoice.projectName);
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
    if(!this.invoice.documentNo || this.invoice.documentNo == ""){
      this.alertMsg.show('Quote should have "Document No". Please fill that.');
      return;
    }
    let invoice = this.content.nativeElement.innerHTML;
    let invoiceHeader = this.dataService.invoiceScss;
    let htmlContent = invoiceHeader + invoice;
    htmlContent += "</html>"    
    this.invoice.financeString = htmlContent;
    let newInvoice = await this.invoiceService.updatInvoice(this.invoice);
    if(this.items.length > 0){
      this.items.forEach(async(item) => {
        delete (item as any).__typename;
        delete (item as any).createdAt;
        delete (item as any).updatedAt;
        item.paymentId = newInvoice.id;
        if(!item.id)
          await this.itemService.createItem(item);        
        else
        await this.itemService.updateUtem(item);

      })
    }
    let url = this.naviatater.url;
    url = url.replace(/invoice-view[\s\S]+/g,"");
    console.log(this.title);
    this.naviatater.navigate([url,{title:this.title}]);
  }
  calculateTotal(){
    let total = 0;
    this.items.forEach(item=>{
      if(item.amount)
        total += Number(item.amount);
    })    
    this.invoice.total = total.toFixed(2);
    this.invoice.vat = (total* 0.07).toFixed(2);
    this.invoice.discount = (total* 0.03).toFixed(2);
    this.invoice.grandTotal = (total* 1.07).toFixed(2);
    this.invoice.totalAfterDiscount = (total* 1.04).toFixed(2);
  }

}
