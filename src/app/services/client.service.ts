import { Injectable } from '@angular/core';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(
    private apiService:APIService
  ) { }
  async getAllClient(){
    let clientTemp = (await this.apiService.GetUsersByUserRole("client"));
    return clientTemp.items;
  }
  async getAllMangers(){
    let managerTemp = (await this.apiService.GetUsersByUserRole("manager"));
    return managerTemp.items;
  }
  async getManagerClients(mangerId){
    let clientsObj = await this.apiService.GetClientsByManagerId(mangerId);
    return clientsObj.items;
  }
  async createManagerClient(client){
    return this.apiService.CreateClient(client);
  }
  async deleteMangerClient(id){
    return this.apiService.DeleteClient({id:id});
  }
  async getClient(clientId){
    let client = await this.apiService.GetClient(clientId);
    return client;
  }
  async updateClient(client){
    return this.apiService.UpdateClient(client);
  }

  
}
