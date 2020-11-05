import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel } from '@angular/cdk/collections';
@Component({
  selector: 'app-freelancer-table',
  templateUrl: './freelancer-table.component.html',
  styleUrls: ['./freelancer-table.component.scss'],
})
export class FreelancerTableComponent implements OnInit {

  public selection:any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'select',
    'ID',
    'name', 
    'email',
    'status'
  ];
  ngOnInit() {}

  constructor() { 
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<any>(allowMultiSelect, initialSelection);
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
  updateFreelancers(freelancers){
    console.log(freelancers);
    this.dataSource.data = freelancers;
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
  }

}
