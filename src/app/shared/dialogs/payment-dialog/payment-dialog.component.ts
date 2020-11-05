import { Component, OnInit,Inject} from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss'],
})
export class PaymentDialogComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  private payment={
    currency:"",
    amount:"",
    description:""
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<PaymentDialogComponent>,
  ) { 
    console.log(data)
    this.payment.currency = data.currency;
    this.payment.amount = data.value;
    this.payment.description = data.description;
    this.initConfig(data.description,data.value,data.currency);
  }
  private showSuccess = false;
  close(result){
    this.dialogRef.close(result);
  }
  ngOnInit() {
  }
  private initConfig(description,amount,currency): void {
    this.payPalConfig = {
    currency: currency,
    clientId: 'AW_SCPnY7HswGZGk634-QnKZLas8Nh12Wl4lMRE0lctCshcstyjHwpQVyUBIYt2yeen5lyJOToGO2Ng1',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount,
            breakdown: {
              item_total: {
                currency_code: currency,
                value: amount
              }
            }
          },
          items: [
            {
              name: description,
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: currency,
                value: amount,
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      this.dialogRef.close(this.payment);
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then(details => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      this.dialogRef.close("cancel");
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      this.dialogRef.close("cancel");
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }

}
