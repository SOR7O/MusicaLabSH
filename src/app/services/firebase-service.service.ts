import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/user';
import {PlaylistUser} from '../models/playlist';
/* import {User} from '../models/user'; */


@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getUser(){
    return this.firestore.collection("users").snapshotChanges();
  }

  addUser(users){
    return this.firestore.collection("users").add(users);
  }

  addSongPlaylist(playlist: PlaylistUser){
    return this.firestore.collection("playlist").add(playlist);
  }

  deleteSongPlaylist(id: any){
    return this.firestore.collection("playlist").doc(id).delete();
  }

}
