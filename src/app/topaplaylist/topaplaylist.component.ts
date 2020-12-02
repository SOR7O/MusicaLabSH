import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../services/firebase-service.service';
@Component({
  selector: 'app-topaplaylist',
  templateUrl: './topaplaylist.component.html',
  styleUrls: ['./topaplaylist.component.scss']
})
export class TopaplaylistComponent implements OnInit {

  constructor(
    public firebaseServiceService: FirebaseServiceService
  ) { }
  playlist = { data: [] };
  collection = { data: [] };
  topPlaylist = [];
  state: boolean;
  msg: string;
  msgAlert: boolean;
  cout: number;
  acumulador: number;
  numberOfSong: number;
  audio = new Audio();
  ngOnInit(): void {
    this.cout = 0;
    this.acumulador = 0;
    this.msgAlert = false;

    this.firebaseServiceService.getSongsPlaylist().subscribe(item => {
      this.playlist.data = item.map((e: any) => {
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
      })
      this.playlist.data.forEach(item => {
        if (!(item.id in this.playlist)) {
          console.log("2");
          this.playlist[item.id] = true;
          this.topPlaylist.push({ "name": item.nameUser, "id": item.id, "path": item.path })
        }
      });
    });
    this.state = true;
  }
  ver(i) {
    this.state = false;
    this.firebaseServiceService.getSongsPlaylist().subscribe(respo => {
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
      }).filter(x => x.id === this.topPlaylist[i].id);
      console.log(this.collection.data);
    });
  }
  verMenos() {
    this.state = true;
  }
  reproducir(i) {

    if (this.cout === 0) {
      this.numberOfSong = i;
      console.log(this.numberOfSong);
      this.audio = new Audio(this.collection.data[i].path)
      this.audio.play();
    }
    else {
      this.msgAlert = true;
      this.msg = 'Ya se esta reproduciendo'
    }
    this.cout = 1;
    console.log(this.msg);
  }
  detener(i) {
    if (this.numberOfSong == i) {
      this.cout = 0
      this.audio.pause();
    }
    else {
      this.msg = 'No se puede detener';
      this.msgAlert = true;
    }
  }
  async agregar(i) {
    let Playlist = {};
    let user = await this.firebaseServiceService.getUserAtuh();
    if (user) {
      Playlist["name"] = this.playlist[i].name;
      Playlist["album"] = this.playlist[i].album;
      Playlist["path"] = this.playlist[i].path;
      Playlist["singer"] = this.playlist[i].singer;
      Playlist["type"] = this.playlist[i].type;
      Playlist["id"] = (await this.firebaseServiceService.getUserAtuh()).uid;
      Playlist["nameUser"] = (await this.firebaseServiceService.getUserAtuh()).displayName;
      Playlist["codSong"] = i
      this.firebaseServiceService.addSongPlaylist(Playlist).then(play => {
        this.msg = "Cancion agregada exitosamente";
        this.msgAlert = true;
      })
    } else {
      this.msg = "Lo sentimos, tienes que iniciar sesion para crear tu playlist";
      this.msgAlert = true;
    }

  }
  cerrar() {
    this.msgAlert = false;
  }



}
