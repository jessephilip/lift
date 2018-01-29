import { User } from './../../types/user.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class DatabaseService {
  constructor (private authService: AuthenticationService, private afs: AngularFirestore) {
    // console.log('current user: ', this.authService.getCurrentUser());
  }



  public set (collection: string, document: string, data) {
    return this.afs.collection(collection).doc(document).set(data);
  }

  public getUserDb (uid: string) {
    const document = this.afs.collection('users')
  }
}
