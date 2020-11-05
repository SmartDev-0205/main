import { Component, OnInit } from '@angular/core';
import {SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { relative } from 'path';
import { DataService } from 'src/app/services/data.service';
import Amplify from 'aws-amplify';
@Component({
  selector: 'app-finance-quotation-table',
  templateUrl: './finance-quotation-table.component.html',
  styleUrls: ['./finance-quotation-table.component.scss'],
})
export class FinanceQuotationTableComponent implements OnInit {

  
  constructor(
    private dataService:DataService
  ) { }
  headerDataSource = new MatTableDataSource<any>();
  headerDisplayedColumns: string[] = [
    'key',
    'project-quotation'
  ];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'project-code',
    'project-client-name',
    'quotation-no-name',
    'quotation-data-name',
    'quotation-customer-code',
    'quotation-customer-name',
    'quotation-country',
    'quotation-service-type',
    'quotation-description',
    'quotation-duration',
    'quotation-qty',
    'quotation-unit',
    'quotation-rate',
    'quotation-currency',
    'quotation-sales-amount',
    'quotation-fxrate',
    'quotation-record-sales-amount',
    'quotation-vat',
    'quotation-total-charge',
    'quotation-project-manager-contact',
    'quotation-credit-term',
    'quotation-collection-term',
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
      let quotes = project.quotes.items;
      quotes.forEach(quote => {
        let items =  quote.items.items;
        items.forEach(item => {
          item.projectCode = project.projectCode;
          item.clientName = "";
          if(project.client){
            item.clientName = project.client.profile.givenName + project.client.profile.familyName;
            item.quotationCustomerCode = project.client.profile.customerCode;
          }
          item.projectId = project.id;
          item.projectName = project.name;
          item.quoteId = quote.id;
          item.quotationNo = quote.documentNo;
          item.quotationDate = this.changeAWSdate(quote.date);
          item.quotationCountry = project.client.profile.country;
          item.quotationServiceType = item.services;
          item.quotationWorkDuration = this.changeAWSdate(quote.dueDate);
          item.vat = (Number(item.amount) * 0.07).toFixed(3);;
          item.wht = (Number(item.amount) * 0.03).toFixed(3);
          item.totalCharge = (Number(item.amount) * 1.04).toFixed(3);
          item.projectManagerContact = "";
          if(project.manager){
            item.projectManagerContact = project.manager.profile.givenName + project.manager.profile.familyName;
          }
          item.creditTerm = quote.credit;
          item.collectionTerm = quote.collectionTerm;
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
  getQuoteRowSpan(index){
    let allItems = this.dataSource.data;
    let rowSpan = 0;
    if(index == 0 || allItems[index - 1].quoteId != allItems[index].quoteId ){
      let currentQuoteId = allItems[index].quoteId;  
      for(let i = index;i < allItems.length; i++ ){
          if(allItems[i].quoteId ==  currentQuoteId){
            rowSpan ++;
          }
          else break;
      }
    }
    return rowSpan;
  }
}
