import { Injectable } from '@angular/core';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class NetRateService {

  constructor(
    private apiService:APIService
  ) { }
  async createNetRate(netRate){
    return await this.apiService.CreateNetRate(netRate);
  }
  async updateNetRate(netRate){
    return await this.apiService.UpdateNetRate(netRate);
  }
  async deleteNetRate(id){
    return await this.apiService.DeleteNetRate({id:id});
  }
  async getClientNetRate(clientId){
    let netRate = await this.apiService.GetClientNetRate(clientId);
    return netRate.items;
  }
}