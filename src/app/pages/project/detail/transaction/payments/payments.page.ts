import { Component, OnInit, ViewChild } from '@angular/core';
import { FinanceTableComponent } from 'src/app/components/finance-table/finance-table.component';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  @ViewChild("clientFiance", { static: true}) clientFinanceTables: FinanceTableComponent;
  @ViewChild("vendorFiance", { static: true}) vendorFianceTable: FinanceTableComponent;
  private projectId;
  constructor(
    private invoiceService:InvoiceService
  ) { }

  ngOnInit() {
    let url = window.location.href;
    let temp = url.match('project/([^/]*)/transaction');
    if (temp.length < 1)
      this.projectId = "";
    else
      this.projectId = temp[1];
    this.getClientInvoice();
    this.getSupplierInvoice();
  }
  async getClientInvoice(){
    let invoices = await this.invoiceService.getClientInvoice(this.projectId);     
    if(this.clientFinanceTables){
      this.clientFinanceTables.updateFinance(invoices);
    }
  }
  async getSupplierInvoice(){
    let invoices = await this.invoiceService.getSupplierInvoices(this.projectId);     
    if(this.vendorFianceTable){
      this.vendorFianceTable.updateFinance(invoices);
    }
  }
    
}
