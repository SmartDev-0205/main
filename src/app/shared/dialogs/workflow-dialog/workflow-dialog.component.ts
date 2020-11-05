import { Component, OnInit,Inject} from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA} from "@angular/material/dialog";
import { DataService } from 'src/app/services/data.service';
import { AlertService } from 'src/app/services/alert.service';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ProjectPageModule } from 'src/app/pages/project/project.module';
@Component({
  selector: 'app-workflow-dialog',
  templateUrl: './workflow-dialog.component.html',
  styleUrls: ['./workflow-dialog.component.scss'],
})
export class WorkflowDialogComponent implements OnInit {
  private workflow = [];
  private allServices = [];
  l
  constructor(
    private dialogRef: MatDialogRef<WorkflowDialogComponent>,
    private alertService:AlertService,
    private dataService:DataService,
    @Inject(MAT_DIALOG_DATA) data
    )
    {
      this.workflow = data.services;
    }
  ngOnInit() {
    let allServices = this.dataService.projectType.slice(0);
    this.allServices = allServices.filter(service=>this.workflow.indexOf(service)<0);
    console.log(this.allServices);
    this.dialogRef.disableClose = true;
  }
  async save(){
    let newServices = this.workflow.filter(service=>service == "" ?-1:1);
    // check if there are duplicate service
    let map = {};
    let result = false;
    for(let i = 0; i < newServices.length; i++) {
       // check if object contains entry with this element as key
       if(map[newServices[i]]) {
          result = true;
          // terminate the loop
          break;
       }
       // add entry in object with the element as key
       map[newServices[i]] = true;
    }
    if(result){
      this.alertService.show("There are duplicate service");
      setTimeout(()=>{ this.alertService.close() }, 1000);
      return;
    }
    this.dialogRef.close(newServices);
  }
  close(){
    this.dialogRef.close();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
