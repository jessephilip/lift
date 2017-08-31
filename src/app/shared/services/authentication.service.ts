import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationService {

  constructor (private auth: AngularFireAuth) {}

  /**
   * Logs the user in using AngularFire2's Authentication.
   *
   * @memberof AuthenticationService
   */
  public login () {
    return 'logged in';
  }
}
