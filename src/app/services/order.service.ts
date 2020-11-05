import { Injectable } from '@angular/core';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private apiService:APIService
  ) { }
  async createOrder(order){
    return await this.apiService.CreateOrder(order)
  }
  async getClientOrder(clientId){
    let response = await this.apiService.GetClientOrder(clientId);
    return response.items;
  }
  async deleteOrder(orderId){
    return await this.apiService.DeleteOrder({id:orderId});
  }
}
