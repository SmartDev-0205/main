import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FinanceQuotationTableComponent } from 'src/app/components/finance-quotation-table/finance-quotation-table.component';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.page.html',
  styleUrls: ['./quotation.page.scss'],
})
export class QuotationPage implements OnInit {
  @ViewChild(FinanceQuotationTableComponent, { static: true}) quotationTable: FinanceQuotationTableComponent;
  constructor(
    private dataService:DataService
  ) { }
  private projects;
  ngOnInit() {
    this.dataService.projectsForFinance.subscribe(currentProjects=>{
      if(currentProjects){
        this.projects = currentProjects;
        this.quotationTable.updateProjects(this.projects);
      }
    })
  }

}
