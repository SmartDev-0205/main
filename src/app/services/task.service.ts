import { Injectable } from '@angular/core';
import { APIService } from '../API.service';
import { userInfo } from 'os';
import { async } from '@angular/core/testing';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private apiService:APIService
    ) { 
    }
    async createTask(task){
      let smallTask = await this.apiService.CreateSmallTask(task);
      let smallTaskId = smallTask.id;
      let freelancerId = task.freelancerId;
      let projectId = task.projectId;
      let relation = {
        freelancerId:freelancerId,
        projectId:projectId,
        smallTaskId:smallTaskId
      }
      this.apiService.CreateProjectSmallTaskRelation(relation);
      return smallTask;
    }
    async updateTask(task){
      let freelancerId = task.freelancerId;
      let projectId = task.projectId;
      let currentRelation = (await this.apiService.GetRelationBySmallTask(task.id)).items;
      if(currentRelation.length > 0){
        let relation = {
          id:currentRelation[0].id,
          freelancerId:freelancerId,
          projectId:projectId,
          smallTaskId:task.id
        }
        this.apiService.UpdateProjectSmallTaskRelation(relation);
      }
      else{
        let relation = {
          freelancerId:freelancerId,
          projectId:projectId,
          smallTaskId:task.id
        }
        this.apiService.CreateProjectSmallTaskRelation(relation);
      }
      return this.apiService.UpdateSmallTask(task);
    }
    async deleteTask(id){
      let relation = await this.apiService.GetRelationBySmallTask(id);
      this.apiService.DeleteProjectSmallTaskRelation({id:relation.items[0].id});
      return this.apiService.DeleteSmallTask({id:id});
    }
    async getTaskbyIds(freelancerId,jobId){
      let tasksTemp = await this.apiService.GetTasksByfreelancerIdAndUserId(jobId,{eq:freelancerId});
      return tasksTemp.items;
    }
    async getProjectTasks(freelancerId,jobs){
      let tasks = [];
      for (let i = 0 ; i < jobs.length ; i++){
        let job = jobs[i];
        let jobTaks =  await this.getTaskbyIds(freelancerId,job.id);
        jobTaks.forEach(job=>tasks.push(job));
      }
      return tasks;
    }
}
