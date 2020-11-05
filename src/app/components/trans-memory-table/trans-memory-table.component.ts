import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-trans-memory-table',
  templateUrl: './trans-memory-table.component.html',
  styleUrls: ['./trans-memory-table.component.scss'],
})
export class TransMemoryTableComponent implements OnInit {

  public selection:any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'select',
    'ID',
    'name', 
    'source',
    'target',
    'client'
  ];
  
  constructor() {
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<any>(allowMultiSelect, initialSelection);
   }

  ngOnInit() {}
  
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
  updateTm(tms){
    this.dataSource.data = tms;
  }
}
