import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {MenuController, NavController} from "@ionic/angular";

import {AlertService} from "src/app/services/alert.service";
import {AuthService} from "src/app/services/auth.service";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"]
})
export class SigninPage implements OnInit {
  constructor(
    private menuCtrl: MenuController,
    private naveCtrl: NavController,
    private router: Router,
    private alertMsg: AlertService,
    private auth: AuthService,
    private user:UserService
  ) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {}
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    // this.naveCtrl.enable()
  }
  userEmail: string;
  userPassword: string;

  async signIn() {
    const successfulSignIn = await this.auth.signIn(
      this.userEmail,
      this.userPassword
    );
    if (successfulSignIn) {
      console.log("current user",this.user.loginedUser)
      this.router.navigateByUrl("");
      
    }
  }
  onKey(event){
    if (event.keyCode === 13) {
     this.signIn();
    }
  }
}
