import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {MenuController} from "@ionic/angular";

import {AlertService} from "src/app/services/alert.service";
import {AuthService} from "src/app/services/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"]
})
export class SigninPage implements OnInit {
  constructor(
    private menuCtrl: MenuController,
    private router: Router,
    private alertMsg: AlertService,
    private auth: AuthService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  userEmail: string;
  userPassword: string;

  async signIn() {
    const successfulSignIn = await this.auth.signIn(
      this.userEmail,
      this.userPassword
    );
    if (successfulSignIn) {
      this.router.navigateByUrl("");
    }
  }
}
