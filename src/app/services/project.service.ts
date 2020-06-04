import {Injectable} from "@angular/core";

import {APIService} from "../API.service";
import API, {graphqlOperation} from "@aws-amplify/api";
import {Storage} from "aws-amplify";

import {Project} from "../interfaces/project.interface";

import * as cloneDeep from "lodash/cloneDeep";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  public currentProjects: Array<Project> = [];

  constructor(
    private api: APIService,
  ) {}

  public async createProject(newProject: Project) {
    const createdProject = await this.api.CreateProject(newProject as any);
    this.currentProjects.push(createdProject);
    return createdProject;
  }

  graphql_user = `
    id
    role
    profile {
      givenName
      familyName
    }
  `;

  graphql_project = `
    id
    userId
    user {
      ${this.graphql_user}
    }
    name
    description
    status
    developmentStatus
    quoteStatus
    paymentStatus
    budget
    sourceLanguage
    targetLanguage
    dueDate
    serviceType
    createdAt
    updatedAt
    vendors {
      items {
        id
        vendor {
          id
          profile {
            givenName
            familyName
          }
        }
      }
    }
  `;

  public async getProjectsAssignedToUser(userId: string) {
    const statement = `query GetProjectsAssignedToUser($userId: ID!) {
         getUser(id: $userId) {
          vendorProjects {
            items {
              id
              project {
                ${this.graphql_project}
              }
            }
          }
        }
      }
    `;
    const gqlAPIServiceArguments: any = {};
    gqlAPIServiceArguments.userId = userId;
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments))
    ) as any;
    const items = response.data.getUser.vendorProjects.items;
    let projects: Array<Project> = [];
    for (let item of items) {
      if (!item.project) {
        // Clean dangling vendorProjects
        this.api.DeleteProjectVendor({id: item.id});
      } else {
        projects.push(item.project);
      }
    }
    return projects
  }

  public async getProjects() {
    const statement = `query GetProjects {
        listProjects {
          items {
            ${this.graphql_project}
          }
        }
      }
    `;
    const gqlAPIServiceArguments: any = {};
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments))
    ) as any;
    return response.data.listProjects.items;
  }

  public async getProjectsByUserId(userId: string) {
    const statement = `query GetProjectsByUserId($userId: ID) {
        getProjectsByUserId(userId: $userId) {
          items {
            ${this.graphql_project}
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    gqlAPIServiceArguments.userId = userId;
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments))
    ) as any;
    return response.data.getProjectsByUserId.items;
  }

  public async assignProjectVendor(projectId: string, vendorId: string) {
    await this.api.CreateProjectVendor({
      projectId: projectId,
      vendorId: vendorId
    });
  }

  public async getProject(projectId: string) {
    const statement = `query GetProject($id: ID!) {
        getProject(id: $id) {
          ${this.graphql_project}
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id: projectId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return response.data.getProject;
  }

  public async deleteProject(projectId: string) {
    const project = await this.getProject(projectId);
    await this.api.DeleteProject({ id: projectId });
    // TODO: Clean up files, the storage remove method doesn't seem to work with folders
    // Issue opened here:
    // https://github.com/aws-amplify/amplify-cli/issues/4323
    await Storage.remove(`users/${project.user.id}/projects/${project.id}`);
  }

  public async updateProject(updatedProject: Project) {
    const projectCopy = cloneDeep(updatedProject);
    if ("__typename" in projectCopy) {
      delete (projectCopy as any).__typename;
    }
    if ("user" in projectCopy) {
      delete (projectCopy as any).user;
    }
    if ("vendors" in projectCopy) {
      delete (projectCopy as any).vendors;
    }
    if ("projectManager" in projectCopy) {
      delete (projectCopy as any).projectManager;
    }
    if ("createdAt" in projectCopy) {
      delete (projectCopy as any).createdAt;
    }
    if ("updatedAt" in projectCopy) {
      delete (projectCopy as any).updatedAt;
    }
    await this.api.UpdateProject(projectCopy as any);
  }

  public async listProjectRequirementFiles(projectId: string) {
    return this.listProjectFiles(projectId, 'requirements'); 
  }

  public async listProjectQuotationFiles(projectId: string) {
    return this.listProjectFiles(projectId, 'quotation');
  }

  public async listProjectDeliveredFiles(projectId: string) {
    return this.listProjectFiles(projectId, 'delivered');
  }

  private async listProjectFiles(projectId: string, fileType: string) {
    const project = await this.getProject(projectId);
    const storedFiles = await Storage.list(
      `users/${project.user.id}/projects/${project.id}/${fileType}`
    );
    let files: Array<any>  = [];
    for (let file of storedFiles) {
      const filename = file.key.replace(/^.*[\\\/]/, '')
      files.push({ 
        key: file.key,
        name: filename
      });
    }
    return files;
  }

  public async uploadProjectRequirementFile(projectId: string, file: any) {
    this.uploadProjectFile(projectId, 'requirements', file);
  }

  public async uploadProjectQuotationFile(projectId: string, file: any) {
    this.uploadProjectFile(projectId, 'quotation', file);
  }

  public async uploadProjectDeliveredFile(projectId: string, file: any) {
    this.uploadProjectFile(projectId, 'delivered', file);
  }

  private async uploadProjectFile(projectId: string, fileType: string, file: any) {
    const project = await this.getProject(projectId);
    return await Storage.put(
      `users/${project.user.id}/projects/${project.id}/${fileType}/${file.name}`,
      file
    );
  }

  public async downloadProjectFile(fileKey: string) {
      const url: string = await Storage.get(fileKey) as string;
      window.open(url, '_blank');
    }

  public async deleteProjectFile(fileKey: string) {
    await Storage.remove(fileKey);
  }

  public deleteProjectVendor(projectVenctorId: string) {
    this.api.DeleteProjectVendor({id: projectVenctorId});
  }

}
