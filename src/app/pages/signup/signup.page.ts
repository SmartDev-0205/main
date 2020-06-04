import {Component, OnInit} from "@angular/core";
import {NavController} from "@ionic/angular";
import {Profile} from "src/app/interfaces/profile.interface";
import {AlertService} from "src/app/services/alert.service";
import {AuthService, UserAttributes} from "src/app/services/auth.service";
import {Router} from "@angular/router";
import {User} from 'src/app/interfaces/user.interface';
import {ProlocalizeDB} from 'src/app/services/prolocalize-database.service';
import {filter, take} from 'rxjs/operators';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"]
})
export class SignupPage implements OnInit {
  constructor(
    private alertMsg: AlertService,
    private auth: AuthService,
    private navCtrl: NavController,
    private router: Router,
    private prolocalizeDB: ProlocalizeDB,
    private user: UserService
  ) {}

  newUserProfile: Profile = {};
  newUserRole: string;
  newUserEmail: string;
  ngOnInit() {}

  public backToSignin() {
    this.navCtrl.navigateBack("/signin");
  }

  newUserPasswordCheck: string;
  newUserPassword: string;
  private checkValidPassword(): boolean {
    if (!this.newUserPassword) {
      this.alertMsg.show("Password is missing.");
      return false;
    }
    if (this.newUserPassword !== this.newUserPasswordCheck) {
      this.alertMsg.show("Provided passwords do not match.");
      return false;
    }
    return true;
  }

  private checkValidUserProfile(): boolean {
    if (!this.newUserProfile.givenName) {
      this.alertMsg.show("Given name is missing.");
      return false;
    }
    if (!this.newUserProfile.familyName) {
      this.alertMsg.show("Family name is missing.");
      return false;
    }
    if (!this.newUserEmail) {
      this.alertMsg.show("Email is missing.");
      return false;
    }
    if (!this.newUserRole) {
      this.alertMsg.show("User Role is missing.");
      return false;
    }
    return true;
  }

  termsCheckbox: boolean = false;
  private checkTermsAccepted(): boolean {
    if (!this.termsCheckbox) {
      this.alertMsg.show(
        "To create a new account you must agree with the Terms of Use and Privacy Policy"
      );
      return false;
    }
    return true;
  }

  async signUp() {
    if (!this.checkValidUserProfile()) {
      return;
    }
    if (!this.checkValidPassword()) {
      return;
    }
    if (!this.checkTermsAccepted()) {
      return;
    }

    const attributes: UserAttributes = {
      givenName: this.newUserProfile.givenName,
      familyName: this.newUserProfile.familyName
    };

    const successfulSignUp = await this.auth.signUp(
      this.newUserEmail,
      this.newUserPassword,
      attributes
    );
    if (successfulSignUp) {
      const successfulSignIn = await this.auth.signIn(
        this.newUserEmail,
        this.newUserPassword
      );
      if (successfulSignIn) {
        // TODO: If signin fails, user is not created in the DynamoDB
        // If the user verifies the account through the login page and we 
        // detect no profile, (or in general if we don't detect a profile
        // we should redirect the user to a profile definition page where we can 
        // complete the missing fields
        const id = await new Promise<string>((resolve) => {
          this.user.id$.pipe(
            filter(id => id !== undefined),
            take(1)
          ).subscribe(id => {
            resolve(id);
          })
        });
        const newUser: User = {
          id: id,
          role: this.newUserRole,
          profile: this.newUserProfile
        }
        await this.prolocalizeDB.createUser(newUser)
        this.router.navigateByUrl("");
      }
    }
  }
}
