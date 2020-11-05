import { Component, OnInit, Input } from '@angular/core';
import {SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { AssigningTask } from 'src/app/interfaces/project.interface';
import { isNull, isUndefined } from 'util';
import { UserService } from 'src/app/services/user.service';
import { DataService } from 'src/app/services/data.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { TeamService } from 'src/app/services/team.service';
import { MatDialog } from '@angular/material';
import { WordDialogComponent } from '../../shared/dialogs/word-dialog/word-dialog.component';
@Component({
  selector: 'app-pmtask-table',
  templateUrl: './pmtask-table.component.html',
  styleUrls: ['./pmtask-table.component.scss'],
})
export class PmtaskTableComponent implements OnInit {
  @Input()
  currentService: string = "";
  public users = [];
  public user = "";
  public selection:any;
  private indexSelected = -1;
  private isSelected = false;
  controlers = [];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'select',
    'ID',
    'freelancer',
    'source'
  ];
  constructor(
    private userService:UserService,
    private dataService:DataService,
    private teamService:TeamService,
    private matDialog: MatDialog,
  ) { 
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<any>(allowMultiSelect, initialSelection);
  }

  async ngOnInit() {
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }
  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  updateJob(job){
    let segments = job.segments.items;
    this.dataSource.data = segments;
  }
  toggleSelected(obj, event, rowIndex, alldata) {
    if (!event.shiftKey) {
      if(this.selection.isSelected(obj)){
        // this.selection.deselect(obj);  
        this.isSelected = true;
      }
      else{
        this.selection.clear();
        this.selection.select(obj);
        this.isSelected = true;
      }
    }
    else{
      if(this.isSelected && this.indexSelected > -1){
        this.selectRange(this.indexSelected,rowIndex);
      }
    }
    this.indexSelected = rowIndex;
  }
  selectRange(start,end){
    if(start > end)
      return;
    let alldata = this.dataSource.data;
    alldata.forEach((item,index) => {
      if(index >= start && index <= end){
        this.selection.select(item);
      }
    });
  }
  calcuateWord(){
    const dialogRef = this.matDialog.open(WordDialogComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(wordsNumber => {
      if(!wordsNumber)
        return;
      let maxWordCount = Number(wordsNumber);
      let segments = this.dataSource.data;
      let start = this.indexSelected;
      let currentWordCount = 0;
      let breakIndex = 0;
      for (let i = start ; i < segments.length ; i ++){
        let segmentWordCount = segments[i].source.split(' ').length;
        currentWordCount += segmentWordCount;
        if(currentWordCount > maxWordCount){
          if(i == start)   
            breakIndex = start
          else
            breakIndex = i - 1
          break;
        }
      }
      this.selectRange(start,breakIndex);
    })
  }
  getFreelancerFromSegment(segment){
    let serviceses = segment.segmentService;
    for(let i  = 0 ; i < serviceses.length ; i++) {
      let service = serviceses[i]
      if(service.serviceName == this.currentService){
        if(service.freelancerEmail)
          return service.freelancerEmail;
        else
          return "Empty";
      }
    }
    return "Empty";
  }
}
