import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthenticationService {

  public user;

  constructor (private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => this.user = user);
  }

  /**
   * Logs the user in using AngularFire2's Authentication.
   *
   * @memberof AuthenticationService
   */
  public googleLogin () {
    return this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  public logout () {
    return this.auth.auth.signOut();
  }

  public createUserWithEmailAndPassword (email: string, password: string) {
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }
}
