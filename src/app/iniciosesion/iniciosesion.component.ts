import { Component, Input, OnInit, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../models/user';
import { userService } from '../registrarse/services/userservices';
import { Router } from '@angular/router';


import { FirebaseServiceService } from '../services/firebase-service.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.scss']
})
export class IniciosesionComponent implements OnInit {

  state: boolean;
  msg: string;
  msgAlert: boolean;
  @Input() users: User[];
  email: string;
  password: string;
  constructor(
    public userService: userService,
    private router: Router,
    public firebaseServiceService: FirebaseServiceService,
    public afath: AngularFireAuth,
    public ngZone: NgZone,
  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUser();
    this.state = false;
    this.msgAlert = false;
    this.msg = '';

    /* this.afath.user.subscribe(user => {
      if (user) {
        
      }
    }) */
  }

  Login() {
    let em = (<HTMLInputElement>document.getElementById("email")).value;
    let pass = (<HTMLInputElement>document.getElementById("password")).value;
    if(em =="" || pass==""){
      this.msg="Lo sentimos, debes de llenar todos los campos";
      this.msgAlert=true;
    }else{
    this.afath.signInWithEmailAndPassword(this.email, this.password).then(()=>{
      this.router.navigate(['/Home']);
    }).catch(respo=>{  
      this.msgAlert=true;
      this.msg= respo.message
    });
  }
  }
  cerrar() {
    this.msgAlert = false;
  }





}
