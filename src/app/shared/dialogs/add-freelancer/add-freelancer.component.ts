import { Component, OnInit,Inject  } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { MAT_DIALOG_DATA} from "@angular/material/dialog";
import { FreelancerService } from 'src/app/services/freelancer.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import { startWith, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-add-freelancer',
  templateUrl: './add-freelancer.component.html',
  styleUrls: ['./add-freelancer.component.scss'],
})
export class AddFreelancerComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<any[]>;
  constructor(
    private freelancerService:FreelancerService,
    private dialogRef: MatDialogRef<AddFreelancerComponent>,
    @Inject(MAT_DIALOG_DATA) data
    ) 
  {

  }
  private allFreelancers;
  ngOnInit() {
   this.freelancerService.currentAllFreelancers.subscribe(allFreelancer => 
    this.allFreelancers = allFreelancer);
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.profile.email),
        map(email => email ? this._filter(email) : this.allFreelancers.slice())
      );
  }

  private _filter(value): any[] {
    const filterValue = value.toLowerCase();
    return this.allFreelancers.filter(option => option.profile.email.toLowerCase().includes(filterValue));
  }

  displayFn(value): string {
    return value && value.profile ? value.profile.email : '';
  } 
  async add(){
    if(this.myControl.value){
      this.dialogRef.close(this.myControl.value);
    }
  }
  close(){
    this.dialogRef.close();
  }
}
