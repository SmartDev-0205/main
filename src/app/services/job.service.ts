import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import {Job,SmallTask,Segment} from 'src/app/interfaces/project.interface'
import { LoadingService } from './loading.service';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import API, {graphqlOperation} from "@aws-amplify/api";
import { APIService,ModelSortDirection} from '../API.service';
import {Storage} from "aws-amplify";
import { saveAs } from 'file-saver';
import { Http } from '@angular/http';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  private projectId = "";
  private projectDue = "";
  private projectTarget = "";
  private projectServices = [];
  constructor(
    public apiService:APIService,
    private loading :LoadingService,
    private router :Router,
    private http:Http,
    private dataService:DataService
  ) { 
  }
  readUploadedFileAsText = (inputFile) => {
    const temporaryFileReader = new FileReader();
  
    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsText(inputFile);
    });
  };
  private async uploadProjectFile(jobId: string, service:string, file: any) {
    return await Storage.put(
      `users/${jobId}/${service}/${file.name}`,
      file
    );
  }
  public async downloadProjectFile(fileKey: string,filename:string,targets) {
    console.log(targets);
    const url: string = await Storage.get(fileKey) as string;
    const loadingDialog = await this.loading.create({
      message: "Downloading..."
    })
    this.http.get(url,{responseType:0}).subscribe(data=>{
      loadingDialog.dismiss();
      let text = data['_body'];
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(text, "text/xml"); 
      let mrks = xmlDoc.getElementsByTagName("mrk");
      let mrkLength =  mrks.length;
      let index = -1;
      for(let i = 0 ; i < mrkLength ; i++){
        let mrk = mrks[i];
        if(mrk.parentElement.nodeName == "seg-source")
          continue;
        index ++ ;
        let target = targets[index];
        if(target){
          target = target.replace(/&#38;/g, '&')
          target = targets[index].replace(/&/g, '&#38;')
        }
        else 
          target = "";
        mrk.innerHTML = target;
      }
      let newXmlText = xmlDoc.documentElement.outerHTML;
      let header = '<?xml version="1.0" encoding="utf-8"?>' + '\n';
      newXmlText = newXmlText.replace(/&#38;/g, '&');
      let file = new Blob([header + newXmlText], { type: 'text/csv;charset=utf-8' });
      saveAs(file,filename);   
    })
  }

  public async downloadOriginalFile(fileKey: string,filename:string) {
    const url: string = await Storage.get(fileKey) as string;
    const loadingDialog = await this.loading.create({
      message: "Downloading..."
    })
    this.http.get(url,{responseType:3}).subscribe(data=>{
      loadingDialog.dismiss();
      saveAs(data['_body'],filename);   
    })
  }

  public async removeProjectFile(fileKey:string){
    Storage.remove(fileKey)
    .then(result => console.log(result))
    .catch(err => console.log(err));
  }
  public async addFiles(projectId,jobs,servies,targetLanguages,sourceLanguage){
    this.projectServices = servies;
    this.projectId = projectId
    let createdJobs = [];
    let sourceLanguageCode = this.dataService.getLanguageCodeFromLanguage(sourceLanguage);
    let targetLanguageCodes = this.dataService.getLanguageCodesFromLanguages(targetLanguages);
    for (let i = 0 ; i <  jobs.length ; i ++){
      let job = jobs[i];
      let file = job.file;
      let jobDue = "";
      let jobTarget = "";
      if(job.due)
        jobDue = job.due;
      let fileContent = await this.readUploadedFileAsText(file);
      for (let j = 0 ; j <  targetLanguageCodes.length ; j ++){
        jobTarget = targetLanguageCodes[j];
        let createdJob = await this.addJob(file.name,fileContent,jobDue,jobTarget,sourceLanguageCode);  
        let keyResult = await this.uploadProjectFile(createdJob.id,"original",file);
        createdJobs.push(createdJob);
      }
    }
    return createdJobs;
  }
  async addJob(filename,fileContent,jobDue,jobTarget,sourceLanguageCode){
    // get total words counts
    let wordsCount = 0;
    // get job parameters
    let sources = [];
    let targets = [];
    let words = [];
    sources = this.getTexts(fileContent,"seg-source");
    for (let i = 0 ; i < sources.length; i ++){
      let source = sources[i];
      let wordcount = source.split(' ').length;
      wordsCount+= wordcount;
      words.push(wordcount);
    }
    targets = this.getTexts(fileContent,"target");
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(fileContent,"text/xml");
    let groups = xmlDoc.getElementsByTagName("sdl:seg");
    let groupLength = groups.length;
    for(let i = 0 ; i < groupLength ; i ++){
      let node  = groups[i];
      let percent = node.getAttribute("percent");
      let status = node.getAttribute("conf");
    }
    // create job with projectId
    let progreses = [];
    for (let j = 0 ;j < this.projectServices.length ; j ++ ){
      let progres = {
        serviceName:this.projectServices[j],
        progress:"0%"
      }
      progreses.push(progres);
    }
    let newJob = {
      projectId:this.projectId,
      filename:filename,
      wordCount:wordsCount,
      due:jobDue,
      target:jobTarget,
      process:progreses,
      source:sourceLanguageCode
    }
    let createdJob =  await this.apiService.CreateJob(newJob);
    if(!createdJob)
      return;
    let createdJobId = createdJob.id;
    // creat segment with created task
    for (let i = 0 ; i < sources.length ; i ++){
      let segmentServices = [];
      for (let j = 0 ;j < this.projectServices.length ; j ++ ){
        let segmentService = {
          serviceName:this.projectServices[j],
          target:targets[i],
          freelancerId:"Empty",
          status:this.projectServices[j],
          freelancerEmail:"Empty"
        }
        segmentServices.push(segmentService);
      }
      let segment = {
        jobId:createdJobId,
        source:sources[i],
        target:targets[i],
        status:this.projectServices[0], 
        segmentService:segmentServices
      }
      this.apiService.CreateSegment(segment);
    }
    return createdJob;
  }
  public getTexts(fileContent,type){
    let texts = []
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(fileContent,"text/xml");
    let groups = xmlDoc.getElementsByTagName("mrk");
    let groupLength = groups.length;
    for(let i = 0 ; i < groupLength ; i ++){
      let node  = groups[i]
      let parenet_tag = node.parentNode.nodeName;
      if(parenet_tag == type){
        let source_str = "";
        let childrens = node.childNodes;
        let child;
        for (let j = 0 ; j < childrens.length;j ++){
          child = childrens[j];
          if(child.nodeName == "#text"){
            source_str += child.data;
          }
          else{
            let child2 = child.childNodes;
            let child3;
            for (let k = 0 ;  k < child2.length;k ++){
              child3= child2[k];
              if(child3.nodeName == "#text")
                source_str += child3.data;
            }
          }
        }
        texts.push(source_str);
      }
    }
    return texts
  }
  public async getJob(jobId){
    let job = await this.GetJob(jobId);
    return job;
  }
  public async updateSegment(segment){
    let updatedSegment = this.apiService.UpdateSegment(segment);
    return updatedSegment;
  }

  async deleteJob(jobId){
    let deletedJob = await this.apiService.DeleteJob({id:jobId});
    let jobFileKey = `users/${jobId}/original/${deletedJob.filename}`;
    this.removeProjectFile(jobFileKey);
    if(!deletedJob)
      return;
    if(deletedJob.tasks){
      let tasks = deletedJob.tasks.items;
      for (let i = 0 ; i < tasks.length ; i ++ )
      this.apiService.DeleteSmallTask({id:tasks[i].id})
    }
    if(deletedJob.segments){
      let segments = deletedJob.segments.items;
      for (let i = 0 ; i < segments.length ; i ++ )
        this.apiService.DeleteSegment({id:segments[i].id});
    }
  }
  async updateJob(job){
    return await this.apiService.UpdateJob(job);
  }

  async GetJob(id: string){
    const statement = `query GetJob($id: ID!) {
        getJob(id: $id) {
          __typename
          id
          projectId
          filename
          service
          wordCount
          tasks {
            __typename
            items {
              __typename
              id
              jobId
              job {
                __typename
                nextToken
              }
              projectId
              wordsCount
              serviceName
              freelancerId
              freelancer {
                __typename
                id
                role
                profile {
                  __typename
                  givenName
                  familyName
                  email
                }
                createdAt
                updatedAt
              }
              tasks {
                __typename
                start
                end
                stringOfTask
              }
              rate
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          due
          target
          segments {
            __typename
            items {
              __typename
              id
              jobId
              source
              target
              status
              segmentService {
                __typename
                serviceName
                target
                freelancerId
                status
                freelancerEmail
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          process {
            __typename
            serviceName
            progress
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return response.data.getJob;
  }

}
