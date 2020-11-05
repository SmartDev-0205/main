import { Injectable } from '@angular/core';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor(
    private apiService:APIService
   ) { }
   async createRate(rate){
     return await this.apiService.CreateRate(rate);
   }
   async updateRate(rate){
     return await this.apiService.UpdateRate(rate);
   }
   async deleteRate(id){
     return await this.apiService.DeleteRate({id:id});
   }
   async getManagerRate(managerId){
     let rates = await this.apiService.GetManagerClientRates(managerId);
     return rates.items;
   }
   async getClientRate(clientId){
     let rates = await this.apiService.GetClientRates(clientId);
     return rates.items;
   }
  async getRate(id){
    let rate = await this.apiService.GetRate(id);
    return rate;
  }
}
