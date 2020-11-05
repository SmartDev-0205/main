import { Injectable } from '@angular/core';
import {APIService,ModelSortDirection} from "../API.service";
import { Project } from '../interfaces/project.interface';
import { LoadingService } from './loading.service';
import { JobService } from './job.service';
import API, {graphqlOperation} from "@aws-amplify/api";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
      private api: APIService,
      private jobService:JobService,
      private loadingService:LoadingService
    ) { }
  public async createProject(newProject) {
    const createdProject = await this.api.CreateProject(newProject as any);
    return createdProject;
  }
  public async getProjectById(projectId){
     let project = await this.api.GetProject(projectId);
     return project;
  }
  public async getClientProject(clientId){
    let tempProjectsResult = await this.GetProjectsByClientId(clientId);
    let tempProjects = tempProjectsResult.items;
    for (let i = 0 ; i < tempProjects.length; i ++){
      delete (tempProjects[i] as any).__typename;
    }
    return tempProjects;
  }

  public async getPmProject(pmId){
    let tempProjectsResult = await this.GetProjectsByPmId(pmId);
    let tempProjects = tempProjectsResult.items;
    for (let i = 0 ; i < tempProjects.length; i ++){
      delete (tempProjects[i] as any).__typename;
    }
    return tempProjects;
  }

  public async getFreelancerProject(freelancerId){
    let projectTaskRelation = await this.api.GetFreelancerProject(freelancerId)
    let relations = projectTaskRelation.items;
    let projects = [];
    relations.forEach(relation=>{
      let project = relation.project;
      if(projects.indexOf(project) < 0 )
        projects.push(project);
    })
    return projects
  }
  async deleteProject(porjectId){
    const loadingDialog = await this.loadingService.create({
      message: "Deleting Project..."
    })
    let jobResult = await this.api.GetJobsByProjectId(porjectId);
    let jobs = jobResult.items;
    if ( jobs.length < 0 )
      return;
    for (let i = 0; i < jobs.length ; i++){
      let job = jobs[i];
      let deletedJob = await this.api.DeleteJob({id:job.id})      
      this.api.GetTasksByJobId(job.id).then(tasksTemp=>{
        let tasks = tasksTemp.items;
        tasks.forEach(task => {
          this.api.DeleteSmallTask({id:task.id});
        });
      });
      this.api.GetSegmetsByJobId(deletedJob.id).then(segmentsTemp=>{
        let segments = segmentsTemp.items;
        segments.forEach(segment=>{
          this.api.DeleteSegment({id:segment.id});
        })
      })
    }
    this.api.DeleteProject({id:porjectId});
    loadingDialog.dismiss();
  }
  async updateProject(project){
    let afterProject = await this.api.UpdateProject(project);
    return afterProject;

  }
  async GetProjectsByPmId(
    pmId?: string,
    sortDirection?: ModelSortDirection,
    limit?: number,
    nextToken?: string
  ) {
    const statement = `query GetProjectsByPmId($pmId: ID, $sortDirection: ModelSortDirection, $limit: Int, $nextToken: String) {
        getProjectsByPmId(pmId: $pmId, sortDirection: $sortDirection, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              profile {
                __typename
                givenName
                familyName
                email
              }
            }
            pmId
            manager {
              __typename
              profile {
                __typename
                givenName
                familyName
                email
              }
            }
            name
            serviceType
            dueDate
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (pmId) {
      gqlAPIServiceArguments.pmId = pmId;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return response.data.getProjectsByPmId;
  }

  async GetProjectsByClientId(
    clientId?: string,
    sortDirection?: ModelSortDirection,
    limit?: number,
    nextToken?: string
  ) {
    const statement = `query GetProjectsByClientId($clientId: ID, $sortDirection: ModelSortDirection,  $limit: Int, $nextToken: String) {
        getProjectsByClientId(clientId: $clientId, sortDirection: $sortDirection, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              profile {
                __typename
                givenName
                familyName
                email
              }
            }
            manager {
              __typename
              profile {
                __typename
                givenName
                familyName
                email
              }
            }
            name
            description
            serviceType
            dueDate
            status
            developmentStatus
            paymentStatus
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (clientId) {
      gqlAPIServiceArguments.clientId = clientId;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return response.data.getProjectsByClientId;
  }
  async GetProjectsByPmIdForFinance(
    pmId?: string,
    nextToken?: string
  ){
    const statement = `query GetProjectsByPmId($pmId: ID,$nextToken: String) {
        getProjectsByPmId(pmId: $pmId,nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            projectCode
            client {
              __typename
              id
              role
              profile {
                __typename
                givenName
                familyName
                country
                customerCode
              }
              createdAt
              updatedAt
            }
            pmId
            manager {
              __typename
              profile {
                __typename
                givenName
                country
                customerCode
              }
              createdAt
              updatedAt
            }
            name
            description
            budget
            approvedBudget
            sourceLanguage
            targetLanguage
            serviceType
            dueDate
            status
            developmentStatus
            paymentStatus
            quotes {
              __typename
              items {
                __typename
                id
                direction
                projectId
                companyName
                companyAddress
                taxId
                tel
                mobile
                siteUrl
                clientName
                documentNo
                date
                credit
                dueDate
                seller
                reference
                projectName
                total
                discount
                totalAfterDiscount
                vat
                grandTotal
                remark
                items {
                  __typename
                  items {
                    __typename
                    id
                    paymentId
                    services
                    languages
                    stratDate
                    deliveryDate
                    description
                    quantity
                    unit
                    pricePerUnit
                    amount
                    currency
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                status
                collectionTerm
                financeString
                createdAt
                updatedAt
              }
              nextToken
            }
            invoices {
              __typename
              items {
                __typename
                id
                direction
                projectId
                companyName
                companyAddress
                taxId
                tel
                mobile
                siteUrl
                clientName
                documentNo
                date
                credit
                dueDate
                seller
                reference
                projectName
                total
                discount
                totalAfterDiscount
                vat
                grandTotal
                remark
                items {
                  __typename
                  items {
                    __typename
                    id
                    paymentId
                    services
                    languages
                    stratDate
                    deliveryDate
                    description
                    quantity
                    unit
                    pricePerUnit
                    amount
                    currency
                    createdAt
                    updatedAt
                  }
                  nextToken
                }
                status
                collectionTerm
                financeString
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (pmId) {
      gqlAPIServiceArguments.pmId = pmId;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return response.data.getProjectsByPmId;
  }
  async getProjectForNameAndClient(id){
    const statement = `query GetProject($id: ID!) {
      getProject(id: $id) {
        __typename
        clientId
        client {
          __typename
          profile {
            givenName
            familyName
          }
        }
        name
      }
    }`;
  const gqlAPIServiceArguments: any = {
    id
  };
  const response = (await API.graphql(
    graphqlOperation(statement, gqlAPIServiceArguments)
  )) as any;
  return response.data.getProject;
  }
}
