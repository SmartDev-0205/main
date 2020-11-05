import { Injectable } from '@angular/core';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private apiService:APIService
  ) { }
  async createItem(item){
    return await this.apiService.CreateItem(item);
  }
  async updateUtem(item){
    return await this.apiService.UpdateItem(item);
  }
  async deleteItem(id){
    return await this.apiService.DeleteItem({id:id});
  }
}
