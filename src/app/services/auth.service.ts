import {Injectable} from "@angular/core";

import {AlertController, LoadingController} from "@ionic/angular";

import {AmplifyService} from "aws-amplify-angular";
import {AlertService} from "src/app/services/alert.service";
import {UserService} from './user.service';

export interface UserAttributes {
  givenName: string;
  familyName: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private alertController: AlertController,
    private alertMsg: AlertService,
    private amplify: AmplifyService,
    private loadingController: LoadingController,
    private user: UserService
  ) {}

  public signedIn: boolean = false;
  public activatePersistentSignin() {
    this.amplify.authStateChange$.subscribe((authState: any) => {
      this.signedIn = (authState.state === "signedIn");
      if (!this.signedIn) return;
      if (!authState.user) return;
      this.user.authState$.next(authState);
      this.user.id$.next(authState.user.username);
      this.user.refreshUser();
    });
  }

  private async resendVerificationEmail(email: string) {
    try {
      await this.amplify.auth().resendSignUp(email);
    } catch (error) {
      console.log(error);
    }
  }

  private async getVerificationCodeFromAlert(email: string) {
    return new Promise<string | undefined>(async resolve => {
      const verificationAlert = await this.alertController.create({
        header: "Account Verification",
        subHeader: "Check your email account",
        inputs: [
          {
            name: "code",
            placeholder: "Verification Code",
            type: "text"
          }
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm Cancel");
              resolve();
            }
          },
          {
            text: "Ok",
            handler: inputs => {
              //takes the data
              resolve(inputs.code);
              console.log(inputs.code);
            }
          },
          {
            text: "Resend Email",
            handler: () => {
              this.resendVerificationEmail(email);
              return false; // Returning false avoids closing the alert message
            }
          }
        ]
      });
      verificationAlert.present();
    });
  }

  private async getNewPasswordFromAlert() {
    return new Promise<string>(async (resolve, reject) => {
      const verificationAlert = await this.alertController.create({
        header: "New Password",
        inputs: [
          {
            name: "password",
            placeholder: "Password",
            type: "password"
          },
          {
            name: "verifyPassword",
            placeholder: "Verify Password",
            type: "password"
          }
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm Cancel");
            }
          },
          {
            text: "Ok",
            handler: inputs => {
              //takes the data
              if (inputs.password !== inputs.verifyPassword) {
                this.alertMsg.show("Passwords do not match, please try again");
                return false;
              }
              resolve(inputs.code);
              console.log(inputs.code);
            }
          }
        ]
      });
      verificationAlert.present();
    });
  }

  public async signIn(email: string, password: string) {
    const loading = await this.loadingController.create({
      message: "Signing in. Please wait."
    });
    loading.present();

    try {
      const user = await this.amplify.auth().signIn(email, password);
      loading.dismiss();
      if (
        user.challengeName === "SMS_MFA" ||
        user.challengeName === "SOFTWARE_TOKEN_MFA"
      ) {
        // // You need to get the code from the UI inputs
        // // and then trigger the following function with a button click
        // const code = await this.getVerificationCode(email);
        // // If MFA is enabled, sign-in should be confirmed with the confirmation code
        // const loggedUser = await this.amplify.auth().confirmSignIn(
        //   user,   // Return object from Auth.signIn()
        //   code,   // Confirmation code
        //   user.challengeName // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
        // );
        console.log("SMS_MFA or SOFTWARE_TOKEN_MFA sign in required");
      } else if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        // const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
        // // You need to get the new password and required attributes from the UI inputs
        // // and then trigger the following function with a button click
        // // For example, the email and phone_number are required attributes
        // const newPassword = await this.getNewPasswordFromAlert();
        // const loggedUser = await this.amplify.auth().completeNewPassword(
        //   user,              // the Cognito User Object
        //   newPassword,       // the new password
        // );
      } else if (user.challengeName === "MFA_SETUP") {
        // // This happens when the MFA method is TOTP
        // // The user needs to setup the TOTP before using it
        // // More info please check the Enabling MFA part
        // this.amplify.auth().setupTOTP(user);
        console.log("MFA_SETUP sign in required");
      } else {
        // The user directly signs in
        console.log(user);
        return true;
      }
    } catch (error) {
      loading.dismiss();
      console.log(error);
      if (error.code === "UserNotConfirmedException") {
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
        await this.resendVerificationEmail(email);
        const confirmedAccount = await this.confirmAccount(email);
        if (!confirmedAccount) {
          return false;
        }
        const successfulSignIn = await this.signIn(email, password);
        return successfulSignIn;
      } else if (error.code === "PasswordResetRequiredException") {
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
        this.alertMsg.show(
          "Password reset required. Please contact an administrator."
        );
      } else if (error.code === "NotAuthorizedException") {
        // The error happens when the incorrect password is provided
        this.alertMsg.show("Wrong email or password");
      } else if (error.code === "UserNotFoundException") {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
        this.alertMsg.show("User not found");
      }
      return false;
    }
  }

  private async confirmAccount(email: string): Promise<boolean> {
    try {
      const code = await this.getVerificationCodeFromAlert(email);
      if (!code) {
        return false;
      }
      await this.amplify.auth().confirmSignUp(email, code, {
        // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        forceAliasCreation: true
      });
      return true;
    } catch (error) {
      switch (error.code) {
        // TODO: write messages
        case "UserNotFoundException":
          this.alertMsg.show("User not found. Please contact administrator.");
          return true;
        case "NotAuthorizedException":
          this.alertMsg.show("Not authorized. Please contact administrator.");
          return false;
        case "AliasExistsException":
          // Email alias already exists
          this.alertMsg.show(
            "Email alias exists. Please contact administrator."
          );
          return false;
        case "CodeMismatchException":
          this.alertMsg.show(
            "Wrong verification code. Please go to the Sign In page and try again."
          );
          return false;
        case "ExpiredCodeException":
          this.alertMsg.show(
            "Expirated code. Please go to the Sign In page and try again."
          );
          return false;
        default:
          console.log("Verification code failed");
          console.log(error);
          return false;
      }
    }
  }

  public async signUp(
    email: string,
    password: string,
    attributes: UserAttributes
  ): Promise<boolean> {
    const loading = await this.loadingController.create({
      message: "Creating new user. Please wait."
    });
    loading.present();

    try {
      let result = await this.amplify.auth().signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          given_name: attributes.givenName,
          family_name: attributes.familyName
        },
        validationData: [] //optional
      });
      this.user.id$.next(result.userSub);
    } catch (error) {
      loading.dismiss();
      console.log("Error creating account");
      console.log(error);
      switch (error.code) {
        case "InvalidPasswordException":
          //This exception is thrown when the Amazon Cognito service encounters an invalid password.
          this.alertMsg.show(
            "The chosen password is not valid. Please try a different password"
          );
          return false;
        case "InvalidParameterException":
          this.alertMsg.show(
            "The chosen password is not valid. Please try a different password"
          );
          return false;
        case "UsernameExistsException":
          //This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool.
          this.alertMsg.show(
            "Email is already taken. Please choose a different one"
          );
          return false;
      }
      return false;
    }

    loading.dismiss();
    return true;
  }

  public async signOut() {
    await this.amplify.auth().signOut();
  }
}
