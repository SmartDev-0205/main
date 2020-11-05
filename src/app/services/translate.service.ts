import { Injectable } from '@angular/core';
import {} from "aws-amplify";
import { DataService } from './data.service';
import * as AWS from "aws-sdk"
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private accessKeyId = "";
  private secretAccessKey = "";
  private region = "";
  private translateServerUrl = "";
  constructor(
    private dataService:DataService,
    private http:Http
  ) { 
    this.accessKeyId = dataService.accessKeyId;
    this.secretAccessKey = dataService.secretAccessKey;
    this.region = dataService.region;
    this.translateServerUrl = this.dataService.serverUrl + 'translate/'
  }

  async translateAWS(source,target,content){
    if (!content)
      return ;
    try {
      let translate = new AWS.Translate({
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey,
        region: this.region 
      });
      const translateParams: AWS.Translate.Types.TranslateTextRequest = {
      Text: content,
      SourceLanguageCode: source,
      TargetLanguageCode: target,
      };
      let result = await translate.translateText(translateParams).promise();
      return result;  
    } catch (error) {
      console.log("error");
    }
  }
  async translateGoogle(source,target,content){
    if(!content) 
      return '';
    const formData = new FormData();
    formData.append('type',"text-translate");
    formData.append('source_lang',source);
    formData.append('target_lang',target);
    formData.append('source',content);
    // console.log(this.translateServerUrl,formData);
    let response = await this.http.post(this.translateServerUrl,formData).toPromise();
    let result = response['_body'];
    console.log(result)
    return result;
  }
}
