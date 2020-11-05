import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { TranslateService } from 'src/app/services/translate.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-translator',
  templateUrl: './translator.page.html',
  styleUrls: ['./translator.page.scss'],
})
export class TranslatorPage implements OnInit {
  private textButtonSeleted = true;
  private docButtonSeleted = false;
  private sourceLanaguageCode = "auto";
  private targetLanguageCode = "en";
  private sourceText = "";
  private targetText = "";
  private focusFlag = false;
  private sourceLanguages = [];
  private targetLanguages = [];
  private sourceLanguage = "any language";
  private targetLanguage = "English";
  private stack = [];
  private interval;
  private fileinputed = false;
  private inputedFilename = "Please select files that.";
  private translating = false;
  private translateResultText = "";
  private headerShowFlag = true;

  private translationFlag = true;
  private trascriptFlag = false;
  private aiTrainingFlag = false;
  private companyFlag = false;
  @ViewChild("targetArea", {static: false})targetArea:ElementRef;
  @ViewChild("sourceArea", {static: false})sourceArea:ElementRef;
  @ViewChild("fileUploadInput", {static: false})fileUploadInput:ElementRef;
  constructor(
    private translateService:TranslateService,
    private menuCtrl:MenuController,
    private dataService:DataService,
    private http:Http,
    private router:Router
  ) { 
    this.sourceLanguages.push("any Languages");
    this.sourceLanguages = this.sourceLanguages.concat(this.dataService.allLanguages);
    this.targetLanguages = this.targetLanguages.concat(this.dataService.allLanguages);
  }
  ngOnInit() {
    this.interval = setInterval(() => {
      this.translate();    
    }, 500);
  }
  unselectButtons(){
    this.textButtonSeleted = false;
    this.docButtonSeleted = false;
  }
  textButtonClicked(){
    this.unselectButtons();
    this.textButtonSeleted = true;
  }
  docButtonClicked(){
    this.unselectButtons();
    this.docButtonSeleted = true;
    this.fileinputed = false;
    this.inputedFilename = "Please upload fiels that you want to translate.";
    this.translating = false;
    this.translateResultText = "";
    this.sourceText = "";
    this.targetText = "";
  }
  sourceLangChanged(option){
    this.sourceLanguage = option;
    if(this.sourceLanguage == "any Languages")
      this.sourceLanaguageCode = "auto";
    this.sourceLanaguageCode = this.dataService.getLanguageCodeFromLanguage(this.sourceLanguage);
    this.stack.push("hello");
    this.translate();
  }
  targetLangChanged(option){
    this.targetLanguage = option;
    this.targetLanguageCode = this.dataService.getLanguageCodeFromLanguage(this.targetLanguage);
    this.stack.push("hello");
    this.translate();
  }
  translate(){
    if (this.stack.length > 0){
      this.translateService.translateAWS(this.sourceLanaguageCode,this.targetLanguageCode,this.sourceText).then(response=>{
        // This is for AWS translating
        if(response)
          this.targetText = response.TranslatedText;
        else
          this.targetText = "";  
        // This is for Google translating
        // this.targetText = response;
        this.stack = [];
        })
    }
  }
  onFocus(){
    this.focusFlag = true;
  }
  focusOut(){
    this.focusFlag = false;
  }
  sourceChanged(){
    this.stack.push("hello");    
    this.changeHeight();
  }
  targetChanged(){
    this.changeHeight();
  }
  changeHeight(){
    let sourceElement = this.sourceArea.nativeElement;
    let targetElement = this.targetArea.nativeElement;
    sourceElement.style.height = "1px";
    targetElement.style.height = "1px";
    let sourceHeight = sourceElement.scrollHeight;
    let targetHeight = targetElement.scrollHeight;
    let height = Math.max(sourceHeight,targetHeight);
    sourceElement.style.height = height+"px";;
    targetElement.style.height = height+"px";
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    // this.naveCtrl.enable()
  }
  importDoc(){
    console.log("clicked")
    this.fileUploadInput.nativeElement.click();
  }
  onFileChanged(){
    let files = this.fileUploadInput.nativeElement.files;
    let inputedFile = files[0];
    if(inputedFile){
      let filename = inputedFile.name;
      console.log();
      let fileExt = filename.split('.').pop();
      this.fileinputed = true;
      this.inputedFilename = filename;
    }
  }
  fileTranslate(){
    let files = this.fileUploadInput.nativeElement.files;
    let inputedFile = files[0];
    let filename = inputedFile.name;
    const formData = new FormData();
    formData.append('file',inputedFile);
    formData.append('source',this.sourceLanaguageCode);
    formData.append('target',this.targetLanguageCode);
    this.translating = true;
    this.http.post(this.dataService.uploadUrl,formData).toPromise().then(
      response =>{
        this.translating = false;
        let mediaFileanme = response['_body'];
        mediaFileanme = mediaFileanme.replace(/"/g,'');
        console.log(mediaFileanme);
        let fileUrl = this.dataService.serverUrl;
        fileUrl += "media/";
        fileUrl += mediaFileanme;
        console.log(fileUrl);
        var re = /(?:\.([^.]+))?$/;
        var ext = re.exec(filename)[1];
        if (ext == 'txt'){
          this.http.get(fileUrl).subscribe(data=>{
              let content = data['_body'];
              console.log(content);
              let file = new Blob([content], { type: 'text/csv;charset=utf-8' });
              saveAs(file,filename)
          })
        }
        else{
          let link = document.createElement('a');
          link.setAttribute('type', 'hidden');
          link.href = fileUrl;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          link.remove();
          this.translateResultText = "Translating was finished";
        }
      },
      err=>{
        this.translateResultText = "Could you check if your file is correct?";
        this.translating = false;
        console.error(err)
      }
    );
  }
  goto(url){
    this.router.navigateByUrl("/" + url)
  }
}
