import { Component, OnInit } from '@angular/core';
import {SelectionModel } from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-manager-clients-rate-table',
  templateUrl: './manager-clients-rate-table.component.html',
  styleUrls: ['./manager-clients-rate-table.component.scss'],
})
export class ManagerClientsRateTableComponent implements OnInit {
  public selection:any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'select',
    'client-name',
    'service', 
    'language-pair', 
    'specialization', 
    'price', 
    'currency', 
    'unit', 
  ];
  constructor() { 
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
  
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  updateRates(rates){
    this.dataSource.data = rates;
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.name.toLowerCase().includes(filter);
    };
  }

}
