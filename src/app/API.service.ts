/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateUserInput = {
  id?: string | null;
  role?: string | null;
  profile?: ProfileInput | null;
};

export type ProfileInput = {
  givenName?: string | null;
  familyName?: string | null;
  company?: string | null;
  birthday?: string | null;
  email?: string | null;
  email_2?: string | null;
  website?: string | null;
  address?: string | null;
  postal?: string | null;
  city?: string | null;
  country?: string | null;
  timezone?: string | null;
  address_2?: string | null;
  postal_2?: string | null;
  city_2?: string | null;
  country_2?: string | null;
  timezone_2?: string | null;
  phone?: string | null;
  phone_2?: string | null;
  skype?: string | null;
};

export type ModelUserConditionInput = {
  role?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateUserInput = {
  id: string;
  role?: string | null;
  profile?: ProfileInput | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateProjectInput = {
  id?: string | null;
  userId: string;
  name?: string | null;
  description?: string | null;
  budget?: number | null;
  approvedBudget?: number | null;
  sourceLanguage?: string | null;
  targetLanguage?: string | null;
  serviceType?: string | null;
  dueDate?: string | null;
  status?: string | null;
  developmentStatus?: string | null;
  quoteStatus?: string | null;
  paymentStatus?: string | null;
  projectManagerId?: string | null;
};

export type ModelProjectConditionInput = {
  userId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  budget?: ModelFloatInput | null;
  approvedBudget?: ModelFloatInput | null;
  sourceLanguage?: ModelStringInput | null;
  targetLanguage?: ModelStringInput | null;
  serviceType?: ModelStringInput | null;
  dueDate?: ModelStringInput | null;
  status?: ModelStringInput | null;
  developmentStatus?: ModelStringInput | null;
  quoteStatus?: ModelStringInput | null;
  paymentStatus?: ModelStringInput | null;
  projectManagerId?: ModelStringInput | null;
  and?: Array<ModelProjectConditionInput | null> | null;
  or?: Array<ModelProjectConditionInput | null> | null;
  not?: ModelProjectConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateProjectInput = {
  id: string;
  userId?: string | null;
  name?: string | null;
  description?: string | null;
  budget?: number | null;
  approvedBudget?: number | null;
  sourceLanguage?: string | null;
  targetLanguage?: string | null;
  serviceType?: string | null;
  dueDate?: string | null;
  status?: string | null;
  developmentStatus?: string | null;
  quoteStatus?: string | null;
  paymentStatus?: string | null;
  projectManagerId?: string | null;
};

export type DeleteProjectInput = {
  id?: string | null;
};

export type CreateProjectVendorInput = {
  id?: string | null;
  projectId: string;
  vendorId: string;
};

export type ModelProjectVendorConditionInput = {
  projectId?: ModelIDInput | null;
  vendorId?: ModelIDInput | null;
  and?: Array<ModelProjectVendorConditionInput | null> | null;
  or?: Array<ModelProjectVendorConditionInput | null> | null;
  not?: ModelProjectVendorConditionInput | null;
};

export type UpdateProjectVendorInput = {
  id: string;
  projectId?: string | null;
  vendorId?: string | null;
};

export type DeleteProjectVendorInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  role?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  budget?: ModelFloatInput | null;
  approvedBudget?: ModelFloatInput | null;
  sourceLanguage?: ModelStringInput | null;
  targetLanguage?: ModelStringInput | null;
  serviceType?: ModelStringInput | null;
  dueDate?: ModelStringInput | null;
  status?: ModelStringInput | null;
  developmentStatus?: ModelStringInput | null;
  quoteStatus?: ModelStringInput | null;
  paymentStatus?: ModelStringInput | null;
  projectManagerId?: ModelStringInput | null;
  and?: Array<ModelProjectFilterInput | null> | null;
  or?: Array<ModelProjectFilterInput | null> | null;
  not?: ModelProjectFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  role: string | null;
  profile: {
    __typename: "Profile";
    givenName: string | null;
    familyName: string | null;
    company: string | null;
    birthday: string | null;
    email: string | null;
    email_2: string | null;
    website: string | null;
    address: string | null;
    postal: string | null;
    city: string | null;
    country: string | null;
    timezone: string | null;
    address_2: string | null;
    postal_2: string | null;
    city_2: string | null;
    country_2: string | null;
    timezone_2: string | null;
    phone: string | null;
    phone_2: string | null;
    skype: string | null;
  } | null;
  projects: {
    __typename: "ModelProjectConnection";
    items: Array<{
      __typename: "Project";
      id: string;
      userId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: string | null;
      serviceType: string | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      quoteStatus: string | null;
      paymentStatus: string | null;
      projectManagerId: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  vendorProjects: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  role: string | null;
  profile: {
    __typename: "Profile";
    givenName: string | null;
    familyName: string | null;
    company: string | null;
    birthday: string | null;
    email: string | null;
    email_2: string | null;
    website: string | null;
    address: string | null;
    postal: string | null;
    city: string | null;
    country: string | null;
    timezone: string | null;
    address_2: string | null;
    postal_2: string | null;
    city_2: string | null;
    country_2: string | null;
    timezone_2: string | null;
    phone: string | null;
    phone_2: string | null;
    skype: string | null;
  } | null;
  projects: {
    __typename: "ModelProjectConnection";
    items: Array<{
      __typename: "Project";
      id: string;
      userId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: string | null;
      serviceType: string | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      quoteStatus: string | null;
      paymentStatus: string | null;
      projectManagerId: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  vendorProjects: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  role: string | null;
  profile: {
    __typename: "Profile";
    givenName: string | null;
    familyName: string | null;
    company: string | null;
    birthday: string | null;
    email: string | null;
    email_2: string | null;
    website: string | null;
    address: string | null;
    postal: string | null;
    city: string | null;
    country: string | null;
    timezone: string | null;
    address_2: string | null;
    postal_2: string | null;
    city_2: string | null;
    country_2: string | null;
    timezone_2: string | null;
    phone: string | null;
    phone_2: string | null;
    skype: string | null;
  } | null;
  projects: {
    __typename: "ModelProjectConnection";
    items: Array<{
      __typename: "Project";
      id: string;
      userId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: string | null;
      serviceType: string | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      quoteStatus: string | null;
      paymentStatus: string | null;
      projectManagerId: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  vendorProjects: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectMutation = {
  __typename: "Project";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: string | null;
  serviceType: string | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  quoteStatus: string | null;
  paymentStatus: string | null;
  projectManagerId: string | null;
  projectManager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendors: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectMutation = {
  __typename: "Project";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: string | null;
  serviceType: string | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  quoteStatus: string | null;
  paymentStatus: string | null;
  projectManagerId: string | null;
  projectManager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendors: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectMutation = {
  __typename: "Project";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: string | null;
  serviceType: string | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  quoteStatus: string | null;
  paymentStatus: string | null;
  projectManagerId: string | null;
  projectManager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendors: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectVendorMutation = {
  __typename: "ProjectVendor";
  id: string;
  projectId: string;
  vendorId: string;
  project: {
    __typename: "Project";
    id: string;
    userId: string;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    name: string | null;
    description: string | null;
    budget: number | null;
    approvedBudget: number | null;
    sourceLanguage: string | null;
    targetLanguage: string | null;
    serviceType: string | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    quoteStatus: string | null;
    paymentStatus: string | null;
    projectManagerId: string | null;
    projectManager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    vendors: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendor: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectVendorMutation = {
  __typename: "ProjectVendor";
  id: string;
  projectId: string;
  vendorId: string;
  project: {
    __typename: "Project";
    id: string;
    userId: string;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    name: string | null;
    description: string | null;
    budget: number | null;
    approvedBudget: number | null;
    sourceLanguage: string | null;
    targetLanguage: string | null;
    serviceType: string | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    quoteStatus: string | null;
    paymentStatus: string | null;
    projectManagerId: string | null;
    projectManager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    vendors: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendor: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectVendorMutation = {
  __typename: "ProjectVendor";
  id: string;
  projectId: string;
  vendorId: string;
  project: {
    __typename: "Project";
    id: string;
    userId: string;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    name: string | null;
    description: string | null;
    budget: number | null;
    approvedBudget: number | null;
    sourceLanguage: string | null;
    targetLanguage: string | null;
    serviceType: string | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    quoteStatus: string | null;
    paymentStatus: string | null;
    projectManagerId: string | null;
    projectManager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    vendors: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendor: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  role: string | null;
  profile: {
    __typename: "Profile";
    givenName: string | null;
    familyName: string | null;
    company: string | null;
    birthday: string | null;
    email: string | null;
    email_2: string | null;
    website: string | null;
    address: string | null;
    postal: string | null;
    city: string | null;
    country: string | null;
    timezone: string | null;
    address_2: string | null;
    postal_2: string | null;
    city_2: string | null;
    country_2: string | null;
    timezone_2: string | null;
    phone: string | null;
    phone_2: string | null;
    skype: string | null;
  } | null;
  projects: {
    __typename: "ModelProjectConnection";
    items: Array<{
      __typename: "Project";
      id: string;
      userId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: string | null;
      serviceType: string | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      quoteStatus: string | null;
      paymentStatus: string | null;
      projectManagerId: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  vendorProjects: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetProjectQuery = {
  __typename: "Project";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: string | null;
  serviceType: string | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  quoteStatus: string | null;
  paymentStatus: string | null;
  projectManagerId: string | null;
  projectManager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendors: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectsQuery = {
  __typename: "ModelProjectConnection";
  items: Array<{
    __typename: "Project";
    id: string;
    userId: string;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    name: string | null;
    description: string | null;
    budget: number | null;
    approvedBudget: number | null;
    sourceLanguage: string | null;
    targetLanguage: string | null;
    serviceType: string | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    quoteStatus: string | null;
    paymentStatus: string | null;
    projectManagerId: string | null;
    projectManager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    vendors: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetProjectsByUserIdQuery = {
  __typename: "ModelProjectConnection";
  items: Array<{
    __typename: "Project";
    id: string;
    userId: string;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    name: string | null;
    description: string | null;
    budget: number | null;
    approvedBudget: number | null;
    sourceLanguage: string | null;
    targetLanguage: string | null;
    serviceType: string | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    quoteStatus: string | null;
    paymentStatus: string | null;
    projectManagerId: string | null;
    projectManager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    vendors: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  role: string | null;
  profile: {
    __typename: "Profile";
    givenName: string | null;
    familyName: string | null;
    company: string | null;
    birthday: string | null;
    email: string | null;
    email_2: string | null;
    website: string | null;
    address: string | null;
    postal: string | null;
    city: string | null;
    country: string | null;
    timezone: string | null;
    address_2: string | null;
    postal_2: string | null;
    city_2: string | null;
    country_2: string | null;
    timezone_2: string | null;
    phone: string | null;
    phone_2: string | null;
    skype: string | null;
  } | null;
  projects: {
    __typename: "ModelProjectConnection";
    items: Array<{
      __typename: "Project";
      id: string;
      userId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: string | null;
      serviceType: string | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      quoteStatus: string | null;
      paymentStatus: string | null;
      projectManagerId: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  vendorProjects: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  role: string | null;
  profile: {
    __typename: "Profile";
    givenName: string | null;
    familyName: string | null;
    company: string | null;
    birthday: string | null;
    email: string | null;
    email_2: string | null;
    website: string | null;
    address: string | null;
    postal: string | null;
    city: string | null;
    country: string | null;
    timezone: string | null;
    address_2: string | null;
    postal_2: string | null;
    city_2: string | null;
    country_2: string | null;
    timezone_2: string | null;
    phone: string | null;
    phone_2: string | null;
    skype: string | null;
  } | null;
  projects: {
    __typename: "ModelProjectConnection";
    items: Array<{
      __typename: "Project";
      id: string;
      userId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: string | null;
      serviceType: string | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      quoteStatus: string | null;
      paymentStatus: string | null;
      projectManagerId: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  vendorProjects: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  role: string | null;
  profile: {
    __typename: "Profile";
    givenName: string | null;
    familyName: string | null;
    company: string | null;
    birthday: string | null;
    email: string | null;
    email_2: string | null;
    website: string | null;
    address: string | null;
    postal: string | null;
    city: string | null;
    country: string | null;
    timezone: string | null;
    address_2: string | null;
    postal_2: string | null;
    city_2: string | null;
    country_2: string | null;
    timezone_2: string | null;
    phone: string | null;
    phone_2: string | null;
    skype: string | null;
  } | null;
  projects: {
    __typename: "ModelProjectConnection";
    items: Array<{
      __typename: "Project";
      id: string;
      userId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: string | null;
      serviceType: string | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      quoteStatus: string | null;
      paymentStatus: string | null;
      projectManagerId: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  vendorProjects: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectSubscription = {
  __typename: "Project";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: string | null;
  serviceType: string | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  quoteStatus: string | null;
  paymentStatus: string | null;
  projectManagerId: string | null;
  projectManager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendors: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectSubscription = {
  __typename: "Project";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: string | null;
  serviceType: string | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  quoteStatus: string | null;
  paymentStatus: string | null;
  projectManagerId: string | null;
  projectManager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendors: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectSubscription = {
  __typename: "Project";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: string | null;
  serviceType: string | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  quoteStatus: string | null;
  paymentStatus: string | null;
  projectManagerId: string | null;
  projectManager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendors: {
    __typename: "ModelProjectVendorConnection";
    items: Array<{
      __typename: "ProjectVendor";
      id: string;
      projectId: string;
      vendorId: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectVendorSubscription = {
  __typename: "ProjectVendor";
  id: string;
  projectId: string;
  vendorId: string;
  project: {
    __typename: "Project";
    id: string;
    userId: string;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    name: string | null;
    description: string | null;
    budget: number | null;
    approvedBudget: number | null;
    sourceLanguage: string | null;
    targetLanguage: string | null;
    serviceType: string | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    quoteStatus: string | null;
    paymentStatus: string | null;
    projectManagerId: string | null;
    projectManager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    vendors: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendor: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectVendorSubscription = {
  __typename: "ProjectVendor";
  id: string;
  projectId: string;
  vendorId: string;
  project: {
    __typename: "Project";
    id: string;
    userId: string;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    name: string | null;
    description: string | null;
    budget: number | null;
    approvedBudget: number | null;
    sourceLanguage: string | null;
    targetLanguage: string | null;
    serviceType: string | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    quoteStatus: string | null;
    paymentStatus: string | null;
    projectManagerId: string | null;
    projectManager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    vendors: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendor: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectVendorSubscription = {
  __typename: "ProjectVendor";
  id: string;
  projectId: string;
  vendorId: string;
  project: {
    __typename: "Project";
    id: string;
    userId: string;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    name: string | null;
    description: string | null;
    budget: number | null;
    approvedBudget: number | null;
    sourceLanguage: string | null;
    targetLanguage: string | null;
    serviceType: string | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    quoteStatus: string | null;
    paymentStatus: string | null;
    projectManagerId: string | null;
    projectManager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    vendors: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  vendor: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      givenName: string | null;
      familyName: string | null;
      company: string | null;
      birthday: string | null;
      email: string | null;
      email_2: string | null;
      website: string | null;
      address: string | null;
      postal: string | null;
      city: string | null;
      country: string | null;
      timezone: string | null;
      address_2: string | null;
      postal_2: string | null;
      city_2: string | null;
      country_2: string | null;
      timezone_2: string | null;
      phone: string | null;
      phone_2: string | null;
      skype: string | null;
    } | null;
    projects: {
      __typename: "ModelProjectConnection";
      nextToken: string | null;
    } | null;
    vendorProjects: {
      __typename: "ModelProjectVendorConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          role
          profile {
            __typename
            givenName
            familyName
            company
            birthday
            email
            email_2
            website
            address
            postal
            city
            country
            timezone
            address_2
            postal_2
            city_2
            country_2
            timezone_2
            phone
            phone_2
            skype
          }
          projects {
            __typename
            items {
              __typename
              id
              userId
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
              quoteStatus
              paymentStatus
              projectManagerId
              createdAt
              updatedAt
            }
            nextToken
          }
          vendorProjects {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          role
          profile {
            __typename
            givenName
            familyName
            company
            birthday
            email
            email_2
            website
            address
            postal
            city
            country
            timezone
            address_2
            postal_2
            city_2
            country_2
            timezone_2
            phone
            phone_2
            skype
          }
          projects {
            __typename
            items {
              __typename
              id
              userId
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
              quoteStatus
              paymentStatus
              projectManagerId
              createdAt
              updatedAt
            }
            nextToken
          }
          vendorProjects {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          role
          profile {
            __typename
            givenName
            familyName
            company
            birthday
            email
            email_2
            website
            address
            postal
            city
            country
            timezone
            address_2
            postal_2
            city_2
            country_2
            timezone_2
            phone
            phone_2
            skype
          }
          projects {
            __typename
            items {
              __typename
              id
              userId
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
              quoteStatus
              paymentStatus
              projectManagerId
              createdAt
              updatedAt
            }
            nextToken
          }
          vendorProjects {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateProject(
    input: CreateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<CreateProjectMutation> {
    const statement = `mutation CreateProject($input: CreateProjectInput!, $condition: ModelProjectConditionInput) {
        createProject(input: $input, condition: $condition) {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
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
          quoteStatus
          paymentStatus
          projectManagerId
          projectManager {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendors {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectMutation>response.data.createProject;
  }
  async UpdateProject(
    input: UpdateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<UpdateProjectMutation> {
    const statement = `mutation UpdateProject($input: UpdateProjectInput!, $condition: ModelProjectConditionInput) {
        updateProject(input: $input, condition: $condition) {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
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
          quoteStatus
          paymentStatus
          projectManagerId
          projectManager {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendors {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectMutation>response.data.updateProject;
  }
  async DeleteProject(
    input: DeleteProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<DeleteProjectMutation> {
    const statement = `mutation DeleteProject($input: DeleteProjectInput!, $condition: ModelProjectConditionInput) {
        deleteProject(input: $input, condition: $condition) {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
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
          quoteStatus
          paymentStatus
          projectManagerId
          projectManager {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendors {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectMutation>response.data.deleteProject;
  }
  async CreateProjectVendor(
    input: CreateProjectVendorInput,
    condition?: ModelProjectVendorConditionInput
  ): Promise<CreateProjectVendorMutation> {
    const statement = `mutation CreateProjectVendor($input: CreateProjectVendorInput!, $condition: ModelProjectVendorConditionInput) {
        createProjectVendor(input: $input, condition: $condition) {
          __typename
          id
          projectId
          vendorId
          project {
            __typename
            id
            userId
            user {
              __typename
              id
              role
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
            quoteStatus
            paymentStatus
            projectManagerId
            projectManager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            vendors {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendor {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectVendorMutation>response.data.createProjectVendor;
  }
  async UpdateProjectVendor(
    input: UpdateProjectVendorInput,
    condition?: ModelProjectVendorConditionInput
  ): Promise<UpdateProjectVendorMutation> {
    const statement = `mutation UpdateProjectVendor($input: UpdateProjectVendorInput!, $condition: ModelProjectVendorConditionInput) {
        updateProjectVendor(input: $input, condition: $condition) {
          __typename
          id
          projectId
          vendorId
          project {
            __typename
            id
            userId
            user {
              __typename
              id
              role
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
            quoteStatus
            paymentStatus
            projectManagerId
            projectManager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            vendors {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendor {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectVendorMutation>response.data.updateProjectVendor;
  }
  async DeleteProjectVendor(
    input: DeleteProjectVendorInput,
    condition?: ModelProjectVendorConditionInput
  ): Promise<DeleteProjectVendorMutation> {
    const statement = `mutation DeleteProjectVendor($input: DeleteProjectVendorInput!, $condition: ModelProjectVendorConditionInput) {
        deleteProjectVendor(input: $input, condition: $condition) {
          __typename
          id
          projectId
          vendorId
          project {
            __typename
            id
            userId
            user {
              __typename
              id
              role
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
            quoteStatus
            paymentStatus
            projectManagerId
            projectManager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            vendors {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendor {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectVendorMutation>response.data.deleteProjectVendor;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          role
          profile {
            __typename
            givenName
            familyName
            company
            birthday
            email
            email_2
            website
            address
            postal
            city
            country
            timezone
            address_2
            postal_2
            city_2
            country_2
            timezone_2
            phone
            phone_2
            skype
          }
          projects {
            __typename
            items {
              __typename
              id
              userId
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
              quoteStatus
              paymentStatus
              projectManagerId
              createdAt
              updatedAt
            }
            nextToken
          }
          vendorProjects {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
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
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
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
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetProject(id: string): Promise<GetProjectQuery> {
    const statement = `query GetProject($id: ID!) {
        getProject(id: $id) {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
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
          quoteStatus
          paymentStatus
          projectManagerId
          projectManager {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendors {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
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
    return <GetProjectQuery>response.data.getProject;
  }
  async ListProjects(
    filter?: ModelProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectsQuery> {
    const statement = `query ListProjects($filter: ModelProjectFilterInput, $limit: Int, $nextToken: String) {
        listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userId
            user {
              __typename
              id
              role
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
            quoteStatus
            paymentStatus
            projectManagerId
            projectManager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            vendors {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
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
    return <ListProjectsQuery>response.data.listProjects;
  }
  async GetProjectsByUserId(
    userId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetProjectsByUserIdQuery> {
    const statement = `query GetProjectsByUserId($userId: ID, $sortDirection: ModelSortDirection, $filter: ModelProjectFilterInput, $limit: Int, $nextToken: String) {
        getProjectsByUserId(userId: $userId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userId
            user {
              __typename
              id
              role
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
            quoteStatus
            paymentStatus
            projectManagerId
            projectManager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            vendors {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userId) {
      gqlAPIServiceArguments.userId = userId;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
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
    return <GetProjectsByUserIdQuery>response.data.getProjectsByUserId;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          role
          profile {
            __typename
            givenName
            familyName
            company
            birthday
            email
            email_2
            website
            address
            postal
            city
            country
            timezone
            address_2
            postal_2
            city_2
            country_2
            timezone_2
            phone
            phone_2
            skype
          }
          projects {
            __typename
            items {
              __typename
              id
              userId
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
              quoteStatus
              paymentStatus
              projectManagerId
              createdAt
              updatedAt
            }
            nextToken
          }
          vendorProjects {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          role
          profile {
            __typename
            givenName
            familyName
            company
            birthday
            email
            email_2
            website
            address
            postal
            city
            country
            timezone
            address_2
            postal_2
            city_2
            country_2
            timezone_2
            phone
            phone_2
            skype
          }
          projects {
            __typename
            items {
              __typename
              id
              userId
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
              quoteStatus
              paymentStatus
              projectManagerId
              createdAt
              updatedAt
            }
            nextToken
          }
          vendorProjects {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          role
          profile {
            __typename
            givenName
            familyName
            company
            birthday
            email
            email_2
            website
            address
            postal
            city
            country
            timezone
            address_2
            postal_2
            city_2
            country_2
            timezone_2
            phone
            phone_2
            skype
          }
          projects {
            __typename
            items {
              __typename
              id
              userId
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
              quoteStatus
              paymentStatus
              projectManagerId
              createdAt
              updatedAt
            }
            nextToken
          }
          vendorProjects {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateProjectListener: Observable<
    OnCreateProjectSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProject {
        onCreateProject {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
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
          quoteStatus
          paymentStatus
          projectManagerId
          projectManager {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendors {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateProjectSubscription>;

  OnUpdateProjectListener: Observable<
    OnUpdateProjectSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProject {
        onUpdateProject {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
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
          quoteStatus
          paymentStatus
          projectManagerId
          projectManager {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendors {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateProjectSubscription>;

  OnDeleteProjectListener: Observable<
    OnDeleteProjectSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProject {
        onDeleteProject {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
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
          quoteStatus
          paymentStatus
          projectManagerId
          projectManager {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendors {
            __typename
            items {
              __typename
              id
              projectId
              vendorId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteProjectSubscription>;

  OnCreateProjectVendorListener: Observable<
    OnCreateProjectVendorSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProjectVendor {
        onCreateProjectVendor {
          __typename
          id
          projectId
          vendorId
          project {
            __typename
            id
            userId
            user {
              __typename
              id
              role
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
            quoteStatus
            paymentStatus
            projectManagerId
            projectManager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            vendors {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendor {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateProjectVendorSubscription>;

  OnUpdateProjectVendorListener: Observable<
    OnUpdateProjectVendorSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProjectVendor {
        onUpdateProjectVendor {
          __typename
          id
          projectId
          vendorId
          project {
            __typename
            id
            userId
            user {
              __typename
              id
              role
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
            quoteStatus
            paymentStatus
            projectManagerId
            projectManager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            vendors {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendor {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateProjectVendorSubscription>;

  OnDeleteProjectVendorListener: Observable<
    OnDeleteProjectVendorSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProjectVendor {
        onDeleteProjectVendor {
          __typename
          id
          projectId
          vendorId
          project {
            __typename
            id
            userId
            user {
              __typename
              id
              role
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
            quoteStatus
            paymentStatus
            projectManagerId
            projectManager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            vendors {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          vendor {
            __typename
            id
            role
            profile {
              __typename
              givenName
              familyName
              company
              birthday
              email
              email_2
              website
              address
              postal
              city
              country
              timezone
              address_2
              postal_2
              city_2
              country_2
              timezone_2
              phone
              phone_2
              skype
            }
            projects {
              __typename
              nextToken
            }
            vendorProjects {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteProjectVendorSubscription>;
}
