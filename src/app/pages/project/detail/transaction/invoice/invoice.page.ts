import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FinanceTableComponent } from 'src/app/components/finance-table/finance-table.component';
import { InvoiceService } from 'src/app/services/invoice.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {
  @ViewChild(FinanceTableComponent, { static: true}) financeTable: FinanceTableComponent;
  private title;
  private invoices = [];
  private projectId;
  private haCreateRole = false;
  private role = "";
  constructor(
    private router:ActivatedRoute,
    private naviatater:Router,
    private invoiceService:InvoiceService,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.title = this.router.snapshot.params['title'];
    if(!this.title)
      this.title = "Client Invoice";
    let url = window.location.href;
    let temp = url.match('project/([^/]*)/transaction');
    if (temp.length < 1)
      this.projectId = "";
    else
      this.projectId = temp[1];
   
  }
  async ionViewWillEnter() {
    await this.userService.awaitRole();
    this.role = this.userService.role$.getValue();
    if(this.title == "Client Invoice"){
      this.haCreateRole = true
      this.getClientInvoice();
    }
    else{
      this.getSupplierInvoice();
      if(this.role == "vendor")
        this.haCreateRole = true;
      else
        this.haCreateRole = false;
    }
  }
  create(){
    let url = this.naviatater.url;
    url = url.replace(/;title[\s\S]+/g,"");
    let creatingUrl = url + "/invoice-create";
    this.naviatater.navigate([creatingUrl,{title:this.title}]);
  }
  async getClientInvoice(){
    this.invoices = await this.invoiceService.getClientInvoice(this.projectId);     
    if(this.financeTable){
      this.financeTable.updateFinance(this.invoices);
    }
  }
  async getSupplierInvoice(){
    this.invoices = await this.invoiceService.getSupplierInvoices(this.projectId);     
    if(this.financeTable){
      this.financeTable.updateFinance(this.invoices);
    }
  }
}
