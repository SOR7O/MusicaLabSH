import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {

  constructor() { }
  playlist = [
    {
      name: 'Te ofresco un corazón',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/BANDA EL RECODO - TE OFREZCO UN CORAZÓN CONCIERTO DIGITAL.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo'
    },
    {
      name: 'Gracias Por Tu Amor',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Banda El Recodo De Cruz Lizárraga, David Bisbal - Gracias Por Tu Amor.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo'
    },
    {
      name: 'Que me perdone Dios',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Banda El Recodo-Que me perdone Dios.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo'
    },
    {
      name: 'Deja',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Deja - Banda El Recodo (VICIOVIP.NET).mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo'
    },
    {
      name: 'No me dejes nunca',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/El Recodo No me dejes nunca.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo'
    },
    {
      name: 'Elemento',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Lo Mejor de Mi Vida - (Video Con Letras) - T3R Elemento - DEL Records 2020.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo'
    },
    {
      name: 'Moviendo La Cadera',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Moviendo La Cadera - Banda el Recodo (MP3BUENO.SITE).mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo'
    },
    {
      name: 'Yo Sé Que Te Acordarás',
      path: 'assets/audio/Banda El Recodo Lo Mejor de mi Vida/Yo Sé Que Te Acordarás.mp3',
      album: 'Lo Mejor de mi Vida',
      type: 'Rancheras',
      singer: 'Banda El Recodo'
    },
    {
      name: 'Altamente Probable',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - ALTAMENTE PROBABLE (VIDEO OFICIAL).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS'
    },
    {
      name: 'Cerrando Ciclos',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - CERRANDO CICLOS (MP3TECA.WS).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS'
    },
    {
      name: 'Dime',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - DIME (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS'
    },
    {
      name: 'Gracias por eso',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - GRACIAS POR ESO (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS'
    },
    {
      name: 'La Casita',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - LA CASITA (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS'
    },
    {
      name: 'Me cansé',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/Banda MS - Me Cansé (Official Vídeo 2020).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS'
    },
    {
      name: 'Romper el Hielo',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - ROMPER EL HIELO (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS'
    },
    {
      name: 'Tu carta de Retiro',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS - TU CARTA DE RETIRO (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS'
    },
    {
      name: 'Lo haces Difícil',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/BANDA MS LO HACES DIFICIL.mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS'
    },
    {
      name: 'No me interesa',
      path: 'assets/audio/Banda MS El Trabajo es la Suerte/No Me Interesa - Banda MS (LETRA).mp3',
      album: 'El Trabajo es la Suerte',
      type: 'Rancheras',
      singer: 'Banda MS'
    },
    {
      name: 'Anoche me Enamoré',
      path: 'assets/audio/Cristian Nodal AYAYAY!/07 Christian Nodal - Anoche Me Enamoré.mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal'
    },
    {
      name: 'Amor Tóxico',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Amor Tóxico.mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal'
    },
    {
      name: 'Aquí Abajo',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Aquí Abajo (Video Oficial).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal'
    },
    {
      name: 'Mi ex',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Mi Ex (Video Oficial).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal'
    },
    {
      name: 'Nace un Borracho',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Nace Un Borracho (Video Oficial).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal'
    },
    {
      name: 'No es justo por él',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - No Es Justo X Él (Lyric Video).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal'
    },
    {
      name: 'Ojalá fuera Cierto',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Ojalá Fuera Cierto (Lyric Video).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal'
    },
    {
      name: 'Venganza Cumplida',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Christian Nodal - Venganza Cumplida (LETRA).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal'
    },
    {
      name: 'Mamacita',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Mamacita - Christian Nodal (Letra ).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal'
    },
    {
      name: 'Se me Olvidó',
      path: 'assets/audio/Cristian Nodal AYAYAY!/Se Me Olvidó - Christian Nodal (Letra-Lyrics).mp3',
      album: 'AYAYAY!',
      type: 'Rancheras',
      singer: 'Cristian Nodal'
    },
    {
      name: 'Indesición',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/Indecision - La Arrolladora Banda Limon (Letra).mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón'
    },
    {
      name: 'No Quiero Jugar',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/La Arrolladora - No Quiero Jugar (Letra).mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón'
    },
    {
      name: 'Marcharte fue tu Error',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/La Arrolladora Banda El Limón - Marcharte Fue Tu Error (LETRA) Estreno 2019.mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón'
    },
    {
      name: 'Igual',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/La Arrolladora Banda El Limón De René Camacho - Cedí.mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón'
    },
    {
      name: 'Ahora que me acuerdo',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/La Arrolladora Banda El Limón De René Camacho - Labios Mentirosos.mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón'
    },
    {
      name: 'No va a ser tan fácil',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/La Arrolladora Banda El Limón De René Camacho - No Va A Ser Tan Fácil (GRANTONO.NET).mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón'
    },
    {
      name: 'Menea',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/Menea, Menea - La Arrolladora Banda El Limón.mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón'
    },
    {
      name: 'Mia desde Siempre',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/Mía Desde Siempre - La Arrolladora Banda El Limón De Rene Camacho (Letra)).mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón'
    },
    {
      name: 'No debemos vernos',
      path: 'assets/audio/La Arrolladora Banda El limon Labios Mentirosos/No Debemos Vernos - La Arrolladora (VICIOVIP.NET).mp3',
      album: 'Labios Mentirosos',
      type: 'Rancheras',
      singer: 'La Arrolladora Banda Limón'
    },
    {
      name: 'Doctorado En Sufrimiento',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - Doctorado En Sufrimiento.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa'
    },
    {
      name: 'Fíjate que sí',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna y La Trakalosa de Monterrey - Fíjate que sí (Video Oficial).mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa'
    },
    {
      name: 'La Niña De Tus Ojos',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - La Niña De Tus Ojos.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa'
    },
    {
      name: 'Maldita Pobreza',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - Maldita Pobreza.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa'
    },
    {
      name: 'Doctorado En Sufrimiento',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - Doctorado En Sufrimiento.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa'
    },
    {
      name: 'Me hiciste un borracho',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna y La Trakalosa de Monterrey - Me hiciste un borracho (Video).mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa'
    },
    {
      name: 'Pásame Una Cheve',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - Pásame Una Cheve.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa'
    },
    {
      name: 'Si ya no me quieres',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna y La Trakalosa de Monterrey - Si ya no me quieres (Video).mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa'
    },
    {
      name: 'Solo Amantes',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Edwin Luna Y La Trakalosa De Monterrey - Solo Amantes.mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa'
    },
    {
      name: 'Y cambió mi Suerte',
      path: 'assets/audio/La Trakalosa Me hiciste un Borracho/Virlan Garcia - Y Cambio Mi Suerte (Letra).mp3',
      album: 'Me hiciste un Borracho',
      type: 'Rancheras',
      singer: 'La Trakalosa'
    },
  ];
  newArray=[];
  newArray2=[];
  ver:boolean;
  cout: number;
  acumulador: number;
  numberOfSong: number;
  msg: string;
  msgAlert: boolean;
  state:boolean;
  audio = new Audio();
  ngOnInit(): void {
    this.state = true;
    this.cout = 0;
    this.acumulador = 0;
    this.ver = true;
    this.msgAlert = false;
    this.playlist.forEach(item=>{
      if(!(item.singer in this.playlist)){
        this.playlist[item.singer]=true;
        this.newArray.push(item.singer)
      }
    });
    console.log(this.newArray);
  }
  canciones(i){
    this.state = false;
    this.ver=false
    this.playlist.forEach(item=>{
      if(item.singer===this.newArray[i]){
        this.newArray2.push({"singer": item.singer,"path":item.path,"nameSong":item.name});
      }
    });
    console.log(this.newArray2);
    
  }
  hiddenCanciones(){
    this.ver=true;

    setTimeout('window.location.reload()', 10);
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
