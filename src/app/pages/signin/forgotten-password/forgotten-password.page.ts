import {Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import {NavController, MenuController} from '@ionic/angular';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.page.html',
  styleUrls: ['./forgotten-password.page.scss'],
})
export class ForgottenPasswordPage implements OnInit {
  private forgetEmail = "";
  private verifyCodeState = false;
  private verifyCode = "";
  private newPassword = "";
  private buttonText ;
  constructor(
    private menuCtrl:MenuController,
    private navCtrl: NavController,
  ) { 
    this.menuCtrl.enable(false)
  }
  ngOnInit() {
    this.verifyCodeState = false;
    this.buttonText = "Send Email";
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  backToSignin() {
    this.navCtrl.navigateBack('/signin');
  }
  recoverPassword(){
    if (!this.verifyCodeState){
      this.resendEmail();    
    }
    else{
      console.log(this.verifyCode,this.newPassword,this.forgetEmail)
      Auth.forgotPasswordSubmit(this.forgetEmail, this.verifyCode, this.newPassword)
      .then(data => {
        console.log("success submit",data);
        this.navCtrl.navigateBack('/signin');
      })
      .catch(err => console.log("error",err));
    }
  }
  resendEmail(){
    Auth.forgotPassword(this.forgetEmail)
        .then(data => {
          console.log("success",data);
          this.verifyCodeState = true;
          this.buttonText = "Reset Password";
        })
        .catch(err => console.log("error",err));
  }
}
