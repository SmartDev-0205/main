import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class TranscribeService {

  private accessKeyId = "";
  private secretAccessKey = "";
  private region = "";
  constructor(
    private dataService:DataService
  ) { 
    this.accessKeyId = dataService.accessKeyId;
    this.secretAccessKey = dataService.secretAccessKey;
    this.region = dataService.region;
  }
  transcribe(audioFile){
    
  }
  async uploadToStorage(audiofile){
    const bucket = new S3(
      {
          accessKeyId: this.accessKeyId,
          secretAccessKey: this.secretAccessKey,
          region: this.region
      }
    );
    const contentType = audiofile.type;
    const params = {
      Bucket: 'plz-transcribe',
      Key: audiofile.name,
      Body: audiofile,
      ACL: 'public-read',
      ContentType: contentType
    };
    bucket.upload(params,(err,data)=>{
      console.log
    })
  }
}
