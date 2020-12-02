import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../services/firebase-service.service';
@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {

  constructor(
    public fbServiceS: FirebaseServiceService
  ) { }
  playlist = [
    {
      name: 'Te ofresco un corazón',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/BANDA EL RECODO - TE OFREZCO UN CORAZÓN CONCIERTO DIGITAL.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo',
      image: 'assets/img/album/lo mejor de mi vida.jpg',
      imageArtista: 'assets/img/banda el recodo.png',
      ubication: '	El Recodo, Mazatlán, Sinaloa',
      description: 'Es una banda sinaloense formada en El Recodo, un pueblo en el Municipio de Mazatlán, Sinaloa, en 19382​ por Don Cruz Lizárraga, la cual se puede considerar como la pionera en la divulgación del género, que ya se venía gestando desde décadas atrás, por lo que se le conoce como "La Madre de Todas las Bandas"'
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
      imageArtista: 'assets/img/banda ms.jpg',
      description:'La Banda Sinaloense MS de Sergio Lizárraga​ también conocida como Banda MS es una agrupación de música de banda sinaloense creada en la ciudad de Mazatlán, Sinaloa, en el año de 2003.​'
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
      imageArtista: 'assets/img/nodal.jpg',
      description:'Christian Jesús González Nodal, mejor conocido como Christian Nodal, es un cantante y compositor mexicano. Su primer sencillo, «Adiós amor», publicado en 2016 bajo el sello discográfico Fonovisa, lo lanzó a la fama en diversos medios de comunicación en México y Estados Unidos.'
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
      imageArtista: 'assets/img/la arrolladora.jpg',
      description: 'La Arrolladora Banda El Limón de René Camacho, o simplemente La Arrolladora, es una agrupación musical mexicana de Banda sinaloense.'
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
      imageArtista: 'assets/img/la trakalosa.png',
      description: 'Edwin Luna y La Trakalosa De Monterrey (también conocida como La Trakalosa De Monterrey o simplemente La Trakalosa) es una banda originaria de Monterrey, Nuevo León, fundada a mediados del 2011, aunque su origen data del dia 7 de Enero del año 2010 cuando Edwin Luna funda la Banda Escandalosa por jóvenes que gustaban de esta música en Monterrey.'

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
  newArray = [];
  newArray2 = [];
  ver: boolean;
  cout: number;
  acumulador: number;
  numberOfSong: number;
  msg: string;
  msgAlert: boolean;
  state: boolean;
  audio = new Audio();
  ngOnInit(): void {
    this.state = true;
    this.cout = 0;
    this.acumulador = 0;
    this.ver = true;
    this.msgAlert = false;
    this.playlist.forEach(item => {
      if (!(item.singer in this.playlist)) {
        this.playlist[item.singer] = true;
        this.newArray.push({ 'singer': item.singer, 'image': item.imageArtista, 'ubicacion': item.ubication, 
      'descripcion':item.description})
      }
    });
    console.log(this.newArray);
  }
  canciones(i) {
    this.state = false;
    this.ver = false
    this.newArray2=this.playlist.map((e: any)=>{
      return{
        name: e.name,
        path: e.path,
        album: e.album,
        type: e.type,
        singer:e.singer
      }
    }).filter(x=>x.singer===this.newArray[i].singer)
    /* this.playlist.forEach(item => {
      if (item.singer === this.newArray[i]) {
        this.newArray2.push({
          "singer": item.singer, "path": item.path, "nameSong": item.name, 'album': item.album,
          'type': item.type
        });
      }
    });
    console.log(this.newArray2); */

  }
  hiddenCanciones() {
    this.ver = true;

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
      Playlist["codSong"] = i
      this.fbServiceS.addSongPlaylist(Playlist).then(play => {
        this.msg = "Cancion agregada exitosamente";
        this.msgAlert = true;
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
      this.audio = new Audio(this.newArray2[y].path)
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
