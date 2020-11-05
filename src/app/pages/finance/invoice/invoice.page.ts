import { Component, OnInit, ViewChild } from '@angular/core';
import { FinanceInvoiceTableComponent } from 'src/app/components/finance-invoice-table/finance-invoice-table.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  @ViewChild(FinanceInvoiceTableComponent, { static: true}) invoiceTable: FinanceInvoiceTableComponent;
  constructor(
    private dataService:DataService
  ) { }
  private projects;
  ngOnInit() {
    this.dataService.projectsForFinance.subscribe(currentProjects=>{
      if(currentProjects){
        this.projects = currentProjects;
        this.invoiceTable.updateProjects(this.projects);
      }
    })
  }
}
