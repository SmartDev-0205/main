import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardUnauthorizedToSignin {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (this.auth.signedIn) {
      return true;
    } else {
      return this.router.parseUrl('/signin');
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class GuardLoggedInToMainMenu {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if (!this.auth.signedIn) {
      return true;
    } else {
      return this.router.parseUrl('/home');
    }
  }

}
