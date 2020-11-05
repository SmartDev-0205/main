import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/services/data.service';
import { TranscribeService } from 'src/app/services/transcribe.service';
import { PaymentDialogComponent } from 'src/app/shared/dialogs/payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss'],
})
export class TranscriptComponent implements OnInit {

  files: any[] = [];
  private selectedTarget= "";
  private fileFormat = "doc";
  private duration = '';
  private durationShowFlag = false;
  private allLanguages = [];
  private targetLength = 0;
  private speechLength = 0;
  private noSpeechLength = 0;
  private selectedLanguage = '';
  constructor(
    private dataService:DataService,
    private transcribeService:TranscribeService,
    private matDialog:MatDialog
  ) {
      this.allLanguages = this.allLanguages.concat(this.dataService.allLanguages);
   }

  ngOnInit() {}
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  deleteFile(index: number) {
    this.files.splice(index, 1);
  }
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        this.durationShowFlag = true;
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }
  
  prepareFilesList(files: Array<any>) {
    this.files = [];
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      let audio = new Audio();
      audio.src = URL.createObjectURL(item);
      audio.addEventListener('loadedmetadata', (event)=>{
        var duration = audio.duration;
        this.duration = this.formatSeconds(duration);
      },false);
    }
    this.uploadFilesSimulator(0);
  }
  formatSeconds(sec){
    var sec_num = parseInt(sec, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    let hourStr = hours.toString();;
    let minuteStr = minutes.toString();;
    let secondStr = seconds.toString();;
    console.log(hours,minutes,seconds)
    if (hours   < 10) {hourStr   = "0"+ hours.toString();}
    if (minutes < 10) {minuteStr = "0"+minutes.toString();}
    if (seconds < 10) {secondStr = "0"+seconds.toString();}
    return hourStr+':'+ minuteStr +':'+secondStr;
  }
  getDuration($event){
    console.log("test success")
  }

  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  targetLangChanged(language){
    this.selectedLanguage = language;
    this.selectedTarget = language;
  }
  openDialog(){
    const dialogRef = this.matDialog.open(PaymentDialogComponent, {
      width: '500px',
    });
  }

}
