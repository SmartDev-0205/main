import { Injectable } from '@angular/core';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class OrderPaymentService {
  constructor(
    private apiService: APIService
  ) { }
  async createOrderePayment(payment) {
    return await this.apiService.CreateOrderPayment(payment);
  }
  async deleteOrderPayment(id) {
    return await this.apiService.DeleteOrderPayment({ id: id });
  }
  async getOrderPaymentById(orderId) {
    let payment = await this.apiService.GetOrderPaymentByOrderId(orderId);
    return payment.items;
  }
}
