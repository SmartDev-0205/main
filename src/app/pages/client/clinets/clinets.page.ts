import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatGridTileHeaderCssMatStyler } from '@angular/material';
import { AddClientComponent } from 'src/app/shared/dialogs/add-client/add-client.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clinets',
  templateUrl: './clinets.page.html',
  styleUrls: ['./clinets.page.scss'],
})
export class ClinetsPage implements OnInit {

  private managerId = "";
  clients$: BehaviorSubject<Array<any>> = new BehaviorSubject(undefined);
  constructor(
    private clientService:ClientService,
    private userService:UserService,
    private matDialog: MatDialog,
    private router: Router,
  ) { }
  
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.loadClients();
  }
  loadClients(){
    this.userService.id.subscribe(managerId=>{
      this.managerId  =  managerId;
      this.clientService.getManagerClients(managerId).then(clients=>{
        console.log("this is loaded client",clients);
        let mangerClients = [];
        this.clients$.next(clients);
      })
    })
  }
  addClient(){
    const dialogRef = this.matDialog.open(AddClientComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(client => {
      let clients = this.clients$.getValue();
      clients.push(client);
      this.clients$.next(clients);
    })
    
  }
  editProfile(client){
    if(client){
      this.router.navigate(['/profile', client.id]);
    }
  }
  delete(index){
    let currentClients = this.clients$.getValue();
    let client = currentClients[index];
    this.clientService.deleteMangerClient(client.id);
    currentClients.splice(index,1);
    this.clients$.next(currentClients);
  }
}
