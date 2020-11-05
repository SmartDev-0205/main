import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import {SelectionModel } from '@angular/cdk/collections';
import { UserService } from 'src/app/services/user.service';
import { CollectionService } from 'src/app/services/collection.service';
import { ThrowStmt } from '@angular/compiler';
import { currentId } from 'async_hooks';
export class Collection{
  index:Number;
  id:string
  method:string;
  bankDate:string;
  netAmount:string;
  currency:string;
  fxrate:string;
  amount:string;
  managerId:string;
  constructor(){
    this.index = 0;
    this.id="";
    this.method = "";
    this.bankDate ="";
    this.netAmount = "";
    this.currency = "";
    this.fxrate = "";
    this.amount = "";
    this.managerId = "";
  }
}
@Component({
  selector: 'app-finance-collection-table',
  templateUrl: './finance-collection-table.component.html',
  styleUrls: ['./finance-collection-table.component.scss'],
})
export class FinanceCollectionTableComponent implements OnInit {
  private methodlist=[];
  private collections = [];
  private currencylist = [];
  private managerId = "";
  public selection:any;
  constructor(
    private dataService:DataService,
    private userService:UserService,
    private collectionService:CollectionService
  ) 
  {
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel<any>(allowMultiSelect, initialSelection);
   }
  headerDataSource = new MatTableDataSource<any>();
  headerDisplayedColumns: string[] = [
    'collection-header'
  ];
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    "select",
    'method-name',
    'collocatin-date-name',
    'Net amount',
    'currency',
    'fxrate',
    'amount',
  ];
  ngOnInit() {
    this.methodlist = this.dataService.methodlist;
    this.currencylist  = this.dataService.currences;
    this.updateCollection();
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }
  updateCollection(){
    this.userService.awaitRole().then(()=>{
      let role = this.userService.role$.getValue();
      if(role == "manager"){
        this.userService.id.subscribe(async(currenUserId) =>{
          this.managerId = currenUserId;
          console.log("currentManagerId",this.managerId);
          let collections = await this.collectionService.getManagerCollection(currenUserId);
          this.collections = collections;
          this.refreshCollection(this.collections);
        })
      }
    })
  }
  create(){
    let newItem = new Collection;
    newItem.managerId = this.managerId;
    this.collections.push(newItem);
    this.refreshCollection(this.collections);
  }
  refreshCollection(collections){
    collections.forEach((collection,index) => {
      collections[index].index = index
    });
    this.dataSource.data = collections;
    console.log("this is table data",Collection);
  }
  remove(){
    let rows = this.selection.selected;
    rows.sort((rowA,rowB)=>rowA.index > rowB.index);
    for(let i = rows.length - 1; i > -1  ; i --){
      let deleteIndex = rows[i].index;
      this.collections.splice(deleteIndex,1);
    }
    this.refreshCollection(this.collections);
  }
  save(){
   let collections = this.collections.slice(0);
   console.log(collections);
   collections.forEach(collection=>{
      delete (collection as any).__typename;
      delete (collection as any).createdAt;
      delete (collection as any).updatedAt;
      delete (collection as any).index;
      if(collection.id == ""){
        delete (collection as any).id;
        this.collectionService.createCollection(collection);
      }
      else{
        this.collectionService.updateCollection(collection);
      }
   })  
  }
}
