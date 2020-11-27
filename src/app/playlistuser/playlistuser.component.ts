import { Component, OnInit } from '@angular/core';

import { userService } from '../registrarse/services/userservices';
import { PlaylistUser } from '../models/playlist';
import { User } from '../models/user';
import { Input } from '@angular/core';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-playlistuser',
  templateUrl: './playlistuser.component.html',
  styleUrls: ['./playlistuser.component.scss']
})
export class PlaylistuserComponent implements OnInit {

  @Input() playlistUser: PlaylistUser[];
  @Input() user: User[];
  state: boolean;
  constructor(
    public userServices: userService,
    public fbService: FirebaseServiceService,
  ) { }
  collection = { data: [] };
  collection2 = { data: [] };
  newPlaylist = [];
  audio = new Audio();
  msg:string;
  msgAlert:boolean;
  async ngOnInit(): Promise<void> {
    this.msgAlert=false;
    let uid = (await this.fbService.getUserAtuh()).uid;
    this.fbService.getSongsPlaylist().subscribe(respo => {
      this.collection.data = respo.map((e: any) => {
        return {
          id: e.payload.doc.data().id,
          album: e.payload.doc.data().album,
          name: e.payload.doc.data().name,
          nameUser: e.payload.doc.data().nameUser,
          path: e.payload.doc.data().path,
          singer: e.payload.doc.data().singer,
          type: e.payload.doc.data().type,
          codSong: e.payload.doc.id
        }
      }).filter(x => x.id === uid)
    });
  }
  reproducir(i) {
    this.audio = new Audio(this.collection.data[i].path)
    this.audio.play();
  }
  detener() {
    this.audio.pause();
  }
  remover(i: any): void {
    let condSong = (this.collection.data[i].codSong).toString();
    console.log("codigo de cancion=>", condSong);
    console.log("id=>", i.codSong);
    this.fbService.deleteSongPlaylist(condSong).then((result) => {
      this.msg="Cancion eliminada de su playlist exitosamente";
      this.msgAlert=true;

    }).catch(error => {
      console.log(error);

    })
    /* 
    let a = JSON.parse(localStorage.getItem('playlistUsers'));
    a.splice(i, 1)
    localStorage.setItem('playlistUsers', JSON.stringify(a));
    setTimeout(" window.location.reload()",1); */
  }

}






