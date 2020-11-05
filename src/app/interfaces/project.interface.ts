export interface Project {
  id?: string;
  clientId:string;
  pmId:string;
  name:string;
  description:string;
  budget:number;
  approvedBudget:number;
  sourceLanguage?: string;
  targetLanguage?: string;
  serviceType?: string;
  dueDate?: string;
  status?: string;
  quoteStatus?: string;
  developmentStatus?: string;
  paymentStatus?: string;
}

export interface Profile{
  accountType?:string
  companyAddress?:string
  Zip?:string
  taxNumber?:string
  note?:string
  givenName?: string
  familyName?: string
  company?: string
  birthday?: string
  email?: string
  email_2?: string
  website?: string
  postal?: string
  city?: string
  country?: string
  timezone?: string
  address_2?: string
  postal_2?: string
  city_2?: string
  country_2?: string
  timezone_2?: string
  phone?: string
  phone_2?: string
  skype?: string
  line?:string
  rate?:number
}

export interface Job {
  id?:string;
  filename?:string;
  tasks?:Array<SmallTask>;
  sources?:Array<string>;
  targets?:Array<string>;
  status?:Array<string>;
  words?:Array<number>;
}
export interface SmallTask {
  id?:string;
  conf?:string;
  filename:string;
  words?:number;
  start?:number;
  end?:number;
}
export interface Segment{
  id?:string;
  source?:string;
  target?:string;
  conf?:string;
}
export interface Link{
  id?:string;
  name?:string;
  link?:string;
  status?:string;
}

export interface AssigningTask{
  id?:string;
  jobId?:string;
  conf?:string;
  filename?:string;
  wordsCount?:number;
  segments?:Array<any>;
  freelancerId:number;
  freelancerName:string
}