import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  private projectId;
  private selectedStr = "";
  private title = "";
  private role = "";
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit() {
    this.selectedStr = "client-quotation";
    this.title = "Client Quotation";
    this.getProjectId();
    this.getRole();
  }
  async getRole(){
    await this.userService.awaitRole();
    this.role = this.userService.role$.getValue();
  }
  
  getProjectId(){
    let url = window.location.href;
    let temp = url.match('project/([^/]*)/transaction');
    if (temp.length < 1)
      this.projectId = "";
    else
      this.projectId = temp[1];
  }
  quoteSelect(){
    this.title = "Client Quotation";
    this.router.navigate(['/project/' + this.projectId + '/transaction/quote',{title:this.title}]);
    this.selectedStr = "client-quotation";
  }
  invoiceSelect(){
    this.selectedStr = "client-invoice";
    this.title = "Client Invoice";
    this.router.navigate(['/project/' + this.projectId + '/transaction/invoice',{title:this.title}]);
  }
  supplierPuchaseSelect(){
    this.title = "Supplier Purchase Order";
    this.router.navigate(['/project/' + this.projectId + '/transaction/quote',{title:this.title}]);
    this.selectedStr = "supplier-pucharorder";
  }
  supplierInvoice(){
    this.title = "Supplier Invoice";
    this.router.navigate(['/project/' + this.projectId + '/transaction/invoice',{title:this.title}]);
    this.selectedStr = "supplier-invoice";
  }
  summaryPayment(){
    this.selectedStr = "paymnet";
    this.router.navigate(['/project/' + this.projectId + '/transaction/payments']);
  }
  summaryBalance(){
    this.selectedStr = "balance";
  }

  getClientFinaceRole(){
    if(this.role == "manager" || this.role == "client")
      return true
    else
      return false;

  }
  getSupplierFianceRole(){
    if(this.role == "manager" || this.role == "vendor")
      return true
    else
      return false;
  }
  getPaymentRole(){
    if(this.role == "manager")
      return true
    else
      return false;
  }

}
