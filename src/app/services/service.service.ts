import { Injectable } from '@angular/core';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private apiService:APIService
  ) { }
  async createService(service){
    return this.apiService.CreateService(service);
  }
  async deleteService(id){
    return this.apiService.DeleteService({id:id});
  }
  async getManagerServices(managerId){
    let managerServices = await this.apiService.GetManagerServices(managerId);
    return managerServices.items; 
  }
}
