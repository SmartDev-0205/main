import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { OrderPaymentService } from 'src/app/services/order-payment.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
import { PaymentDialogComponent } from 'src/app/shared/dialogs/payment-dialog/payment-dialog.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  private addPaymentFlag = false;
  dataSource = new MatTableDataSource<any>();
  private payCurrency = "USD";
  private newPaymentValue = 0;
  private paymentDescription = "";
  currencyControl = new FormControl();
  allCurrencies = [];
  filteredOptions: Observable<any[]>;
  payments$: BehaviorSubject<Array<any>> = new BehaviorSubject(undefined);
  displayedColumns: string[] = [
    'date',
    'description',
    'status',
    'amount',
    'action',
  ];
  private currentOrder;
  constructor(
    private orderPaymentService: OrderPaymentService,
    private dataService: DataService,
    private matDialog:MatDialog,
    private paymentService:OrderPaymentService
  ) { }
  ngOnInit() {
    this.allCurrencies = this.dataService.allCurrencies;
    this.filteredOptions = this.currencyControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCurrencies.filter(option => option.toLowerCase().includes(filterValue));
  }
  updateOrder(order) {
    this.currentOrder = order;
    let orderId = this.currentOrder.id;
    this.orderPaymentService.getOrderPaymentById(orderId).then(payments => {
      this.payments$.next(payments);
    })
  }
  addPayment(){
    this.addPaymentFlag = true;
  }
  initAddPaymentValues(){
    this.newPaymentValue = 0;
    this.paymentDescription = "";
    this.payCurrency = "USD";
  }
  pay(){
    console.log("paied")
    this.addPaymentFlag = false;
    // PaymentDialogComponent.init
    const dialogRef = this.matDialog.open(PaymentDialogComponent, {
      width: '500px',
      data:{currency:this.payCurrency,value:this.newPaymentValue,description:this.paymentDescription}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if(!result)
        return;
      if(result == "cancel")
        return;
      else{
        let date = new Date().toLocaleDateString();
        let orderId = this.currentOrder.id;
        let createdTime = new Date();
        let createdTimeString = createdTime.toISOString();
        let orderPayment = {
          orderId:orderId,
          description:result.description,
          date:date,
          status:"paied",
          amount:result.amount + " " + result.result,
          createdAt:createdTimeString
        }
        console.log("order payment",orderPayment);
        this.orderPaymentService.createOrderePayment(orderPayment);
      }
    });
  }
  cancel(){
    console.log("canceled")
    this.addPaymentFlag = false;
    this.initAddPaymentValues();
  }
}
