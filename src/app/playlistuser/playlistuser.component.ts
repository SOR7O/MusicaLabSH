import { Component, OnInit } from '@angular/core';

import { userService } from '../registrarse/services/userservices';
import { PlaylistUser } from '../models/playlist';
import { User } from '../models/user';
import { Input } from '@angular/core';

@Component({
  selector: 'app-playlistuser',
  templateUrl: './playlistuser.component.html',
  styleUrls: ['./playlistuser.component.scss']
})
export class PlaylistuserComponent implements OnInit {

  @Input() playlistUser: PlaylistUser[];
  @Input() user: User[];
  state:boolean;
  constructor(
    public userServices: userService
  ) { }
  userPlaylist = localStorage.getItem('playlistUsers');
  myPlaylist = JSON.parse(this.userPlaylist);
  findUser = sessionStorage.getItem('currentUser');
  userFound = JSON.parse(this.findUser);
  aaa = [];
  newPlaylist = [];
  audio = new Audio();
  ngOnInit(): void {
    this.playlistUser = this.userServices.getPlaylist();
    let compare = this.playlistUser.filter(x => x.codUser === this.userFound.cod);
    if(compare.length<=0){
      this.state=true;
    }
    else{
      this.state=false;
    }
    this.aaa = compare;
    console.log(this.aaa);

  }
  reproducir(i) {
    this.audio = new Audio(this.myPlaylist[i].path)
    this.audio.play();
  }
  detener() {
    this.audio.pause();
  }
  remover(i) {
    let a = JSON.parse(localStorage.getItem('playlistUsers'));
    a.splice(i, 1)
    localStorage.setItem('playlistUsers', JSON.stringify(a));
    setTimeout(" window.location.reload()",1);
  }

}






