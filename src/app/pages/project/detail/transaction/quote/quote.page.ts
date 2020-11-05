import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from 'src/app/services/quote.service';
import { FinanceTableComponent } from 'src/app/components/finance-table/finance-table.component';
import { UserService } from 'src/app/services/user.service';
import { title } from 'process';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage implements OnInit {
  @ViewChild(FinanceTableComponent, { static: true}) financeTable: FinanceTableComponent;
  private title = "";
  private quotes = [];
  private projectId = "";
  private role = "";
  private titleToShow = "";
  private hasCreateRole = false;
  constructor(
    private quoteService:QuoteService,
    private router:ActivatedRoute,
    private naviatater:Router,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.title = this.router.snapshot.params['title'];
    if(!this.title)
      this.title = "Client Quotation";
    this.titleToShow = this.title;
    let url = window.location.href;
    let temp = url.match('project/([^/]*)/transaction');
    if (temp.length < 1)
      this.projectId = "";
    else
      this.projectId = temp[1];
    this.getRole();
  }
  async getRole(){
    await this.userService.awaitRole();
    this.role = this.userService.role$.getValue();
    if(this.title == "Client Quotation" && this.role == "vendor"){
      this.title = "Supplier Purchase Order";
      this.titleToShow = "Quotation";
    }
    this.getCreateRole();
    if(this.title == "Client Quotation")
      this.getClientQuotes();
    else
      this.getSupplierQuotes();
  }
  getCreateRole(){
   if(this.role == "manager")
      this.hasCreateRole = true;
  }
  create(){
    let url = this.naviatater.url;
    url = url.replace(/;title[\s\S]+/g,"");
    let creatingUrl = url + "/quote-create";
    this.naviatater.navigate([creatingUrl,{title:this.title}]);
  }

  async getClientQuotes(){
    this.quotes = await this.quoteService.getClientQuote(this.projectId);     
    if(this.financeTable){
      this.financeTable.updateFinance(this.quotes);
    }
  }
  async getSupplierQuotes(){
    this.quotes = await this.quoteService.getSupplierQuotes(this.projectId);     
    if(this.financeTable){
      this.financeTable.updateFinance(this.quotes);
    }
  }

}
