import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';
import { PlaylistUser } from '../models/playlist';
import { AngularFireAuth } from '@angular/fire/auth';
import {first} from 'rxjs/operators'
/* import {AngularFireAuthModule} from '@angular/fire/auth' */

/* import {User} from '../models/user'; */


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  state: boolean;
  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,

  ) { }

  getUser() {
    return this.firestore.collection("users").snapshotChanges();
  }

  addUser(users) {
    return this.firestore.collection("users").add(users);
  }

  addSongPlaylist(playlist) {
     return this.firestore.collection("playlist").add(playlist); 
  }
  getSongsPlaylist(){
    /* let x= (await this.afAuth.authState.pipe(first()).toPromise()).uid;
    console.log(x); */

    /* return this.firestore.collection('playlist').doc(x).snapshotChanges(); */
    return this.firestore.collection('playlist').snapshotChanges();
  }

  deleteSongPlaylist(id: any) {
    return this.firestore.collection("playlist").doc(id).delete();
  }

  async getUserAtuh() {

    return this.afAuth.authState.pipe(first()).toPromise();
    /* this.afAuth.onAuthStateChanged((user) =>{
      if (user) {
        // User is signed in.
        console.log(user);
        this.state= false;
      } else {
        // No user is signed in.
        console.log(user);
        
        this.state= true;
      }
    }); */
    
  }
  SingOut() {
    return this.afAuth.signOut()
  }
}
