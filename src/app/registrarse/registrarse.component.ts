import { Component, Input, OnInit } from '@angular/core';


import {userService} from './services/userservices';
import {User} from '../models/user';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  constructor(
    public userService:userService
  ) { }
  config:any;
  collection={count: 5, data:[]};
  model:any;
  msg:string;
  msgAlert:boolean;
  @Input() users: User[];

  ngOnInit(): void {
    this.msgAlert= false;
    this.users = this.userService.getUser();

    this.config={
      itemsPage: 5,
      currentPage: 1,
      totalItem: this.collection.data.length
    };
  }

  pageChange(event){
    this.config.currentPage = event;
  }

  agregarUsuario(nombre: HTMLInputElement, email:HTMLInputElement,password:HTMLInputElement){
    var correo= (email.value);
    
    let findUser =this.users.filter(x=>x.email===correo);
    if(findUser && findUser.length===1){
      this.msg ="El usuario con el "+ email.value +" ya existe";
      console.log('use');
      this.msgAlert= true;
      nombre.value ="";
      email.value ="";
      password.value= "";
      setTimeout("window.location.reload()", 1000);
    }else{
      var cod =this.users.length+1;
      this.userService.addUser({
        name: nombre.value,
        email: email.value,
        password: password.value,
        id: cod
      });
      nombre.value ="";
      email.value ="";
      password.value= "";
    }
    return false;
  }

}
