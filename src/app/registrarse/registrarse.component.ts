import { Component, Input, OnInit , NgZone} from '@angular/core';
import {Router} from '@angular/router'

import { FirebaseServiceService } from '../services/firebase-service.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { userService } from './services/userservices';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import * as bcrypt from 'bcryptjs';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {
  name: string;
  email: string;
  password: string;
  id: number;
  constructor(
    public userService: userService,
    public firebaseServiceService: FirebaseServiceService,
    public afath: AngularFireAuth,
    public ngZone: NgZone,
    public router: Router
  ) { }
  config: any;
  collection = { count: 5, data: [] };
  model: any;
  msg: string;
  msgAlert: boolean;
  @Input() users: User[];
  success: boolean;

  ngOnInit(): void {
    this.msgAlert = false;
    this.success = false;
    this.userService.getUser();
    this.firebaseServiceService.getUser().subscribe(respo => {
      this.collection.data = respo.map((e: any) => {
        return {
          name: e.payload.doc.data().name,
          email: e.payload.doc.data().email,
          password: e.payload.doc.data().password,
          cod: e.payload.doc.data().cod,
          id: e.payload.doc.id
        }
      })
    });
    this.afath.user.subscribe(user=>{
      if(user){
        this.msg= "welcome"
      }
    })
    this.config = {
      itemsPage: 5,
      currentPage: 1,
      totalItem: this.collection.data.length
    };
  }

  pageChange(event) {
    this.config.currentPage = event;
  }

  agregarUsuario() {

    var uc=null;
    let findUser = this.collection.data.filter(x => x.email === this.email);
    console.log(findUser.length);
    let em = (<HTMLInputElement>document.getElementById("email")).value;
    let na = (<HTMLInputElement>document.getElementById("name")).value;
    let pas = (<HTMLInputElement>document.getElementById("password")).value;
    if (em == "" || na == "" || pas == "") {
      this.success = false;
      this.msgAlert = true
      this.msg = "Lo sentimos, tienes que llenar todos";
    }
    else {
      if (findUser.length >= 1) {
        this.msg = "El usuario con el " + this.email + " ya existe";
        console.log('use');
        this.msgAlert = true;
        this.success = false;
        this.name = "";
        this.email = "";
        this.password = "";
      } else {
        let User = {};
        var cod = findUser.length + 1;
        User["name"] = this.name;
        User["email"] = this.email;
        User["password"] = bcrypt.hashSync(this.password,10);
        User["cod"] = cod;
        this.afath.createUserWithEmailAndPassword(this.email, this.password).then((credential)=>{
          
          credential.user.updateProfile({
            displayName: this.name
          });
          this.firebaseServiceService.addUser(User).then(() => {
            this.success = true;
            this.name = "";
            this.email = undefined;
            this.password = "";
            this.msgAlert = true;
            this.msg = "Usuario registrado correctamente"
          }).catch(error => {
            this.msgAlert=true;
            this.msg= error.message
          });
          let x=this.afath.currentUser;
          this.router.navigate(['/Iniciosesion']);
        }).catch((response=>{
          this.msgAlert=true;
          this.msg= response.message
        }));
      }
    } 
  }
  cerrar() {
    this.msgAlert = false;
  }
}


