import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import { collectExternalReferences } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(
    private apiService:APIService
  ) { }
  async createCollection(collection){
    return await this.apiService.CreateCollection(collection);    
  }
  async updateCollection(collection){
    return await this.apiService.UpdateCollection(collection);    
  }
  async deleteCollection(id){
    return await this.apiService.DeleteCollection({id:id});    
  }
  async getManagerCollection(id){
    let collectionResponse = await this.apiService.GetManagerCollection(id);
    let collectionArray = collectionResponse.items;
    return collectionArray;
  }
}
