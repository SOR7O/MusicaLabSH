import { Component, OnInit } from '@angular/core';
import {FirebaseServiceService} from '../services/firebase-service.service';
@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.scss']
})
export class AlbumesComponent implements OnInit {

  constructor(public fbServiceS:FirebaseServiceService
  ) { }
  closeResult = '';
  playlist = [
    {
      name: 'Te ofresco un corazón',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/BANDA EL RECODO - TE OFREZCO UN CORAZÓN CONCIERTO DIGITAL.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo',
      image: 'assets/img/album/lo mejor de mi vida.jpg',
      imageArtista: 'assets/img/banda el recodo.png'
    },
    {
      name: 'Gracias Por Tu Amor',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Banda El Recodo De Cruz Lizárraga, David Bisbal - Gracias Por Tu Amor.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo',
      image: 'assets/img/album/lo mejor de mi vida.jpg',
      imageArtista: 'assets/img/banda el recodo.png'
    },
    {
      name: 'Que me perdone Dios',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Banda El Recodo-Que me perdone Dios.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo',
      image: 'assets/img/album/lo mejor de mi vida.jpg',
      imageArtista: 'assets/img/banda el recodo.png'
    },
    {
      name: 'Deja',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Deja - Banda El Recodo (VICIOVIP.NET).mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo',
      image: 'assets/img/album/lo mejor de mi vida.jpg',
      imageArtista: 'assets/img/banda el recodo.png'
    },
    {
      name: 'No me dejes nunca',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/El Recodo No me dejes nunca.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo',
      image: 'assets/img/album/lo mejor de mi vida.jpg',
      imageArtista: 'assets/img/banda el recodo.png'
    },
    {
      name: 'Elemento',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Lo Mejor de Mi Vida - (Video Con Letras) - T3R Elemento - DEL Records 2020.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo',
      image: 'assets/img/album/lo mejor de mi vida.jpg',
      imageArtista: 'assets/img/banda el recodo.png'
    },
    {
      name: 'Moviendo La Cadera',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Moviendo La Cadera - Banda el Recodo (MP3BUENO.SITE).mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo',
      image: 'assets/img/album/lo mejor de mi vida.jpg',
      imageArtista: 'assets/img/banda el recodo.png'
    },
    {
      name: 'Yo Sé Que Te Acordarás',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Yo Sé Que Te Acordarás.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo',
      image: 'assets/img/album/lo mejor de mi vida.jpg',
      imageArtista: 'assets/img/banda el recodo.png'
    },
    {
      name: 'Altamente Probable',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - ALTAMENTE PROBABLE (VIDEO OFICIAL).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS',
      image: 'assets/img/album/el trabajo es la suerte.jpg',
      imageArtista: 'assets/img/banda ms.jpg'
    },
    {
      name: 'Cerrando Ciclos',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - CERRANDO CICLOS (MP3TECA.WS).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS',
      image: 'assets/img/album/el trabajo es la suerte.jpg',
      imageArtista: 'assets/img/banda ms.jpg'
    },
    {
      name: 'Dime',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - DIME (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS',
      image: 'assets/img/album/el trabajo es la suerte.jpg',
      imageArtista: 'assets/img/banda ms.jpg'
    },
    {
      name: 'Gracias por eso',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - GRACIAS POR ESO (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS',
      image: 'assets/img/album/el trabajo es la suerte.jpg',
      imageArtista: 'assets/img/banda ms.jpg'
    },
    {
      name: 'La Casita',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - LA CASITA (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS',
      image: 'assets/img/album/el trabajo es la suerte',
      imageArtista: 'assets/img/banda ms.jpg'
    },
    {
      name: 'Me cansé',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/Banda MS - Me Cansé (Official Vídeo 2020).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS',
      image: 'assets/img/album/el trabajo es la suerte.jpg',
      imageArtista: 'assets/img/banda ms.jpg'
    },
    {
      name: 'Romper el Hielo',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - ROMPER EL HIELO (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS',
      image: 'assets/img/album/el trabajo es la suerte.jpg',
      imageArtista: 'assets/img/banda ms.jpg'
    },
    {
      name: 'Tu carta de Retiro',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - TU CARTA DE RETIRO (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS',
       image: 'assets/img/album/el trabajo es la suerte.jpg',
       imageArtista: 'assets/img/banda ms.jpg'
    },
    {
      name: 'Lo haces Difícil',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS LO HACES DIFICIL.mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS',
      image: 'assets/img/album/el trabajo es la suerte.jpg',
      imageArtista: 'assets/img/banda ms.jpg'
    },
    {
      name: 'No me interesa',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/No Me Interesa - Banda MS (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS',
      image: 'assets/img/album/el trabajo es la suerte.jpg',
      imageArtista: 'assets/img/banda ms.jpg'
    },
    {
      name: 'Anoche me Enamoré',
      path: 'assets/audio/Cristian Nodal AYAYAY!/07 Christian Nodal - Anoche Me Enamoré.mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal',
      image: 'assets/img/album/ayayay.jpg',
      imageArtista: 'assets/img/nodal.jpg'
    },
    {
      name: 'Amor Tóxico',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Amor Tóxico.mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal',
      image: 'assets/img/album/ayayay.jpg',
      imageArtista: 'assets/img/nodal.jpg'
    },
    {
      name: 'Aquí Abajo',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Aquí Abajo (Video Oficial).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal',
      image: 'assets/img/album/ayayay.jpg',
      imageArtista: 'assets/img/nodal.jpg'
    },
    {
      name: 'Mi ex',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Mi Ex (Video Oficial).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal',
      image: 'assets/img/album/ayayay.jpg',
      imageArtista: 'assets/img/nodal.jpg'
    },
    {
      name: 'Nace un Borracho',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Nace Un Borracho (Video Oficial).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal',
      image: 'assets/img/album/ayayay.jpg',
      imageArtista: 'assets/img/nodal.jpg'
    },
    {
      name: 'No es justo por él',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - No Es Justo X Él (Lyric Video).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal',
      image: 'assets/img/album/ayayay.jpg',
      imageArtista: 'assets/img/nodal.jpg'
    },
    {
      name: 'Ojalá fuera Cierto',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Ojalá Fuera Cierto (Lyric Video).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal',
      image: 'assets/img/album/ayayay.jpg',
      imageArtista: 'assets/img/nodal.jpg'
    },
    {
      name: 'Venganza Cumplida',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Venganza Cumplida (LETRA).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal',
      image: 'assets/img/album/ayayay.jpg',
      imageArtista: 'assets/img/nodal.jpg'
    },
    {
      name: 'Mamacita',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Mamacita - Christian Nodal (Letra ).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal',
      image: 'assets/img/album/ayayay.jpg',
      imageArtista: 'assets/img/nodal.jpg'
    },
    {
      name: 'Se me Olvidó',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Se Me Olvidó - Christian Nodal (Letra-Lyrics).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal',
      image: 'assets/img/album/ayayay.jpg',
      imageArtista: 'assets/img/nodal.jpg'
    },
    {
      name: 'Indesición',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/Indecision - La Arrolladora Banda Limon (Letra).mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón',
      image: 'assets/img/album/labios mentirosos.jpg',
      imageArtista: 'assets/img/la arrolladora.jpg'
    },
    {
      name: 'No Quiero Jugar',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/La Arrolladora - No Quiero Jugar (Letra).mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón',
      image: 'assets/img/album/labios mentirosos.jpg',
      imageArtista: 'assets/img/la arrolladora.jpg'
    },
    {
      name: 'Marcharte fue tu Error',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/La Arrolladora Banda El Limón - Marcharte Fue Tu Error (LETRA) Estreno 2019.mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón',
      image: 'assets/img/album/labios mentirosos.jpg',
      imageArtista: 'assets/img/la arrolladora.jpg'
    },
    {
      name: 'Igual',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/La Arrolladora Banda El Limón De René Camacho - Cedí.mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón',
      image: 'assets/img/album/labios mentirosos.jpg',
      imageArtista: 'assets/img/la arrolladora.jpg'
    },
    {
      name: 'Ahora que me acuerdo',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/La Arrolladora Banda El Limón De René Camacho - Labios Mentirosos.mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón',
      image: 'assets/img/album/labios mentirosos.jpg',
      imageArtista: 'assets/img/la arrolladora.jpg'
    },
    {
      name: 'No va a ser tan fácil',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/La Arrolladora Banda El Limón De René Camacho - No Va A Ser Tan Fácil (GRANTONO.NET).mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón',
      image: 'assets/img/album/labios mentirosos.jpg',
      imageArtista: 'assets/img/la arrolladora.jpg'
    },
    {
      name: 'Menea',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/Menea, Menea - La Arrolladora Banda El Limón.mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón',
      image: 'assets/img/album/labios mentirosos.jpg',
      imageArtista: 'assets/img/la arrolladora.jpg'
    },
    {
      name: 'Mia desde Siempre',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/Mía Desde Siempre - La Arrolladora Banda El Limón De Rene Camacho (Letra)).mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón',
      image: 'assets/img/album/labios mentirosos.jpg',
      imageArtista: 'assets/img/la arrolladora.jpg'
    },
    {
      name: 'No debemos vernos',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/No Debemos Vernos - La Arrolladora (VICIOVIP.NET).mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón',
      image: 'assets/img/album/labios mentirosos.jpg',
      imageArtista: 'assets/img/la arrolladora.jpg'
    },
    {
      name: 'Doctorado En Sufrimiento',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - Doctorado En Sufrimiento.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa',
      image: 'assets/img/album/me hiciste borracho.jpg',
      imageArtista: 'assets/img/la trakalosa.png'
      
    },
    {
      name: 'Fíjate que sí',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna y La Trakalosa de Monterrey - Fíjate que sí (Video Oficial).mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa',
      image: 'assets/img/album/me hiciste borracho.jpg',
      imageArtista: 'assets/img/la trakalosa.png'
    },
    {
      name: 'La Niña De Tus Ojos',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - La Niña De Tus Ojos.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa',
      image: 'assets/img/album/me hiciste borracho.jpg',
      imageArtista: 'assets/img/la trakalosa.png'
    },
    {
      name: 'Maldita Pobreza',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - Maldita Pobreza.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa',
      image: 'assets/img/album/me hiciste borracho.jpg',
      imageArtista: 'assets/img/la trakalosa.png'
    },
    {
      name: 'Doctorado En Sufrimiento',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - Doctorado En Sufrimiento.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa',
      image: 'assets/img/album/me hiciste borracho.jpg',
      imageArtista: 'assets/img/la trakalosa.png'
    },
    {
      name: 'Me hiciste un borracho',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna y La Trakalosa de Monterrey - Me hiciste un borracho (Video).mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa',
      image: 'assets/img/album/me hiciste borracho.jpg',
      imageArtista: 'assets/img/la trakalosa.png'
    },
    {
      name: 'Pásame Una Cheve',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - Pásame Una Cheve.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa',
      image: 'assets/img/album/me hiciste borracho.jpg',
      imageArtista: 'assets/img/la trakalosa.png'
    },
    {
      name: 'Si ya no me quieres',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna y La Trakalosa de Monterrey - Si ya no me quieres (Video).mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa',
      image: 'assets/img/album/me hiciste borracho.jpg',
      imageArtista: 'assets/img/la trakalosa.png'
    },
    {
      name: 'Solo Amantes',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - Solo Amantes.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa',
      image: 'assets/img/album/me hiciste borracho.jpg',
      imageArtista: 'assets/img/la trakalosa.png'
    },
    {
      name: 'Y cambió mi Suerte',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Virlan Garcia - Y Cambio Mi Suerte (Letra).mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa',
      image: 'assets/img/album/me hiciste borracho.jpg',
      imageArtista: 'assets/img/la trakalosa.png'
    },
  ];
  newArr = [];
  newArr2 = [];
  state: boolean;
  ver: boolean;
  msg: string;
  msgAlert: boolean;
  newArray3=[];
  cout: number;
  acumulador: number;
  numberOfSong: number;
  audio = new Audio();
  ngOnInit(): void {
    this.state = true;
    this.ver = true;
    this.cout = 0;
    this.acumulador = 0;
    this.msgAlert = false;
    this.playlist.forEach(item => {
      if (!(item.album in this.playlist)) {
        this.playlist[item.album] = true;
        this.newArr.push({'name':item.album,'album:':item.album,'image':item.image})
      }
    });

    console.log(this.newArray3);

    /*  
     let result = this.playlist.filter((item, index)=>{
       this.playlist.indexOf(item)=== index;
     });
     console.log(result); */

  }

  viewAlbum(i) {
    this.state = false;
    this.ver = false;
    this.playlist.forEach(item => {
      if (item.album === this.newArr[i]) {
        this.newArr2.push({"name":item.name,"path":item.path, 'album': item.album,
        'type': item.type,'singer':item.singer});
        this.newArray3.push(item.path);
      }
    });
    console.log(this.newArr2);
    


  }
  hiddenAlbum() {
    this.ver= true;
    setTimeout('window.location.reload()', 10);
  }
  async agregar(i) {
    let Playlist = {};
    let user = await this.fbServiceS.getUserAtuh();
    if (user) {
      Playlist["name"] = this.playlist[i].name;
      Playlist["album"] = this.playlist[i].album;
      Playlist["path"] = this.playlist[i].path;
      Playlist["singer"] = this.playlist[i].singer;
      Playlist["type"] = this.playlist[i].type;
      Playlist["id"] = (await this.fbServiceS.getUserAtuh()).uid;
      Playlist["nameUser"] = (await this.fbServiceS.getUserAtuh()).displayName;
      Playlist["codSong"]=i
      this.fbServiceS.addSongPlaylist(Playlist).then(play => {
        this.msg="Cancion agregada exitosamente";
        this.msgAlert=true;
      })
    } else {
      this.msg = "Lo sentimos, tienes que iniciar sesion para crear tu playlist";
      this.msgAlert = true;
    }

  }
  reproducir(y) {
    if (this.cout === 0) {
      this.numberOfSong = y;
      console.log(this.numberOfSong);
      this.audio = new Audio(this.newArr2[y].path)
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

}
