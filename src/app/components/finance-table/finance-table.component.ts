import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { APIService } from 'src/app/API.service';
import { UserService } from 'src/app/services/user.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { QuoteService } from 'src/app/services/quote.service';
import { FinaceService } from 'src/app/services/finace.service';
import { PdfService } from 'src/app/services/pdf.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Router } from '@angular/router';
import { createDecipher } from 'crypto';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-finance-table',
  templateUrl: './finance-table.component.html',
  styleUrls: ['./finance-table.component.scss'],
})
export class FinanceTableComponent implements OnInit {
  @Input("providerName") providerName = '';
  private isManager = false;
  public selection:any;
  private role = "";
  private openFlag = false;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'Code',
    'issuedAt',
    'clientName',
    'total', 
    'currency',
    'status', 
    'manage'
  ];
  constructor(
    private naviatater:Router,
    private loading:LoadingService,
    private financeeApi:FinaceService,
    private apiService:APIService,
    private userService:UserService,
    private pdfService:PdfService,
    private quoteService:QuoteService,
    private invoiceService:InvoiceService,
    private itemService:ItemService
  ) { 
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<any>(allowMultiSelect, initialSelection);
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }
  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
  }
  updateFinance(finances){
    this.dataSource.data = finances;
    this.getRole();
  }
  async getRole(){
    await this.userService.awaitRole();
    this.role = this.userService.role$.getValue();
  }
  delete(i){
    this.openFlag = true;
    let finances = this.dataSource.data;
    let finance = finances.splice(i,1);
    this.dataSource.data = finances;
    // I should delete all finance files
    this.apiService.DeleteQuote({id:finance[0].id})
    this.apiService.DeleteInvoice({id:finance[0].id})
  }
  async download(i){
    this.openFlag = true;
    let loadingDialog = await this.loading.create({
      message: "Downloading ..."
    })
    let finances = this.dataSource.data;
    let finance = finances[i];
    let documentNo = finance.documentNo;
    let htmlContent = finance.financeString;
    
    this.pdfService.htmlPdf(htmlContent,documentNo,loadingDialog);
  }
  getManageRole(element){
    let title = element.direction;
    let status = element.status;
    if(status != "Pending")
      this.isManager = false
    else if(this.role == "client")
      this.isManager = true;
    else if(this.role == "vendor" && title != "Supplier Purchase Order")
      this.isManager = false;
    else if(this.role == "manager" && (title == "Client Quotation" || title == "Client Invoice"))
      this.isManager = false;
    else if(this.role == "manager" && title == "Supplier Purchase Order")
      this.isManager = false;
    else
      this.isManager = true;
    return this.isManager;
  }
  getInvoiceProviderName(){
    if(this.providerName && this.providerName != ""){
      if(this.role == "client" && this.providerName == "Vendor")
        return "Manager"
      else
        return this.providerName;
    }
    let url = window.location.href;
    if(!url)
      return "";
    let title = "";
    if(url.indexOf("Client") > 0)
      title = "Client"
    if(url.indexOf("Supplier") > 0)
      title = "Vendor"
    else
      title = "Client";
    let providerName = "";
    if(this.role == "client")
      providerName = "Manager";
    else if(this.role == "vendor")
      "Client Name"
    else if(this.role == "manager")
      providerName = title;
    return providerName;
  }
  onStatusChange(element,i){
    let status = element.status;
    if(status == "Reject"){
      this.delete(i);
      return;
    }
    let elementTemp = element;
    let type = element.__typename;
    delete (elementTemp as any).__typename;
    delete (elementTemp as any).items;
    delete (elementTemp as any).project;
    delete (elementTemp as any).createdAt;
    delete (elementTemp as any).updatedAt;
    if(type == "Quote")
      this.quoteService.updatQuote(elementTemp);
    else(type == "Invoice")
      this.invoiceService.updatInvoice(elementTemp);
    // Pay reall money from this
    // if(status == "Accept" && this.role == "manager"){
    //   let amount = element.total;
    //   if(amount)
    //     return;
    //   // this.financeeApi.payToSupplier()
    // }
  }
  openFinance(row){
    if(this.openFlag){
      this.openFlag = false;
      return;
    }
    if(row.__typename == "Quote"){
      let url = this.naviatater.url;
      url = url.replace(/;title[\s\S]+/g,"");
      let creatingUrl = url + "/quote-view";
      this.naviatater.navigate([creatingUrl,{quote:row.id}]);
    }
    else{
      let url = this.naviatater.url;
      url = url.replace(/;title[\s\S]+/g,"");
      let creatingUrl = url + "/invoice-view";
      this.naviatater.navigate([creatingUrl,{invoice:row.id}]);
    }
  }
  getRows(){
    return this.dataSource.data;
  }
  async makeInvoice(i){
    this.openFlag = true;
    let tempQuotes = this.getRows();
    console.log("before slice",tempQuotes);
    let quotes = [];
    quotes.push(...tempQuotes);
    console.log("after slice",tempQuotes);
    let currentQuote = Object.assign({},quotes[i]);    
    let invoice = currentQuote;
    if(currentQuote.direction == "Client Quotation")
      invoice.direction = "Client Invoice";
    else
      invoice.direction = "Supplier Invoice";
    let reference = currentQuote.documentNo;
    invoice.reference = reference;
    let quoteNumber = currentQuote.documentNo;
    let invoiceNumber = quoteNumber.replace("QT","BL");
    invoiceNumber = invoiceNumber.replace("QT","BL");
    invoice.documentNo = invoiceNumber;
    let items = currentQuote.items.items;
    delete (invoice as any).__typename;
    delete (invoice as any).project;
    delete (invoice as any).id;
    delete (invoice as any).createdAt;
    delete (invoice as any).updatedAt;
    delete (invoice as any).items;
    console.log("making invoice",invoice);
    let createdInvoice = await this.invoiceService.createInvoice(invoice);    
    let createdInvoiceId = createdInvoice.id;
    items.forEach(item => {
      delete (item as any).id;
      delete (item as any).__typename;
      delete (item as any).createdAt;
      delete (item as any).updatedAt;
      item.paymentId = createdInvoiceId;
      this.itemService.createItem(item);      
    });
  }
}
