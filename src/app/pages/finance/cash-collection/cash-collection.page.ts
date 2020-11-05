import { Component, OnInit, ViewChild } from '@angular/core';
import { FinanceCollectionTableComponent } from 'src/app/components/finance-collection-table/finance-collection-table.component';
import { UserService } from 'src/app/services/user.service';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-cash-collection',
  templateUrl: './cash-collection.page.html',
  styleUrls: ['./cash-collection.page.scss'],
})
export class CashCollectionPage implements OnInit {
  @ViewChild(FinanceCollectionTableComponent, { static: true}) collectionTable: FinanceCollectionTableComponent;
  private collections = [];
  constructor(
    private userService:UserService,
    private collectionService:CollectionService
  ) { }
  ngOnInit() {
  }
  create(){
    this.collectionTable.create();
  }
  remove(){
    this.collectionTable.remove();
  }
  save(){
    this.collectionTable.save();
  }

  

}
