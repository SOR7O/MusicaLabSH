import { Component, NgZone, OnInit } from '@angular/core';
import { FirebaseServiceService } from './services/firebase-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'MusicLab';
  constructor(
    private fbSS: FirebaseServiceService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,

  ) { }
  state: boolean;
  name: string;
  async ngOnInit() {
    const user= await this.fbSS.getUserAtuh();
    if(user){
      this.state=false;
      console.log('user=>', user);
    }if(user ===null){
      this.state=true;
      console.log('not user', user);
    }
    
    

/* 
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log(user);
        this.state = false;
      } else {
        // No user is signed in.
        console.log(user);

        this.state = true;
      }
    }); */
  }
  logout() {
    this.state = true;
    this.fbSS.SingOut();
    /* 
    sessionStorage.removeItem('currentUser');   */
  }
}
