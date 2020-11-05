import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-finance-invoice-table',
  templateUrl: './finance-invoice-table.component.html',
  styleUrls: ['./finance-invoice-table.component.scss'],
})
export class FinanceInvoiceTableComponent implements OnInit {

  constructor(
    private dataService:DataService
  ) { }
  headerDataSource = new MatTableDataSource<any>();
  headerDisplayedColumns: string[] = [
    'key',
    'project-invoice'
  ];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'project-code',
    'project-client-name',
    'invoice-no-name',
    'invoice-date',
    'invoice-customer-name',
    'invoice-reference',
    'invoice-description',
    'invoice-qty',
    'invoice-usd-price-unit',
    'invoice-thb-price-unit',
    'invoice-unit',
    'invoice-thb-amount',
    'invoice-vat',
    'invoice-wht',
    'invoice-total-amount',
  ];
  ngOnInit() {
  }
  changeAWSdate(strDate){
    strDate = strDate.replace(/T[\s\S]*/g,"");
    let date = strDate.split("-");
    let newDateStr = date[1] + "/" + date[2] + "/" +date[0];
    return newDateStr;
  }
  updateProjects(projects){
    let allItems = [];
    projects.forEach( project=> {
      let invoices = project.invoices.items;
      invoices.forEach(invoice => {
        let items =  invoice.items.items;
        items.forEach(item => {
          item.projectCode = project.projectCode;
          item.clientName = "";
          if(project.client){
            item.clientName = project.client.profile.givenName + project.client.profile.familyName;
            item.invoiceCustomerName = project.client.profile.customerCode;
          }
          item.projectId = project.id;
          item.projectName = project.name;
          item.invoiceId = invoice.id;
          item.invoiceNo = invoice.documentNo;
          item.reference =  invoice.reference
          item.invoiceDate = this.changeAWSdate(invoice.date);
          item.itemServices = item.services;
          item.thbPricePerUnit = this.getForexChangeAmount(item.currency,item.pricePerUnit); 
          item.thbAmount = this.getEstimatedAmount(item.currency,item.amount);
          item.vat = (Number(item.thbAmount) * 0.07).toFixed(2);
          item.wht = (Number(item.thbAmount) * 0.03).toFixed(2);
          item.totalCharge = (Number(item.thbAmount) * 1.04).toFixed(3);
          allItems.push(item);
        });
      });
    });
    this.dataSource.data = allItems;
  }
  getRate(currency){
    if(!currency)
      return 0;
    let rateObj = this.dataService.currencyRate;
    return Number (rateObj[currency]);
  }
  getForexChangeAmount(currency,total){
    let fxRate = this.getRate(currency);
    let amount = fxRate * Number(total);
    return amount.toFixed(2);
  }
  getEstimatedTotal(currency,total){
    return (Number(this.getEstimatedAmount(currency,total)) * 1.04).toFixed(2);
  }
  getEstimatedVat(currency,total){
    return (Number(this.getEstimatedAmount(currency,total)) * 0.07).toFixed(2);
  }
  getEstimatedWht(currency,total){
    return (Number(this.getEstimatedAmount(currency,total)) * 0.03).toFixed(2);
  }
  getEstimatedAmount(currency,total){
    let fxRate = this.getRate(currency);
    let amount = fxRate * Number(total);
    if(amount * 0.25 > 500) 
      amount = amount -  500;
    else
      amount = amount * 0.75;
    return amount.toFixed(2);
  }
  getVatAmount(currency,total){
    let amount = this.getEstimatedAmount(currency,total);
    return (Number(amount) * 0.07).toFixed(2);
  }
  getWhtAmount(currency,total){
    let amount = this.getEstimatedAmount(currency,total);
    return (Number(amount) * 0.03).toFixed(2);
  }
  getTotalChargeAmount(currency,total){
    let amount = this.getEstimatedAmount(currency,total);
    return (Number(amount) * 1.04).toFixed(2);
  }
  getPorjectRowSpan(index){
    let allItems = this.dataSource.data;
    let rowSpan = 0;
    if(index == 0 || allItems[index - 1].projectId != allItems[index].projectId ){
      let currentProjectId = allItems[index].projectId;  
      for(let i = index;i < allItems.length; i++ ){
          if(allItems[i].projectId ==  currentProjectId){
            rowSpan ++;
          }
          else break;
      }
    }
    return rowSpan;
  }
  getInvoiceRowSpan(index){
    let allItems = this.dataSource.data;
    let rowSpan = 0;
    if(index == 0 || allItems[index - 1].invoiceId != allItems[index].invoiceId ){
      let currentInvoiceId = allItems[index].invoiceId;  
      for(let i = index;i < allItems.length; i++ ){
          if(allItems[i].invoiceId ==  currentInvoiceId){
            rowSpan ++;
          }
          else break;
      }
    }
    return rowSpan;
  }
}
