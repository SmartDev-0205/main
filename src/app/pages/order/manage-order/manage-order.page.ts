import { Component, OnInit, ViewChild } from '@angular/core';
import { Tab } from 'docx';
import { APIService } from 'src/app/API.service';
import { ChatComponent } from 'src/app/components/chat/chat.component';
import { PaymentComponent } from 'src/app/components/payment/payment.component';
import { OrderMessageService } from 'src/app/services/order-message.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-manage-order',
  templateUrl: './manage-order.page.html',
  styleUrls: ['./manage-order.page.scss'],
})
export class ManageOrderPage implements OnInit {
  @ViewChild(ChatComponent, { static: false }) chatComponent: ChatComponent;
  @ViewChild(PaymentComponent, { static: false }) paymentComponent: PaymentComponent;
  private currentUserId = "";
  private currentIndex = 0;
  private orders = [];
  private selectedOrders = [];
  private currentMessages = [];
  private currentOrder;
  private seachOrderContent = "";
  constructor(
    private userService: UserService,
    private orderService: OrderService,
    private orderMessageService: OrderMessageService,
    private apiService: APIService
  ) { }

  ngOnInit() {
    this.userService.id.subscribe(currentId => {
      if (currentId) {
        this.currentUserId = currentId;
        this.orderService.getClientOrder(this.currentUserId).then(orders => {
          if (orders) {
            let bar = new Promise((resolve, reject) => {
              orders.forEach(async (order, index, array) => {
                let messages = await this.orderMessageService.getOrderMessage(order.id);
                order["messages"] = messages;
                if (index === array.length - 1) resolve();
              })
            });
            bar.then(() => {
              this.orders = orders;
              this.selectedOrders = orders;
              if (orders.length > 0) {
                this.select(0);
              }
            });
          }
        })
      }
    })
    this.apiService.OnCreateOrderListener.subscribe(order => {
      order["messages"] = [];
      this.orders.push(order);
    })
  }

  search() {
    this.selectedOrders = this.orders.filter(order => order.orderName.toLowerCase().includes(this.seachOrderContent))
  }
  ionViewWillEnter() {
    if (this.orders.length > 0) {
      this.select(0);
    }
  }

  async getOrderMessages(orderId) {
    return await this.orderMessageService.getOrderMessage(orderId);
  }
  select(i) {
    this.currentOrder = this.selectedOrders[i];
    this.currentIndex = i;
    if (this.chatComponent) {
      this.chatComponent.updateOrderId(this.currentOrder.id);
      this.chatComponent.updateOrderMessage(this.currentOrder["messages"])
      setTimeout(() => {
        this.chatComponent.updateContentScroll();
      }, 100);
    }
  }
  onTabChanged(event) {
    if (event.index == 2) {
      setTimeout(() => {
        this.chatComponent.updateOrderId(this.currentOrder.id);
        this.chatComponent.updateOrderMessage(this.currentOrder.messages)
        setTimeout(() => {
          this.chatComponent.updateContentScroll();
        }, 100);
      }, 100);

    }
    else if (event.index == 1) {
      // payment tab
      setTimeout(() => {
        this.paymentComponent.updateOrder(this.currentOrder);
      }, 100);
    }
  }
}
