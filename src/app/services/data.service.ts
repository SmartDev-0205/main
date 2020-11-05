import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { Storage } from "aws-amplify";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject(null);
  selectedProject = this.dataSource.asObservable();
  private currentJobSource = new BehaviorSubject(null);
  selectedJob = this.currentJobSource.asObservable();

  private projectsForFinanceSource = new BehaviorSubject(null);
  projectsForFinance = this.projectsForFinanceSource.asObservable();

  private profileForSettingSource = new BehaviorSubject(null);
  profileForSetting = this.profileForSettingSource.asObservable();

  private userIdForSettingSource = new BehaviorSubject(null);
  userIdForSetting = this.userIdForSettingSource.asObservable();
  // current evemts fpr curretn user
  private eventSource = new BehaviorSubject(null);
  currentEvent = this.eventSource.asObservable();



  public currences = [];
  public allCountries = [];
  public allTimezons = [];
  public projectStatus = [];
  public projectType = [];
  public quotesStatus = [];
  public orderStatus = [];
  public invoiceStatus = [];
  public projectSummary = [];
  public allCurrencies = ['USD','EUR',,'THB','CRC','GBP','ILS','INR','JPY','KRW','NGN','PHP','PLN','PYG','UAH','CNY']
  public payDays = ["in__days", "by end of month", "by the end of next month", "on date of the month", "on every date of the following month"]
  public collectionTerms = ["After invoicing upon customer credit term", "After task delivery"];
  public services = ["Translation", "Editing", "Proofreading", "Destop Publishing", "Transcription", "Linguistic Quality Assurance", "Marchine Translation", "Text Billingual Corpus"];
  // public teamInviteUrl = "http://localhost:8100/invite/team-invite/";
  public teamInviteUrl = "https://d2il3btwt0qh0f.cloudfront.net/invite/team-invite/";
  // public projectUrl = "http://localhost:8100/project/";
  public projectUrl = "https://d2il3btwt0qh0f.cloudfront.net/project/";
  // public searchUrl = "https://cors-anywhere.herokuapp.com/http://ec2-54-237-68-190.compute-1.amazonaws.com/";
  public searchUrl = "https://server.prolocalize.com/search/";
  public accessKeyId = 'AKIAZGVW5XXZHGYS6P5S';
  public secretAccessKey = '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';
  public region = 'ap-southeast-2';
  public uploadUrl = "https://catserver.prolocalize.com/upload/";
  public serverUrl = "https://catserver.prolocalize.com/"
  public invoiceScss = `
  <html>
  <style>
  .button{
    font-size: 12px;
    border-radius: 0px;
  }
  .content{
      padding: 10px;
      width: 100%;
      height: 100%;
      background-color: #EEEEEE;
      display: flex;
      justify-content: center;
      align-items: flex-start;
  }
  .main-content{
      background-color: white;
      width: 95%;
      padding: 30px 20px 30px 20px;
      
  }
  .table-content{
      margin: 24px;
      min-height: 100px;
  }
  .event-container{
      display: flex;
      justify-content: flex-end;;
      margin-top: 30px;
  }
  .edit-label{
      width: 40%;
  }
  .edit-input{
      width: 60%;
      border-bottom: 1px solid #949494;
      --padding-bottom: 2px;
      
  }
  .no-editable-edit-input{
      width: 60%;
      border-bottom: 1px solid white;
      --padding-bottom: 2px;
      pointer-events: none;
  }
  .description-label{
      width: 20%;
  }
  label{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .description-text{
      width: 80%;
      height: 50px;
      border:1px solid #EAEBF5
  }
  .no-editable-description-text{
      width: 80%;
      height: 50px;
      border:1px solid white;
      pointer-events: none;
  }
  .full-width{
      width: 100%;
  }
  .half-width{
      width: 50%;
  }
  .full-height{
      height: 100vh;
  }
  .center {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    .input-style{
        width: 60%;
    }
    .underline-box{
        padding: 3px;
        border-bottom: solid #CECECE;
        text-emphasis: center;
    }
  .project-content{
      padding: 10px;
      width: 100%;
      min-height: 100%;
      background-color: #EEEEEE;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .header{
    width: $contentPercent;
    display: flex;  
    align-items: center;
    justify-content: space-between;
}
.box{
    display: flex;
    align-items: center;
}
.td-padding{
    padding: 10px;
}
.img-width{
    width: 80%;
}
.second-td-padding{
    padding-top: 50px;
}
.title-box{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
}


.item-table-item-label{
    color: black;
}
.item-table-description{
    padding-bottom: 5px!important;
}
.table{
    border-collapse: collapse;
    border: solid 1px black;
    table-layout: fixed;
}
.tr {
    border: solid 1px black;
}
.td {
    border: solid 1px black;
}
.item-table-project-title{
    font-weight: bold;
}
.th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
    border: solid 1px black;
    padding-left: 5px;
}
.item-table-table-row{
    display: table-row;
}
.item-table-item-align{
    text-align: left;
    vertical-align: center;
    padding-left: 5px;
    border: solid 1px;
}
.manage-box{
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
}
.right-align{
    display: flex;
    justify-content: flex-end;
}
.right-align-input{
    text-align: right;
}
textarea{
    width: 100%;
    height: 100px;
}
  </style>`;
  public currencyRate = {};
  public allLanguages = [];
  public allLanguageCode = [];
  public allUnit = ["Word", "Page", "Min", "Hour", "Line"]
  public allPosition = ["Account Manager", "Project Manager", "Vendor Manager", "Financial Manager", "Linguist", "Administrator"];
  public methodlist = ["Cash", "Bank transfer", "Credit card", "Cheques"];
  public accountTypes = ["Company End-Client", "Translation Agency", "Government", "Individual"]
  constructor(
    private http: Http
  ) {
    this.projectType.push("Translating");
    this.projectType.push("Editing");
    this.projectType.push("ProofReading");
    this.projectType.push("Transcription");

    this.projectStatus.push("New")
    this.projectStatus.push("Assigned")
    this.projectStatus.push("In progress")
    this.projectStatus.push("Completed")
    this.projectStatus.push("Cancelled")

    this.quotesStatus.push("Accept")
    this.quotesStatus.push("Cancel")
    this.quotesStatus.push("Suggest new price")
    this.quotesStatus.push("Decline")

    this.orderStatus.push("In Progress")
    this.orderStatus.push("Delivered")
    this.orderStatus.push("Approved")

    this.invoiceStatus.push("Pending")
    this.invoiceStatus.push("Partially Paid")
    this.invoiceStatus.push("Paid")

    this.projectSummary.push("Project Completed")
    this.projectSummary.push("Project in Progress")
    this.projectSummary.push("Project Cancelled")
    this.projectSummary.push("Total Words Translated")
    this.projectSummary.push("Language Pairs");
    this.getCurrencyRate();
    this.getAllLanguage();
    this.getAllCountries();
    this.getAllTimezones();
  }
  //   getAllLanguages(){
  //     this.http.get('assets/timezone.html').subscribe(data => {
  //         let dataStr = data.text();
  //         let options = dataStr.split("</option>");
  //         options.forEach(option=>{
  //             let timezone = option.replace(/<option [\s\S]*>/,"");
  //             if(timezone != "")
  //                 this.allTimezons.push(timezone);
  //         })
  //     })
  //   }
  getAllTimezones() {
    this.http.get('assets/timezone.html').subscribe(data => {
      let dataStr = data.text();
      let options = dataStr.split("</option>");
      options.forEach(option => {
        let timezone = option.replace(/<option [\s\S]*>/, "");
        if (timezone != "")
          this.allTimezons.push(timezone);
      })
    })
  }
  getAllCountries() {
    return [];
    // let path = "https://cors-anywhere.herokuapp.com/https://api.printful.com/countries";
    // this.http.get(path,{responseType:0}).subscribe(data=>{
    //     let strBody = data['_body'];
    //     let body = JSON.parse(strBody);
    //     let result = body.result;
    //     result.forEach(country=>{
    //         this.allCountries.push(country.name);
    //     })
    // })  
  }
  getAllLanguage() {
    let path = "assets/Languages.csv";
    this.http.get(path, { responseType: 0 }).subscribe(data => {
      let csvData = data['_body'];
      let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
      csvRecordsArray.shift();
      csvRecordsArray.forEach(record => {
        if (record) {
          let recordDataArray = record.split(",");
          this.allLanguages.push(recordDataArray[1]);
          this.allLanguageCode.push(recordDataArray[0]);
        }

      })
    })
  }
  getLanguageCodesFromLanguages(languages) {
    let languageCodes = [];
    languages.forEach(language => {
      let index = this.allLanguages.indexOf(language);
      let languageCode = this.allLanguageCode[index];
      languageCodes.push(languageCode);
    });
    return languageCodes;
  }
  getLanguageCodeFromLanguage(language) {
    let index = this.allLanguages.indexOf(language);
    let languageCode = this.allLanguageCode[index];
    return languageCode;
  }
  async getCurrencyRate() {
    // let path = "https://cors-anywhere.herokuapp.com/https://kasikornbank.com/EN/rate/Pages/default.aspx";
    // let data = await this.http.post(path,{responseType:0,mode: 'no-cors'}).toPromise();
    // let response = data['_body']; 
    // let informationArray = response.match(/\[{[\s\S]*'}]/);
    // if(!informationArray)
    //     return;
    // let information = informationArray[0];
    // information = information.replace(/'/g,'"');
    // information = information.replace(/\s/g,'');
    // let informationObject = JSON.parse(information);
    // informationObject.forEach(individualCurrency => {
    //     let currency = individualCurrency.NAME;
    //     let rate = individualCurrency.SELL;
    //     this.currencyRate[currency] = rate;
    //     this.currences.push(currency);
    // });
  }
  changeCurrentProject(project) {
    this.dataSource.next(project)
  }
  changeCurrentJob(job) {
    // this.currentJobSource.next(null);
    this.currentJobSource.next(job);
  }
  changeCurrentEvents(events) {
    this.eventSource.next(events);
  }

  changeProjectsForFinance(projects) {
    this.projectsForFinanceSource.next(projects);
  }
  changeProfileForSetting(profile) {
    this.profileForSettingSource.next(profile);
  }
  changeUserIdForSetting(id) {
    this.userIdForSettingSource.next(id);
  }
  async uploadLogoFile(filename, file: any) {
    return await Storage.put(
      `Logos/${filename}`,
      file
    );
  }
  async downloadLoloFileUrl(filekey) {
    const url: string = await Storage.get(filekey) as string;
    return url;
  }
  //   async downloadLoloFile(filekey){
  //     const url: string = await Storage.get(filekey) as string;

  //   }
  async deleteLogoFile(filekey) {
    Storage.remove(filekey)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }
}
