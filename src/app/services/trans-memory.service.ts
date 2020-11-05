import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { APIService } from '../API.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TransMemoryService {

  private uploadUrl = "";
  private deleteUrl = ""
  constructor(
    private apiService:APIService,
    private dataService:DataService,
    private http:Http
  ) {
    this.uploadUrl = this.dataService.searchUrl + "upload/";
    this.deleteUrl = this.dataService.searchUrl + "upload/delete";
   }
  async getTranslationMemory(id){
    let transMemory = await this.apiService.GetTransMemory(id);
    return transMemory;
  }
  async createTransMemory(newTransMemory){
    return await this.apiService.CreateTransMemory(newTransMemory);
  }
  async deleteTransMemeory(id){
    return await this.apiService.DeleteTransMemory({id:id})
  }
  async getManagerTransMemory(managerId){
    let managerMemory = await this.apiService.GetManagerMemory(managerId);
    return managerMemory.items;
  }
  async uploadFile(trandId,file){
    const formData = new FormData();
    formData.append('file',file);
    formData.append('transId',trandId);
    let response = await this.http.post(this.uploadUrl,formData).toPromise();
    let status = response.status;
    if(status == 201){
      return true;
    }
    else
      return false;
  }

  async deleteFile(trandId){
    let postData = {
      transId:trandId,
    }
    let response = await this.http.post(this.deleteUrl,postData).toPromise();
    let status = response.status;
    if(status == 201){
      return true;
    }
    else
      return false;
  }

}
