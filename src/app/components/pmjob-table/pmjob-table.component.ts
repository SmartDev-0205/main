import { Component, OnInit, Input} from '@angular/core';
import {SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { isNull } from 'util';
import { JobService } from 'src/app/services/job.service';
import { SegmentService } from 'src/app/services/segment.service';
@Component({
  selector: 'app-pmjob-table',
  templateUrl: './pmjob-table.component.html',
  styleUrls: ['./pmjob-table.component.scss'],
})
export class PmjobTableComponent implements OnInit {
  private allServices =[];
  private currentService = "";
  private currentServiceIndex = 0;
  public selection:any;
  public isEditable = false;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'select',
    'ID',
    'progress',
    'name', 
    "due",
    "target",
    "manager"
  ];
  constructor(
   private jobService:JobService,
   private segmentService:SegmentService
  ) { 
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<any>(allowMultiSelect, initialSelection);
  }

  ngOnInit() {
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }
  getAllServices(){
    this.allServices = [];
    this.allServices.push("Original file");
    this.allServices.push("Result file");
    let jobs = this.dataSource.data;
    if(jobs.length < 1 )
      return this.allServices;
    let progresses = jobs[0].process;
    console.log(jobs[0]);
    if(!progresses)
      return this.allServices;
    progresses.forEach(progress => {
      let serviceName = progress.serviceName
      this.allServices.push(serviceName);
    });
    return this.allServices;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  updateJob(jobs,service){
    this.currentService = service;
    this.dataSource.data = jobs;
    this.getAllServices();
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
  }
  getProgress(progresses,service){
    let progressString = "Empty";
    if(progresses){
      progresses.forEach(progress => {
        if(progress.serviceName == service){
          progressString = progress.progress;
          return progressString;
        }
      });
    }
    return progressString;
  }
  download(element,service){
    let jobId = element.id;
    let jobFileKey = `users/${jobId}/original/${element.filename}`;
    let filename = element.filename;
    if(service == "Original file"){
      this.jobService.downloadOriginalFile(jobFileKey,filename);
      return;
    }
    this.segmentService.jobSegments(jobId).then(segments=>{
      let targets = [];
      if(service == "Result file"){
        segments.forEach(segment=>{
          targets.push(segment.target);
        })
      }
      else{
        segments.forEach(segment=>{
          let segmentServices = segment.segmentService;
          segmentServices.forEach(segmentService =>{
            if(segmentService.serviceName == service){
              targets.push(segmentService.target)
            }
          })
        })
      }
      this.jobService.downloadProjectFile(jobFileKey,filename,targets);
    })
  }
}
