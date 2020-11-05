import { Component, OnInit, ViewChild } from '@angular/core';
import { ManagerClientsRateTableComponent } from 'src/app/components/manager-clients-rate-table/manager-clients-rate-table.component';
import { UserService } from 'src/app/services/user.service';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.page.html',
  styleUrls: ['./rates.page.scss'],
})
export class RatesPage implements OnInit {
  @ViewChild(ManagerClientsRateTableComponent, { static: true}) clientRateComponent: ManagerClientsRateTableComponent;
  constructor(
    private userService:UserService,
    private rateService:RateService
  ) { }
  private managerId = "";
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.loadClientsRates();
  }
  loadClientsRates(){
    this.userService.id.subscribe(managerId=>{
      this.managerId  =  managerId;
      this.rateService.getManagerRate(managerId).then(rates=>{
        console.log("this is loaded client",rates);
        this.clientRateComponent.updateRates(rates)
      })
    })
  }
  
}
