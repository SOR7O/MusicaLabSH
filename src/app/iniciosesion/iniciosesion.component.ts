import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../models/user';
import { userService } from '../registrarse/services/userservices';
import {Router} from '@angular/router';

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
  constructor(
    public userService: userService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.users = this.userService.getUser();
    this.state = false;
    this.msgAlert = false;
    this.msg = '';
  }

  Login(email: HTMLInputElement, password: HTMLInputElement) {
    console.log(email.value, password.value);
    let tamsession = sessionStorage.length;
    let finduser = this.users.filter(x => x.email === email.value).filter(y => y.password === password.value);

    if (tamsession === 1) {
      this.msg = "Ya iniciaste sesion"
      this.msgAlert = true;
      email.value = "";
      password.value = "";
      setTimeout('window.location.reload()', 1200);
    } else {
      if (finduser && finduser.length == 1) {
        sessionStorage.setItem('currentUser', JSON.stringify({
          token: 'jwt ', email: finduser[0].email, cod: finduser[0].id, name: finduser[0].name
        }));
        this.state = true;
        this.msgAlert = false;
        this.router.navigate([`Home`])
        
        setTimeout('window.location.reload()',0); 
        return of(finduser[0]);
      } else {
        this.msgAlert = true;
        this.msg = 'El usuario no existe o la contraseña es incorrecta';
        setTimeout('window.location.reload()', 1500);
        return of(null)
        
      }
    }
    return false;
  }
  currentUser() {
    return JSON.parse(sessionStorage.getItem('currentUser'));
  }
    
  
    


}
