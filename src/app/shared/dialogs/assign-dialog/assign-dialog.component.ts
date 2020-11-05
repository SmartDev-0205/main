import { Component, OnInit,Inject  } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { startWith, map, filter } from 'rxjs/operators';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-assign-dialog',
  templateUrl: './assign-dialog.component.html',
  styleUrls: ['./assign-dialog.component.scss'],
})
export class AssignDialogComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<any[]>;
  private allAssiners = [];
  constructor(
    private dialogRef: MatDialogRef<AssignDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) {
      console.log(data)
      this.allAssiners = data.freelancers;
     }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.profile.email),
        map(email => email ? this._filter(email) : this.allAssiners.slice())
      );
  }
  private _filter(value): any[] {
    const filterValue = value.toLowerCase();
    return this.allAssiners.filter(option => option.profile.email.toLowerCase().includes(filterValue));
  }

  displayFn(value): string {
    return value && value.profile ? value.profile.email : '';
  } 
  async assign(){
    if(this.myControl.value){
      this.dialogRef.close(this.myControl.value);
    }
  }
  close(){
    this.dialogRef.close();
  }

}
