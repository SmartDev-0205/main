import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RateService } from 'src/app/services/rate.service';
import { DataService } from 'src/app/services/data.service';
import { RateTableComponent } from 'src/app/components/rate-table/rate-table.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {
  @ViewChild(RateTableComponent, {static: false}) rateTableComponent: RateTableComponent;
  private userId = "";
  constructor(
    private rateService:RateService,
    private dataService:DataService,
    private router:Router,
    private activeRouter:ActivatedRoute,
    private alertService:AlertService
  ) { }

  ngOnInit() {
    this.dataService.userIdForSetting.subscribe(id=>{
      if(id){
        this.userId = id;
        this.getClientRate();
      }
    });
  }
  ionViewWillEnter(){
    this.getClientRate();
  }
  async getClientRate(){
    if(!this.userId || this.userId == "")
      return [];
    console.log(this.userId);
    let rates = await this.rateService.getClientRate(this.userId);
    this.updateRateTable(rates)
  }
  updateRateTable(rates){
    this.rateTableComponent.updateRates(rates);
  }
  createRate(){
    this.router.navigate(["../../new-rate"], { relativeTo: this.activeRouter });
  }
  editRate(){
    let rows = this.rateTableComponent.selection.selected;
    if(rows.length > 1 || rows.length == 0){
      this.alertService.show('Please select one row.');
      return;
    }
    this.router.navigate(["../../new-rate",{rate:rows[0].id}], { relativeTo: this.activeRouter });
  }
  deleteRate(){
    let rates = this.rateTableComponent.dataSource.data;
    let rows = this.rateTableComponent.selection.selected;
    let filteredRate = rates.slice(0);
    rows.forEach(row => {
      let id = row.id;
      this.rateService.deleteRate(id);
      filteredRate = filteredRate.filter(rate=>rate.id != id);
    });
    this.updateRateTable(filteredRate);
  }
}
