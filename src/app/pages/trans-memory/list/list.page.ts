import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TransMemoryTableComponent } from 'src/app/components/trans-memory-table/trans-memory-table.component';
import { UserService } from 'src/app/services/user.service';
import { retry } from 'rxjs/operators';
import { TransMemoryService } from 'src/app/services/trans-memory.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild(TransMemoryTableComponent, { static: true}) transTable: TransMemoryTableComponent;
  private managerId = "";
  constructor(
    private router:Router,
    private userService:UserService,
    private trandMemoryService:TransMemoryService
  ) { }

  ngOnInit() {
    this.userService.id.subscribe(id=>{
      if(!id)
        return
      this.managerId = id;
      this.updateTable();
    })
  }
  updateTable(){
    if(this.managerId){
      this.trandMemoryService.getManagerTransMemory(this.managerId).then(transMemories =>{
        this,this.transTable.updateTm(transMemories);
      })
    }
  }
  ionViewWillEnter() {
    this.updateTable();
  }
  private uploadTm(){
    this.router.navigate(['/trans-Memory/create']); 
  }
  private deleteTm(){
    let rows = this.transTable.selection.selected;
    var bar = new Promise((resolve, reject) => {
      rows.forEach(async(row, index, array) => {
        let transId = row.id;
        await this.trandMemoryService.deleteTransMemeory(transId);
        await this.trandMemoryService.deleteFile(transId)
        if (index === array.length -1) resolve();
      });
    });
    bar.then(()=>{
      this.updateTable();
    })
  }
}
