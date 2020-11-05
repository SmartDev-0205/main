import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import { TemplateParseResult } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  constructor(
    private apiService:APIService
  ) { }
  updateSegment(segment){
    return this.apiService.UpdateSegment(segment);
  }
  createSegmenet(segment){
    return this.apiService.CreateSegment(segment);
  }
  deleteSegment(id){
    return this.apiService.DeleteSegment({id:id});
  }
  async jobSegments(jobId){
    let tempSegments = await this.apiService.GetSegmetsByJobId(jobId);
    return tempSegments.items;
  }


}
