import {Component} from "@angular/core";

import {UserService} from "src/app/services/user.service";
import {MenuController} from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {

  constructor(
    private menuCtrl: MenuController,
    public user: UserService,
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}
