import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ItemService } from 'src/app/services/item.service';
import { PdfService } from 'src/app/services/pdf.service';
import { DataService } from 'src/app/services/data.service';
import { AlertService } from 'src/app/services/alert.service';

export class Item{
  paymentId?:string
  code?:string;
  description?:string;
  quantity?:string;
  unit?:string;
  pricePerUnit?:string;
  amount?:string;
  currency?:string;
}
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
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.page.html',
  styleUrls: ['./invoice-create.page.scss'],
})
export class InvoiceCreatePage implements OnInit {
  private selectedIndex = 0;
  private invoice:Invoice = new Invoice;
  private projectId;
  private items:Item[] = [];
  private title;
  private componyLogoBlob:any;
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

  ngOnInit() {
    this.title = this.router.snapshot.params['title'];
    if(!this.title)
      this.title = "Client Quotation";
    this.selectedIndex = 0;
    let url = window.location.href;
    let temp = url.match('project/([^/]*)/transaction');
    if (temp.length < 1)
      this.projectId = "";
    else
      this.projectId = temp[1];
    console.log("current project Id", this.projectId);
    this.invoice.projectId = this.projectId;    
    this.invoice.direction = this.title;
    this.convertImgToBlob();
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
    let item:Item = {
      code:"",
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
    if(!this.invoice.documentNo || this.invoice.documentNo == ""){
      this.alertMsg.show('Quote should have "Document No". Please fill that.');
      return;
    }
    let invoice = this.content.nativeElement.innerHTML;
    let invoiceHeader = this.dataService.invoiceScss;
    let htmlContent = invoiceHeader + invoice;
    htmlContent += "</html>"    
    this.invoice.financeString = htmlContent;
    let newInvoice = await this.invoiceService.createInvoice(this.invoice);
    if(this.items.length > 0){
      this.items.forEach(async(item) => {
        item.paymentId = newInvoice.id;
        await this.itemService.createItem(item);        
      })
    }
    let url = this.naviatater.url;
    url = url.replace(/invoice-create[\s\S]+/g,"");
    this.naviatater.navigate([url,{title:this.title}]);
  }

}
