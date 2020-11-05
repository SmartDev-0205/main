import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA} from "@angular/material/dialog";
import { JobService } from 'src/app/services/job.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-split-dialog',
  templateUrl: './split-dialog.component.html',
  styleUrls: ['./split-dialog.component.scss'],
})
export class SplitDialogComponent implements OnInit {

  public value;
  public method;
  public segments;
  public jobWordCount;
  public job;
  constructor(
    public jobService :JobService,
    public dialogRef: MatDialogRef<SplitDialogComponent>,
    private dataService:DataService,
    @Inject(MAT_DIALOG_DATA) data
    ) 
  { 
    this.job = data.job;
    let segment = this.job.segments;
    this.segments = segment.items;
    this.jobWordCount = this.job.wordCount
  }

  ngOnInit() {}
  async onSplit(){
    this.close();
    console.log("hhhhh",this.value,"mehod",this.method);
    // await this.jobService.splitTask(this.job,this.method,this.value);
    console.log("current job id",this.job.id)
    let job = await this.jobService.getJob(this.job.id);
    console.log("change job after updating",job);
    this.dataService.changeCurrentJob(job);
  }
  close() {
    this.dialogRef.close();
  }
}
