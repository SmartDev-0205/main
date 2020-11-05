import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private serverUrl = "";
  constructor(
    private dataService:DataService,
    private http:Http
  ) { 
    this.serverUrl = this.dataService.searchUrl;
  }
  async concordenceSearch(transId,content){
    if(transId == "")
      return;
    let postData = {
      transId:transId,
      content:content
    }
    let response = await this.http.post(this.serverUrl,postData).toPromise();
    let status = response.status;
    if(status == 201){
      let strBody = response['_body'];
      let body = JSON.parse(strBody);
      return body;
    }
    else
      return {};
  }
}
