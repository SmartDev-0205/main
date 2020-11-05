import {Component, OnInit} from "@angular/core";
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as cloneDeep from "lodash/cloneDeep";
import { DataService } from 'src/app/services/data.service';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  private userId = "";
  private isManager = false;
  constructor(
    private  user: UserService,
    private clientService:ClientService,
    private route: ActivatedRoute,
    private dataService:DataService,
    private router:Router
    ) {}
  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
          if(!params.id){
            this.isManager = true;
            this.userId = params.id;
            this.user.refreshUser().then(() => {
            let userprofile = cloneDeep(this.user.profile$.getValue());
            this.dataService.changeProfileForSetting(userprofile);
            this.dataService.changeUserIdForSetting("");
          });
        }
        else{
          let client = this.clientService.getClient(params.id).then((client) => {
            if(!client)
              return
            this.dataService.changeProfileForSetting(client.profile);
            this.dataService.changeUserIdForSetting(params.id);
          });
        }
      });
  }
  back(){
    this.router.navigateByUrl("client/clients");
  }
}
