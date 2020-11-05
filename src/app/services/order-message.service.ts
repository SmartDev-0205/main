import { Injectable } from '@angular/core';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class OrderMessageService {

  constructor(
    private apiService:APIService
  ) { }
  async createOrderMessage(message){
    return await this.apiService.CreateOrderMessage(message);
  }
  async deleteOrderMessage(id){
    return await this.apiService.DeleteOrderMessage({id:id});
  }
  async getOrderMessage(orderId){
    let messages =await this.apiService.GetMessageByOrderId(orderId);
    return messages.items;
  }
}
