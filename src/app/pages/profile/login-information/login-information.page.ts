import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-login-information',
  templateUrl: './login-information.page.html',
  styleUrls: ['./login-information.page.scss'],
})
export class LoginInformationPage implements OnInit {

  private newPassword = "";
  private oldPassword = "";
  constructor(
    private alertMsg:AlertService
  ) { }

  ngOnInit() {
  }
  changePassword(){
    Auth.currentAuthenticatedUser()
        .then(user => {
            return Auth.changePassword(user, 'oldPassword', 'newPassword');
        })
        .then(data => {
          this.alertMsg.show('The password was changed.');
        })
        .catch(err => {
          this.alertMsg.show(err.message);
        });
  }
}
