/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateUserInput = {
  id?: string | null;
  role?: string | null;
  profile?: ProfileInput | null;
};

export type ProfileInput = {
  accountType?: string | null;
  companyName?: string | null;
  legalName?: string | null;
  website?: string | null;
  taxNumber?: string | null;
  vatNumber?: string | null;
  country?: string | null;
  companyAddress?: string | null;
  Zip?: string | null;
  about?: string | null;
  givenName?: string | null;
  familyName?: string | null;
  gender?: string | null;
  position?: string | null;
  email?: string | null;
  tel?: string | null;
  whatsapp?: string | null;
  wechat?: string | null;
  line?: string | null;
  qq?: string | null;
  telegram?: string | null;
  slack?: string | null;
  viber?: string | null;
  note?: string | null;
  timezone?: string | null;
  rate?: number | null;
  customerCode?: string | null;
  customerName?: string | null;
  logoKey?: string | null;
  paymentTerm?: string | null;
  paymentMethod?: Array<string | null> | null;
  dayOption?: string | null;
  payDay?: string | null;
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

export type CreateOrderInput = {
  id?: string | null;
  clientId?: string | null;
  orderName?: string | null;
  orderServices?: Array<string | null> | null;
  orderSourceLanguage?: string | null;
  orderTargetLanguage?: string | null;
  orderSubject?: string | null;
  orderDeadline?: string | null;
  orderQuntity?: string | null;
  orderUnit?: string | null;
  orderBestRate?: string | null;
  orderCurrency?: string | null;
  orderProjectMore?: string | null;
};

export type ModelOrderConditionInput = {
  clientId?: ModelIDInput | null;
  orderName?: ModelStringInput | null;
  orderServices?: ModelStringInput | null;
  orderSourceLanguage?: ModelStringInput | null;
  orderTargetLanguage?: ModelStringInput | null;
  orderSubject?: ModelStringInput | null;
  orderDeadline?: ModelStringInput | null;
  orderQuntity?: ModelStringInput | null;
  orderUnit?: ModelStringInput | null;
  orderBestRate?: ModelStringInput | null;
  orderCurrency?: ModelStringInput | null;
  orderProjectMore?: ModelStringInput | null;
  and?: Array<ModelOrderConditionInput | null> | null;
  or?: Array<ModelOrderConditionInput | null> | null;
  not?: ModelOrderConditionInput | null;
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

export type UpdateOrderInput = {
  id: string;
  clientId?: string | null;
  orderName?: string | null;
  orderServices?: Array<string | null> | null;
  orderSourceLanguage?: string | null;
  orderTargetLanguage?: string | null;
  orderSubject?: string | null;
  orderDeadline?: string | null;
  orderQuntity?: string | null;
  orderUnit?: string | null;
  orderBestRate?: string | null;
  orderCurrency?: string | null;
  orderProjectMore?: string | null;
};

export type DeleteOrderInput = {
  id?: string | null;
};

export type CreateOrderMessageInput = {
  id?: string | null;
  content: string;
  orderId: string;
  senderId: string;
  recepterID: string;
  isRead: boolean;
  time?: string | null;
  createdAt?: string | null;
};

export type ModelOrderMessageConditionInput = {
  content?: ModelStringInput | null;
  orderId?: ModelIDInput | null;
  senderId?: ModelIDInput | null;
  recepterID?: ModelIDInput | null;
  isRead?: ModelBooleanInput | null;
  time?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelOrderMessageConditionInput | null> | null;
  or?: Array<ModelOrderMessageConditionInput | null> | null;
  not?: ModelOrderMessageConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateOrderMessageInput = {
  id: string;
  content?: string | null;
  orderId?: string | null;
  senderId?: string | null;
  recepterID?: string | null;
  isRead?: boolean | null;
  time?: string | null;
  createdAt?: string | null;
};

export type DeleteOrderMessageInput = {
  id?: string | null;
};

export type CreateOrderPaymentInput = {
  id?: string | null;
  orderId: string;
  description: string;
  date?: string | null;
  status?: string | null;
  amount?: string | null;
  createdAt?: string | null;
};

export type ModelOrderPaymentConditionInput = {
  orderId?: ModelIDInput | null;
  description?: ModelStringInput | null;
  date?: ModelStringInput | null;
  status?: ModelStringInput | null;
  amount?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelOrderPaymentConditionInput | null> | null;
  or?: Array<ModelOrderPaymentConditionInput | null> | null;
  not?: ModelOrderPaymentConditionInput | null;
};

export type UpdateOrderPaymentInput = {
  id: string;
  orderId?: string | null;
  description?: string | null;
  date?: string | null;
  status?: string | null;
  amount?: string | null;
  createdAt?: string | null;
};

export type DeleteOrderPaymentInput = {
  id?: string | null;
};

export type CreateClientInput = {
  id?: string | null;
  managerId: string;
  profile?: ProfileInput | null;
};

export type ModelClientConditionInput = {
  managerId?: ModelIDInput | null;
  and?: Array<ModelClientConditionInput | null> | null;
  or?: Array<ModelClientConditionInput | null> | null;
  not?: ModelClientConditionInput | null;
};

export type UpdateClientInput = {
  id: string;
  managerId?: string | null;
  profile?: ProfileInput | null;
};

export type DeleteClientInput = {
  id?: string | null;
};

export type CreateProjectInput = {
  id?: string | null;
  projectCode?: string | null;
  clientId: string;
  pmId: string;
  name?: string | null;
  description?: string | null;
  budget?: number | null;
  approvedBudget?: number | null;
  sourceLanguage?: string | null;
  targetLanguage?: Array<string | null> | null;
  serviceType?: Array<string | null> | null;
  dueDate?: string | null;
  status?: string | null;
  developmentStatus?: string | null;
  paymentStatus?: string | null;
  transMemory?: Array<string | null> | null;
  transMemoryNames?: Array<string | null> | null;
};

export type ModelProjectConditionInput = {
  projectCode?: ModelStringInput | null;
  clientId?: ModelIDInput | null;
  pmId?: ModelIDInput | null;
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
  paymentStatus?: ModelStringInput | null;
  transMemory?: ModelStringInput | null;
  transMemoryNames?: ModelStringInput | null;
  and?: Array<ModelProjectConditionInput | null> | null;
  or?: Array<ModelProjectConditionInput | null> | null;
  not?: ModelProjectConditionInput | null;
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
  projectCode?: string | null;
  clientId?: string | null;
  pmId?: string | null;
  name?: string | null;
  description?: string | null;
  budget?: number | null;
  approvedBudget?: number | null;
  sourceLanguage?: string | null;
  targetLanguage?: Array<string | null> | null;
  serviceType?: Array<string | null> | null;
  dueDate?: string | null;
  status?: string | null;
  developmentStatus?: string | null;
  paymentStatus?: string | null;
  transMemory?: Array<string | null> | null;
  transMemoryNames?: Array<string | null> | null;
};

export type DeleteProjectInput = {
  id?: string | null;
};

export type CreateQuoteInput = {
  id?: string | null;
  direction: string;
  projectId: string;
  companyName?: string | null;
  companyAddress?: string | null;
  taxId?: string | null;
  tel?: string | null;
  mobile?: string | null;
  siteUrl?: string | null;
  clientName?: string | null;
  documentNo?: string | null;
  date?: string | null;
  credit?: string | null;
  dueDate?: string | null;
  seller?: string | null;
  reference?: string | null;
  projectName?: string | null;
  total?: string | null;
  discount?: string | null;
  totalAfterDiscount?: string | null;
  vat?: string | null;
  grandTotal?: string | null;
  remark?: string | null;
  status?: string | null;
  collectionTerm?: string | null;
  financeString?: string | null;
};

export type ModelQuoteConditionInput = {
  direction?: ModelStringInput | null;
  projectId?: ModelIDInput | null;
  companyName?: ModelStringInput | null;
  companyAddress?: ModelStringInput | null;
  taxId?: ModelStringInput | null;
  tel?: ModelStringInput | null;
  mobile?: ModelStringInput | null;
  siteUrl?: ModelStringInput | null;
  clientName?: ModelStringInput | null;
  documentNo?: ModelStringInput | null;
  date?: ModelStringInput | null;
  credit?: ModelStringInput | null;
  dueDate?: ModelStringInput | null;
  seller?: ModelStringInput | null;
  reference?: ModelStringInput | null;
  projectName?: ModelStringInput | null;
  total?: ModelStringInput | null;
  discount?: ModelStringInput | null;
  totalAfterDiscount?: ModelStringInput | null;
  vat?: ModelStringInput | null;
  grandTotal?: ModelStringInput | null;
  remark?: ModelStringInput | null;
  status?: ModelStringInput | null;
  collectionTerm?: ModelStringInput | null;
  financeString?: ModelStringInput | null;
  and?: Array<ModelQuoteConditionInput | null> | null;
  or?: Array<ModelQuoteConditionInput | null> | null;
  not?: ModelQuoteConditionInput | null;
};

export type UpdateQuoteInput = {
  id: string;
  direction?: string | null;
  projectId?: string | null;
  companyName?: string | null;
  companyAddress?: string | null;
  taxId?: string | null;
  tel?: string | null;
  mobile?: string | null;
  siteUrl?: string | null;
  clientName?: string | null;
  documentNo?: string | null;
  date?: string | null;
  credit?: string | null;
  dueDate?: string | null;
  seller?: string | null;
  reference?: string | null;
  projectName?: string | null;
  total?: string | null;
  discount?: string | null;
  totalAfterDiscount?: string | null;
  vat?: string | null;
  grandTotal?: string | null;
  remark?: string | null;
  status?: string | null;
  collectionTerm?: string | null;
  financeString?: string | null;
};

export type DeleteQuoteInput = {
  id?: string | null;
};

export type CreateItemInput = {
  id?: string | null;
  paymentId: string;
  services?: string | null;
  languages?: string | null;
  stratDate?: string | null;
  deliveryDate?: string | null;
  description?: string | null;
  quantity?: string | null;
  unit?: string | null;
  pricePerUnit?: number | null;
  amount?: number | null;
  currency?: string | null;
};

export type ModelItemConditionInput = {
  paymentId?: ModelIDInput | null;
  services?: ModelStringInput | null;
  languages?: ModelStringInput | null;
  stratDate?: ModelStringInput | null;
  deliveryDate?: ModelStringInput | null;
  description?: ModelStringInput | null;
  quantity?: ModelStringInput | null;
  unit?: ModelStringInput | null;
  pricePerUnit?: ModelFloatInput | null;
  amount?: ModelFloatInput | null;
  currency?: ModelStringInput | null;
  and?: Array<ModelItemConditionInput | null> | null;
  or?: Array<ModelItemConditionInput | null> | null;
  not?: ModelItemConditionInput | null;
};

export type UpdateItemInput = {
  id: string;
  paymentId?: string | null;
  services?: string | null;
  languages?: string | null;
  stratDate?: string | null;
  deliveryDate?: string | null;
  description?: string | null;
  quantity?: string | null;
  unit?: string | null;
  pricePerUnit?: number | null;
  amount?: number | null;
  currency?: string | null;
};

export type DeleteItemInput = {
  id?: string | null;
};

export type CreateInvoiceInput = {
  id?: string | null;
  direction: string;
  projectId: string;
  companyName?: string | null;
  companyAddress?: string | null;
  taxId?: string | null;
  tel?: string | null;
  mobile?: string | null;
  siteUrl?: string | null;
  clientName?: string | null;
  documentNo?: string | null;
  date?: string | null;
  credit?: string | null;
  dueDate?: string | null;
  seller?: string | null;
  reference?: string | null;
  projectName?: string | null;
  total?: string | null;
  discount?: string | null;
  totalAfterDiscount?: string | null;
  vat?: string | null;
  grandTotal?: string | null;
  remark?: string | null;
  status?: string | null;
  collectionTerm?: string | null;
  financeString?: string | null;
};

export type ModelInvoiceConditionInput = {
  direction?: ModelStringInput | null;
  projectId?: ModelIDInput | null;
  companyName?: ModelStringInput | null;
  companyAddress?: ModelStringInput | null;
  taxId?: ModelStringInput | null;
  tel?: ModelStringInput | null;
  mobile?: ModelStringInput | null;
  siteUrl?: ModelStringInput | null;
  clientName?: ModelStringInput | null;
  documentNo?: ModelStringInput | null;
  date?: ModelStringInput | null;
  credit?: ModelStringInput | null;
  dueDate?: ModelStringInput | null;
  seller?: ModelStringInput | null;
  reference?: ModelStringInput | null;
  projectName?: ModelStringInput | null;
  total?: ModelStringInput | null;
  discount?: ModelStringInput | null;
  totalAfterDiscount?: ModelStringInput | null;
  vat?: ModelStringInput | null;
  grandTotal?: ModelStringInput | null;
  remark?: ModelStringInput | null;
  status?: ModelStringInput | null;
  collectionTerm?: ModelStringInput | null;
  financeString?: ModelStringInput | null;
  and?: Array<ModelInvoiceConditionInput | null> | null;
  or?: Array<ModelInvoiceConditionInput | null> | null;
  not?: ModelInvoiceConditionInput | null;
};

export type UpdateInvoiceInput = {
  id: string;
  direction?: string | null;
  projectId?: string | null;
  companyName?: string | null;
  companyAddress?: string | null;
  taxId?: string | null;
  tel?: string | null;
  mobile?: string | null;
  siteUrl?: string | null;
  clientName?: string | null;
  documentNo?: string | null;
  date?: string | null;
  credit?: string | null;
  dueDate?: string | null;
  seller?: string | null;
  reference?: string | null;
  projectName?: string | null;
  total?: string | null;
  discount?: string | null;
  totalAfterDiscount?: string | null;
  vat?: string | null;
  grandTotal?: string | null;
  remark?: string | null;
  status?: string | null;
  collectionTerm?: string | null;
  financeString?: string | null;
};

export type DeleteInvoiceInput = {
  id?: string | null;
};

export type CreateJobInput = {
  id?: string | null;
  projectId: string;
  filename?: string | null;
  service?: string | null;
  wordCount?: number | null;
  due?: string | null;
  source?: string | null;
  target?: string | null;
  process?: Array<ProgressInput | null> | null;
  status?: string | null;
};

export type ProgressInput = {
  serviceName?: string | null;
  progress?: string | null;
};

export type ModelJobConditionInput = {
  projectId?: ModelIDInput | null;
  filename?: ModelStringInput | null;
  service?: ModelStringInput | null;
  wordCount?: ModelFloatInput | null;
  due?: ModelStringInput | null;
  source?: ModelStringInput | null;
  target?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelJobConditionInput | null> | null;
  or?: Array<ModelJobConditionInput | null> | null;
  not?: ModelJobConditionInput | null;
};

export type UpdateJobInput = {
  id: string;
  projectId?: string | null;
  filename?: string | null;
  service?: string | null;
  wordCount?: number | null;
  due?: string | null;
  source?: string | null;
  target?: string | null;
  process?: Array<ProgressInput | null> | null;
  status?: string | null;
};

export type DeleteJobInput = {
  id?: string | null;
};

export type CreateSegmentInput = {
  id?: string | null;
  jobId: string;
  source?: string | null;
  target?: string | null;
  status?: string | null;
  segmentService?: Array<SegmentServiceInput | null> | null;
};

export type SegmentServiceInput = {
  serviceName?: string | null;
  target?: string | null;
  freelancerId: string;
  status?: string | null;
  freelancerEmail?: string | null;
};

export type ModelSegmentConditionInput = {
  jobId?: ModelIDInput | null;
  source?: ModelStringInput | null;
  target?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelSegmentConditionInput | null> | null;
  or?: Array<ModelSegmentConditionInput | null> | null;
  not?: ModelSegmentConditionInput | null;
};

export type UpdateSegmentInput = {
  id: string;
  jobId?: string | null;
  source?: string | null;
  target?: string | null;
  status?: string | null;
  segmentService?: Array<SegmentServiceInput | null> | null;
};

export type DeleteSegmentInput = {
  id?: string | null;
};

export type CreateSmallTaskInput = {
  id?: string | null;
  jobId: string;
  projectId: string;
  wordsCount?: number | null;
  serviceName: string;
  freelancerId: string;
  tasks?: Array<TaskInput | null> | null;
  rate?: string | null;
  status?: string | null;
};

export type TaskInput = {
  start?: number | null;
  end?: number | null;
  stringOfTask?: string | null;
};

export type ModelSmallTaskConditionInput = {
  jobId?: ModelIDInput | null;
  projectId?: ModelIDInput | null;
  wordsCount?: ModelFloatInput | null;
  serviceName?: ModelStringInput | null;
  freelancerId?: ModelIDInput | null;
  rate?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelSmallTaskConditionInput | null> | null;
  or?: Array<ModelSmallTaskConditionInput | null> | null;
  not?: ModelSmallTaskConditionInput | null;
};

export type UpdateSmallTaskInput = {
  id: string;
  jobId?: string | null;
  projectId?: string | null;
  wordsCount?: number | null;
  serviceName?: string | null;
  freelancerId?: string | null;
  tasks?: Array<TaskInput | null> | null;
  rate?: string | null;
  status?: string | null;
};

export type DeleteSmallTaskInput = {
  id?: string | null;
};

export type CreateProjectSmallTaskRelationInput = {
  id?: string | null;
  freelancerId: string;
  projectId: string;
  smallTaskId: string;
};

export type ModelProjectSmallTaskRelationConditionInput = {
  freelancerId?: ModelIDInput | null;
  projectId?: ModelIDInput | null;
  smallTaskId?: ModelIDInput | null;
  and?: Array<ModelProjectSmallTaskRelationConditionInput | null> | null;
  or?: Array<ModelProjectSmallTaskRelationConditionInput | null> | null;
  not?: ModelProjectSmallTaskRelationConditionInput | null;
};

export type UpdateProjectSmallTaskRelationInput = {
  id: string;
  freelancerId?: string | null;
  projectId?: string | null;
  smallTaskId?: string | null;
};

export type DeleteProjectSmallTaskRelationInput = {
  id?: string | null;
};

export type CreateLinkInput = {
  id?: string | null;
  name?: string | null;
  url?: string | null;
  status?: string | null;
};

export type ModellinkConditionInput = {
  name?: ModelStringInput | null;
  url?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModellinkConditionInput | null> | null;
  or?: Array<ModellinkConditionInput | null> | null;
  not?: ModellinkConditionInput | null;
};

export type UpdateLinkInput = {
  id: string;
  name?: string | null;
  url?: string | null;
  status?: string | null;
};

export type DeleteLinkInput = {
  id?: string | null;
};

export type CreateTeamInviteInput = {
  id?: string | null;
  teamId: string;
  userId: string;
  status?: string | null;
};

export type ModelTeamInviteConditionInput = {
  teamId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelTeamInviteConditionInput | null> | null;
  or?: Array<ModelTeamInviteConditionInput | null> | null;
  not?: ModelTeamInviteConditionInput | null;
};

export type UpdateTeamInviteInput = {
  id: string;
  teamId?: string | null;
  userId?: string | null;
  status?: string | null;
};

export type DeleteTeamInviteInput = {
  id?: string | null;
};

export type CreateTeamInput = {
  id?: string | null;
  managerId: string;
  teamName?: string | null;
};

export type ModelTeamConditionInput = {
  managerId?: ModelIDInput | null;
  teamName?: ModelStringInput | null;
  and?: Array<ModelTeamConditionInput | null> | null;
  or?: Array<ModelTeamConditionInput | null> | null;
  not?: ModelTeamConditionInput | null;
};

export type UpdateTeamInput = {
  id: string;
  managerId?: string | null;
  teamName?: string | null;
};

export type DeleteTeamInput = {
  id?: string | null;
};

export type CreateEventInput = {
  id?: string | null;
  userId: string;
  managerId: string;
  textContent?: string | null;
  link?: string | null;
  type: string;
  flagShowHide: string;
};

export type ModelEventConditionInput = {
  userId?: ModelIDInput | null;
  managerId?: ModelIDInput | null;
  textContent?: ModelStringInput | null;
  link?: ModelStringInput | null;
  type?: ModelStringInput | null;
  flagShowHide?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
};

export type UpdateEventInput = {
  id: string;
  userId?: string | null;
  managerId?: string | null;
  textContent?: string | null;
  link?: string | null;
  type?: string | null;
  flagShowHide?: string | null;
};

export type DeleteEventInput = {
  id?: string | null;
};

export type CreateConversationInput = {
  id?: string | null;
  nextConversation?: string | null;
  firstUserId: string;
  secondUserId: string;
  badge?: number | null;
};

export type ModelConversationConditionInput = {
  nextConversation?: ModelIDInput | null;
  firstUserId?: ModelIDInput | null;
  secondUserId?: ModelIDInput | null;
  badge?: ModelFloatInput | null;
  and?: Array<ModelConversationConditionInput | null> | null;
  or?: Array<ModelConversationConditionInput | null> | null;
  not?: ModelConversationConditionInput | null;
};

export type UpdateConversationInput = {
  id: string;
  nextConversation?: string | null;
  firstUserId?: string | null;
  secondUserId?: string | null;
  badge?: number | null;
};

export type DeleteConversationInput = {
  id?: string | null;
};

export type CreateMessageInput = {
  id?: string | null;
  content: string;
  conversationId: string;
  senderId: string;
  recepterID: string;
  isRead: string;
  createdAt?: string | null;
};

export type ModelMessageConditionInput = {
  content?: ModelStringInput | null;
  conversationId?: ModelIDInput | null;
  senderId?: ModelIDInput | null;
  recepterID?: ModelIDInput | null;
  isRead?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type UpdateMessageInput = {
  id: string;
  content?: string | null;
  conversationId?: string | null;
  senderId?: string | null;
  recepterID?: string | null;
  isRead?: string | null;
  createdAt?: string | null;
};

export type DeleteMessageInput = {
  id?: string | null;
};

export type CreateCollectionInput = {
  id?: string | null;
  method?: string | null;
  bankDate?: string | null;
  netAmount?: string | null;
  currency?: string | null;
  fxrate?: string | null;
  amount?: string | null;
  managerId: string;
};

export type ModelCollectionConditionInput = {
  method?: ModelStringInput | null;
  bankDate?: ModelStringInput | null;
  netAmount?: ModelStringInput | null;
  currency?: ModelStringInput | null;
  fxrate?: ModelStringInput | null;
  amount?: ModelStringInput | null;
  managerId?: ModelIDInput | null;
  and?: Array<ModelCollectionConditionInput | null> | null;
  or?: Array<ModelCollectionConditionInput | null> | null;
  not?: ModelCollectionConditionInput | null;
};

export type UpdateCollectionInput = {
  id: string;
  method?: string | null;
  bankDate?: string | null;
  netAmount?: string | null;
  currency?: string | null;
  fxrate?: string | null;
  amount?: string | null;
  managerId?: string | null;
};

export type DeleteCollectionInput = {
  id?: string | null;
};

export type CreateServiceInput = {
  id?: string | null;
  managerId: string;
  name?: string | null;
  description?: string | null;
  workflow?: Array<string | null> | null;
};

export type ModelServiceConditionInput = {
  managerId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  workflow?: ModelStringInput | null;
  and?: Array<ModelServiceConditionInput | null> | null;
  or?: Array<ModelServiceConditionInput | null> | null;
  not?: ModelServiceConditionInput | null;
};

export type UpdateServiceInput = {
  id: string;
  managerId?: string | null;
  name?: string | null;
  description?: string | null;
  workflow?: Array<string | null> | null;
};

export type DeleteServiceInput = {
  id?: string | null;
};

export type CreateRateInput = {
  id?: string | null;
  managerId: string;
  clientId: string;
  clientName?: string | null;
  service?: string | null;
  languagePair?: string | null;
  specialization?: string | null;
  rate?: string | null;
  currency?: string | null;
  unit?: string | null;
};

export type ModelRateConditionInput = {
  managerId?: ModelIDInput | null;
  clientId?: ModelIDInput | null;
  clientName?: ModelStringInput | null;
  service?: ModelStringInput | null;
  languagePair?: ModelStringInput | null;
  specialization?: ModelStringInput | null;
  rate?: ModelStringInput | null;
  currency?: ModelStringInput | null;
  unit?: ModelStringInput | null;
  and?: Array<ModelRateConditionInput | null> | null;
  or?: Array<ModelRateConditionInput | null> | null;
  not?: ModelRateConditionInput | null;
};

export type UpdateRateInput = {
  id: string;
  managerId?: string | null;
  clientId?: string | null;
  clientName?: string | null;
  service?: string | null;
  languagePair?: string | null;
  specialization?: string | null;
  rate?: string | null;
  currency?: string | null;
  unit?: string | null;
};

export type DeleteRateInput = {
  id?: string | null;
};

export type CreateNetRateInput = {
  id?: string | null;
  clientId: string;
  tmRepetitions?: string | null;
  mtRepetitions?: string | null;
  tmOverHundred?: string | null;
  mtOverHundred?: string | null;
  tmHundred?: string | null;
  mthundred?: string | null;
  tmNineFive?: string | null;
  mtNineFive?: string | null;
  tmEightFive?: string | null;
  mtEightFive?: string | null;
  tmSevenFive?: string | null;
  mtSevenFive?: string | null;
  tmFive?: string | null;
  mtFive?: string | null;
  tmNewWord?: string | null;
  mtNewWord?: string | null;
};

export type ModelnetRateConditionInput = {
  clientId?: ModelIDInput | null;
  tmRepetitions?: ModelStringInput | null;
  mtRepetitions?: ModelStringInput | null;
  tmOverHundred?: ModelStringInput | null;
  mtOverHundred?: ModelStringInput | null;
  tmHundred?: ModelStringInput | null;
  mthundred?: ModelStringInput | null;
  tmNineFive?: ModelStringInput | null;
  mtNineFive?: ModelStringInput | null;
  tmEightFive?: ModelStringInput | null;
  mtEightFive?: ModelStringInput | null;
  tmSevenFive?: ModelStringInput | null;
  mtSevenFive?: ModelStringInput | null;
  tmFive?: ModelStringInput | null;
  mtFive?: ModelStringInput | null;
  tmNewWord?: ModelStringInput | null;
  mtNewWord?: ModelStringInput | null;
  and?: Array<ModelnetRateConditionInput | null> | null;
  or?: Array<ModelnetRateConditionInput | null> | null;
  not?: ModelnetRateConditionInput | null;
};

export type UpdateNetRateInput = {
  id: string;
  clientId?: string | null;
  tmRepetitions?: string | null;
  mtRepetitions?: string | null;
  tmOverHundred?: string | null;
  mtOverHundred?: string | null;
  tmHundred?: string | null;
  mthundred?: string | null;
  tmNineFive?: string | null;
  mtNineFive?: string | null;
  tmEightFive?: string | null;
  mtEightFive?: string | null;
  tmSevenFive?: string | null;
  mtSevenFive?: string | null;
  tmFive?: string | null;
  mtFive?: string | null;
  tmNewWord?: string | null;
  mtNewWord?: string | null;
};

export type DeleteNetRateInput = {
  id?: string | null;
};

export type CreateTransMemoryInput = {
  id?: string | null;
  managerId: string;
  filename?: string | null;
  name?: string | null;
  source?: string | null;
  target?: string | null;
  clientId?: string | null;
  clientName?: string | null;
};

export type ModelTransMemoryConditionInput = {
  managerId?: ModelIDInput | null;
  filename?: ModelStringInput | null;
  name?: ModelStringInput | null;
  source?: ModelStringInput | null;
  target?: ModelStringInput | null;
  clientId?: ModelIDInput | null;
  clientName?: ModelStringInput | null;
  and?: Array<ModelTransMemoryConditionInput | null> | null;
  or?: Array<ModelTransMemoryConditionInput | null> | null;
  not?: ModelTransMemoryConditionInput | null;
};

export type UpdateTransMemoryInput = {
  id: string;
  managerId?: string | null;
  filename?: string | null;
  name?: string | null;
  source?: string | null;
  target?: string | null;
  clientId?: string | null;
  clientName?: string | null;
};

export type DeleteTransMemoryInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  role?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null;
  clientId?: ModelIDInput | null;
  orderName?: ModelStringInput | null;
  orderServices?: ModelStringInput | null;
  orderSourceLanguage?: ModelStringInput | null;
  orderTargetLanguage?: ModelStringInput | null;
  orderSubject?: ModelStringInput | null;
  orderDeadline?: ModelStringInput | null;
  orderQuntity?: ModelStringInput | null;
  orderUnit?: ModelStringInput | null;
  orderBestRate?: ModelStringInput | null;
  orderCurrency?: ModelStringInput | null;
  orderProjectMore?: ModelStringInput | null;
  and?: Array<ModelOrderFilterInput | null> | null;
  or?: Array<ModelOrderFilterInput | null> | null;
  not?: ModelOrderFilterInput | null;
};

export type ModelOrderMessageFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  orderId?: ModelIDInput | null;
  senderId?: ModelIDInput | null;
  recepterID?: ModelIDInput | null;
  isRead?: ModelBooleanInput | null;
  time?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelOrderMessageFilterInput | null> | null;
  or?: Array<ModelOrderMessageFilterInput | null> | null;
  not?: ModelOrderMessageFilterInput | null;
};

export type ModelOrderPaymentFilterInput = {
  id?: ModelIDInput | null;
  orderId?: ModelIDInput | null;
  description?: ModelStringInput | null;
  date?: ModelStringInput | null;
  status?: ModelStringInput | null;
  amount?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelOrderPaymentFilterInput | null> | null;
  or?: Array<ModelOrderPaymentFilterInput | null> | null;
  not?: ModelOrderPaymentFilterInput | null;
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null;
  managerId?: ModelIDInput | null;
  and?: Array<ModelClientFilterInput | null> | null;
  or?: Array<ModelClientFilterInput | null> | null;
  not?: ModelClientFilterInput | null;
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null;
  projectCode?: ModelStringInput | null;
  clientId?: ModelIDInput | null;
  pmId?: ModelIDInput | null;
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
  paymentStatus?: ModelStringInput | null;
  transMemory?: ModelStringInput | null;
  transMemoryNames?: ModelStringInput | null;
  and?: Array<ModelProjectFilterInput | null> | null;
  or?: Array<ModelProjectFilterInput | null> | null;
  not?: ModelProjectFilterInput | null;
};

export type ModelQuoteFilterInput = {
  id?: ModelIDInput | null;
  direction?: ModelStringInput | null;
  projectId?: ModelIDInput | null;
  companyName?: ModelStringInput | null;
  companyAddress?: ModelStringInput | null;
  taxId?: ModelStringInput | null;
  tel?: ModelStringInput | null;
  mobile?: ModelStringInput | null;
  siteUrl?: ModelStringInput | null;
  clientName?: ModelStringInput | null;
  documentNo?: ModelStringInput | null;
  date?: ModelStringInput | null;
  credit?: ModelStringInput | null;
  dueDate?: ModelStringInput | null;
  seller?: ModelStringInput | null;
  reference?: ModelStringInput | null;
  projectName?: ModelStringInput | null;
  total?: ModelStringInput | null;
  discount?: ModelStringInput | null;
  totalAfterDiscount?: ModelStringInput | null;
  vat?: ModelStringInput | null;
  grandTotal?: ModelStringInput | null;
  remark?: ModelStringInput | null;
  status?: ModelStringInput | null;
  collectionTerm?: ModelStringInput | null;
  financeString?: ModelStringInput | null;
  and?: Array<ModelQuoteFilterInput | null> | null;
  or?: Array<ModelQuoteFilterInput | null> | null;
  not?: ModelQuoteFilterInput | null;
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null;
  paymentId?: ModelIDInput | null;
  services?: ModelStringInput | null;
  languages?: ModelStringInput | null;
  stratDate?: ModelStringInput | null;
  deliveryDate?: ModelStringInput | null;
  description?: ModelStringInput | null;
  quantity?: ModelStringInput | null;
  unit?: ModelStringInput | null;
  pricePerUnit?: ModelFloatInput | null;
  amount?: ModelFloatInput | null;
  currency?: ModelStringInput | null;
  and?: Array<ModelItemFilterInput | null> | null;
  or?: Array<ModelItemFilterInput | null> | null;
  not?: ModelItemFilterInput | null;
};

export type ModelInvoiceFilterInput = {
  id?: ModelIDInput | null;
  direction?: ModelStringInput | null;
  projectId?: ModelIDInput | null;
  companyName?: ModelStringInput | null;
  companyAddress?: ModelStringInput | null;
  taxId?: ModelStringInput | null;
  tel?: ModelStringInput | null;
  mobile?: ModelStringInput | null;
  siteUrl?: ModelStringInput | null;
  clientName?: ModelStringInput | null;
  documentNo?: ModelStringInput | null;
  date?: ModelStringInput | null;
  credit?: ModelStringInput | null;
  dueDate?: ModelStringInput | null;
  seller?: ModelStringInput | null;
  reference?: ModelStringInput | null;
  projectName?: ModelStringInput | null;
  total?: ModelStringInput | null;
  discount?: ModelStringInput | null;
  totalAfterDiscount?: ModelStringInput | null;
  vat?: ModelStringInput | null;
  grandTotal?: ModelStringInput | null;
  remark?: ModelStringInput | null;
  status?: ModelStringInput | null;
  collectionTerm?: ModelStringInput | null;
  financeString?: ModelStringInput | null;
  and?: Array<ModelInvoiceFilterInput | null> | null;
  or?: Array<ModelInvoiceFilterInput | null> | null;
  not?: ModelInvoiceFilterInput | null;
};

export type ModelJobFilterInput = {
  id?: ModelIDInput | null;
  projectId?: ModelIDInput | null;
  filename?: ModelStringInput | null;
  service?: ModelStringInput | null;
  wordCount?: ModelFloatInput | null;
  due?: ModelStringInput | null;
  source?: ModelStringInput | null;
  target?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelJobFilterInput | null> | null;
  or?: Array<ModelJobFilterInput | null> | null;
  not?: ModelJobFilterInput | null;
};

export type ModelSegmentFilterInput = {
  id?: ModelIDInput | null;
  jobId?: ModelIDInput | null;
  source?: ModelStringInput | null;
  target?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelSegmentFilterInput | null> | null;
  or?: Array<ModelSegmentFilterInput | null> | null;
  not?: ModelSegmentFilterInput | null;
};

export type ModelSmallTaskFilterInput = {
  id?: ModelIDInput | null;
  jobId?: ModelIDInput | null;
  projectId?: ModelIDInput | null;
  wordsCount?: ModelFloatInput | null;
  serviceName?: ModelStringInput | null;
  freelancerId?: ModelIDInput | null;
  rate?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelSmallTaskFilterInput | null> | null;
  or?: Array<ModelSmallTaskFilterInput | null> | null;
  not?: ModelSmallTaskFilterInput | null;
};

export type ModelProjectSmallTaskRelationFilterInput = {
  id?: ModelIDInput | null;
  freelancerId?: ModelIDInput | null;
  projectId?: ModelIDInput | null;
  smallTaskId?: ModelIDInput | null;
  and?: Array<ModelProjectSmallTaskRelationFilterInput | null> | null;
  or?: Array<ModelProjectSmallTaskRelationFilterInput | null> | null;
  not?: ModelProjectSmallTaskRelationFilterInput | null;
};

export type ModellinkFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  url?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModellinkFilterInput | null> | null;
  or?: Array<ModellinkFilterInput | null> | null;
  not?: ModellinkFilterInput | null;
};

export type ModelTeamInviteFilterInput = {
  id?: ModelIDInput | null;
  teamId?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelTeamInviteFilterInput | null> | null;
  or?: Array<ModelTeamInviteFilterInput | null> | null;
  not?: ModelTeamInviteFilterInput | null;
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null;
  managerId?: ModelIDInput | null;
  teamName?: ModelStringInput | null;
  and?: Array<ModelTeamFilterInput | null> | null;
  or?: Array<ModelTeamFilterInput | null> | null;
  not?: ModelTeamFilterInput | null;
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  managerId?: ModelIDInput | null;
  textContent?: ModelStringInput | null;
  link?: ModelStringInput | null;
  type?: ModelStringInput | null;
  flagShowHide?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
};

export type ModelConversationFilterInput = {
  id?: ModelIDInput | null;
  nextConversation?: ModelIDInput | null;
  firstUserId?: ModelIDInput | null;
  secondUserId?: ModelIDInput | null;
  badge?: ModelFloatInput | null;
  and?: Array<ModelConversationFilterInput | null> | null;
  or?: Array<ModelConversationFilterInput | null> | null;
  not?: ModelConversationFilterInput | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  conversationId?: ModelIDInput | null;
  senderId?: ModelIDInput | null;
  recepterID?: ModelIDInput | null;
  isRead?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelCollectionFilterInput = {
  id?: ModelIDInput | null;
  method?: ModelStringInput | null;
  bankDate?: ModelStringInput | null;
  netAmount?: ModelStringInput | null;
  currency?: ModelStringInput | null;
  fxrate?: ModelStringInput | null;
  amount?: ModelStringInput | null;
  managerId?: ModelIDInput | null;
  and?: Array<ModelCollectionFilterInput | null> | null;
  or?: Array<ModelCollectionFilterInput | null> | null;
  not?: ModelCollectionFilterInput | null;
};

export type ModelServiceFilterInput = {
  id?: ModelIDInput | null;
  managerId?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  workflow?: ModelStringInput | null;
  and?: Array<ModelServiceFilterInput | null> | null;
  or?: Array<ModelServiceFilterInput | null> | null;
  not?: ModelServiceFilterInput | null;
};

export type ModelRateFilterInput = {
  id?: ModelIDInput | null;
  managerId?: ModelIDInput | null;
  clientId?: ModelIDInput | null;
  clientName?: ModelStringInput | null;
  service?: ModelStringInput | null;
  languagePair?: ModelStringInput | null;
  specialization?: ModelStringInput | null;
  rate?: ModelStringInput | null;
  currency?: ModelStringInput | null;
  unit?: ModelStringInput | null;
  and?: Array<ModelRateFilterInput | null> | null;
  or?: Array<ModelRateFilterInput | null> | null;
  not?: ModelRateFilterInput | null;
};

export type ModelnetRateFilterInput = {
  id?: ModelIDInput | null;
  clientId?: ModelIDInput | null;
  tmRepetitions?: ModelStringInput | null;
  mtRepetitions?: ModelStringInput | null;
  tmOverHundred?: ModelStringInput | null;
  mtOverHundred?: ModelStringInput | null;
  tmHundred?: ModelStringInput | null;
  mthundred?: ModelStringInput | null;
  tmNineFive?: ModelStringInput | null;
  mtNineFive?: ModelStringInput | null;
  tmEightFive?: ModelStringInput | null;
  mtEightFive?: ModelStringInput | null;
  tmSevenFive?: ModelStringInput | null;
  mtSevenFive?: ModelStringInput | null;
  tmFive?: ModelStringInput | null;
  mtFive?: ModelStringInput | null;
  tmNewWord?: ModelStringInput | null;
  mtNewWord?: ModelStringInput | null;
  and?: Array<ModelnetRateFilterInput | null> | null;
  or?: Array<ModelnetRateFilterInput | null> | null;
  not?: ModelnetRateFilterInput | null;
};

export type ModelTransMemoryFilterInput = {
  id?: ModelIDInput | null;
  managerId?: ModelIDInput | null;
  filename?: ModelStringInput | null;
  name?: ModelStringInput | null;
  source?: ModelStringInput | null;
  target?: ModelStringInput | null;
  clientId?: ModelIDInput | null;
  clientName?: ModelStringInput | null;
  and?: Array<ModelTransMemoryFilterInput | null> | null;
  or?: Array<ModelTransMemoryFilterInput | null> | null;
  not?: ModelTransMemoryFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelIDKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  role: string | null;
  profile: {
    __typename: "Profile";
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
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
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
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
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateOrderMutation = {
  __typename: "Order";
  id: string;
  clientId: string | null;
  orderName: string | null;
  orderServices: Array<string | null> | null;
  orderSourceLanguage: string | null;
  orderTargetLanguage: string | null;
  orderSubject: string | null;
  orderDeadline: string | null;
  orderQuntity: string | null;
  orderUnit: string | null;
  orderBestRate: string | null;
  orderCurrency: string | null;
  orderProjectMore: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderMutation = {
  __typename: "Order";
  id: string;
  clientId: string | null;
  orderName: string | null;
  orderServices: Array<string | null> | null;
  orderSourceLanguage: string | null;
  orderTargetLanguage: string | null;
  orderSubject: string | null;
  orderDeadline: string | null;
  orderQuntity: string | null;
  orderUnit: string | null;
  orderBestRate: string | null;
  orderCurrency: string | null;
  orderProjectMore: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteOrderMutation = {
  __typename: "Order";
  id: string;
  clientId: string | null;
  orderName: string | null;
  orderServices: Array<string | null> | null;
  orderSourceLanguage: string | null;
  orderTargetLanguage: string | null;
  orderSubject: string | null;
  orderDeadline: string | null;
  orderQuntity: string | null;
  orderUnit: string | null;
  orderBestRate: string | null;
  orderCurrency: string | null;
  orderProjectMore: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateOrderMessageMutation = {
  __typename: "OrderMessage";
  id: string;
  content: string;
  orderId: string;
  senderId: string;
  recepterID: string;
  isRead: boolean;
  time: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderMessageMutation = {
  __typename: "OrderMessage";
  id: string;
  content: string;
  orderId: string;
  senderId: string;
  recepterID: string;
  isRead: boolean;
  time: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteOrderMessageMutation = {
  __typename: "OrderMessage";
  id: string;
  content: string;
  orderId: string;
  senderId: string;
  recepterID: string;
  isRead: boolean;
  time: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateOrderPaymentMutation = {
  __typename: "OrderPayment";
  id: string;
  orderId: string;
  description: string;
  date: string | null;
  status: string | null;
  amount: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateOrderPaymentMutation = {
  __typename: "OrderPayment";
  id: string;
  orderId: string;
  description: string;
  date: string | null;
  status: string | null;
  amount: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteOrderPaymentMutation = {
  __typename: "OrderPayment";
  id: string;
  orderId: string;
  description: string;
  date: string | null;
  status: string | null;
  amount: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateClientMutation = {
  __typename: "Client";
  id: string;
  managerId: string;
  profile: {
    __typename: "Profile";
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClientMutation = {
  __typename: "Client";
  id: string;
  managerId: string;
  profile: {
    __typename: "Profile";
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteClientMutation = {
  __typename: "Client";
  id: string;
  managerId: string;
  profile: {
    __typename: "Profile";
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectMutation = {
  __typename: "Project";
  id: string;
  projectCode: string | null;
  clientId: string;
  client: {
    __typename: "Client";
    id: string;
    managerId: string;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  pmId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: Array<string | null> | null;
  serviceType: Array<string | null> | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  paymentStatus: string | null;
  quotes: {
    __typename: "ModelQuoteConnection";
    items: Array<{
      __typename: "Quote";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  invoices: {
    __typename: "ModelInvoiceConnection";
    items: Array<{
      __typename: "Invoice";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transMemory: Array<string | null> | null;
  transMemoryNames: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectMutation = {
  __typename: "Project";
  id: string;
  projectCode: string | null;
  clientId: string;
  client: {
    __typename: "Client";
    id: string;
    managerId: string;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  pmId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: Array<string | null> | null;
  serviceType: Array<string | null> | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  paymentStatus: string | null;
  quotes: {
    __typename: "ModelQuoteConnection";
    items: Array<{
      __typename: "Quote";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  invoices: {
    __typename: "ModelInvoiceConnection";
    items: Array<{
      __typename: "Invoice";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transMemory: Array<string | null> | null;
  transMemoryNames: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectMutation = {
  __typename: "Project";
  id: string;
  projectCode: string | null;
  clientId: string;
  client: {
    __typename: "Client";
    id: string;
    managerId: string;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  pmId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: Array<string | null> | null;
  serviceType: Array<string | null> | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  paymentStatus: string | null;
  quotes: {
    __typename: "ModelQuoteConnection";
    items: Array<{
      __typename: "Quote";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  invoices: {
    __typename: "ModelInvoiceConnection";
    items: Array<{
      __typename: "Invoice";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transMemory: Array<string | null> | null;
  transMemoryNames: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateQuoteMutation = {
  __typename: "Quote";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateQuoteMutation = {
  __typename: "Quote";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteQuoteMutation = {
  __typename: "Quote";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateItemMutation = {
  __typename: "Item";
  id: string;
  paymentId: string;
  services: string | null;
  languages: string | null;
  stratDate: string | null;
  deliveryDate: string | null;
  description: string | null;
  quantity: string | null;
  unit: string | null;
  pricePerUnit: number | null;
  amount: number | null;
  currency: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateItemMutation = {
  __typename: "Item";
  id: string;
  paymentId: string;
  services: string | null;
  languages: string | null;
  stratDate: string | null;
  deliveryDate: string | null;
  description: string | null;
  quantity: string | null;
  unit: string | null;
  pricePerUnit: number | null;
  amount: number | null;
  currency: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteItemMutation = {
  __typename: "Item";
  id: string;
  paymentId: string;
  services: string | null;
  languages: string | null;
  stratDate: string | null;
  deliveryDate: string | null;
  description: string | null;
  quantity: string | null;
  unit: string | null;
  pricePerUnit: number | null;
  amount: number | null;
  currency: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateInvoiceMutation = {
  __typename: "Invoice";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateInvoiceMutation = {
  __typename: "Invoice";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteInvoiceMutation = {
  __typename: "Invoice";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateJobMutation = {
  __typename: "Job";
  id: string;
  projectId: string;
  filename: string | null;
  service: string | null;
  wordCount: number | null;
  tasks: {
    __typename: "ModelSmallTaskConnection";
    items: Array<{
      __typename: "SmallTask";
      id: string;
      jobId: string;
      projectId: string;
      wordsCount: number | null;
      serviceName: string;
      freelancerId: string;
      rate: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  due: string | null;
  source: string | null;
  target: string | null;
  segments: {
    __typename: "ModelSegmentConnection";
    items: Array<{
      __typename: "Segment";
      id: string;
      jobId: string;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  process: Array<{
    __typename: "Progress";
    serviceName: string | null;
    progress: string | null;
  } | null> | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateJobMutation = {
  __typename: "Job";
  id: string;
  projectId: string;
  filename: string | null;
  service: string | null;
  wordCount: number | null;
  tasks: {
    __typename: "ModelSmallTaskConnection";
    items: Array<{
      __typename: "SmallTask";
      id: string;
      jobId: string;
      projectId: string;
      wordsCount: number | null;
      serviceName: string;
      freelancerId: string;
      rate: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  due: string | null;
  source: string | null;
  target: string | null;
  segments: {
    __typename: "ModelSegmentConnection";
    items: Array<{
      __typename: "Segment";
      id: string;
      jobId: string;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  process: Array<{
    __typename: "Progress";
    serviceName: string | null;
    progress: string | null;
  } | null> | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteJobMutation = {
  __typename: "Job";
  id: string;
  projectId: string;
  filename: string | null;
  service: string | null;
  wordCount: number | null;
  tasks: {
    __typename: "ModelSmallTaskConnection";
    items: Array<{
      __typename: "SmallTask";
      id: string;
      jobId: string;
      projectId: string;
      wordsCount: number | null;
      serviceName: string;
      freelancerId: string;
      rate: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  due: string | null;
  source: string | null;
  target: string | null;
  segments: {
    __typename: "ModelSegmentConnection";
    items: Array<{
      __typename: "Segment";
      id: string;
      jobId: string;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  process: Array<{
    __typename: "Progress";
    serviceName: string | null;
    progress: string | null;
  } | null> | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateSegmentMutation = {
  __typename: "Segment";
  id: string;
  jobId: string;
  source: string | null;
  target: string | null;
  status: string | null;
  segmentService: Array<{
    __typename: "SegmentService";
    serviceName: string | null;
    target: string | null;
    freelancerId: string;
    status: string | null;
    freelancerEmail: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSegmentMutation = {
  __typename: "Segment";
  id: string;
  jobId: string;
  source: string | null;
  target: string | null;
  status: string | null;
  segmentService: Array<{
    __typename: "SegmentService";
    serviceName: string | null;
    target: string | null;
    freelancerId: string;
    status: string | null;
    freelancerEmail: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSegmentMutation = {
  __typename: "Segment";
  id: string;
  jobId: string;
  source: string | null;
  target: string | null;
  status: string | null;
  segmentService: Array<{
    __typename: "SegmentService";
    serviceName: string | null;
    target: string | null;
    freelancerId: string;
    status: string | null;
    freelancerEmail: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateSmallTaskMutation = {
  __typename: "SmallTask";
  id: string;
  jobId: string;
  job: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  projectId: string;
  wordsCount: number | null;
  serviceName: string;
  freelancerId: string;
  freelancer: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tasks: Array<{
    __typename: "Task";
    start: number | null;
    end: number | null;
    stringOfTask: string | null;
  } | null> | null;
  rate: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSmallTaskMutation = {
  __typename: "SmallTask";
  id: string;
  jobId: string;
  job: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  projectId: string;
  wordsCount: number | null;
  serviceName: string;
  freelancerId: string;
  freelancer: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tasks: Array<{
    __typename: "Task";
    start: number | null;
    end: number | null;
    stringOfTask: string | null;
  } | null> | null;
  rate: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteSmallTaskMutation = {
  __typename: "SmallTask";
  id: string;
  jobId: string;
  job: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  projectId: string;
  wordsCount: number | null;
  serviceName: string;
  freelancerId: string;
  freelancer: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tasks: Array<{
    __typename: "Task";
    start: number | null;
    end: number | null;
    stringOfTask: string | null;
  } | null> | null;
  rate: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectSmallTaskRelationMutation = {
  __typename: "ProjectSmallTaskRelation";
  id: string;
  freelancerId: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smallTaskId: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectSmallTaskRelationMutation = {
  __typename: "ProjectSmallTaskRelation";
  id: string;
  freelancerId: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smallTaskId: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectSmallTaskRelationMutation = {
  __typename: "ProjectSmallTaskRelation";
  id: string;
  freelancerId: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smallTaskId: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateLinkMutation = {
  __typename: "link";
  id: string;
  name: string | null;
  url: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLinkMutation = {
  __typename: "link";
  id: string;
  name: string | null;
  url: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteLinkMutation = {
  __typename: "link";
  id: string;
  name: string | null;
  url: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTeamInviteMutation = {
  __typename: "TeamInvite";
  id: string;
  teamId: string;
  userId: string;
  team: {
    __typename: "Team";
    id: string;
    managerId: string;
    teamName: string | null;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invites: {
      __typename: "ModelTeamInviteConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTeamInviteMutation = {
  __typename: "TeamInvite";
  id: string;
  teamId: string;
  userId: string;
  team: {
    __typename: "Team";
    id: string;
    managerId: string;
    teamName: string | null;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invites: {
      __typename: "ModelTeamInviteConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTeamInviteMutation = {
  __typename: "TeamInvite";
  id: string;
  teamId: string;
  userId: string;
  team: {
    __typename: "Team";
    id: string;
    managerId: string;
    teamName: string | null;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invites: {
      __typename: "ModelTeamInviteConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTeamMutation = {
  __typename: "Team";
  id: string;
  managerId: string;
  teamName: string | null;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  invites: {
    __typename: "ModelTeamInviteConnection";
    items: Array<{
      __typename: "TeamInvite";
      id: string;
      teamId: string;
      userId: string;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTeamMutation = {
  __typename: "Team";
  id: string;
  managerId: string;
  teamName: string | null;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  invites: {
    __typename: "ModelTeamInviteConnection";
    items: Array<{
      __typename: "TeamInvite";
      id: string;
      teamId: string;
      userId: string;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTeamMutation = {
  __typename: "Team";
  id: string;
  managerId: string;
  teamName: string | null;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  invites: {
    __typename: "ModelTeamInviteConnection";
    items: Array<{
      __typename: "TeamInvite";
      id: string;
      teamId: string;
      userId: string;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateEventMutation = {
  __typename: "Event";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  managerId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  textContent: string | null;
  link: string | null;
  type: string;
  flagShowHide: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEventMutation = {
  __typename: "Event";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  managerId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  textContent: string | null;
  link: string | null;
  type: string;
  flagShowHide: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEventMutation = {
  __typename: "Event";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  managerId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  textContent: string | null;
  link: string | null;
  type: string;
  flagShowHide: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateConversationMutation = {
  __typename: "Conversation";
  id: string;
  nextConversation: string | null;
  firstUserId: string;
  secondUserId: string;
  secondUser: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      conversationId: string;
      senderId: string;
      recepterID: string;
      isRead: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  badge: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateConversationMutation = {
  __typename: "Conversation";
  id: string;
  nextConversation: string | null;
  firstUserId: string;
  secondUserId: string;
  secondUser: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      conversationId: string;
      senderId: string;
      recepterID: string;
      isRead: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  badge: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteConversationMutation = {
  __typename: "Conversation";
  id: string;
  nextConversation: string | null;
  firstUserId: string;
  secondUserId: string;
  secondUser: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      conversationId: string;
      senderId: string;
      recepterID: string;
      isRead: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  badge: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  conversationId: string;
  senderId: string;
  recepterID: string;
  isRead: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  conversationId: string;
  senderId: string;
  recepterID: string;
  isRead: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  content: string;
  conversationId: string;
  senderId: string;
  recepterID: string;
  isRead: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateCollectionMutation = {
  __typename: "Collection";
  id: string;
  method: string | null;
  bankDate: string | null;
  netAmount: string | null;
  currency: string | null;
  fxrate: string | null;
  amount: string | null;
  managerId: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCollectionMutation = {
  __typename: "Collection";
  id: string;
  method: string | null;
  bankDate: string | null;
  netAmount: string | null;
  currency: string | null;
  fxrate: string | null;
  amount: string | null;
  managerId: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCollectionMutation = {
  __typename: "Collection";
  id: string;
  method: string | null;
  bankDate: string | null;
  netAmount: string | null;
  currency: string | null;
  fxrate: string | null;
  amount: string | null;
  managerId: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateServiceMutation = {
  __typename: "Service";
  id: string;
  managerId: string;
  name: string | null;
  description: string | null;
  workflow: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateServiceMutation = {
  __typename: "Service";
  id: string;
  managerId: string;
  name: string | null;
  description: string | null;
  workflow: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteServiceMutation = {
  __typename: "Service";
  id: string;
  managerId: string;
  name: string | null;
  description: string | null;
  workflow: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRateMutation = {
  __typename: "Rate";
  id: string;
  managerId: string;
  clientId: string;
  clientName: string | null;
  service: string | null;
  languagePair: string | null;
  specialization: string | null;
  rate: string | null;
  currency: string | null;
  unit: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRateMutation = {
  __typename: "Rate";
  id: string;
  managerId: string;
  clientId: string;
  clientName: string | null;
  service: string | null;
  languagePair: string | null;
  specialization: string | null;
  rate: string | null;
  currency: string | null;
  unit: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRateMutation = {
  __typename: "Rate";
  id: string;
  managerId: string;
  clientId: string;
  clientName: string | null;
  service: string | null;
  languagePair: string | null;
  specialization: string | null;
  rate: string | null;
  currency: string | null;
  unit: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateNetRateMutation = {
  __typename: "netRate";
  id: string;
  clientId: string;
  tmRepetitions: string | null;
  mtRepetitions: string | null;
  tmOverHundred: string | null;
  mtOverHundred: string | null;
  tmHundred: string | null;
  mthundred: string | null;
  tmNineFive: string | null;
  mtNineFive: string | null;
  tmEightFive: string | null;
  mtEightFive: string | null;
  tmSevenFive: string | null;
  mtSevenFive: string | null;
  tmFive: string | null;
  mtFive: string | null;
  tmNewWord: string | null;
  mtNewWord: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateNetRateMutation = {
  __typename: "netRate";
  id: string;
  clientId: string;
  tmRepetitions: string | null;
  mtRepetitions: string | null;
  tmOverHundred: string | null;
  mtOverHundred: string | null;
  tmHundred: string | null;
  mthundred: string | null;
  tmNineFive: string | null;
  mtNineFive: string | null;
  tmEightFive: string | null;
  mtEightFive: string | null;
  tmSevenFive: string | null;
  mtSevenFive: string | null;
  tmFive: string | null;
  mtFive: string | null;
  tmNewWord: string | null;
  mtNewWord: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteNetRateMutation = {
  __typename: "netRate";
  id: string;
  clientId: string;
  tmRepetitions: string | null;
  mtRepetitions: string | null;
  tmOverHundred: string | null;
  mtOverHundred: string | null;
  tmHundred: string | null;
  mthundred: string | null;
  tmNineFive: string | null;
  mtNineFive: string | null;
  tmEightFive: string | null;
  mtEightFive: string | null;
  tmSevenFive: string | null;
  mtSevenFive: string | null;
  tmFive: string | null;
  mtFive: string | null;
  tmNewWord: string | null;
  mtNewWord: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTransMemoryMutation = {
  __typename: "TransMemory";
  id: string;
  managerId: string;
  filename: string | null;
  name: string | null;
  source: string | null;
  target: string | null;
  clientId: string | null;
  clientName: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTransMemoryMutation = {
  __typename: "TransMemory";
  id: string;
  managerId: string;
  filename: string | null;
  name: string | null;
  source: string | null;
  target: string | null;
  clientId: string | null;
  clientName: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTransMemoryMutation = {
  __typename: "TransMemory";
  id: string;
  managerId: string;
  filename: string | null;
  name: string | null;
  source: string | null;
  target: string | null;
  clientId: string | null;
  clientName: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  role: string | null;
  profile: {
    __typename: "Profile";
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
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
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrderQuery = {
  __typename: "Order";
  id: string;
  clientId: string | null;
  orderName: string | null;
  orderServices: Array<string | null> | null;
  orderSourceLanguage: string | null;
  orderTargetLanguage: string | null;
  orderSubject: string | null;
  orderDeadline: string | null;
  orderQuntity: string | null;
  orderUnit: string | null;
  orderBestRate: string | null;
  orderCurrency: string | null;
  orderProjectMore: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListOrdersQuery = {
  __typename: "ModelOrderConnection";
  items: Array<{
    __typename: "Order";
    id: string;
    clientId: string | null;
    orderName: string | null;
    orderServices: Array<string | null> | null;
    orderSourceLanguage: string | null;
    orderTargetLanguage: string | null;
    orderSubject: string | null;
    orderDeadline: string | null;
    orderQuntity: string | null;
    orderUnit: string | null;
    orderBestRate: string | null;
    orderCurrency: string | null;
    orderProjectMore: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrderMessageQuery = {
  __typename: "OrderMessage";
  id: string;
  content: string;
  orderId: string;
  senderId: string;
  recepterID: string;
  isRead: boolean;
  time: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListOrderMessagesQuery = {
  __typename: "ModelOrderMessageConnection";
  items: Array<{
    __typename: "OrderMessage";
    id: string;
    content: string;
    orderId: string;
    senderId: string;
    recepterID: string;
    isRead: boolean;
    time: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrderPaymentQuery = {
  __typename: "OrderPayment";
  id: string;
  orderId: string;
  description: string;
  date: string | null;
  status: string | null;
  amount: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListOrderPaymentsQuery = {
  __typename: "ModelOrderPaymentConnection";
  items: Array<{
    __typename: "OrderPayment";
    id: string;
    orderId: string;
    description: string;
    date: string | null;
    status: string | null;
    amount: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetClientQuery = {
  __typename: "Client";
  id: string;
  managerId: string;
  profile: {
    __typename: "Profile";
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListClientsQuery = {
  __typename: "ModelClientConnection";
  items: Array<{
    __typename: "Client";
    id: string;
    managerId: string;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetProjectQuery = {
  __typename: "Project";
  id: string;
  projectCode: string | null;
  clientId: string;
  client: {
    __typename: "Client";
    id: string;
    managerId: string;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  pmId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: Array<string | null> | null;
  serviceType: Array<string | null> | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  paymentStatus: string | null;
  quotes: {
    __typename: "ModelQuoteConnection";
    items: Array<{
      __typename: "Quote";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  invoices: {
    __typename: "ModelInvoiceConnection";
    items: Array<{
      __typename: "Invoice";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transMemory: Array<string | null> | null;
  transMemoryNames: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectsQuery = {
  __typename: "ModelProjectConnection";
  items: Array<{
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetQuoteQuery = {
  __typename: "Quote";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListQuotesQuery = {
  __typename: "ModelQuoteConnection";
  items: Array<{
    __typename: "Quote";
    id: string;
    direction: string;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      projectCode: string | null;
      clientId: string;
      pmId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: Array<string | null> | null;
      serviceType: Array<string | null> | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      paymentStatus: string | null;
      transMemory: Array<string | null> | null;
      transMemoryNames: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    companyName: string | null;
    companyAddress: string | null;
    taxId: string | null;
    tel: string | null;
    mobile: string | null;
    siteUrl: string | null;
    clientName: string | null;
    documentNo: string | null;
    date: string | null;
    credit: string | null;
    dueDate: string | null;
    seller: string | null;
    reference: string | null;
    projectName: string | null;
    total: string | null;
    discount: string | null;
    totalAfterDiscount: string | null;
    vat: string | null;
    grandTotal: string | null;
    remark: string | null;
    items: {
      __typename: "ModelItemConnection";
      nextToken: string | null;
    } | null;
    status: string | null;
    collectionTerm: string | null;
    financeString: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetItemQuery = {
  __typename: "Item";
  id: string;
  paymentId: string;
  services: string | null;
  languages: string | null;
  stratDate: string | null;
  deliveryDate: string | null;
  description: string | null;
  quantity: string | null;
  unit: string | null;
  pricePerUnit: number | null;
  amount: number | null;
  currency: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListItemsQuery = {
  __typename: "ModelItemConnection";
  items: Array<{
    __typename: "Item";
    id: string;
    paymentId: string;
    services: string | null;
    languages: string | null;
    stratDate: string | null;
    deliveryDate: string | null;
    description: string | null;
    quantity: string | null;
    unit: string | null;
    pricePerUnit: number | null;
    amount: number | null;
    currency: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetInvoiceQuery = {
  __typename: "Invoice";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListInvoicesQuery = {
  __typename: "ModelInvoiceConnection";
  items: Array<{
    __typename: "Invoice";
    id: string;
    direction: string;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      projectCode: string | null;
      clientId: string;
      pmId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: Array<string | null> | null;
      serviceType: Array<string | null> | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      paymentStatus: string | null;
      transMemory: Array<string | null> | null;
      transMemoryNames: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    companyName: string | null;
    companyAddress: string | null;
    taxId: string | null;
    tel: string | null;
    mobile: string | null;
    siteUrl: string | null;
    clientName: string | null;
    documentNo: string | null;
    date: string | null;
    credit: string | null;
    dueDate: string | null;
    seller: string | null;
    reference: string | null;
    projectName: string | null;
    total: string | null;
    discount: string | null;
    totalAfterDiscount: string | null;
    vat: string | null;
    grandTotal: string | null;
    remark: string | null;
    items: {
      __typename: "ModelItemConnection";
      nextToken: string | null;
    } | null;
    status: string | null;
    collectionTerm: string | null;
    financeString: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetJobQuery = {
  __typename: "Job";
  id: string;
  projectId: string;
  filename: string | null;
  service: string | null;
  wordCount: number | null;
  tasks: {
    __typename: "ModelSmallTaskConnection";
    items: Array<{
      __typename: "SmallTask";
      id: string;
      jobId: string;
      projectId: string;
      wordsCount: number | null;
      serviceName: string;
      freelancerId: string;
      rate: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  due: string | null;
  source: string | null;
  target: string | null;
  segments: {
    __typename: "ModelSegmentConnection";
    items: Array<{
      __typename: "Segment";
      id: string;
      jobId: string;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  process: Array<{
    __typename: "Progress";
    serviceName: string | null;
    progress: string | null;
  } | null> | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListJobsQuery = {
  __typename: "ModelJobConnection";
  items: Array<{
    __typename: "Job";
    id: string;
    projectId: string;
    filename: string | null;
    service: string | null;
    wordCount: number | null;
    tasks: {
      __typename: "ModelSmallTaskConnection";
      nextToken: string | null;
    } | null;
    due: string | null;
    source: string | null;
    target: string | null;
    segments: {
      __typename: "ModelSegmentConnection";
      nextToken: string | null;
    } | null;
    process: Array<{
      __typename: "Progress";
      serviceName: string | null;
      progress: string | null;
    } | null> | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetSegmentQuery = {
  __typename: "Segment";
  id: string;
  jobId: string;
  source: string | null;
  target: string | null;
  status: string | null;
  segmentService: Array<{
    __typename: "SegmentService";
    serviceName: string | null;
    target: string | null;
    freelancerId: string;
    status: string | null;
    freelancerEmail: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListSegmentsQuery = {
  __typename: "ModelSegmentConnection";
  items: Array<{
    __typename: "Segment";
    id: string;
    jobId: string;
    source: string | null;
    target: string | null;
    status: string | null;
    segmentService: Array<{
      __typename: "SegmentService";
      serviceName: string | null;
      target: string | null;
      freelancerId: string;
      status: string | null;
      freelancerEmail: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetSmallTaskQuery = {
  __typename: "SmallTask";
  id: string;
  jobId: string;
  job: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  projectId: string;
  wordsCount: number | null;
  serviceName: string;
  freelancerId: string;
  freelancer: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tasks: Array<{
    __typename: "Task";
    start: number | null;
    end: number | null;
    stringOfTask: string | null;
  } | null> | null;
  rate: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListSmallTasksQuery = {
  __typename: "ModelSmallTaskConnection";
  items: Array<{
    __typename: "SmallTask";
    id: string;
    jobId: string;
    job: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    projectId: string;
    wordsCount: number | null;
    serviceName: string;
    freelancerId: string;
    freelancer: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    tasks: Array<{
      __typename: "Task";
      start: number | null;
      end: number | null;
      stringOfTask: string | null;
    } | null> | null;
    rate: string | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetProjectSmallTaskRelationQuery = {
  __typename: "ProjectSmallTaskRelation";
  id: string;
  freelancerId: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smallTaskId: string;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectSmallTaskRelationsQuery = {
  __typename: "ModelProjectSmallTaskRelationConnection";
  items: Array<{
    __typename: "ProjectSmallTaskRelation";
    id: string;
    freelancerId: string;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      projectCode: string | null;
      clientId: string;
      pmId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: Array<string | null> | null;
      serviceType: Array<string | null> | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      paymentStatus: string | null;
      transMemory: Array<string | null> | null;
      transMemoryNames: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    smallTaskId: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetLinkQuery = {
  __typename: "link";
  id: string;
  name: string | null;
  url: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListLinksQuery = {
  __typename: "ModellinkConnection";
  items: Array<{
    __typename: "link";
    id: string;
    name: string | null;
    url: string | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTeamInviteQuery = {
  __typename: "TeamInvite";
  id: string;
  teamId: string;
  userId: string;
  team: {
    __typename: "Team";
    id: string;
    managerId: string;
    teamName: string | null;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invites: {
      __typename: "ModelTeamInviteConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTeamInvitesQuery = {
  __typename: "ModelTeamInviteConnection";
  items: Array<{
    __typename: "TeamInvite";
    id: string;
    teamId: string;
    userId: string;
    team: {
      __typename: "Team";
      id: string;
      managerId: string;
      teamName: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTeamQuery = {
  __typename: "Team";
  id: string;
  managerId: string;
  teamName: string | null;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  invites: {
    __typename: "ModelTeamInviteConnection";
    items: Array<{
      __typename: "TeamInvite";
      id: string;
      teamId: string;
      userId: string;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTeamsQuery = {
  __typename: "ModelTeamConnection";
  items: Array<{
    __typename: "Team";
    id: string;
    managerId: string;
    teamName: string | null;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invites: {
      __typename: "ModelTeamInviteConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetEventQuery = {
  __typename: "Event";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  managerId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  textContent: string | null;
  link: string | null;
  type: string;
  flagShowHide: string;
  createdAt: string;
  updatedAt: string;
};

export type ListEventsQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
    id: string;
    userId: string;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    managerId: string;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    textContent: string | null;
    link: string | null;
    type: string;
    flagShowHide: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetConversationQuery = {
  __typename: "Conversation";
  id: string;
  nextConversation: string | null;
  firstUserId: string;
  secondUserId: string;
  secondUser: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      conversationId: string;
      senderId: string;
      recepterID: string;
      isRead: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  badge: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListConversationsQuery = {
  __typename: "ModelConversationConnection";
  items: Array<{
    __typename: "Conversation";
    id: string;
    nextConversation: string | null;
    firstUserId: string;
    secondUserId: string;
    secondUser: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    badge: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  content: string;
  conversationId: string;
  senderId: string;
  recepterID: string;
  isRead: string;
  createdAt: string;
  updatedAt: string;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    content: string;
    conversationId: string;
    senderId: string;
    recepterID: string;
    isRead: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCollectionQuery = {
  __typename: "Collection";
  id: string;
  method: string | null;
  bankDate: string | null;
  netAmount: string | null;
  currency: string | null;
  fxrate: string | null;
  amount: string | null;
  managerId: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCollectionsQuery = {
  __typename: "ModelCollectionConnection";
  items: Array<{
    __typename: "Collection";
    id: string;
    method: string | null;
    bankDate: string | null;
    netAmount: string | null;
    currency: string | null;
    fxrate: string | null;
    amount: string | null;
    managerId: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetServiceQuery = {
  __typename: "Service";
  id: string;
  managerId: string;
  name: string | null;
  description: string | null;
  workflow: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListServicesQuery = {
  __typename: "ModelServiceConnection";
  items: Array<{
    __typename: "Service";
    id: string;
    managerId: string;
    name: string | null;
    description: string | null;
    workflow: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetRateQuery = {
  __typename: "Rate";
  id: string;
  managerId: string;
  clientId: string;
  clientName: string | null;
  service: string | null;
  languagePair: string | null;
  specialization: string | null;
  rate: string | null;
  currency: string | null;
  unit: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRatesQuery = {
  __typename: "ModelRateConnection";
  items: Array<{
    __typename: "Rate";
    id: string;
    managerId: string;
    clientId: string;
    clientName: string | null;
    service: string | null;
    languagePair: string | null;
    specialization: string | null;
    rate: string | null;
    currency: string | null;
    unit: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetNetRateQuery = {
  __typename: "netRate";
  id: string;
  clientId: string;
  tmRepetitions: string | null;
  mtRepetitions: string | null;
  tmOverHundred: string | null;
  mtOverHundred: string | null;
  tmHundred: string | null;
  mthundred: string | null;
  tmNineFive: string | null;
  mtNineFive: string | null;
  tmEightFive: string | null;
  mtEightFive: string | null;
  tmSevenFive: string | null;
  mtSevenFive: string | null;
  tmFive: string | null;
  mtFive: string | null;
  tmNewWord: string | null;
  mtNewWord: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListNetRatesQuery = {
  __typename: "ModelnetRateConnection";
  items: Array<{
    __typename: "netRate";
    id: string;
    clientId: string;
    tmRepetitions: string | null;
    mtRepetitions: string | null;
    tmOverHundred: string | null;
    mtOverHundred: string | null;
    tmHundred: string | null;
    mthundred: string | null;
    tmNineFive: string | null;
    mtNineFive: string | null;
    tmEightFive: string | null;
    mtEightFive: string | null;
    tmSevenFive: string | null;
    mtSevenFive: string | null;
    tmFive: string | null;
    mtFive: string | null;
    tmNewWord: string | null;
    mtNewWord: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTransMemoryQuery = {
  __typename: "TransMemory";
  id: string;
  managerId: string;
  filename: string | null;
  name: string | null;
  source: string | null;
  target: string | null;
  clientId: string | null;
  clientName: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTransMemorysQuery = {
  __typename: "ModelTransMemoryConnection";
  items: Array<{
    __typename: "TransMemory";
    id: string;
    managerId: string;
    filename: string | null;
    name: string | null;
    source: string | null;
    target: string | null;
    clientId: string | null;
    clientName: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetUsersByUserRoleQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetClientOrderQuery = {
  __typename: "ModelOrderConnection";
  items: Array<{
    __typename: "Order";
    id: string;
    clientId: string | null;
    orderName: string | null;
    orderServices: Array<string | null> | null;
    orderSourceLanguage: string | null;
    orderTargetLanguage: string | null;
    orderSubject: string | null;
    orderDeadline: string | null;
    orderQuntity: string | null;
    orderUnit: string | null;
    orderBestRate: string | null;
    orderCurrency: string | null;
    orderProjectMore: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetMessageByOrderIdQuery = {
  __typename: "ModelOrderMessageConnection";
  items: Array<{
    __typename: "OrderMessage";
    id: string;
    content: string;
    orderId: string;
    senderId: string;
    recepterID: string;
    isRead: boolean;
    time: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetOrderPaymentByOrderIdQuery = {
  __typename: "ModelOrderPaymentConnection";
  items: Array<{
    __typename: "OrderPayment";
    id: string;
    orderId: string;
    description: string;
    date: string | null;
    status: string | null;
    amount: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetClientsByManagerIdQuery = {
  __typename: "ModelClientConnection";
  items: Array<{
    __typename: "Client";
    id: string;
    managerId: string;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetProjectsByClientIdQuery = {
  __typename: "ModelProjectConnection";
  items: Array<{
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetProjectsByPmIdQuery = {
  __typename: "ModelProjectConnection";
  items: Array<{
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetQuotesByporjectIdQuery = {
  __typename: "ModelQuoteConnection";
  items: Array<{
    __typename: "Quote";
    id: string;
    direction: string;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      projectCode: string | null;
      clientId: string;
      pmId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: Array<string | null> | null;
      serviceType: Array<string | null> | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      paymentStatus: string | null;
      transMemory: Array<string | null> | null;
      transMemoryNames: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    companyName: string | null;
    companyAddress: string | null;
    taxId: string | null;
    tel: string | null;
    mobile: string | null;
    siteUrl: string | null;
    clientName: string | null;
    documentNo: string | null;
    date: string | null;
    credit: string | null;
    dueDate: string | null;
    seller: string | null;
    reference: string | null;
    projectName: string | null;
    total: string | null;
    discount: string | null;
    totalAfterDiscount: string | null;
    vat: string | null;
    grandTotal: string | null;
    remark: string | null;
    items: {
      __typename: "ModelItemConnection";
      nextToken: string | null;
    } | null;
    status: string | null;
    collectionTerm: string | null;
    financeString: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetQuotesByporjectIdAndDirectionQuery = {
  __typename: "ModelQuoteConnection";
  items: Array<{
    __typename: "Quote";
    id: string;
    direction: string;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      projectCode: string | null;
      clientId: string;
      pmId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: Array<string | null> | null;
      serviceType: Array<string | null> | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      paymentStatus: string | null;
      transMemory: Array<string | null> | null;
      transMemoryNames: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    companyName: string | null;
    companyAddress: string | null;
    taxId: string | null;
    tel: string | null;
    mobile: string | null;
    siteUrl: string | null;
    clientName: string | null;
    documentNo: string | null;
    date: string | null;
    credit: string | null;
    dueDate: string | null;
    seller: string | null;
    reference: string | null;
    projectName: string | null;
    total: string | null;
    discount: string | null;
    totalAfterDiscount: string | null;
    vat: string | null;
    grandTotal: string | null;
    remark: string | null;
    items: {
      __typename: "ModelItemConnection";
      nextToken: string | null;
    } | null;
    status: string | null;
    collectionTerm: string | null;
    financeString: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetItemsByQuoteQuery = {
  __typename: "ModelItemConnection";
  items: Array<{
    __typename: "Item";
    id: string;
    paymentId: string;
    services: string | null;
    languages: string | null;
    stratDate: string | null;
    deliveryDate: string | null;
    description: string | null;
    quantity: string | null;
    unit: string | null;
    pricePerUnit: number | null;
    amount: number | null;
    currency: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetInvoiceByporjectIdQuery = {
  __typename: "ModelInvoiceConnection";
  items: Array<{
    __typename: "Invoice";
    id: string;
    direction: string;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      projectCode: string | null;
      clientId: string;
      pmId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: Array<string | null> | null;
      serviceType: Array<string | null> | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      paymentStatus: string | null;
      transMemory: Array<string | null> | null;
      transMemoryNames: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    companyName: string | null;
    companyAddress: string | null;
    taxId: string | null;
    tel: string | null;
    mobile: string | null;
    siteUrl: string | null;
    clientName: string | null;
    documentNo: string | null;
    date: string | null;
    credit: string | null;
    dueDate: string | null;
    seller: string | null;
    reference: string | null;
    projectName: string | null;
    total: string | null;
    discount: string | null;
    totalAfterDiscount: string | null;
    vat: string | null;
    grandTotal: string | null;
    remark: string | null;
    items: {
      __typename: "ModelItemConnection";
      nextToken: string | null;
    } | null;
    status: string | null;
    collectionTerm: string | null;
    financeString: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetInvoiceByporjectIdAndDirectionQuery = {
  __typename: "ModelInvoiceConnection";
  items: Array<{
    __typename: "Invoice";
    id: string;
    direction: string;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      projectCode: string | null;
      clientId: string;
      pmId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: Array<string | null> | null;
      serviceType: Array<string | null> | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      paymentStatus: string | null;
      transMemory: Array<string | null> | null;
      transMemoryNames: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    companyName: string | null;
    companyAddress: string | null;
    taxId: string | null;
    tel: string | null;
    mobile: string | null;
    siteUrl: string | null;
    clientName: string | null;
    documentNo: string | null;
    date: string | null;
    credit: string | null;
    dueDate: string | null;
    seller: string | null;
    reference: string | null;
    projectName: string | null;
    total: string | null;
    discount: string | null;
    totalAfterDiscount: string | null;
    vat: string | null;
    grandTotal: string | null;
    remark: string | null;
    items: {
      __typename: "ModelItemConnection";
      nextToken: string | null;
    } | null;
    status: string | null;
    collectionTerm: string | null;
    financeString: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetJobsByProjectIdQuery = {
  __typename: "ModelJobConnection";
  items: Array<{
    __typename: "Job";
    id: string;
    projectId: string;
    filename: string | null;
    service: string | null;
    wordCount: number | null;
    tasks: {
      __typename: "ModelSmallTaskConnection";
      nextToken: string | null;
    } | null;
    due: string | null;
    source: string | null;
    target: string | null;
    segments: {
      __typename: "ModelSegmentConnection";
      nextToken: string | null;
    } | null;
    process: Array<{
      __typename: "Progress";
      serviceName: string | null;
      progress: string | null;
    } | null> | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetSegmetsByJobIdQuery = {
  __typename: "ModelSegmentConnection";
  items: Array<{
    __typename: "Segment";
    id: string;
    jobId: string;
    source: string | null;
    target: string | null;
    status: string | null;
    segmentService: Array<{
      __typename: "SegmentService";
      serviceName: string | null;
      target: string | null;
      freelancerId: string;
      status: string | null;
      freelancerEmail: string | null;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTasksByJobIdQuery = {
  __typename: "ModelSmallTaskConnection";
  items: Array<{
    __typename: "SmallTask";
    id: string;
    jobId: string;
    job: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    projectId: string;
    wordsCount: number | null;
    serviceName: string;
    freelancerId: string;
    freelancer: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    tasks: Array<{
      __typename: "Task";
      start: number | null;
      end: number | null;
      stringOfTask: string | null;
    } | null> | null;
    rate: string | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTasksByJobIdAndServiceQuery = {
  __typename: "ModelSmallTaskConnection";
  items: Array<{
    __typename: "SmallTask";
    id: string;
    jobId: string;
    job: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    projectId: string;
    wordsCount: number | null;
    serviceName: string;
    freelancerId: string;
    freelancer: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    tasks: Array<{
      __typename: "Task";
      start: number | null;
      end: number | null;
      stringOfTask: string | null;
    } | null> | null;
    rate: string | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTasksByfreelancerIdQuery = {
  __typename: "ModelSmallTaskConnection";
  items: Array<{
    __typename: "SmallTask";
    id: string;
    jobId: string;
    job: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    projectId: string;
    wordsCount: number | null;
    serviceName: string;
    freelancerId: string;
    freelancer: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    tasks: Array<{
      __typename: "Task";
      start: number | null;
      end: number | null;
      stringOfTask: string | null;
    } | null> | null;
    rate: string | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTasksByfreelancerIdAndUserIdQuery = {
  __typename: "ModelSmallTaskConnection";
  items: Array<{
    __typename: "SmallTask";
    id: string;
    jobId: string;
    job: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    projectId: string;
    wordsCount: number | null;
    serviceName: string;
    freelancerId: string;
    freelancer: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    tasks: Array<{
      __typename: "Task";
      start: number | null;
      end: number | null;
      stringOfTask: string | null;
    } | null> | null;
    rate: string | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetFreelancerProjectQuery = {
  __typename: "ModelProjectSmallTaskRelationConnection";
  items: Array<{
    __typename: "ProjectSmallTaskRelation";
    id: string;
    freelancerId: string;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      projectCode: string | null;
      clientId: string;
      pmId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: Array<string | null> | null;
      serviceType: Array<string | null> | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      paymentStatus: string | null;
      transMemory: Array<string | null> | null;
      transMemoryNames: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    smallTaskId: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetRelationBySmallTaskQuery = {
  __typename: "ModelProjectSmallTaskRelationConnection";
  items: Array<{
    __typename: "ProjectSmallTaskRelation";
    id: string;
    freelancerId: string;
    projectId: string;
    project: {
      __typename: "Project";
      id: string;
      projectCode: string | null;
      clientId: string;
      pmId: string;
      name: string | null;
      description: string | null;
      budget: number | null;
      approvedBudget: number | null;
      sourceLanguage: string | null;
      targetLanguage: Array<string | null> | null;
      serviceType: Array<string | null> | null;
      dueDate: string | null;
      status: string | null;
      developmentStatus: string | null;
      paymentStatus: string | null;
      transMemory: Array<string | null> | null;
      transMemoryNames: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    smallTaskId: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTeamInvitebyTeamIdQuery = {
  __typename: "ModelTeamInviteConnection";
  items: Array<{
    __typename: "TeamInvite";
    id: string;
    teamId: string;
    userId: string;
    team: {
      __typename: "Team";
      id: string;
      managerId: string;
      teamName: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTeamInvitebyuserIdQuery = {
  __typename: "ModelTeamInviteConnection";
  items: Array<{
    __typename: "TeamInvite";
    id: string;
    teamId: string;
    userId: string;
    team: {
      __typename: "Team";
      id: string;
      managerId: string;
      teamName: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTeamByManagerIdQuery = {
  __typename: "ModelTeamConnection";
  items: Array<{
    __typename: "Team";
    id: string;
    managerId: string;
    teamName: string | null;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invites: {
      __typename: "ModelTeamInviteConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetEventByUserIdQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
    id: string;
    userId: string;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    managerId: string;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    textContent: string | null;
    link: string | null;
    type: string;
    flagShowHide: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetUnShownEventsQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
    id: string;
    userId: string;
    user: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    managerId: string;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    textContent: string | null;
    link: string | null;
    type: string;
    flagShowHide: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetConversationByUsersQuery = {
  __typename: "ModelConversationConnection";
  items: Array<{
    __typename: "Conversation";
    id: string;
    nextConversation: string | null;
    firstUserId: string;
    secondUserId: string;
    secondUser: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    badge: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetConversationByFirstUserQuery = {
  __typename: "ModelConversationConnection";
  items: Array<{
    __typename: "Conversation";
    id: string;
    nextConversation: string | null;
    firstUserId: string;
    secondUserId: string;
    secondUser: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    badge: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetConversationBySecondUserQuery = {
  __typename: "ModelConversationConnection";
  items: Array<{
    __typename: "Conversation";
    id: string;
    nextConversation: string | null;
    firstUserId: string;
    secondUserId: string;
    secondUser: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      nextToken: string | null;
    } | null;
    badge: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetMessageByConversationIdQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    content: string;
    conversationId: string;
    senderId: string;
    recepterID: string;
    isRead: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetUnReadMessageByUserQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    content: string;
    conversationId: string;
    senderId: string;
    recepterID: string;
    isRead: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserUnReadMessageByUserQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    content: string;
    conversationId: string;
    senderId: string;
    recepterID: string;
    isRead: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetManagerCollectionQuery = {
  __typename: "ModelCollectionConnection";
  items: Array<{
    __typename: "Collection";
    id: string;
    method: string | null;
    bankDate: string | null;
    netAmount: string | null;
    currency: string | null;
    fxrate: string | null;
    amount: string | null;
    managerId: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetManagerServicesQuery = {
  __typename: "ModelServiceConnection";
  items: Array<{
    __typename: "Service";
    id: string;
    managerId: string;
    name: string | null;
    description: string | null;
    workflow: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetManagerClientRatesQuery = {
  __typename: "ModelRateConnection";
  items: Array<{
    __typename: "Rate";
    id: string;
    managerId: string;
    clientId: string;
    clientName: string | null;
    service: string | null;
    languagePair: string | null;
    specialization: string | null;
    rate: string | null;
    currency: string | null;
    unit: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetClientRatesQuery = {
  __typename: "ModelRateConnection";
  items: Array<{
    __typename: "Rate";
    id: string;
    managerId: string;
    clientId: string;
    clientName: string | null;
    service: string | null;
    languagePair: string | null;
    specialization: string | null;
    rate: string | null;
    currency: string | null;
    unit: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetClientNetRateQuery = {
  __typename: "ModelnetRateConnection";
  items: Array<{
    __typename: "netRate";
    id: string;
    clientId: string;
    tmRepetitions: string | null;
    mtRepetitions: string | null;
    tmOverHundred: string | null;
    mtOverHundred: string | null;
    tmHundred: string | null;
    mthundred: string | null;
    tmNineFive: string | null;
    mtNineFive: string | null;
    tmEightFive: string | null;
    mtEightFive: string | null;
    tmSevenFive: string | null;
    mtSevenFive: string | null;
    tmFive: string | null;
    mtFive: string | null;
    tmNewWord: string | null;
    mtNewWord: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetManagerMemoryQuery = {
  __typename: "ModelTransMemoryConnection";
  items: Array<{
    __typename: "TransMemory";
    id: string;
    managerId: string;
    filename: string | null;
    name: string | null;
    source: string | null;
    target: string | null;
    clientId: string | null;
    clientName: string | null;
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
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
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
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
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
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOrderSubscription = {
  __typename: "Order";
  id: string;
  clientId: string | null;
  orderName: string | null;
  orderServices: Array<string | null> | null;
  orderSourceLanguage: string | null;
  orderTargetLanguage: string | null;
  orderSubject: string | null;
  orderDeadline: string | null;
  orderQuntity: string | null;
  orderUnit: string | null;
  orderBestRate: string | null;
  orderCurrency: string | null;
  orderProjectMore: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOrderSubscription = {
  __typename: "Order";
  id: string;
  clientId: string | null;
  orderName: string | null;
  orderServices: Array<string | null> | null;
  orderSourceLanguage: string | null;
  orderTargetLanguage: string | null;
  orderSubject: string | null;
  orderDeadline: string | null;
  orderQuntity: string | null;
  orderUnit: string | null;
  orderBestRate: string | null;
  orderCurrency: string | null;
  orderProjectMore: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOrderSubscription = {
  __typename: "Order";
  id: string;
  clientId: string | null;
  orderName: string | null;
  orderServices: Array<string | null> | null;
  orderSourceLanguage: string | null;
  orderTargetLanguage: string | null;
  orderSubject: string | null;
  orderDeadline: string | null;
  orderQuntity: string | null;
  orderUnit: string | null;
  orderBestRate: string | null;
  orderCurrency: string | null;
  orderProjectMore: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOrderMessageSubscription = {
  __typename: "OrderMessage";
  id: string;
  content: string;
  orderId: string;
  senderId: string;
  recepterID: string;
  isRead: boolean;
  time: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOrderMessageSubscription = {
  __typename: "OrderMessage";
  id: string;
  content: string;
  orderId: string;
  senderId: string;
  recepterID: string;
  isRead: boolean;
  time: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOrderMessageSubscription = {
  __typename: "OrderMessage";
  id: string;
  content: string;
  orderId: string;
  senderId: string;
  recepterID: string;
  isRead: boolean;
  time: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateOrderPaymentSubscription = {
  __typename: "OrderPayment";
  id: string;
  orderId: string;
  description: string;
  date: string | null;
  status: string | null;
  amount: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateOrderPaymentSubscription = {
  __typename: "OrderPayment";
  id: string;
  orderId: string;
  description: string;
  date: string | null;
  status: string | null;
  amount: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteOrderPaymentSubscription = {
  __typename: "OrderPayment";
  id: string;
  orderId: string;
  description: string;
  date: string | null;
  status: string | null;
  amount: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateClientSubscription = {
  __typename: "Client";
  id: string;
  managerId: string;
  profile: {
    __typename: "Profile";
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateClientSubscription = {
  __typename: "Client";
  id: string;
  managerId: string;
  profile: {
    __typename: "Profile";
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteClientSubscription = {
  __typename: "Client";
  id: string;
  managerId: string;
  profile: {
    __typename: "Profile";
    accountType: string | null;
    companyName: string | null;
    legalName: string | null;
    website: string | null;
    taxNumber: string | null;
    vatNumber: string | null;
    country: string | null;
    companyAddress: string | null;
    Zip: string | null;
    about: string | null;
    givenName: string | null;
    familyName: string | null;
    gender: string | null;
    position: string | null;
    email: string | null;
    tel: string | null;
    whatsapp: string | null;
    wechat: string | null;
    line: string | null;
    qq: string | null;
    telegram: string | null;
    slack: string | null;
    viber: string | null;
    note: string | null;
    timezone: string | null;
    rate: number | null;
    customerCode: string | null;
    customerName: string | null;
    logoKey: string | null;
    paymentTerm: string | null;
    paymentMethod: Array<string | null> | null;
    dayOption: string | null;
    payDay: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectSubscription = {
  __typename: "Project";
  id: string;
  projectCode: string | null;
  clientId: string;
  client: {
    __typename: "Client";
    id: string;
    managerId: string;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  pmId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: Array<string | null> | null;
  serviceType: Array<string | null> | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  paymentStatus: string | null;
  quotes: {
    __typename: "ModelQuoteConnection";
    items: Array<{
      __typename: "Quote";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  invoices: {
    __typename: "ModelInvoiceConnection";
    items: Array<{
      __typename: "Invoice";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transMemory: Array<string | null> | null;
  transMemoryNames: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectSubscription = {
  __typename: "Project";
  id: string;
  projectCode: string | null;
  clientId: string;
  client: {
    __typename: "Client";
    id: string;
    managerId: string;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  pmId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: Array<string | null> | null;
  serviceType: Array<string | null> | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  paymentStatus: string | null;
  quotes: {
    __typename: "ModelQuoteConnection";
    items: Array<{
      __typename: "Quote";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  invoices: {
    __typename: "ModelInvoiceConnection";
    items: Array<{
      __typename: "Invoice";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transMemory: Array<string | null> | null;
  transMemoryNames: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectSubscription = {
  __typename: "Project";
  id: string;
  projectCode: string | null;
  clientId: string;
  client: {
    __typename: "Client";
    id: string;
    managerId: string;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  pmId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  name: string | null;
  description: string | null;
  budget: number | null;
  approvedBudget: number | null;
  sourceLanguage: string | null;
  targetLanguage: Array<string | null> | null;
  serviceType: Array<string | null> | null;
  dueDate: string | null;
  status: string | null;
  developmentStatus: string | null;
  paymentStatus: string | null;
  quotes: {
    __typename: "ModelQuoteConnection";
    items: Array<{
      __typename: "Quote";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  invoices: {
    __typename: "ModelInvoiceConnection";
    items: Array<{
      __typename: "Invoice";
      id: string;
      direction: string;
      projectId: string;
      companyName: string | null;
      companyAddress: string | null;
      taxId: string | null;
      tel: string | null;
      mobile: string | null;
      siteUrl: string | null;
      clientName: string | null;
      documentNo: string | null;
      date: string | null;
      credit: string | null;
      dueDate: string | null;
      seller: string | null;
      reference: string | null;
      projectName: string | null;
      total: string | null;
      discount: string | null;
      totalAfterDiscount: string | null;
      vat: string | null;
      grandTotal: string | null;
      remark: string | null;
      status: string | null;
      collectionTerm: string | null;
      financeString: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  jobs: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transMemory: Array<string | null> | null;
  transMemoryNames: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateQuoteSubscription = {
  __typename: "Quote";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateQuoteSubscription = {
  __typename: "Quote";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteQuoteSubscription = {
  __typename: "Quote";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateItemSubscription = {
  __typename: "Item";
  id: string;
  paymentId: string;
  services: string | null;
  languages: string | null;
  stratDate: string | null;
  deliveryDate: string | null;
  description: string | null;
  quantity: string | null;
  unit: string | null;
  pricePerUnit: number | null;
  amount: number | null;
  currency: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateItemSubscription = {
  __typename: "Item";
  id: string;
  paymentId: string;
  services: string | null;
  languages: string | null;
  stratDate: string | null;
  deliveryDate: string | null;
  description: string | null;
  quantity: string | null;
  unit: string | null;
  pricePerUnit: number | null;
  amount: number | null;
  currency: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteItemSubscription = {
  __typename: "Item";
  id: string;
  paymentId: string;
  services: string | null;
  languages: string | null;
  stratDate: string | null;
  deliveryDate: string | null;
  description: string | null;
  quantity: string | null;
  unit: string | null;
  pricePerUnit: number | null;
  amount: number | null;
  currency: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateInvoiceSubscription = {
  __typename: "Invoice";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateInvoiceSubscription = {
  __typename: "Invoice";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteInvoiceSubscription = {
  __typename: "Invoice";
  id: string;
  direction: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  companyName: string | null;
  companyAddress: string | null;
  taxId: string | null;
  tel: string | null;
  mobile: string | null;
  siteUrl: string | null;
  clientName: string | null;
  documentNo: string | null;
  date: string | null;
  credit: string | null;
  dueDate: string | null;
  seller: string | null;
  reference: string | null;
  projectName: string | null;
  total: string | null;
  discount: string | null;
  totalAfterDiscount: string | null;
  vat: string | null;
  grandTotal: string | null;
  remark: string | null;
  items: {
    __typename: "ModelItemConnection";
    items: Array<{
      __typename: "Item";
      id: string;
      paymentId: string;
      services: string | null;
      languages: string | null;
      stratDate: string | null;
      deliveryDate: string | null;
      description: string | null;
      quantity: string | null;
      unit: string | null;
      pricePerUnit: number | null;
      amount: number | null;
      currency: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  status: string | null;
  collectionTerm: string | null;
  financeString: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateJobSubscription = {
  __typename: "Job";
  id: string;
  projectId: string;
  filename: string | null;
  service: string | null;
  wordCount: number | null;
  tasks: {
    __typename: "ModelSmallTaskConnection";
    items: Array<{
      __typename: "SmallTask";
      id: string;
      jobId: string;
      projectId: string;
      wordsCount: number | null;
      serviceName: string;
      freelancerId: string;
      rate: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  due: string | null;
  source: string | null;
  target: string | null;
  segments: {
    __typename: "ModelSegmentConnection";
    items: Array<{
      __typename: "Segment";
      id: string;
      jobId: string;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  process: Array<{
    __typename: "Progress";
    serviceName: string | null;
    progress: string | null;
  } | null> | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateJobSubscription = {
  __typename: "Job";
  id: string;
  projectId: string;
  filename: string | null;
  service: string | null;
  wordCount: number | null;
  tasks: {
    __typename: "ModelSmallTaskConnection";
    items: Array<{
      __typename: "SmallTask";
      id: string;
      jobId: string;
      projectId: string;
      wordsCount: number | null;
      serviceName: string;
      freelancerId: string;
      rate: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  due: string | null;
  source: string | null;
  target: string | null;
  segments: {
    __typename: "ModelSegmentConnection";
    items: Array<{
      __typename: "Segment";
      id: string;
      jobId: string;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  process: Array<{
    __typename: "Progress";
    serviceName: string | null;
    progress: string | null;
  } | null> | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteJobSubscription = {
  __typename: "Job";
  id: string;
  projectId: string;
  filename: string | null;
  service: string | null;
  wordCount: number | null;
  tasks: {
    __typename: "ModelSmallTaskConnection";
    items: Array<{
      __typename: "SmallTask";
      id: string;
      jobId: string;
      projectId: string;
      wordsCount: number | null;
      serviceName: string;
      freelancerId: string;
      rate: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  due: string | null;
  source: string | null;
  target: string | null;
  segments: {
    __typename: "ModelSegmentConnection";
    items: Array<{
      __typename: "Segment";
      id: string;
      jobId: string;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  process: Array<{
    __typename: "Progress";
    serviceName: string | null;
    progress: string | null;
  } | null> | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSegmentSubscription = {
  __typename: "Segment";
  id: string;
  jobId: string;
  source: string | null;
  target: string | null;
  status: string | null;
  segmentService: Array<{
    __typename: "SegmentService";
    serviceName: string | null;
    target: string | null;
    freelancerId: string;
    status: string | null;
    freelancerEmail: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSegmentSubscription = {
  __typename: "Segment";
  id: string;
  jobId: string;
  source: string | null;
  target: string | null;
  status: string | null;
  segmentService: Array<{
    __typename: "SegmentService";
    serviceName: string | null;
    target: string | null;
    freelancerId: string;
    status: string | null;
    freelancerEmail: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSegmentSubscription = {
  __typename: "Segment";
  id: string;
  jobId: string;
  source: string | null;
  target: string | null;
  status: string | null;
  segmentService: Array<{
    __typename: "SegmentService";
    serviceName: string | null;
    target: string | null;
    freelancerId: string;
    status: string | null;
    freelancerEmail: string | null;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateSmallTaskSubscription = {
  __typename: "SmallTask";
  id: string;
  jobId: string;
  job: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  projectId: string;
  wordsCount: number | null;
  serviceName: string;
  freelancerId: string;
  freelancer: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tasks: Array<{
    __typename: "Task";
    start: number | null;
    end: number | null;
    stringOfTask: string | null;
  } | null> | null;
  rate: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateSmallTaskSubscription = {
  __typename: "SmallTask";
  id: string;
  jobId: string;
  job: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  projectId: string;
  wordsCount: number | null;
  serviceName: string;
  freelancerId: string;
  freelancer: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tasks: Array<{
    __typename: "Task";
    start: number | null;
    end: number | null;
    stringOfTask: string | null;
  } | null> | null;
  rate: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteSmallTaskSubscription = {
  __typename: "SmallTask";
  id: string;
  jobId: string;
  job: {
    __typename: "ModelJobConnection";
    items: Array<{
      __typename: "Job";
      id: string;
      projectId: string;
      filename: string | null;
      service: string | null;
      wordCount: number | null;
      due: string | null;
      source: string | null;
      target: string | null;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  projectId: string;
  wordsCount: number | null;
  serviceName: string;
  freelancerId: string;
  freelancer: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  tasks: Array<{
    __typename: "Task";
    start: number | null;
    end: number | null;
    stringOfTask: string | null;
  } | null> | null;
  rate: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectSmallTaskRelationSubscription = {
  __typename: "ProjectSmallTaskRelation";
  id: string;
  freelancerId: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smallTaskId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectSmallTaskRelationSubscription = {
  __typename: "ProjectSmallTaskRelation";
  id: string;
  freelancerId: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smallTaskId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectSmallTaskRelationSubscription = {
  __typename: "ProjectSmallTaskRelation";
  id: string;
  freelancerId: string;
  projectId: string;
  project: {
    __typename: "Project";
    id: string;
    projectCode: string | null;
    clientId: string;
    client: {
      __typename: "Client";
      id: string;
      managerId: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    pmId: string;
    manager: {
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
    targetLanguage: Array<string | null> | null;
    serviceType: Array<string | null> | null;
    dueDate: string | null;
    status: string | null;
    developmentStatus: string | null;
    paymentStatus: string | null;
    quotes: {
      __typename: "ModelQuoteConnection";
      nextToken: string | null;
    } | null;
    invoices: {
      __typename: "ModelInvoiceConnection";
      nextToken: string | null;
    } | null;
    jobs: {
      __typename: "ModelJobConnection";
      nextToken: string | null;
    } | null;
    transMemory: Array<string | null> | null;
    transMemoryNames: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  smallTaskId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateLinkSubscription = {
  __typename: "link";
  id: string;
  name: string | null;
  url: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateLinkSubscription = {
  __typename: "link";
  id: string;
  name: string | null;
  url: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteLinkSubscription = {
  __typename: "link";
  id: string;
  name: string | null;
  url: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTeamInviteSubscription = {
  __typename: "TeamInvite";
  id: string;
  teamId: string;
  userId: string;
  team: {
    __typename: "Team";
    id: string;
    managerId: string;
    teamName: string | null;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invites: {
      __typename: "ModelTeamInviteConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTeamInviteSubscription = {
  __typename: "TeamInvite";
  id: string;
  teamId: string;
  userId: string;
  team: {
    __typename: "Team";
    id: string;
    managerId: string;
    teamName: string | null;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invites: {
      __typename: "ModelTeamInviteConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTeamInviteSubscription = {
  __typename: "TeamInvite";
  id: string;
  teamId: string;
  userId: string;
  team: {
    __typename: "Team";
    id: string;
    managerId: string;
    teamName: string | null;
    manager: {
      __typename: "User";
      id: string;
      role: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    invites: {
      __typename: "ModelTeamInviteConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTeamSubscription = {
  __typename: "Team";
  id: string;
  managerId: string;
  teamName: string | null;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  invites: {
    __typename: "ModelTeamInviteConnection";
    items: Array<{
      __typename: "TeamInvite";
      id: string;
      teamId: string;
      userId: string;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTeamSubscription = {
  __typename: "Team";
  id: string;
  managerId: string;
  teamName: string | null;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  invites: {
    __typename: "ModelTeamInviteConnection";
    items: Array<{
      __typename: "TeamInvite";
      id: string;
      teamId: string;
      userId: string;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTeamSubscription = {
  __typename: "Team";
  id: string;
  managerId: string;
  teamName: string | null;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  invites: {
    __typename: "ModelTeamInviteConnection";
    items: Array<{
      __typename: "TeamInvite";
      id: string;
      teamId: string;
      userId: string;
      status: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEventSubscription = {
  __typename: "Event";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  managerId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  textContent: string | null;
  link: string | null;
  type: string;
  flagShowHide: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEventSubscription = {
  __typename: "Event";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  managerId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  textContent: string | null;
  link: string | null;
  type: string;
  flagShowHide: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEventSubscription = {
  __typename: "Event";
  id: string;
  userId: string;
  user: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  managerId: string;
  manager: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  textContent: string | null;
  link: string | null;
  type: string;
  flagShowHide: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateConversationSubscription = {
  __typename: "Conversation";
  id: string;
  nextConversation: string | null;
  firstUserId: string;
  secondUserId: string;
  secondUser: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      conversationId: string;
      senderId: string;
      recepterID: string;
      isRead: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  badge: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateConversationSubscription = {
  __typename: "Conversation";
  id: string;
  nextConversation: string | null;
  firstUserId: string;
  secondUserId: string;
  secondUser: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      conversationId: string;
      senderId: string;
      recepterID: string;
      isRead: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  badge: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteConversationSubscription = {
  __typename: "Conversation";
  id: string;
  nextConversation: string | null;
  firstUserId: string;
  secondUserId: string;
  secondUser: {
    __typename: "User";
    id: string;
    role: string | null;
    profile: {
      __typename: "Profile";
      accountType: string | null;
      companyName: string | null;
      legalName: string | null;
      website: string | null;
      taxNumber: string | null;
      vatNumber: string | null;
      country: string | null;
      companyAddress: string | null;
      Zip: string | null;
      about: string | null;
      givenName: string | null;
      familyName: string | null;
      gender: string | null;
      position: string | null;
      email: string | null;
      tel: string | null;
      whatsapp: string | null;
      wechat: string | null;
      line: string | null;
      qq: string | null;
      telegram: string | null;
      slack: string | null;
      viber: string | null;
      note: string | null;
      timezone: string | null;
      rate: number | null;
      customerCode: string | null;
      customerName: string | null;
      logoKey: string | null;
      paymentTerm: string | null;
      paymentMethod: Array<string | null> | null;
      dayOption: string | null;
      payDay: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  messages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      content: string;
      conversationId: string;
      senderId: string;
      recepterID: string;
      isRead: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  badge: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  content: string;
  conversationId: string;
  senderId: string;
  recepterID: string;
  isRead: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateMessageSubscription = {
  __typename: "Message";
  id: string;
  content: string;
  conversationId: string;
  senderId: string;
  recepterID: string;
  isRead: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteMessageSubscription = {
  __typename: "Message";
  id: string;
  content: string;
  conversationId: string;
  senderId: string;
  recepterID: string;
  isRead: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCollectionSubscription = {
  __typename: "Collection";
  id: string;
  method: string | null;
  bankDate: string | null;
  netAmount: string | null;
  currency: string | null;
  fxrate: string | null;
  amount: string | null;
  managerId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCollectionSubscription = {
  __typename: "Collection";
  id: string;
  method: string | null;
  bankDate: string | null;
  netAmount: string | null;
  currency: string | null;
  fxrate: string | null;
  amount: string | null;
  managerId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCollectionSubscription = {
  __typename: "Collection";
  id: string;
  method: string | null;
  bankDate: string | null;
  netAmount: string | null;
  currency: string | null;
  fxrate: string | null;
  amount: string | null;
  managerId: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateServiceSubscription = {
  __typename: "Service";
  id: string;
  managerId: string;
  name: string | null;
  description: string | null;
  workflow: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateServiceSubscription = {
  __typename: "Service";
  id: string;
  managerId: string;
  name: string | null;
  description: string | null;
  workflow: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteServiceSubscription = {
  __typename: "Service";
  id: string;
  managerId: string;
  name: string | null;
  description: string | null;
  workflow: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRateSubscription = {
  __typename: "Rate";
  id: string;
  managerId: string;
  clientId: string;
  clientName: string | null;
  service: string | null;
  languagePair: string | null;
  specialization: string | null;
  rate: string | null;
  currency: string | null;
  unit: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRateSubscription = {
  __typename: "Rate";
  id: string;
  managerId: string;
  clientId: string;
  clientName: string | null;
  service: string | null;
  languagePair: string | null;
  specialization: string | null;
  rate: string | null;
  currency: string | null;
  unit: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRateSubscription = {
  __typename: "Rate";
  id: string;
  managerId: string;
  clientId: string;
  clientName: string | null;
  service: string | null;
  languagePair: string | null;
  specialization: string | null;
  rate: string | null;
  currency: string | null;
  unit: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateNetRateSubscription = {
  __typename: "netRate";
  id: string;
  clientId: string;
  tmRepetitions: string | null;
  mtRepetitions: string | null;
  tmOverHundred: string | null;
  mtOverHundred: string | null;
  tmHundred: string | null;
  mthundred: string | null;
  tmNineFive: string | null;
  mtNineFive: string | null;
  tmEightFive: string | null;
  mtEightFive: string | null;
  tmSevenFive: string | null;
  mtSevenFive: string | null;
  tmFive: string | null;
  mtFive: string | null;
  tmNewWord: string | null;
  mtNewWord: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateNetRateSubscription = {
  __typename: "netRate";
  id: string;
  clientId: string;
  tmRepetitions: string | null;
  mtRepetitions: string | null;
  tmOverHundred: string | null;
  mtOverHundred: string | null;
  tmHundred: string | null;
  mthundred: string | null;
  tmNineFive: string | null;
  mtNineFive: string | null;
  tmEightFive: string | null;
  mtEightFive: string | null;
  tmSevenFive: string | null;
  mtSevenFive: string | null;
  tmFive: string | null;
  mtFive: string | null;
  tmNewWord: string | null;
  mtNewWord: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteNetRateSubscription = {
  __typename: "netRate";
  id: string;
  clientId: string;
  tmRepetitions: string | null;
  mtRepetitions: string | null;
  tmOverHundred: string | null;
  mtOverHundred: string | null;
  tmHundred: string | null;
  mthundred: string | null;
  tmNineFive: string | null;
  mtNineFive: string | null;
  tmEightFive: string | null;
  mtEightFive: string | null;
  tmSevenFive: string | null;
  mtSevenFive: string | null;
  tmFive: string | null;
  mtFive: string | null;
  tmNewWord: string | null;
  mtNewWord: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTransMemorySubscription = {
  __typename: "TransMemory";
  id: string;
  managerId: string;
  filename: string | null;
  name: string | null;
  source: string | null;
  target: string | null;
  clientId: string | null;
  clientName: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTransMemorySubscription = {
  __typename: "TransMemory";
  id: string;
  managerId: string;
  filename: string | null;
  name: string | null;
  source: string | null;
  target: string | null;
  clientId: string | null;
  clientName: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTransMemorySubscription = {
  __typename: "TransMemory";
  id: string;
  managerId: string;
  filename: string | null;
  name: string | null;
  source: string | null;
  target: string | null;
  clientId: string | null;
  clientName: string | null;
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
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
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
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
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
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
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
  async CreateOrder(
    input: CreateOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<CreateOrderMutation> {
    const statement = `mutation CreateOrder($input: CreateOrderInput!, $condition: ModelOrderConditionInput) {
        createOrder(input: $input, condition: $condition) {
          __typename
          id
          clientId
          orderName
          orderServices
          orderSourceLanguage
          orderTargetLanguage
          orderSubject
          orderDeadline
          orderQuntity
          orderUnit
          orderBestRate
          orderCurrency
          orderProjectMore
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
    return <CreateOrderMutation>response.data.createOrder;
  }
  async UpdateOrder(
    input: UpdateOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<UpdateOrderMutation> {
    const statement = `mutation UpdateOrder($input: UpdateOrderInput!, $condition: ModelOrderConditionInput) {
        updateOrder(input: $input, condition: $condition) {
          __typename
          id
          clientId
          orderName
          orderServices
          orderSourceLanguage
          orderTargetLanguage
          orderSubject
          orderDeadline
          orderQuntity
          orderUnit
          orderBestRate
          orderCurrency
          orderProjectMore
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
    return <UpdateOrderMutation>response.data.updateOrder;
  }
  async DeleteOrder(
    input: DeleteOrderInput,
    condition?: ModelOrderConditionInput
  ): Promise<DeleteOrderMutation> {
    const statement = `mutation DeleteOrder($input: DeleteOrderInput!, $condition: ModelOrderConditionInput) {
        deleteOrder(input: $input, condition: $condition) {
          __typename
          id
          clientId
          orderName
          orderServices
          orderSourceLanguage
          orderTargetLanguage
          orderSubject
          orderDeadline
          orderQuntity
          orderUnit
          orderBestRate
          orderCurrency
          orderProjectMore
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
    return <DeleteOrderMutation>response.data.deleteOrder;
  }
  async CreateOrderMessage(
    input: CreateOrderMessageInput,
    condition?: ModelOrderMessageConditionInput
  ): Promise<CreateOrderMessageMutation> {
    const statement = `mutation CreateOrderMessage($input: CreateOrderMessageInput!, $condition: ModelOrderMessageConditionInput) {
        createOrderMessage(input: $input, condition: $condition) {
          __typename
          id
          content
          orderId
          senderId
          recepterID
          isRead
          time
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
    return <CreateOrderMessageMutation>response.data.createOrderMessage;
  }
  async UpdateOrderMessage(
    input: UpdateOrderMessageInput,
    condition?: ModelOrderMessageConditionInput
  ): Promise<UpdateOrderMessageMutation> {
    const statement = `mutation UpdateOrderMessage($input: UpdateOrderMessageInput!, $condition: ModelOrderMessageConditionInput) {
        updateOrderMessage(input: $input, condition: $condition) {
          __typename
          id
          content
          orderId
          senderId
          recepterID
          isRead
          time
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
    return <UpdateOrderMessageMutation>response.data.updateOrderMessage;
  }
  async DeleteOrderMessage(
    input: DeleteOrderMessageInput,
    condition?: ModelOrderMessageConditionInput
  ): Promise<DeleteOrderMessageMutation> {
    const statement = `mutation DeleteOrderMessage($input: DeleteOrderMessageInput!, $condition: ModelOrderMessageConditionInput) {
        deleteOrderMessage(input: $input, condition: $condition) {
          __typename
          id
          content
          orderId
          senderId
          recepterID
          isRead
          time
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
    return <DeleteOrderMessageMutation>response.data.deleteOrderMessage;
  }
  async CreateOrderPayment(
    input: CreateOrderPaymentInput,
    condition?: ModelOrderPaymentConditionInput
  ): Promise<CreateOrderPaymentMutation> {
    const statement = `mutation CreateOrderPayment($input: CreateOrderPaymentInput!, $condition: ModelOrderPaymentConditionInput) {
        createOrderPayment(input: $input, condition: $condition) {
          __typename
          id
          orderId
          description
          date
          status
          amount
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
    return <CreateOrderPaymentMutation>response.data.createOrderPayment;
  }
  async UpdateOrderPayment(
    input: UpdateOrderPaymentInput,
    condition?: ModelOrderPaymentConditionInput
  ): Promise<UpdateOrderPaymentMutation> {
    const statement = `mutation UpdateOrderPayment($input: UpdateOrderPaymentInput!, $condition: ModelOrderPaymentConditionInput) {
        updateOrderPayment(input: $input, condition: $condition) {
          __typename
          id
          orderId
          description
          date
          status
          amount
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
    return <UpdateOrderPaymentMutation>response.data.updateOrderPayment;
  }
  async DeleteOrderPayment(
    input: DeleteOrderPaymentInput,
    condition?: ModelOrderPaymentConditionInput
  ): Promise<DeleteOrderPaymentMutation> {
    const statement = `mutation DeleteOrderPayment($input: DeleteOrderPaymentInput!, $condition: ModelOrderPaymentConditionInput) {
        deleteOrderPayment(input: $input, condition: $condition) {
          __typename
          id
          orderId
          description
          date
          status
          amount
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
    return <DeleteOrderPaymentMutation>response.data.deleteOrderPayment;
  }
  async CreateClient(
    input: CreateClientInput,
    condition?: ModelClientConditionInput
  ): Promise<CreateClientMutation> {
    const statement = `mutation CreateClient($input: CreateClientInput!, $condition: ModelClientConditionInput) {
        createClient(input: $input, condition: $condition) {
          __typename
          id
          managerId
          profile {
            __typename
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
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
    return <CreateClientMutation>response.data.createClient;
  }
  async UpdateClient(
    input: UpdateClientInput,
    condition?: ModelClientConditionInput
  ): Promise<UpdateClientMutation> {
    const statement = `mutation UpdateClient($input: UpdateClientInput!, $condition: ModelClientConditionInput) {
        updateClient(input: $input, condition: $condition) {
          __typename
          id
          managerId
          profile {
            __typename
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
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
    return <UpdateClientMutation>response.data.updateClient;
  }
  async DeleteClient(
    input: DeleteClientInput,
    condition?: ModelClientConditionInput
  ): Promise<DeleteClientMutation> {
    const statement = `mutation DeleteClient($input: DeleteClientInput!, $condition: ModelClientConditionInput) {
        deleteClient(input: $input, condition: $condition) {
          __typename
          id
          managerId
          profile {
            __typename
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
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
    return <DeleteClientMutation>response.data.deleteClient;
  }
  async CreateProject(
    input: CreateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<CreateProjectMutation> {
    const statement = `mutation CreateProject($input: CreateProjectInput!, $condition: ModelProjectConditionInput) {
        createProject(input: $input, condition: $condition) {
          __typename
          id
          projectCode
          clientId
          client {
            __typename
            id
            managerId
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          pmId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
              status
              collectionTerm
              financeString
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          transMemory
          transMemoryNames
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
          projectCode
          clientId
          client {
            __typename
            id
            managerId
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          pmId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
              status
              collectionTerm
              financeString
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          transMemory
          transMemoryNames
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
          projectCode
          clientId
          client {
            __typename
            id
            managerId
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          pmId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
              status
              collectionTerm
              financeString
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          transMemory
          transMemoryNames
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
  async CreateQuote(
    input: CreateQuoteInput,
    condition?: ModelQuoteConditionInput
  ): Promise<CreateQuoteMutation> {
    const statement = `mutation CreateQuote($input: CreateQuoteInput!, $condition: ModelQuoteConditionInput) {
        createQuote(input: $input, condition: $condition) {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
    return <CreateQuoteMutation>response.data.createQuote;
  }
  async UpdateQuote(
    input: UpdateQuoteInput,
    condition?: ModelQuoteConditionInput
  ): Promise<UpdateQuoteMutation> {
    const statement = `mutation UpdateQuote($input: UpdateQuoteInput!, $condition: ModelQuoteConditionInput) {
        updateQuote(input: $input, condition: $condition) {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
    return <UpdateQuoteMutation>response.data.updateQuote;
  }
  async DeleteQuote(
    input: DeleteQuoteInput,
    condition?: ModelQuoteConditionInput
  ): Promise<DeleteQuoteMutation> {
    const statement = `mutation DeleteQuote($input: DeleteQuoteInput!, $condition: ModelQuoteConditionInput) {
        deleteQuote(input: $input, condition: $condition) {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
    return <DeleteQuoteMutation>response.data.deleteQuote;
  }
  async CreateItem(
    input: CreateItemInput,
    condition?: ModelItemConditionInput
  ): Promise<CreateItemMutation> {
    const statement = `mutation CreateItem($input: CreateItemInput!, $condition: ModelItemConditionInput) {
        createItem(input: $input, condition: $condition) {
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
    return <CreateItemMutation>response.data.createItem;
  }
  async UpdateItem(
    input: UpdateItemInput,
    condition?: ModelItemConditionInput
  ): Promise<UpdateItemMutation> {
    const statement = `mutation UpdateItem($input: UpdateItemInput!, $condition: ModelItemConditionInput) {
        updateItem(input: $input, condition: $condition) {
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
    return <UpdateItemMutation>response.data.updateItem;
  }
  async DeleteItem(
    input: DeleteItemInput,
    condition?: ModelItemConditionInput
  ): Promise<DeleteItemMutation> {
    const statement = `mutation DeleteItem($input: DeleteItemInput!, $condition: ModelItemConditionInput) {
        deleteItem(input: $input, condition: $condition) {
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
    return <DeleteItemMutation>response.data.deleteItem;
  }
  async CreateInvoice(
    input: CreateInvoiceInput,
    condition?: ModelInvoiceConditionInput
  ): Promise<CreateInvoiceMutation> {
    const statement = `mutation CreateInvoice($input: CreateInvoiceInput!, $condition: ModelInvoiceConditionInput) {
        createInvoice(input: $input, condition: $condition) {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
    return <CreateInvoiceMutation>response.data.createInvoice;
  }
  async UpdateInvoice(
    input: UpdateInvoiceInput,
    condition?: ModelInvoiceConditionInput
  ): Promise<UpdateInvoiceMutation> {
    const statement = `mutation UpdateInvoice($input: UpdateInvoiceInput!, $condition: ModelInvoiceConditionInput) {
        updateInvoice(input: $input, condition: $condition) {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
    return <UpdateInvoiceMutation>response.data.updateInvoice;
  }
  async DeleteInvoice(
    input: DeleteInvoiceInput,
    condition?: ModelInvoiceConditionInput
  ): Promise<DeleteInvoiceMutation> {
    const statement = `mutation DeleteInvoice($input: DeleteInvoiceInput!, $condition: ModelInvoiceConditionInput) {
        deleteInvoice(input: $input, condition: $condition) {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
    return <DeleteInvoiceMutation>response.data.deleteInvoice;
  }
  async CreateJob(
    input: CreateJobInput,
    condition?: ModelJobConditionInput
  ): Promise<CreateJobMutation> {
    const statement = `mutation CreateJob($input: CreateJobInput!, $condition: ModelJobConditionInput) {
        createJob(input: $input, condition: $condition) {
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
              projectId
              wordsCount
              serviceName
              freelancerId
              rate
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          due
          source
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
          status
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
    return <CreateJobMutation>response.data.createJob;
  }
  async UpdateJob(
    input: UpdateJobInput,
    condition?: ModelJobConditionInput
  ): Promise<UpdateJobMutation> {
    const statement = `mutation UpdateJob($input: UpdateJobInput!, $condition: ModelJobConditionInput) {
        updateJob(input: $input, condition: $condition) {
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
              projectId
              wordsCount
              serviceName
              freelancerId
              rate
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          due
          source
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
          status
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
    return <UpdateJobMutation>response.data.updateJob;
  }
  async DeleteJob(
    input: DeleteJobInput,
    condition?: ModelJobConditionInput
  ): Promise<DeleteJobMutation> {
    const statement = `mutation DeleteJob($input: DeleteJobInput!, $condition: ModelJobConditionInput) {
        deleteJob(input: $input, condition: $condition) {
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
              projectId
              wordsCount
              serviceName
              freelancerId
              rate
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          due
          source
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
          status
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
    return <DeleteJobMutation>response.data.deleteJob;
  }
  async CreateSegment(
    input: CreateSegmentInput,
    condition?: ModelSegmentConditionInput
  ): Promise<CreateSegmentMutation> {
    const statement = `mutation CreateSegment($input: CreateSegmentInput!, $condition: ModelSegmentConditionInput) {
        createSegment(input: $input, condition: $condition) {
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
    return <CreateSegmentMutation>response.data.createSegment;
  }
  async UpdateSegment(
    input: UpdateSegmentInput,
    condition?: ModelSegmentConditionInput
  ): Promise<UpdateSegmentMutation> {
    const statement = `mutation UpdateSegment($input: UpdateSegmentInput!, $condition: ModelSegmentConditionInput) {
        updateSegment(input: $input, condition: $condition) {
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
    return <UpdateSegmentMutation>response.data.updateSegment;
  }
  async DeleteSegment(
    input: DeleteSegmentInput,
    condition?: ModelSegmentConditionInput
  ): Promise<DeleteSegmentMutation> {
    const statement = `mutation DeleteSegment($input: DeleteSegmentInput!, $condition: ModelSegmentConditionInput) {
        deleteSegment(input: $input, condition: $condition) {
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
    return <DeleteSegmentMutation>response.data.deleteSegment;
  }
  async CreateSmallTask(
    input: CreateSmallTaskInput,
    condition?: ModelSmallTaskConditionInput
  ): Promise<CreateSmallTaskMutation> {
    const statement = `mutation CreateSmallTask($input: CreateSmallTaskInput!, $condition: ModelSmallTaskConditionInput) {
        createSmallTask(input: $input, condition: $condition) {
          __typename
          id
          jobId
          job {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
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
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
    return <CreateSmallTaskMutation>response.data.createSmallTask;
  }
  async UpdateSmallTask(
    input: UpdateSmallTaskInput,
    condition?: ModelSmallTaskConditionInput
  ): Promise<UpdateSmallTaskMutation> {
    const statement = `mutation UpdateSmallTask($input: UpdateSmallTaskInput!, $condition: ModelSmallTaskConditionInput) {
        updateSmallTask(input: $input, condition: $condition) {
          __typename
          id
          jobId
          job {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
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
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
    return <UpdateSmallTaskMutation>response.data.updateSmallTask;
  }
  async DeleteSmallTask(
    input: DeleteSmallTaskInput,
    condition?: ModelSmallTaskConditionInput
  ): Promise<DeleteSmallTaskMutation> {
    const statement = `mutation DeleteSmallTask($input: DeleteSmallTaskInput!, $condition: ModelSmallTaskConditionInput) {
        deleteSmallTask(input: $input, condition: $condition) {
          __typename
          id
          jobId
          job {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
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
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
    return <DeleteSmallTaskMutation>response.data.deleteSmallTask;
  }
  async CreateProjectSmallTaskRelation(
    input: CreateProjectSmallTaskRelationInput,
    condition?: ModelProjectSmallTaskRelationConditionInput
  ): Promise<CreateProjectSmallTaskRelationMutation> {
    const statement = `mutation CreateProjectSmallTaskRelation($input: CreateProjectSmallTaskRelationInput!, $condition: ModelProjectSmallTaskRelationConditionInput) {
        createProjectSmallTaskRelation(input: $input, condition: $condition) {
          __typename
          id
          freelancerId
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
          smallTaskId
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
    return <CreateProjectSmallTaskRelationMutation>(
      response.data.createProjectSmallTaskRelation
    );
  }
  async UpdateProjectSmallTaskRelation(
    input: UpdateProjectSmallTaskRelationInput,
    condition?: ModelProjectSmallTaskRelationConditionInput
  ): Promise<UpdateProjectSmallTaskRelationMutation> {
    const statement = `mutation UpdateProjectSmallTaskRelation($input: UpdateProjectSmallTaskRelationInput!, $condition: ModelProjectSmallTaskRelationConditionInput) {
        updateProjectSmallTaskRelation(input: $input, condition: $condition) {
          __typename
          id
          freelancerId
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
          smallTaskId
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
    return <UpdateProjectSmallTaskRelationMutation>(
      response.data.updateProjectSmallTaskRelation
    );
  }
  async DeleteProjectSmallTaskRelation(
    input: DeleteProjectSmallTaskRelationInput,
    condition?: ModelProjectSmallTaskRelationConditionInput
  ): Promise<DeleteProjectSmallTaskRelationMutation> {
    const statement = `mutation DeleteProjectSmallTaskRelation($input: DeleteProjectSmallTaskRelationInput!, $condition: ModelProjectSmallTaskRelationConditionInput) {
        deleteProjectSmallTaskRelation(input: $input, condition: $condition) {
          __typename
          id
          freelancerId
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
          smallTaskId
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
    return <DeleteProjectSmallTaskRelationMutation>(
      response.data.deleteProjectSmallTaskRelation
    );
  }
  async CreateLink(
    input: CreateLinkInput,
    condition?: ModellinkConditionInput
  ): Promise<CreateLinkMutation> {
    const statement = `mutation CreateLink($input: CreateLinkInput!, $condition: ModellinkConditionInput) {
        createLink(input: $input, condition: $condition) {
          __typename
          id
          name
          url
          status
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
    return <CreateLinkMutation>response.data.createLink;
  }
  async UpdateLink(
    input: UpdateLinkInput,
    condition?: ModellinkConditionInput
  ): Promise<UpdateLinkMutation> {
    const statement = `mutation UpdateLink($input: UpdateLinkInput!, $condition: ModellinkConditionInput) {
        updateLink(input: $input, condition: $condition) {
          __typename
          id
          name
          url
          status
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
    return <UpdateLinkMutation>response.data.updateLink;
  }
  async DeleteLink(
    input: DeleteLinkInput,
    condition?: ModellinkConditionInput
  ): Promise<DeleteLinkMutation> {
    const statement = `mutation DeleteLink($input: DeleteLinkInput!, $condition: ModellinkConditionInput) {
        deleteLink(input: $input, condition: $condition) {
          __typename
          id
          name
          url
          status
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
    return <DeleteLinkMutation>response.data.deleteLink;
  }
  async CreateTeamInvite(
    input: CreateTeamInviteInput,
    condition?: ModelTeamInviteConditionInput
  ): Promise<CreateTeamInviteMutation> {
    const statement = `mutation CreateTeamInvite($input: CreateTeamInviteInput!, $condition: ModelTeamInviteConditionInput) {
        createTeamInvite(input: $input, condition: $condition) {
          __typename
          id
          teamId
          userId
          team {
            __typename
            id
            managerId
            teamName
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            invites {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          status
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
    return <CreateTeamInviteMutation>response.data.createTeamInvite;
  }
  async UpdateTeamInvite(
    input: UpdateTeamInviteInput,
    condition?: ModelTeamInviteConditionInput
  ): Promise<UpdateTeamInviteMutation> {
    const statement = `mutation UpdateTeamInvite($input: UpdateTeamInviteInput!, $condition: ModelTeamInviteConditionInput) {
        updateTeamInvite(input: $input, condition: $condition) {
          __typename
          id
          teamId
          userId
          team {
            __typename
            id
            managerId
            teamName
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            invites {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          status
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
    return <UpdateTeamInviteMutation>response.data.updateTeamInvite;
  }
  async DeleteTeamInvite(
    input: DeleteTeamInviteInput,
    condition?: ModelTeamInviteConditionInput
  ): Promise<DeleteTeamInviteMutation> {
    const statement = `mutation DeleteTeamInvite($input: DeleteTeamInviteInput!, $condition: ModelTeamInviteConditionInput) {
        deleteTeamInvite(input: $input, condition: $condition) {
          __typename
          id
          teamId
          userId
          team {
            __typename
            id
            managerId
            teamName
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            invites {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          status
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
    return <DeleteTeamInviteMutation>response.data.deleteTeamInvite;
  }
  async CreateTeam(
    input: CreateTeamInput,
    condition?: ModelTeamConditionInput
  ): Promise<CreateTeamMutation> {
    const statement = `mutation CreateTeam($input: CreateTeamInput!, $condition: ModelTeamConditionInput) {
        createTeam(input: $input, condition: $condition) {
          __typename
          id
          managerId
          teamName
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          invites {
            __typename
            items {
              __typename
              id
              teamId
              userId
              status
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
    return <CreateTeamMutation>response.data.createTeam;
  }
  async UpdateTeam(
    input: UpdateTeamInput,
    condition?: ModelTeamConditionInput
  ): Promise<UpdateTeamMutation> {
    const statement = `mutation UpdateTeam($input: UpdateTeamInput!, $condition: ModelTeamConditionInput) {
        updateTeam(input: $input, condition: $condition) {
          __typename
          id
          managerId
          teamName
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          invites {
            __typename
            items {
              __typename
              id
              teamId
              userId
              status
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
    return <UpdateTeamMutation>response.data.updateTeam;
  }
  async DeleteTeam(
    input: DeleteTeamInput,
    condition?: ModelTeamConditionInput
  ): Promise<DeleteTeamMutation> {
    const statement = `mutation DeleteTeam($input: DeleteTeamInput!, $condition: ModelTeamConditionInput) {
        deleteTeam(input: $input, condition: $condition) {
          __typename
          id
          managerId
          teamName
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          invites {
            __typename
            items {
              __typename
              id
              teamId
              userId
              status
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
    return <DeleteTeamMutation>response.data.deleteTeam;
  }
  async CreateEvent(
    input: CreateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<CreateEventMutation> {
    const statement = `mutation CreateEvent($input: CreateEventInput!, $condition: ModelEventConditionInput) {
        createEvent(input: $input, condition: $condition) {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          managerId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          textContent
          link
          type
          flagShowHide
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
    return <CreateEventMutation>response.data.createEvent;
  }
  async UpdateEvent(
    input: UpdateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<UpdateEventMutation> {
    const statement = `mutation UpdateEvent($input: UpdateEventInput!, $condition: ModelEventConditionInput) {
        updateEvent(input: $input, condition: $condition) {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          managerId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          textContent
          link
          type
          flagShowHide
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
    return <UpdateEventMutation>response.data.updateEvent;
  }
  async DeleteEvent(
    input: DeleteEventInput,
    condition?: ModelEventConditionInput
  ): Promise<DeleteEventMutation> {
    const statement = `mutation DeleteEvent($input: DeleteEventInput!, $condition: ModelEventConditionInput) {
        deleteEvent(input: $input, condition: $condition) {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          managerId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          textContent
          link
          type
          flagShowHide
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
    return <DeleteEventMutation>response.data.deleteEvent;
  }
  async CreateConversation(
    input: CreateConversationInput,
    condition?: ModelConversationConditionInput
  ): Promise<CreateConversationMutation> {
    const statement = `mutation CreateConversation($input: CreateConversationInput!, $condition: ModelConversationConditionInput) {
        createConversation(input: $input, condition: $condition) {
          __typename
          id
          nextConversation
          firstUserId
          secondUserId
          secondUser {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              conversationId
              senderId
              recepterID
              isRead
              createdAt
              updatedAt
            }
            nextToken
          }
          badge
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
    return <CreateConversationMutation>response.data.createConversation;
  }
  async UpdateConversation(
    input: UpdateConversationInput,
    condition?: ModelConversationConditionInput
  ): Promise<UpdateConversationMutation> {
    const statement = `mutation UpdateConversation($input: UpdateConversationInput!, $condition: ModelConversationConditionInput) {
        updateConversation(input: $input, condition: $condition) {
          __typename
          id
          nextConversation
          firstUserId
          secondUserId
          secondUser {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              conversationId
              senderId
              recepterID
              isRead
              createdAt
              updatedAt
            }
            nextToken
          }
          badge
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
    return <UpdateConversationMutation>response.data.updateConversation;
  }
  async DeleteConversation(
    input: DeleteConversationInput,
    condition?: ModelConversationConditionInput
  ): Promise<DeleteConversationMutation> {
    const statement = `mutation DeleteConversation($input: DeleteConversationInput!, $condition: ModelConversationConditionInput) {
        deleteConversation(input: $input, condition: $condition) {
          __typename
          id
          nextConversation
          firstUserId
          secondUserId
          secondUser {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              conversationId
              senderId
              recepterID
              isRead
              createdAt
              updatedAt
            }
            nextToken
          }
          badge
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
    return <DeleteConversationMutation>response.data.deleteConversation;
  }
  async CreateMessage(
    input: CreateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
        createMessage(input: $input, condition: $condition) {
          __typename
          id
          content
          conversationId
          senderId
          recepterID
          isRead
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
    return <CreateMessageMutation>response.data.createMessage;
  }
  async UpdateMessage(
    input: UpdateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
        updateMessage(input: $input, condition: $condition) {
          __typename
          id
          content
          conversationId
          senderId
          recepterID
          isRead
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
    return <UpdateMessageMutation>response.data.updateMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
        deleteMessage(input: $input, condition: $condition) {
          __typename
          id
          content
          conversationId
          senderId
          recepterID
          isRead
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
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async CreateCollection(
    input: CreateCollectionInput,
    condition?: ModelCollectionConditionInput
  ): Promise<CreateCollectionMutation> {
    const statement = `mutation CreateCollection($input: CreateCollectionInput!, $condition: ModelCollectionConditionInput) {
        createCollection(input: $input, condition: $condition) {
          __typename
          id
          method
          bankDate
          netAmount
          currency
          fxrate
          amount
          managerId
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
    return <CreateCollectionMutation>response.data.createCollection;
  }
  async UpdateCollection(
    input: UpdateCollectionInput,
    condition?: ModelCollectionConditionInput
  ): Promise<UpdateCollectionMutation> {
    const statement = `mutation UpdateCollection($input: UpdateCollectionInput!, $condition: ModelCollectionConditionInput) {
        updateCollection(input: $input, condition: $condition) {
          __typename
          id
          method
          bankDate
          netAmount
          currency
          fxrate
          amount
          managerId
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
    return <UpdateCollectionMutation>response.data.updateCollection;
  }
  async DeleteCollection(
    input: DeleteCollectionInput,
    condition?: ModelCollectionConditionInput
  ): Promise<DeleteCollectionMutation> {
    const statement = `mutation DeleteCollection($input: DeleteCollectionInput!, $condition: ModelCollectionConditionInput) {
        deleteCollection(input: $input, condition: $condition) {
          __typename
          id
          method
          bankDate
          netAmount
          currency
          fxrate
          amount
          managerId
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
    return <DeleteCollectionMutation>response.data.deleteCollection;
  }
  async CreateService(
    input: CreateServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<CreateServiceMutation> {
    const statement = `mutation CreateService($input: CreateServiceInput!, $condition: ModelServiceConditionInput) {
        createService(input: $input, condition: $condition) {
          __typename
          id
          managerId
          name
          description
          workflow
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
    return <CreateServiceMutation>response.data.createService;
  }
  async UpdateService(
    input: UpdateServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<UpdateServiceMutation> {
    const statement = `mutation UpdateService($input: UpdateServiceInput!, $condition: ModelServiceConditionInput) {
        updateService(input: $input, condition: $condition) {
          __typename
          id
          managerId
          name
          description
          workflow
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
    return <UpdateServiceMutation>response.data.updateService;
  }
  async DeleteService(
    input: DeleteServiceInput,
    condition?: ModelServiceConditionInput
  ): Promise<DeleteServiceMutation> {
    const statement = `mutation DeleteService($input: DeleteServiceInput!, $condition: ModelServiceConditionInput) {
        deleteService(input: $input, condition: $condition) {
          __typename
          id
          managerId
          name
          description
          workflow
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
    return <DeleteServiceMutation>response.data.deleteService;
  }
  async CreateRate(
    input: CreateRateInput,
    condition?: ModelRateConditionInput
  ): Promise<CreateRateMutation> {
    const statement = `mutation CreateRate($input: CreateRateInput!, $condition: ModelRateConditionInput) {
        createRate(input: $input, condition: $condition) {
          __typename
          id
          managerId
          clientId
          clientName
          service
          languagePair
          specialization
          rate
          currency
          unit
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
    return <CreateRateMutation>response.data.createRate;
  }
  async UpdateRate(
    input: UpdateRateInput,
    condition?: ModelRateConditionInput
  ): Promise<UpdateRateMutation> {
    const statement = `mutation UpdateRate($input: UpdateRateInput!, $condition: ModelRateConditionInput) {
        updateRate(input: $input, condition: $condition) {
          __typename
          id
          managerId
          clientId
          clientName
          service
          languagePair
          specialization
          rate
          currency
          unit
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
    return <UpdateRateMutation>response.data.updateRate;
  }
  async DeleteRate(
    input: DeleteRateInput,
    condition?: ModelRateConditionInput
  ): Promise<DeleteRateMutation> {
    const statement = `mutation DeleteRate($input: DeleteRateInput!, $condition: ModelRateConditionInput) {
        deleteRate(input: $input, condition: $condition) {
          __typename
          id
          managerId
          clientId
          clientName
          service
          languagePair
          specialization
          rate
          currency
          unit
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
    return <DeleteRateMutation>response.data.deleteRate;
  }
  async CreateNetRate(
    input: CreateNetRateInput,
    condition?: ModelnetRateConditionInput
  ): Promise<CreateNetRateMutation> {
    const statement = `mutation CreateNetRate($input: CreateNetRateInput!, $condition: ModelnetRateConditionInput) {
        createNetRate(input: $input, condition: $condition) {
          __typename
          id
          clientId
          tmRepetitions
          mtRepetitions
          tmOverHundred
          mtOverHundred
          tmHundred
          mthundred
          tmNineFive
          mtNineFive
          tmEightFive
          mtEightFive
          tmSevenFive
          mtSevenFive
          tmFive
          mtFive
          tmNewWord
          mtNewWord
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
    return <CreateNetRateMutation>response.data.createNetRate;
  }
  async UpdateNetRate(
    input: UpdateNetRateInput,
    condition?: ModelnetRateConditionInput
  ): Promise<UpdateNetRateMutation> {
    const statement = `mutation UpdateNetRate($input: UpdateNetRateInput!, $condition: ModelnetRateConditionInput) {
        updateNetRate(input: $input, condition: $condition) {
          __typename
          id
          clientId
          tmRepetitions
          mtRepetitions
          tmOverHundred
          mtOverHundred
          tmHundred
          mthundred
          tmNineFive
          mtNineFive
          tmEightFive
          mtEightFive
          tmSevenFive
          mtSevenFive
          tmFive
          mtFive
          tmNewWord
          mtNewWord
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
    return <UpdateNetRateMutation>response.data.updateNetRate;
  }
  async DeleteNetRate(
    input: DeleteNetRateInput,
    condition?: ModelnetRateConditionInput
  ): Promise<DeleteNetRateMutation> {
    const statement = `mutation DeleteNetRate($input: DeleteNetRateInput!, $condition: ModelnetRateConditionInput) {
        deleteNetRate(input: $input, condition: $condition) {
          __typename
          id
          clientId
          tmRepetitions
          mtRepetitions
          tmOverHundred
          mtOverHundred
          tmHundred
          mthundred
          tmNineFive
          mtNineFive
          tmEightFive
          mtEightFive
          tmSevenFive
          mtSevenFive
          tmFive
          mtFive
          tmNewWord
          mtNewWord
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
    return <DeleteNetRateMutation>response.data.deleteNetRate;
  }
  async CreateTransMemory(
    input: CreateTransMemoryInput,
    condition?: ModelTransMemoryConditionInput
  ): Promise<CreateTransMemoryMutation> {
    const statement = `mutation CreateTransMemory($input: CreateTransMemoryInput!, $condition: ModelTransMemoryConditionInput) {
        createTransMemory(input: $input, condition: $condition) {
          __typename
          id
          managerId
          filename
          name
          source
          target
          clientId
          clientName
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
    return <CreateTransMemoryMutation>response.data.createTransMemory;
  }
  async UpdateTransMemory(
    input: UpdateTransMemoryInput,
    condition?: ModelTransMemoryConditionInput
  ): Promise<UpdateTransMemoryMutation> {
    const statement = `mutation UpdateTransMemory($input: UpdateTransMemoryInput!, $condition: ModelTransMemoryConditionInput) {
        updateTransMemory(input: $input, condition: $condition) {
          __typename
          id
          managerId
          filename
          name
          source
          target
          clientId
          clientName
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
    return <UpdateTransMemoryMutation>response.data.updateTransMemory;
  }
  async DeleteTransMemory(
    input: DeleteTransMemoryInput,
    condition?: ModelTransMemoryConditionInput
  ): Promise<DeleteTransMemoryMutation> {
    const statement = `mutation DeleteTransMemory($input: DeleteTransMemoryInput!, $condition: ModelTransMemoryConditionInput) {
        deleteTransMemory(input: $input, condition: $condition) {
          __typename
          id
          managerId
          filename
          name
          source
          target
          clientId
          clientName
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
    return <DeleteTransMemoryMutation>response.data.deleteTransMemory;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          role
          profile {
            __typename
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
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
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
  async GetOrder(id: string): Promise<GetOrderQuery> {
    const statement = `query GetOrder($id: ID!) {
        getOrder(id: $id) {
          __typename
          id
          clientId
          orderName
          orderServices
          orderSourceLanguage
          orderTargetLanguage
          orderSubject
          orderDeadline
          orderQuntity
          orderUnit
          orderBestRate
          orderCurrency
          orderProjectMore
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
    return <GetOrderQuery>response.data.getOrder;
  }
  async ListOrders(
    filter?: ModelOrderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrdersQuery> {
    const statement = `query ListOrders($filter: ModelOrderFilterInput, $limit: Int, $nextToken: String) {
        listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            clientId
            orderName
            orderServices
            orderSourceLanguage
            orderTargetLanguage
            orderSubject
            orderDeadline
            orderQuntity
            orderUnit
            orderBestRate
            orderCurrency
            orderProjectMore
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
    return <ListOrdersQuery>response.data.listOrders;
  }
  async GetOrderMessage(id: string): Promise<GetOrderMessageQuery> {
    const statement = `query GetOrderMessage($id: ID!) {
        getOrderMessage(id: $id) {
          __typename
          id
          content
          orderId
          senderId
          recepterID
          isRead
          time
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
    return <GetOrderMessageQuery>response.data.getOrderMessage;
  }
  async ListOrderMessages(
    filter?: ModelOrderMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrderMessagesQuery> {
    const statement = `query ListOrderMessages($filter: ModelOrderMessageFilterInput, $limit: Int, $nextToken: String) {
        listOrderMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            orderId
            senderId
            recepterID
            isRead
            time
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
    return <ListOrderMessagesQuery>response.data.listOrderMessages;
  }
  async GetOrderPayment(id: string): Promise<GetOrderPaymentQuery> {
    const statement = `query GetOrderPayment($id: ID!) {
        getOrderPayment(id: $id) {
          __typename
          id
          orderId
          description
          date
          status
          amount
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
    return <GetOrderPaymentQuery>response.data.getOrderPayment;
  }
  async ListOrderPayments(
    filter?: ModelOrderPaymentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOrderPaymentsQuery> {
    const statement = `query ListOrderPayments($filter: ModelOrderPaymentFilterInput, $limit: Int, $nextToken: String) {
        listOrderPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            orderId
            description
            date
            status
            amount
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
    return <ListOrderPaymentsQuery>response.data.listOrderPayments;
  }
  async GetClient(id: string): Promise<GetClientQuery> {
    const statement = `query GetClient($id: ID!) {
        getClient(id: $id) {
          __typename
          id
          managerId
          profile {
            __typename
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
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
    return <GetClientQuery>response.data.getClient;
  }
  async ListClients(
    filter?: ModelClientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListClientsQuery> {
    const statement = `query ListClients($filter: ModelClientFilterInput, $limit: Int, $nextToken: String) {
        listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
    return <ListClientsQuery>response.data.listClients;
  }
  async GetProject(id: string): Promise<GetProjectQuery> {
    const statement = `query GetProject($id: ID!) {
        getProject(id: $id) {
          __typename
          id
          projectCode
          clientId
          client {
            __typename
            id
            managerId
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          pmId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
              status
              collectionTerm
              financeString
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          transMemory
          transMemoryNames
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
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
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
  async GetQuote(id: string): Promise<GetQuoteQuery> {
    const statement = `query GetQuote($id: ID!) {
        getQuote(id: $id) {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuoteQuery>response.data.getQuote;
  }
  async ListQuotes(
    filter?: ModelQuoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuotesQuery> {
    const statement = `query ListQuotes($filter: ModelQuoteFilterInput, $limit: Int, $nextToken: String) {
        listQuotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            direction
            projectId
            project {
              __typename
              id
              projectCode
              clientId
              pmId
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
              transMemory
              transMemoryNames
              createdAt
              updatedAt
            }
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
    return <ListQuotesQuery>response.data.listQuotes;
  }
  async GetItem(id: string): Promise<GetItemQuery> {
    const statement = `query GetItem($id: ID!) {
        getItem(id: $id) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetItemQuery>response.data.getItem;
  }
  async ListItems(
    filter?: ModelItemFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListItemsQuery> {
    const statement = `query ListItems($filter: ModelItemFilterInput, $limit: Int, $nextToken: String) {
        listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    return <ListItemsQuery>response.data.listItems;
  }
  async GetInvoice(id: string): Promise<GetInvoiceQuery> {
    const statement = `query GetInvoice($id: ID!) {
        getInvoice(id: $id) {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetInvoiceQuery>response.data.getInvoice;
  }
  async ListInvoices(
    filter?: ModelInvoiceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListInvoicesQuery> {
    const statement = `query ListInvoices($filter: ModelInvoiceFilterInput, $limit: Int, $nextToken: String) {
        listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            direction
            projectId
            project {
              __typename
              id
              projectCode
              clientId
              pmId
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
              transMemory
              transMemoryNames
              createdAt
              updatedAt
            }
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
    return <ListInvoicesQuery>response.data.listInvoices;
  }
  async GetJob(id: string): Promise<GetJobQuery> {
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
              projectId
              wordsCount
              serviceName
              freelancerId
              rate
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          due
          source
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
          status
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
    return <GetJobQuery>response.data.getJob;
  }
  async ListJobs(
    filter?: ModelJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListJobsQuery> {
    const statement = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
        listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            projectId
            filename
            service
            wordCount
            tasks {
              __typename
              nextToken
            }
            due
            source
            target
            segments {
              __typename
              nextToken
            }
            process {
              __typename
              serviceName
              progress
            }
            status
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
    return <ListJobsQuery>response.data.listJobs;
  }
  async GetSegment(id: string): Promise<GetSegmentQuery> {
    const statement = `query GetSegment($id: ID!) {
        getSegment(id: $id) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSegmentQuery>response.data.getSegment;
  }
  async ListSegments(
    filter?: ModelSegmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSegmentsQuery> {
    const statement = `query ListSegments($filter: ModelSegmentFilterInput, $limit: Int, $nextToken: String) {
        listSegments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    return <ListSegmentsQuery>response.data.listSegments;
  }
  async GetSmallTask(id: string): Promise<GetSmallTaskQuery> {
    const statement = `query GetSmallTask($id: ID!) {
        getSmallTask(id: $id) {
          __typename
          id
          jobId
          job {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
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
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSmallTaskQuery>response.data.getSmallTask;
  }
  async ListSmallTasks(
    filter?: ModelSmallTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSmallTasksQuery> {
    const statement = `query ListSmallTasks($filter: ModelSmallTaskFilterInput, $limit: Int, $nextToken: String) {
        listSmallTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    return <ListSmallTasksQuery>response.data.listSmallTasks;
  }
  async GetProjectSmallTaskRelation(
    id: string
  ): Promise<GetProjectSmallTaskRelationQuery> {
    const statement = `query GetProjectSmallTaskRelation($id: ID!) {
        getProjectSmallTaskRelation(id: $id) {
          __typename
          id
          freelancerId
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
          smallTaskId
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
    return <GetProjectSmallTaskRelationQuery>(
      response.data.getProjectSmallTaskRelation
    );
  }
  async ListProjectSmallTaskRelations(
    filter?: ModelProjectSmallTaskRelationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectSmallTaskRelationsQuery> {
    const statement = `query ListProjectSmallTaskRelations($filter: ModelProjectSmallTaskRelationFilterInput, $limit: Int, $nextToken: String) {
        listProjectSmallTaskRelations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            freelancerId
            projectId
            project {
              __typename
              id
              projectCode
              clientId
              pmId
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
              transMemory
              transMemoryNames
              createdAt
              updatedAt
            }
            smallTaskId
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
    return <ListProjectSmallTaskRelationsQuery>(
      response.data.listProjectSmallTaskRelations
    );
  }
  async GetLink(id: string): Promise<GetLinkQuery> {
    const statement = `query GetLink($id: ID!) {
        getLink(id: $id) {
          __typename
          id
          name
          url
          status
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
    return <GetLinkQuery>response.data.getLink;
  }
  async ListLinks(
    filter?: ModellinkFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLinksQuery> {
    const statement = `query ListLinks($filter: ModellinkFilterInput, $limit: Int, $nextToken: String) {
        listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            url
            status
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
    return <ListLinksQuery>response.data.listLinks;
  }
  async GetTeamInvite(id: string): Promise<GetTeamInviteQuery> {
    const statement = `query GetTeamInvite($id: ID!) {
        getTeamInvite(id: $id) {
          __typename
          id
          teamId
          userId
          team {
            __typename
            id
            managerId
            teamName
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            invites {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          status
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
    return <GetTeamInviteQuery>response.data.getTeamInvite;
  }
  async ListTeamInvites(
    filter?: ModelTeamInviteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTeamInvitesQuery> {
    const statement = `query ListTeamInvites($filter: ModelTeamInviteFilterInput, $limit: Int, $nextToken: String) {
        listTeamInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            teamId
            userId
            team {
              __typename
              id
              managerId
              teamName
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            status
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
    return <ListTeamInvitesQuery>response.data.listTeamInvites;
  }
  async GetTeam(id: string): Promise<GetTeamQuery> {
    const statement = `query GetTeam($id: ID!) {
        getTeam(id: $id) {
          __typename
          id
          managerId
          teamName
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          invites {
            __typename
            items {
              __typename
              id
              teamId
              userId
              status
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
    return <GetTeamQuery>response.data.getTeam;
  }
  async ListTeams(
    filter?: ModelTeamFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTeamsQuery> {
    const statement = `query ListTeams($filter: ModelTeamFilterInput, $limit: Int, $nextToken: String) {
        listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            teamName
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            invites {
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
    return <ListTeamsQuery>response.data.listTeams;
  }
  async GetEvent(id: string): Promise<GetEventQuery> {
    const statement = `query GetEvent($id: ID!) {
        getEvent(id: $id) {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          managerId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          textContent
          link
          type
          flagShowHide
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
    return <GetEventQuery>response.data.getEvent;
  }
  async ListEvents(
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventsQuery> {
    const statement = `query ListEvents($filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
        listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            managerId
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            textContent
            link
            type
            flagShowHide
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
    return <ListEventsQuery>response.data.listEvents;
  }
  async GetConversation(id: string): Promise<GetConversationQuery> {
    const statement = `query GetConversation($id: ID!) {
        getConversation(id: $id) {
          __typename
          id
          nextConversation
          firstUserId
          secondUserId
          secondUser {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              conversationId
              senderId
              recepterID
              isRead
              createdAt
              updatedAt
            }
            nextToken
          }
          badge
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
    return <GetConversationQuery>response.data.getConversation;
  }
  async ListConversations(
    filter?: ModelConversationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListConversationsQuery> {
    const statement = `query ListConversations($filter: ModelConversationFilterInput, $limit: Int, $nextToken: String) {
        listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nextConversation
            firstUserId
            secondUserId
            secondUser {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            badge
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
    return <ListConversationsQuery>response.data.listConversations;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
          __typename
          id
          content
          conversationId
          senderId
          recepterID
          isRead
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
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            conversationId
            senderId
            recepterID
            isRead
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
    return <ListMessagesQuery>response.data.listMessages;
  }
  async GetCollection(id: string): Promise<GetCollectionQuery> {
    const statement = `query GetCollection($id: ID!) {
        getCollection(id: $id) {
          __typename
          id
          method
          bankDate
          netAmount
          currency
          fxrate
          amount
          managerId
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
    return <GetCollectionQuery>response.data.getCollection;
  }
  async ListCollections(
    filter?: ModelCollectionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCollectionsQuery> {
    const statement = `query ListCollections($filter: ModelCollectionFilterInput, $limit: Int, $nextToken: String) {
        listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            method
            bankDate
            netAmount
            currency
            fxrate
            amount
            managerId
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
    return <ListCollectionsQuery>response.data.listCollections;
  }
  async GetService(id: string): Promise<GetServiceQuery> {
    const statement = `query GetService($id: ID!) {
        getService(id: $id) {
          __typename
          id
          managerId
          name
          description
          workflow
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
    return <GetServiceQuery>response.data.getService;
  }
  async ListServices(
    filter?: ModelServiceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListServicesQuery> {
    const statement = `query ListServices($filter: ModelServiceFilterInput, $limit: Int, $nextToken: String) {
        listServices(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            name
            description
            workflow
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
    return <ListServicesQuery>response.data.listServices;
  }
  async GetRate(id: string): Promise<GetRateQuery> {
    const statement = `query GetRate($id: ID!) {
        getRate(id: $id) {
          __typename
          id
          managerId
          clientId
          clientName
          service
          languagePair
          specialization
          rate
          currency
          unit
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
    return <GetRateQuery>response.data.getRate;
  }
  async ListRates(
    filter?: ModelRateFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRatesQuery> {
    const statement = `query ListRates($filter: ModelRateFilterInput, $limit: Int, $nextToken: String) {
        listRates(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            clientId
            clientName
            service
            languagePair
            specialization
            rate
            currency
            unit
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
    return <ListRatesQuery>response.data.listRates;
  }
  async GetNetRate(id: string): Promise<GetNetRateQuery> {
    const statement = `query GetNetRate($id: ID!) {
        getNetRate(id: $id) {
          __typename
          id
          clientId
          tmRepetitions
          mtRepetitions
          tmOverHundred
          mtOverHundred
          tmHundred
          mthundred
          tmNineFive
          mtNineFive
          tmEightFive
          mtEightFive
          tmSevenFive
          mtSevenFive
          tmFive
          mtFive
          tmNewWord
          mtNewWord
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
    return <GetNetRateQuery>response.data.getNetRate;
  }
  async ListNetRates(
    filter?: ModelnetRateFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNetRatesQuery> {
    const statement = `query ListNetRates($filter: ModelnetRateFilterInput, $limit: Int, $nextToken: String) {
        listNetRates(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            clientId
            tmRepetitions
            mtRepetitions
            tmOverHundred
            mtOverHundred
            tmHundred
            mthundred
            tmNineFive
            mtNineFive
            tmEightFive
            mtEightFive
            tmSevenFive
            mtSevenFive
            tmFive
            mtFive
            tmNewWord
            mtNewWord
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
    return <ListNetRatesQuery>response.data.listNetRates;
  }
  async GetTransMemory(id: string): Promise<GetTransMemoryQuery> {
    const statement = `query GetTransMemory($id: ID!) {
        getTransMemory(id: $id) {
          __typename
          id
          managerId
          filename
          name
          source
          target
          clientId
          clientName
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
    return <GetTransMemoryQuery>response.data.getTransMemory;
  }
  async ListTransMemorys(
    filter?: ModelTransMemoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTransMemorysQuery> {
    const statement = `query ListTransMemorys($filter: ModelTransMemoryFilterInput, $limit: Int, $nextToken: String) {
        listTransMemorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            filename
            name
            source
            target
            clientId
            clientName
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
    return <ListTransMemorysQuery>response.data.listTransMemorys;
  }
  async GetUsersByUserRole(
    role?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetUsersByUserRoleQuery> {
    const statement = `query GetUsersByUserRole($role: String, $sortDirection: ModelSortDirection, $filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        getUsersByUserRole(role: $role, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (role) {
      gqlAPIServiceArguments.role = role;
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
    return <GetUsersByUserRoleQuery>response.data.getUsersByUserRole;
  }
  async GetClientOrder(
    clientId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelOrderFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetClientOrderQuery> {
    const statement = `query GetClientOrder($clientId: ID, $sortDirection: ModelSortDirection, $filter: ModelOrderFilterInput, $limit: Int, $nextToken: String) {
        getClientOrder(clientId: $clientId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            clientId
            orderName
            orderServices
            orderSourceLanguage
            orderTargetLanguage
            orderSubject
            orderDeadline
            orderQuntity
            orderUnit
            orderBestRate
            orderCurrency
            orderProjectMore
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
    return <GetClientOrderQuery>response.data.getClientOrder;
  }
  async GetMessageByOrderId(
    orderId?: string,
    createdAt?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelOrderMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetMessageByOrderIdQuery> {
    const statement = `query GetMessageByOrderId($orderId: ID, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelOrderMessageFilterInput, $limit: Int, $nextToken: String) {
        getMessageByOrderId(orderId: $orderId, createdAt: $createdAt, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            orderId
            senderId
            recepterID
            isRead
            time
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (orderId) {
      gqlAPIServiceArguments.orderId = orderId;
    }
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
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
    return <GetMessageByOrderIdQuery>response.data.getMessageByOrderId;
  }
  async GetOrderPaymentByOrderId(
    orderId?: string,
    createdAt?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelOrderPaymentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetOrderPaymentByOrderIdQuery> {
    const statement = `query GetOrderPaymentByOrderId($orderId: ID, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelOrderPaymentFilterInput, $limit: Int, $nextToken: String) {
        getOrderPaymentByOrderId(orderId: $orderId, createdAt: $createdAt, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            orderId
            description
            date
            status
            amount
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (orderId) {
      gqlAPIServiceArguments.orderId = orderId;
    }
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
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
    return <GetOrderPaymentByOrderIdQuery>(
      response.data.getOrderPaymentByOrderId
    );
  }
  async GetClientsByManagerId(
    managerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelClientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetClientsByManagerIdQuery> {
    const statement = `query GetClientsByManagerId($managerId: ID, $sortDirection: ModelSortDirection, $filter: ModelClientFilterInput, $limit: Int, $nextToken: String) {
        getClientsByManagerId(managerId: $managerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (managerId) {
      gqlAPIServiceArguments.managerId = managerId;
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
    return <GetClientsByManagerIdQuery>response.data.getClientsByManagerId;
  }
  async GetProjectsByClientId(
    clientId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetProjectsByClientIdQuery> {
    const statement = `query GetProjectsByClientId($clientId: ID, $sortDirection: ModelSortDirection, $filter: ModelProjectFilterInput, $limit: Int, $nextToken: String) {
        getProjectsByClientId(clientId: $clientId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
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
    return <GetProjectsByClientIdQuery>response.data.getProjectsByClientId;
  }
  async GetProjectsByPmId(
    pmId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetProjectsByPmIdQuery> {
    const statement = `query GetProjectsByPmId($pmId: ID, $sortDirection: ModelSortDirection, $filter: ModelProjectFilterInput, $limit: Int, $nextToken: String) {
        getProjectsByPmId(pmId: $pmId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
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
    return <GetProjectsByPmIdQuery>response.data.getProjectsByPmId;
  }
  async GetQuotesByporjectId(
    projectId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelQuoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetQuotesByporjectIdQuery> {
    const statement = `query GetQuotesByporjectId($projectId: ID, $sortDirection: ModelSortDirection, $filter: ModelQuoteFilterInput, $limit: Int, $nextToken: String) {
        getQuotesByporjectId(projectId: $projectId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            direction
            projectId
            project {
              __typename
              id
              projectCode
              clientId
              pmId
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
              transMemory
              transMemoryNames
              createdAt
              updatedAt
            }
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (projectId) {
      gqlAPIServiceArguments.projectId = projectId;
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
    return <GetQuotesByporjectIdQuery>response.data.getQuotesByporjectId;
  }
  async GetQuotesByporjectIdAndDirection(
    projectId?: string,
    direction?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelQuoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetQuotesByporjectIdAndDirectionQuery> {
    const statement = `query GetQuotesByporjectIdAndDirection($projectId: ID, $direction: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelQuoteFilterInput, $limit: Int, $nextToken: String) {
        getQuotesByporjectIdAndDirection(projectId: $projectId, direction: $direction, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            direction
            projectId
            project {
              __typename
              id
              projectCode
              clientId
              pmId
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
              transMemory
              transMemoryNames
              createdAt
              updatedAt
            }
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (projectId) {
      gqlAPIServiceArguments.projectId = projectId;
    }
    if (direction) {
      gqlAPIServiceArguments.direction = direction;
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
    return <GetQuotesByporjectIdAndDirectionQuery>(
      response.data.getQuotesByporjectIdAndDirection
    );
  }
  async GetItemsByQuote(
    paymentId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelItemFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetItemsByQuoteQuery> {
    const statement = `query GetItemsByQuote($paymentId: ID, $sortDirection: ModelSortDirection, $filter: ModelItemFilterInput, $limit: Int, $nextToken: String) {
        getItemsByQuote(paymentId: $paymentId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (paymentId) {
      gqlAPIServiceArguments.paymentId = paymentId;
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
    return <GetItemsByQuoteQuery>response.data.getItemsByQuote;
  }
  async GetInvoiceByporjectId(
    projectId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelInvoiceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetInvoiceByporjectIdQuery> {
    const statement = `query GetInvoiceByporjectId($projectId: ID, $sortDirection: ModelSortDirection, $filter: ModelInvoiceFilterInput, $limit: Int, $nextToken: String) {
        getInvoiceByporjectId(projectId: $projectId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            direction
            projectId
            project {
              __typename
              id
              projectCode
              clientId
              pmId
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
              transMemory
              transMemoryNames
              createdAt
              updatedAt
            }
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (projectId) {
      gqlAPIServiceArguments.projectId = projectId;
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
    return <GetInvoiceByporjectIdQuery>response.data.getInvoiceByporjectId;
  }
  async GetInvoiceByporjectIdAndDirection(
    projectId?: string,
    direction?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelInvoiceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetInvoiceByporjectIdAndDirectionQuery> {
    const statement = `query GetInvoiceByporjectIdAndDirection($projectId: ID, $direction: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelInvoiceFilterInput, $limit: Int, $nextToken: String) {
        getInvoiceByporjectIdAndDirection(projectId: $projectId, direction: $direction, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            direction
            projectId
            project {
              __typename
              id
              projectCode
              clientId
              pmId
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
              transMemory
              transMemoryNames
              createdAt
              updatedAt
            }
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (projectId) {
      gqlAPIServiceArguments.projectId = projectId;
    }
    if (direction) {
      gqlAPIServiceArguments.direction = direction;
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
    return <GetInvoiceByporjectIdAndDirectionQuery>(
      response.data.getInvoiceByporjectIdAndDirection
    );
  }
  async GetJobsByProjectId(
    projectId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelJobFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetJobsByProjectIdQuery> {
    const statement = `query GetJobsByProjectId($projectId: ID, $sortDirection: ModelSortDirection, $filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
        getJobsByProjectId(projectId: $projectId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            projectId
            filename
            service
            wordCount
            tasks {
              __typename
              nextToken
            }
            due
            source
            target
            segments {
              __typename
              nextToken
            }
            process {
              __typename
              serviceName
              progress
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (projectId) {
      gqlAPIServiceArguments.projectId = projectId;
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
    return <GetJobsByProjectIdQuery>response.data.getJobsByProjectId;
  }
  async GetSegmetsByJobId(
    jobId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSegmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetSegmetsByJobIdQuery> {
    const statement = `query GetSegmetsByJobId($jobId: ID, $sortDirection: ModelSortDirection, $filter: ModelSegmentFilterInput, $limit: Int, $nextToken: String) {
        getSegmetsByJobId(jobId: $jobId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (jobId) {
      gqlAPIServiceArguments.jobId = jobId;
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
    return <GetSegmetsByJobIdQuery>response.data.getSegmetsByJobId;
  }
  async GetTasksByJobId(
    jobId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSmallTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetTasksByJobIdQuery> {
    const statement = `query GetTasksByJobId($jobId: ID, $sortDirection: ModelSortDirection, $filter: ModelSmallTaskFilterInput, $limit: Int, $nextToken: String) {
        getTasksByJobId(jobId: $jobId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (jobId) {
      gqlAPIServiceArguments.jobId = jobId;
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
    return <GetTasksByJobIdQuery>response.data.getTasksByJobId;
  }
  async GetTasksByJobIdAndService(
    jobId?: string,
    serviceName?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelSmallTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetTasksByJobIdAndServiceQuery> {
    const statement = `query GetTasksByJobIdAndService($jobId: ID, $serviceName: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelSmallTaskFilterInput, $limit: Int, $nextToken: String) {
        getTasksByJobIdAndService(jobId: $jobId, serviceName: $serviceName, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (jobId) {
      gqlAPIServiceArguments.jobId = jobId;
    }
    if (serviceName) {
      gqlAPIServiceArguments.serviceName = serviceName;
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
    return <GetTasksByJobIdAndServiceQuery>(
      response.data.getTasksByJobIdAndService
    );
  }
  async GetTasksByfreelancerId(
    freelancerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSmallTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetTasksByfreelancerIdQuery> {
    const statement = `query GetTasksByfreelancerId($freelancerId: ID, $sortDirection: ModelSortDirection, $filter: ModelSmallTaskFilterInput, $limit: Int, $nextToken: String) {
        getTasksByfreelancerId(freelancerId: $freelancerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (freelancerId) {
      gqlAPIServiceArguments.freelancerId = freelancerId;
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
    return <GetTasksByfreelancerIdQuery>response.data.getTasksByfreelancerId;
  }
  async GetTasksByfreelancerIdAndUserId(
    jobId?: string,
    freelancerId?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelSmallTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetTasksByfreelancerIdAndUserIdQuery> {
    const statement = `query GetTasksByfreelancerIdAndUserId($jobId: ID, $freelancerId: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelSmallTaskFilterInput, $limit: Int, $nextToken: String) {
        getTasksByfreelancerIdAndUserID(jobId: $jobId, freelancerId: $freelancerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }`;
    const gqlAPIServiceArguments: any = {};
    if (jobId) {
      gqlAPIServiceArguments.jobId = jobId;
    }
    if (freelancerId) {
      gqlAPIServiceArguments.freelancerId = freelancerId;
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
    return <GetTasksByfreelancerIdAndUserIdQuery>(
      response.data.getTasksByfreelancerIdAndUserID
    );
  }
  async GetFreelancerProject(
    freelancerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelProjectSmallTaskRelationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetFreelancerProjectQuery> {
    const statement = `query GetFreelancerProject($freelancerId: ID, $sortDirection: ModelSortDirection, $filter: ModelProjectSmallTaskRelationFilterInput, $limit: Int, $nextToken: String) {
        getFreelancerProject(freelancerId: $freelancerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            freelancerId
            projectId
            project {
              __typename
              id
              projectCode
              clientId
              pmId
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
              transMemory
              transMemoryNames
              createdAt
              updatedAt
            }
            smallTaskId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (freelancerId) {
      gqlAPIServiceArguments.freelancerId = freelancerId;
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
    return <GetFreelancerProjectQuery>response.data.getFreelancerProject;
  }
  async GetRelationBySmallTask(
    smallTaskId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelProjectSmallTaskRelationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetRelationBySmallTaskQuery> {
    const statement = `query GetRelationBySmallTask($smallTaskId: ID, $sortDirection: ModelSortDirection, $filter: ModelProjectSmallTaskRelationFilterInput, $limit: Int, $nextToken: String) {
        getRelationBySmallTask(smallTaskId: $smallTaskId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            freelancerId
            projectId
            project {
              __typename
              id
              projectCode
              clientId
              pmId
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
              transMemory
              transMemoryNames
              createdAt
              updatedAt
            }
            smallTaskId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (smallTaskId) {
      gqlAPIServiceArguments.smallTaskId = smallTaskId;
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
    return <GetRelationBySmallTaskQuery>response.data.getRelationBySmallTask;
  }
  async GetTeamInvitebyTeamId(
    teamId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelTeamInviteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetTeamInvitebyTeamIdQuery> {
    const statement = `query GetTeamInvitebyTeamId($teamId: ID, $sortDirection: ModelSortDirection, $filter: ModelTeamInviteFilterInput, $limit: Int, $nextToken: String) {
        getTeamInvitebyTeamId(teamId: $teamId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            teamId
            userId
            team {
              __typename
              id
              managerId
              teamName
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (teamId) {
      gqlAPIServiceArguments.teamId = teamId;
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
    return <GetTeamInvitebyTeamIdQuery>response.data.getTeamInvitebyTeamId;
  }
  async GetTeamInvitebyuserId(
    userId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelTeamInviteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetTeamInvitebyuserIdQuery> {
    const statement = `query GetTeamInvitebyuserId($userId: ID, $sortDirection: ModelSortDirection, $filter: ModelTeamInviteFilterInput, $limit: Int, $nextToken: String) {
        getTeamInvitebyuserId(userId: $userId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            teamId
            userId
            team {
              __typename
              id
              managerId
              teamName
              createdAt
              updatedAt
            }
            user {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            status
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
    return <GetTeamInvitebyuserIdQuery>response.data.getTeamInvitebyuserId;
  }
  async GetTeamByManagerId(
    managerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelTeamFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetTeamByManagerIdQuery> {
    const statement = `query GetTeamByManagerId($managerId: ID, $sortDirection: ModelSortDirection, $filter: ModelTeamFilterInput, $limit: Int, $nextToken: String) {
        getTeamByManagerId(managerId: $managerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            teamName
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            invites {
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
    if (managerId) {
      gqlAPIServiceArguments.managerId = managerId;
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
    return <GetTeamByManagerIdQuery>response.data.getTeamByManagerId;
  }
  async GetEventByUserId(
    userId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetEventByUserIdQuery> {
    const statement = `query GetEventByUserId($userId: ID, $sortDirection: ModelSortDirection, $filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
        getEventByUserId(userId: $userId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            managerId
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            textContent
            link
            type
            flagShowHide
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
    return <GetEventByUserIdQuery>response.data.getEventByUserId;
  }
  async GetUnShownEvents(
    userId?: string,
    flagShowHide?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetUnShownEventsQuery> {
    const statement = `query GetUnShownEvents($userId: ID, $flagShowHide: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelEventFilterInput, $limit: Int, $nextToken: String) {
        getUnShownEvents(userId: $userId, flagShowHide: $flagShowHide, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            managerId
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            textContent
            link
            type
            flagShowHide
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
    if (flagShowHide) {
      gqlAPIServiceArguments.flagShowHide = flagShowHide;
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
    return <GetUnShownEventsQuery>response.data.getUnShownEvents;
  }
  async GetConversationByUsers(
    firstUserId?: string,
    secondUserId?: ModelIDKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelConversationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetConversationByUsersQuery> {
    const statement = `query GetConversationByUsers($firstUserId: ID, $secondUserId: ModelIDKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelConversationFilterInput, $limit: Int, $nextToken: String) {
        getConversationByUsers(firstUserId: $firstUserId, secondUserId: $secondUserId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nextConversation
            firstUserId
            secondUserId
            secondUser {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            badge
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (firstUserId) {
      gqlAPIServiceArguments.firstUserId = firstUserId;
    }
    if (secondUserId) {
      gqlAPIServiceArguments.secondUserId = secondUserId;
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
    return <GetConversationByUsersQuery>response.data.getConversationByUsers;
  }
  async GetConversationByFirstUser(
    firstUserId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelConversationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetConversationByFirstUserQuery> {
    const statement = `query GetConversationByFirstUser($firstUserId: ID, $sortDirection: ModelSortDirection, $filter: ModelConversationFilterInput, $limit: Int, $nextToken: String) {
        getConversationByFirstUser(firstUserId: $firstUserId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nextConversation
            firstUserId
            secondUserId
            secondUser {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            badge
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (firstUserId) {
      gqlAPIServiceArguments.firstUserId = firstUserId;
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
    return <GetConversationByFirstUserQuery>(
      response.data.getConversationByFirstUser
    );
  }
  async GetConversationBySecondUser(
    secondUserId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelConversationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetConversationBySecondUserQuery> {
    const statement = `query GetConversationBySecondUser($secondUserId: ID, $sortDirection: ModelSortDirection, $filter: ModelConversationFilterInput, $limit: Int, $nextToken: String) {
        getConversationBySecondUser(secondUserId: $secondUserId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nextConversation
            firstUserId
            secondUserId
            secondUser {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            messages {
              __typename
              nextToken
            }
            badge
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (secondUserId) {
      gqlAPIServiceArguments.secondUserId = secondUserId;
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
    return <GetConversationBySecondUserQuery>(
      response.data.getConversationBySecondUser
    );
  }
  async GetMessageByConversationId(
    conversationId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetMessageByConversationIdQuery> {
    const statement = `query GetMessageByConversationId($conversationId: ID, $sortDirection: ModelSortDirection, $filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        getMessageByConversationId(conversationId: $conversationId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            conversationId
            senderId
            recepterID
            isRead
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (conversationId) {
      gqlAPIServiceArguments.conversationId = conversationId;
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
    return <GetMessageByConversationIdQuery>(
      response.data.getMessageByConversationId
    );
  }
  async GetUnReadMessageByUser(
    conversationId?: string,
    isRead?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetUnReadMessageByUserQuery> {
    const statement = `query GetUnReadMessageByUser($conversationId: ID, $isRead: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        getUnReadMessageByUser(conversationId: $conversationId, isRead: $isRead, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            conversationId
            senderId
            recepterID
            isRead
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (conversationId) {
      gqlAPIServiceArguments.conversationId = conversationId;
    }
    if (isRead) {
      gqlAPIServiceArguments.isRead = isRead;
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
    return <GetUnReadMessageByUserQuery>response.data.getUnReadMessageByUser;
  }
  async GetUserUnReadMessageByUser(
    recepterID?: string,
    isRead?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetUserUnReadMessageByUserQuery> {
    const statement = `query GetUserUnReadMessageByUser($recepterID: ID, $isRead: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        getUserUnReadMessageByUser(recepterID: $recepterID, isRead: $isRead, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            conversationId
            senderId
            recepterID
            isRead
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (recepterID) {
      gqlAPIServiceArguments.recepterID = recepterID;
    }
    if (isRead) {
      gqlAPIServiceArguments.isRead = isRead;
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
    return <GetUserUnReadMessageByUserQuery>(
      response.data.getUserUnReadMessageByUser
    );
  }
  async GetManagerCollection(
    managerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelCollectionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetManagerCollectionQuery> {
    const statement = `query GetManagerCollection($managerId: ID, $sortDirection: ModelSortDirection, $filter: ModelCollectionFilterInput, $limit: Int, $nextToken: String) {
        getManagerCollection(managerId: $managerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            method
            bankDate
            netAmount
            currency
            fxrate
            amount
            managerId
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (managerId) {
      gqlAPIServiceArguments.managerId = managerId;
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
    return <GetManagerCollectionQuery>response.data.getManagerCollection;
  }
  async GetManagerServices(
    managerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelServiceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetManagerServicesQuery> {
    const statement = `query GetManagerServices($managerId: ID, $sortDirection: ModelSortDirection, $filter: ModelServiceFilterInput, $limit: Int, $nextToken: String) {
        getManagerServices(managerId: $managerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            name
            description
            workflow
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (managerId) {
      gqlAPIServiceArguments.managerId = managerId;
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
    return <GetManagerServicesQuery>response.data.getManagerServices;
  }
  async GetManagerClientRates(
    managerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelRateFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetManagerClientRatesQuery> {
    const statement = `query GetManagerClientRates($managerId: ID, $sortDirection: ModelSortDirection, $filter: ModelRateFilterInput, $limit: Int, $nextToken: String) {
        getManagerClientRates(managerId: $managerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            clientId
            clientName
            service
            languagePair
            specialization
            rate
            currency
            unit
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (managerId) {
      gqlAPIServiceArguments.managerId = managerId;
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
    return <GetManagerClientRatesQuery>response.data.getManagerClientRates;
  }
  async GetClientRates(
    clientId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelRateFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetClientRatesQuery> {
    const statement = `query GetClientRates($clientId: ID, $sortDirection: ModelSortDirection, $filter: ModelRateFilterInput, $limit: Int, $nextToken: String) {
        getClientRates(clientId: $clientId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            clientId
            clientName
            service
            languagePair
            specialization
            rate
            currency
            unit
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
    return <GetClientRatesQuery>response.data.getClientRates;
  }
  async GetClientNetRate(
    clientId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelnetRateFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetClientNetRateQuery> {
    const statement = `query GetClientNetRate($clientId: ID, $sortDirection: ModelSortDirection, $filter: ModelnetRateFilterInput, $limit: Int, $nextToken: String) {
        getClientNetRate(clientId: $clientId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            clientId
            tmRepetitions
            mtRepetitions
            tmOverHundred
            mtOverHundred
            tmHundred
            mthundred
            tmNineFive
            mtNineFive
            tmEightFive
            mtEightFive
            tmSevenFive
            mtSevenFive
            tmFive
            mtFive
            tmNewWord
            mtNewWord
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
    return <GetClientNetRateQuery>response.data.getClientNetRate;
  }
  async GetManagerMemory(
    managerId?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelTransMemoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<GetManagerMemoryQuery> {
    const statement = `query GetManagerMemory($managerId: ID, $sortDirection: ModelSortDirection, $filter: ModelTransMemoryFilterInput, $limit: Int, $nextToken: String) {
        getManagerMemory(managerId: $managerId, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            managerId
            filename
            name
            source
            target
            clientId
            clientName
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (managerId) {
      gqlAPIServiceArguments.managerId = managerId;
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
    return <GetManagerMemoryQuery>response.data.getManagerMemory;
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
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
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
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
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
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateOrderListener: Observable<OnCreateOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrder {
        onCreateOrder {
          __typename
          id
          clientId
          orderName
          orderServices
          orderSourceLanguage
          orderTargetLanguage
          orderSubject
          orderDeadline
          orderQuntity
          orderUnit
          orderBestRate
          orderCurrency
          orderProjectMore
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateOrderSubscription>;

  OnUpdateOrderListener: Observable<OnUpdateOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrder {
        onUpdateOrder {
          __typename
          id
          clientId
          orderName
          orderServices
          orderSourceLanguage
          orderTargetLanguage
          orderSubject
          orderDeadline
          orderQuntity
          orderUnit
          orderBestRate
          orderCurrency
          orderProjectMore
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateOrderSubscription>;

  OnDeleteOrderListener: Observable<OnDeleteOrderSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrder {
        onDeleteOrder {
          __typename
          id
          clientId
          orderName
          orderServices
          orderSourceLanguage
          orderTargetLanguage
          orderSubject
          orderDeadline
          orderQuntity
          orderUnit
          orderBestRate
          orderCurrency
          orderProjectMore
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteOrderSubscription>;

  OnCreateOrderMessageListener: Observable<
    OnCreateOrderMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrderMessage {
        onCreateOrderMessage {
          __typename
          id
          content
          orderId
          senderId
          recepterID
          isRead
          time
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateOrderMessageSubscription>;

  OnUpdateOrderMessageListener: Observable<
    OnUpdateOrderMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrderMessage {
        onUpdateOrderMessage {
          __typename
          id
          content
          orderId
          senderId
          recepterID
          isRead
          time
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateOrderMessageSubscription>;

  OnDeleteOrderMessageListener: Observable<
    OnDeleteOrderMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrderMessage {
        onDeleteOrderMessage {
          __typename
          id
          content
          orderId
          senderId
          recepterID
          isRead
          time
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteOrderMessageSubscription>;

  OnCreateOrderPaymentListener: Observable<
    OnCreateOrderPaymentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOrderPayment {
        onCreateOrderPayment {
          __typename
          id
          orderId
          description
          date
          status
          amount
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateOrderPaymentSubscription>;

  OnUpdateOrderPaymentListener: Observable<
    OnUpdateOrderPaymentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOrderPayment {
        onUpdateOrderPayment {
          __typename
          id
          orderId
          description
          date
          status
          amount
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateOrderPaymentSubscription>;

  OnDeleteOrderPaymentListener: Observable<
    OnDeleteOrderPaymentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOrderPayment {
        onDeleteOrderPayment {
          __typename
          id
          orderId
          description
          date
          status
          amount
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteOrderPaymentSubscription>;

  OnCreateClientListener: Observable<OnCreateClientSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateClient {
        onCreateClient {
          __typename
          id
          managerId
          profile {
            __typename
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateClientSubscription>;

  OnUpdateClientListener: Observable<OnUpdateClientSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateClient {
        onUpdateClient {
          __typename
          id
          managerId
          profile {
            __typename
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateClientSubscription>;

  OnDeleteClientListener: Observable<OnDeleteClientSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteClient {
        onDeleteClient {
          __typename
          id
          managerId
          profile {
            __typename
            accountType
            companyName
            legalName
            website
            taxNumber
            vatNumber
            country
            companyAddress
            Zip
            about
            givenName
            familyName
            gender
            position
            email
            tel
            whatsapp
            wechat
            line
            qq
            telegram
            slack
            viber
            note
            timezone
            rate
            customerCode
            customerName
            logoKey
            paymentTerm
            paymentMethod
            dayOption
            payDay
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteClientSubscription>;

  OnCreateProjectListener: Observable<
    OnCreateProjectSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProject {
        onCreateProject {
          __typename
          id
          projectCode
          clientId
          client {
            __typename
            id
            managerId
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          pmId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
              status
              collectionTerm
              financeString
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          transMemory
          transMemoryNames
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
          projectCode
          clientId
          client {
            __typename
            id
            managerId
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          pmId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
              status
              collectionTerm
              financeString
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          transMemory
          transMemoryNames
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
          projectCode
          clientId
          client {
            __typename
            id
            managerId
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          pmId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
              status
              collectionTerm
              financeString
              createdAt
              updatedAt
            }
            nextToken
          }
          jobs {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          transMemory
          transMemoryNames
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteProjectSubscription>;

  OnCreateQuoteListener: Observable<OnCreateQuoteSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuote {
        onCreateQuote {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
      }`
    )
  ) as Observable<OnCreateQuoteSubscription>;

  OnUpdateQuoteListener: Observable<OnUpdateQuoteSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuote {
        onUpdateQuote {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
      }`
    )
  ) as Observable<OnUpdateQuoteSubscription>;

  OnDeleteQuoteListener: Observable<OnDeleteQuoteSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuote {
        onDeleteQuote {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
      }`
    )
  ) as Observable<OnDeleteQuoteSubscription>;

  OnCreateItemListener: Observable<OnCreateItemSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateItem {
        onCreateItem {
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
      }`
    )
  ) as Observable<OnCreateItemSubscription>;

  OnUpdateItemListener: Observable<OnUpdateItemSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateItem {
        onUpdateItem {
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
      }`
    )
  ) as Observable<OnUpdateItemSubscription>;

  OnDeleteItemListener: Observable<OnDeleteItemSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteItem {
        onDeleteItem {
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
      }`
    )
  ) as Observable<OnDeleteItemSubscription>;

  OnCreateInvoiceListener: Observable<
    OnCreateInvoiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateInvoice {
        onCreateInvoice {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
      }`
    )
  ) as Observable<OnCreateInvoiceSubscription>;

  OnUpdateInvoiceListener: Observable<
    OnUpdateInvoiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateInvoice {
        onUpdateInvoice {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
      }`
    )
  ) as Observable<OnUpdateInvoiceSubscription>;

  OnDeleteInvoiceListener: Observable<
    OnDeleteInvoiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteInvoice {
        onDeleteInvoice {
          __typename
          id
          direction
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
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
      }`
    )
  ) as Observable<OnDeleteInvoiceSubscription>;

  OnCreateJobListener: Observable<OnCreateJobSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateJob {
        onCreateJob {
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
              projectId
              wordsCount
              serviceName
              freelancerId
              rate
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          due
          source
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
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateJobSubscription>;

  OnUpdateJobListener: Observable<OnUpdateJobSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateJob {
        onUpdateJob {
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
              projectId
              wordsCount
              serviceName
              freelancerId
              rate
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          due
          source
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
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateJobSubscription>;

  OnDeleteJobListener: Observable<OnDeleteJobSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteJob {
        onDeleteJob {
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
              projectId
              wordsCount
              serviceName
              freelancerId
              rate
              status
              createdAt
              updatedAt
            }
            nextToken
          }
          due
          source
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
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteJobSubscription>;

  OnCreateSegmentListener: Observable<
    OnCreateSegmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSegment {
        onCreateSegment {
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
      }`
    )
  ) as Observable<OnCreateSegmentSubscription>;

  OnUpdateSegmentListener: Observable<
    OnUpdateSegmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSegment {
        onUpdateSegment {
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
      }`
    )
  ) as Observable<OnUpdateSegmentSubscription>;

  OnDeleteSegmentListener: Observable<
    OnDeleteSegmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSegment {
        onDeleteSegment {
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
      }`
    )
  ) as Observable<OnDeleteSegmentSubscription>;

  OnCreateSmallTaskListener: Observable<
    OnCreateSmallTaskSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateSmallTask {
        onCreateSmallTask {
          __typename
          id
          jobId
          job {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
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
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
      }`
    )
  ) as Observable<OnCreateSmallTaskSubscription>;

  OnUpdateSmallTaskListener: Observable<
    OnUpdateSmallTaskSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateSmallTask {
        onUpdateSmallTask {
          __typename
          id
          jobId
          job {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
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
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
      }`
    )
  ) as Observable<OnUpdateSmallTaskSubscription>;

  OnDeleteSmallTaskListener: Observable<
    OnDeleteSmallTaskSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteSmallTask {
        onDeleteSmallTask {
          __typename
          id
          jobId
          job {
            __typename
            items {
              __typename
              id
              projectId
              filename
              service
              wordCount
              due
              source
              target
              status
              createdAt
              updatedAt
            }
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
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
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
      }`
    )
  ) as Observable<OnDeleteSmallTaskSubscription>;

  OnCreateProjectSmallTaskRelationListener: Observable<
    OnCreateProjectSmallTaskRelationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProjectSmallTaskRelation {
        onCreateProjectSmallTaskRelation {
          __typename
          id
          freelancerId
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
          smallTaskId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateProjectSmallTaskRelationSubscription>;

  OnUpdateProjectSmallTaskRelationListener: Observable<
    OnUpdateProjectSmallTaskRelationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProjectSmallTaskRelation {
        onUpdateProjectSmallTaskRelation {
          __typename
          id
          freelancerId
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
          smallTaskId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateProjectSmallTaskRelationSubscription>;

  OnDeleteProjectSmallTaskRelationListener: Observable<
    OnDeleteProjectSmallTaskRelationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProjectSmallTaskRelation {
        onDeleteProjectSmallTaskRelation {
          __typename
          id
          freelancerId
          projectId
          project {
            __typename
            id
            projectCode
            clientId
            client {
              __typename
              id
              managerId
              createdAt
              updatedAt
            }
            pmId
            manager {
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
            paymentStatus
            quotes {
              __typename
              nextToken
            }
            invoices {
              __typename
              nextToken
            }
            jobs {
              __typename
              nextToken
            }
            transMemory
            transMemoryNames
            createdAt
            updatedAt
          }
          smallTaskId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteProjectSmallTaskRelationSubscription>;

  OnCreateLinkListener: Observable<OnCreateLinkSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateLink {
        onCreateLink {
          __typename
          id
          name
          url
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateLinkSubscription>;

  OnUpdateLinkListener: Observable<OnUpdateLinkSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLink {
        onUpdateLink {
          __typename
          id
          name
          url
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateLinkSubscription>;

  OnDeleteLinkListener: Observable<OnDeleteLinkSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLink {
        onDeleteLink {
          __typename
          id
          name
          url
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteLinkSubscription>;

  OnCreateTeamInviteListener: Observable<
    OnCreateTeamInviteSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTeamInvite {
        onCreateTeamInvite {
          __typename
          id
          teamId
          userId
          team {
            __typename
            id
            managerId
            teamName
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            invites {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateTeamInviteSubscription>;

  OnUpdateTeamInviteListener: Observable<
    OnUpdateTeamInviteSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTeamInvite {
        onUpdateTeamInvite {
          __typename
          id
          teamId
          userId
          team {
            __typename
            id
            managerId
            teamName
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            invites {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateTeamInviteSubscription>;

  OnDeleteTeamInviteListener: Observable<
    OnDeleteTeamInviteSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTeamInvite {
        onDeleteTeamInvite {
          __typename
          id
          teamId
          userId
          team {
            __typename
            id
            managerId
            teamName
            manager {
              __typename
              id
              role
              createdAt
              updatedAt
            }
            invites {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteTeamInviteSubscription>;

  OnCreateTeamListener: Observable<OnCreateTeamSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTeam {
        onCreateTeam {
          __typename
          id
          managerId
          teamName
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          invites {
            __typename
            items {
              __typename
              id
              teamId
              userId
              status
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
  ) as Observable<OnCreateTeamSubscription>;

  OnUpdateTeamListener: Observable<OnUpdateTeamSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTeam {
        onUpdateTeam {
          __typename
          id
          managerId
          teamName
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          invites {
            __typename
            items {
              __typename
              id
              teamId
              userId
              status
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
  ) as Observable<OnUpdateTeamSubscription>;

  OnDeleteTeamListener: Observable<OnDeleteTeamSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTeam {
        onDeleteTeam {
          __typename
          id
          managerId
          teamName
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          invites {
            __typename
            items {
              __typename
              id
              teamId
              userId
              status
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
  ) as Observable<OnDeleteTeamSubscription>;

  OnCreateEventListener: Observable<OnCreateEventSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateEvent {
        onCreateEvent {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          managerId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          textContent
          link
          type
          flagShowHide
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateEventSubscription>;

  OnUpdateEventListener: Observable<OnUpdateEventSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEvent {
        onUpdateEvent {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          managerId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          textContent
          link
          type
          flagShowHide
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateEventSubscription>;

  OnDeleteEventListener: Observable<OnDeleteEventSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEvent {
        onDeleteEvent {
          __typename
          id
          userId
          user {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          managerId
          manager {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          textContent
          link
          type
          flagShowHide
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteEventSubscription>;

  OnCreateConversationListener: Observable<
    OnCreateConversationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateConversation {
        onCreateConversation {
          __typename
          id
          nextConversation
          firstUserId
          secondUserId
          secondUser {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              conversationId
              senderId
              recepterID
              isRead
              createdAt
              updatedAt
            }
            nextToken
          }
          badge
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateConversationSubscription>;

  OnUpdateConversationListener: Observable<
    OnUpdateConversationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateConversation {
        onUpdateConversation {
          __typename
          id
          nextConversation
          firstUserId
          secondUserId
          secondUser {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              conversationId
              senderId
              recepterID
              isRead
              createdAt
              updatedAt
            }
            nextToken
          }
          badge
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateConversationSubscription>;

  OnDeleteConversationListener: Observable<
    OnDeleteConversationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteConversation {
        onDeleteConversation {
          __typename
          id
          nextConversation
          firstUserId
          secondUserId
          secondUser {
            __typename
            id
            role
            profile {
              __typename
              accountType
              companyName
              legalName
              website
              taxNumber
              vatNumber
              country
              companyAddress
              Zip
              about
              givenName
              familyName
              gender
              position
              email
              tel
              whatsapp
              wechat
              line
              qq
              telegram
              slack
              viber
              note
              timezone
              rate
              customerCode
              customerName
              logoKey
              paymentTerm
              paymentMethod
              dayOption
              payDay
            }
            createdAt
            updatedAt
          }
          messages {
            __typename
            items {
              __typename
              id
              content
              conversationId
              senderId
              recepterID
              isRead
              createdAt
              updatedAt
            }
            nextToken
          }
          badge
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteConversationSubscription>;

  OnCreateMessageListener: Observable<
    OnCreateMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateMessage {
        onCreateMessage {
          __typename
          id
          content
          conversationId
          senderId
          recepterID
          isRead
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateMessageSubscription>;

  OnUpdateMessageListener: Observable<
    OnUpdateMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateMessage {
        onUpdateMessage {
          __typename
          id
          content
          conversationId
          senderId
          recepterID
          isRead
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateMessageSubscription>;

  OnDeleteMessageListener: Observable<
    OnDeleteMessageSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteMessage {
        onDeleteMessage {
          __typename
          id
          content
          conversationId
          senderId
          recepterID
          isRead
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteMessageSubscription>;

  OnCreateCollectionListener: Observable<
    OnCreateCollectionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCollection {
        onCreateCollection {
          __typename
          id
          method
          bankDate
          netAmount
          currency
          fxrate
          amount
          managerId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCollectionSubscription>;

  OnUpdateCollectionListener: Observable<
    OnUpdateCollectionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCollection {
        onUpdateCollection {
          __typename
          id
          method
          bankDate
          netAmount
          currency
          fxrate
          amount
          managerId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCollectionSubscription>;

  OnDeleteCollectionListener: Observable<
    OnDeleteCollectionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCollection {
        onDeleteCollection {
          __typename
          id
          method
          bankDate
          netAmount
          currency
          fxrate
          amount
          managerId
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCollectionSubscription>;

  OnCreateServiceListener: Observable<
    OnCreateServiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateService {
        onCreateService {
          __typename
          id
          managerId
          name
          description
          workflow
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateServiceSubscription>;

  OnUpdateServiceListener: Observable<
    OnUpdateServiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateService {
        onUpdateService {
          __typename
          id
          managerId
          name
          description
          workflow
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateServiceSubscription>;

  OnDeleteServiceListener: Observable<
    OnDeleteServiceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteService {
        onDeleteService {
          __typename
          id
          managerId
          name
          description
          workflow
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteServiceSubscription>;

  OnCreateRateListener: Observable<OnCreateRateSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateRate {
        onCreateRate {
          __typename
          id
          managerId
          clientId
          clientName
          service
          languagePair
          specialization
          rate
          currency
          unit
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateRateSubscription>;

  OnUpdateRateListener: Observable<OnUpdateRateSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRate {
        onUpdateRate {
          __typename
          id
          managerId
          clientId
          clientName
          service
          languagePair
          specialization
          rate
          currency
          unit
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateRateSubscription>;

  OnDeleteRateListener: Observable<OnDeleteRateSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRate {
        onDeleteRate {
          __typename
          id
          managerId
          clientId
          clientName
          service
          languagePair
          specialization
          rate
          currency
          unit
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteRateSubscription>;

  OnCreateNetRateListener: Observable<
    OnCreateNetRateSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateNetRate {
        onCreateNetRate {
          __typename
          id
          clientId
          tmRepetitions
          mtRepetitions
          tmOverHundred
          mtOverHundred
          tmHundred
          mthundred
          tmNineFive
          mtNineFive
          tmEightFive
          mtEightFive
          tmSevenFive
          mtSevenFive
          tmFive
          mtFive
          tmNewWord
          mtNewWord
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateNetRateSubscription>;

  OnUpdateNetRateListener: Observable<
    OnUpdateNetRateSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateNetRate {
        onUpdateNetRate {
          __typename
          id
          clientId
          tmRepetitions
          mtRepetitions
          tmOverHundred
          mtOverHundred
          tmHundred
          mthundred
          tmNineFive
          mtNineFive
          tmEightFive
          mtEightFive
          tmSevenFive
          mtSevenFive
          tmFive
          mtFive
          tmNewWord
          mtNewWord
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateNetRateSubscription>;

  OnDeleteNetRateListener: Observable<
    OnDeleteNetRateSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteNetRate {
        onDeleteNetRate {
          __typename
          id
          clientId
          tmRepetitions
          mtRepetitions
          tmOverHundred
          mtOverHundred
          tmHundred
          mthundred
          tmNineFive
          mtNineFive
          tmEightFive
          mtEightFive
          tmSevenFive
          mtSevenFive
          tmFive
          mtFive
          tmNewWord
          mtNewWord
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteNetRateSubscription>;

  OnCreateTransMemoryListener: Observable<
    OnCreateTransMemorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTransMemory {
        onCreateTransMemory {
          __typename
          id
          managerId
          filename
          name
          source
          target
          clientId
          clientName
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateTransMemorySubscription>;

  OnUpdateTransMemoryListener: Observable<
    OnUpdateTransMemorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTransMemory {
        onUpdateTransMemory {
          __typename
          id
          managerId
          filename
          name
          source
          target
          clientId
          clientName
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateTransMemorySubscription>;

  OnDeleteTransMemoryListener: Observable<
    OnDeleteTransMemorySubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTransMemory {
        onDeleteTransMemory {
          __typename
          id
          managerId
          filename
          name
          source
          target
          clientId
          clientName
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteTransMemorySubscription>;
}
