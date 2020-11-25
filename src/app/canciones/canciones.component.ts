import { Component, Input, OnInit } from '@angular/core';
import { count } from 'console';
import { Key } from 'protractor';
import { AllPlaylistUser } from '../models/allPlaylist';

import { PlaylistUser } from '../models/playlist';
import { userService } from '../registrarse/services/userservices';
/* export interface Track{
  name: string;
  path: string;
}; */
@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  msg: string;
  msgAlert: boolean;
  @Input() playlistUSer: PlaylistUser[];
  constructor(
    public userServices: userService
  ) { }
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

//parte de Carlos Ayetsas
    {
      name:'Alone',
      path:'assets/audio/Electronica/Alan Walker - Alone',
      album: 'xy',
      type: 'Electronica',
      singer: 'Alan Walker'
      },
      {
      name:'Fabed',
      path:'assets/audio/Electronica/Alan Walker - Faded',
      album: 'xy',
      type: 'Electronica',
      singer: 'Alan Walker'
      },
      {
      name:'He a Pirate',
      path:'assets/audio/Electronica/Alan Walker - He_s a Pirate',
      album: 'xy',
      type: 'Electronica',
      singer: 'Alan Walker'
      },
      {
      name:'Pandemic',
      path:'assets/audio/Electronica/Alan Walker - PANDEMIC',
      album: 'xy',
      type: 'Electronica',
      singer: 'Alan Walker'
      },
      {
      name:'The spectre',
      path:'assets/audio/Electronica/Alan Walker - The Spectre',
      album: 'xy',
      type: 'Electronica',
      singer: 'Alan Walker'
      },
      {
      name:'Emelie Hollow',
      path:'assets/audio/Electronica/Alan Walker_ K-391 _ Emelie Hollow ',
      album: 'xy',
      type: 'Electronica',
      singer: 'Alan Walker'
      },
      {
      name:'Tungevaag_ Mangoo',
      path:'assets/audio/Electronica/Alan Walker_ K-391_ Tungevaag_ Mangoo',
      album: 'xy',
      type: 'Electronica',
      singer: 'Alan Walker'
      },
      {
      name:'For A Better Day',
      path:'assets/audio/Electronica/Avicii - For A Better Day',
      album: 'xy',
      type: 'Electronica',
      singer: 'Avici'
      },
      {
      name:'Heaven',
      path:'assets/audio/Electronica/Avicii - Heaven',
      album: 'xy',
      type: 'Electronica',
      singer: 'Avici'
      },
      {
      name:'Hey Brother',
      path:'assets/audio/Electronica/Avicii - Hey Brother',
      album: 'xy',
      type: 'Electronica',
      singer: 'Avici'
      },
      {
      name:'Levels',
      path:'assets/audio/Electronica/Avicii - Levels',
      album: 'xy',
      type: 'Electronica',
      singer: 'Avici'
      },
      {
      name:'The Nights',
      path:'assets/audio/Electronica/Avicii - The Nights',
      album: 'xy',
      type: 'Electronica',
      singer: 'Avici'
      },
      {
      name:'Waiting For Love',
      path:'assets/audio/Electronica/Avicii - Waiting For Love',
      album: 'xy',
      type: 'Electronica',
      singer: 'Avici'
      },
      {
      name:'Wake Me Up',
      path:'assets/audio/Electronica/Avicii - Wake Me Up',
      album: 'xy',
      type: 'Electronica',
      singer: 'Avici'
      },
      {
      name:'Hey Mama',
      path:'assets/audio/Electronica/David Guetta - Hey Mama',
      album: 'xy',
      type: 'Electronica',
      singer: 'David Guetta'
      },
      {
      name:'Play Hard ft. Ne-Yo',
      path:'assets/audio/Electronica/David Guetta - Play Hard ft. Ne-Yo',
      album: 'xy',
      type: 'Electronica',
      singer: 'David Guetta'
      },
      {
      name:'Shot Me Down',
      path:'assets/audio/Electronica/David Guetta - Shot Me Down',
      album: 'xy',
      type: 'Electronica',
      singer: 'David Guetta'
      },
      {
      name:'Titanium ft. Sia',
      path:'assets/audio/Electronica/David Guetta - Titanium ft. Sia',
      album: 'xy',
      type: 'Electronica',
      singer: 'David Guetta'
      },
      {
      name:'MORTEN - Save My Life feat',
      path:'assets/audio/Electronica/David Guetta _ MORTEN - Save My Life feat',
      album: 'xy',
      type: 'Electronica',
      singer: 'David Guetta'
      },
      {
      name:'Showtek - Bad ft.Vassy',
      path:'assets/audio/Electronica/David Guetta _ Showtek - Bad ft.Vassy',
      album: 'xy',
      type: 'Electronica',
      singer: 'David Guetta'
      },
      {
      name:'Sia - Let_s Love',
      path:'assets/audio/Electronica/David Guetta _ Sia - Let_s Love',
      album: 'xy',
      type: 'Electronica',
      singer: 'David Guetta'
      },
      {
      name:'Come Go',
      path:'assets/audio/Electronica/Juice WRLD _ Marshmello - Come _ Go',
      album: 'xy',
      type: 'Electronica',
      singer: 'Juice WRLD Marshmello'
      },
      {
      name:'Polo G',
      path:'assets/audio/Electronica/Juice WRLD with Marshmello ft. Polo G',
      album: 'xy',
      type: 'Electronica',
      singer: 'Juice WRLD Marshmello'
      },
      {
      name:'Civilization',
      path:'assets/audio/Electronica/Justice - Civilization',
      album: 'xy',
      type: 'Electronica',
      singer: 'Justice'
      },
      {
      name:'D.A.N.C.E',
      path:'assets/audio/Electronica/Justice - D.A.N.C.E.',
      album: 'xy',
      type: 'Electronica',
      singer: 'Justice'
      },
      {
      name:'Justice',
      path:'assets/audio/Electronica/Stailok - Justice',
      album: 'xy',
      type: 'Electronica',
      singer: 'Justice'
      },
      {
      name:'Genesis',
      path:'assets/audio/Electronica/Justice - Genesis',
      album: 'xy',
      type: 'Electronica',
      singer: 'Justice'
      },
      {
      name:'Heavy Metal',
      path:'assets/audio/Electronica/Justice - Heavy Metal',
      album: 'xy',
      type: 'Electronica',
      singer: 'Justice'
      },
      {
      name:'Ok Not to be',
      path:'assets/audio/Electronica/Marshmello _ Demi Lovato',
      album: 'xy',
      type: 'Electronica',
      singer: 'Marshmello _ Demi Lovato'
      },
      {
      name:'Halsey - Be Kind',
      path:'assets/audio/Electronica/Marshmello _ Halsey - Be Kind',
      album: 'xy',
      type: 'Electronica',
      singer: 'Marshmello'
      },
      {
      name:'Dugg - Baggin',
      path:'assets/audio/Electronica/Marshmello x 42 Dugg - Baggin',
      album: 'xy',
      type: 'Electronica',
      singer: 'Marshmello'
      },
      {
      name:'Imanbek',
      path:'assets/audio/Electronica/Marshmello x Imanbek',
      album: 'xy',
      type: 'Electronica',
      singer: 'Marshmello'
      },
      {
      name:'Animals',
      path:'assets/audio/Electronica/Martin Garrix - Animals',
      album: 'xy',
      type: 'Electronica',
      singer: 'Martin Garrix'
      },
      {
      name:'Dean Lewis Used to love',
      path:'assets/audio/Electronica/Martin Garrix _ Dean Lewis Used to love',
      album: 'xy',
      type: 'Electronica',
      singer: 'Martin Garrix'
      },
      {
      name:'Higher Ground',
      path:'assets/audio/Electronica/Martin Garrix feat. John Martin',
      album: 'xy',
      type: 'Electronica',
      singer: 'Martin Garrix feat. John Martin'
      },
      {
      name:'Dutch waters',
      path:'assets/audio/Electronica/Martin Garrix Tribute to Avicii',
      album: 'xy',
      type: 'Electronica',
      singer: 'Martin Garrix'
      },
      {
      name:'Hold On',
      path:'assets/audio/Electronica/Martin Garrix_ Matisse _ Sadko feat. Michel Zitron',
      album: 'xy',
      type: 'Electronica',
      singer: 'Martin Garrix_ Matisse _ Sadko feat. Michel Zitron'
      },
      {
      name:'Fire',
      path:'assets/audio/Electronica/Ytram _ Elderbrook - Fire',
      album: 'xy',
      type: 'Electronica',
      singer: 'Ytram'
      },
      {
      name:'Jon Bellion',
      path:'assets/audio/Electronica/Zedd - Beautiful Now ft. Jon Bellion',
      album: 'xy',
      type: 'Electronica',
      singer: 'Zedd'
      },
      {
      name:'Foxes',
      path:'assets/audio/Electronica/Zedd - Clarity ft. Foxes',
      album: 'xy',
      type: 'Electronica',
      singer: 'Zedd'
      },
      {
      name:'Find You ft',
      path:'assets/audio/Electronica/Zedd - Find You ft.',
      album: 'xy',
      type: 'Electronica',
      singer: 'Zedd'
      },
      {
      name:'I Want You To Know',
      path:'assets/audio/Electronica/Zedd - I Want You To Know ft. Selena Gomez',
      album: 'xy',
      type: 'Electronica',
      singer: 'Zedd'
      },
      {
      name:'Stay The Night',
      path:'assets/audio/Electronica/Zedd - Stay The Night ft. Hayley Williams',
      album: 'xy',
      type: 'Electronica',
      singer: 'Zedd'
      },
      {
      name:'Funny',
      path:'assets/audio/Electronica/Zedd _ Jasmine Thompson - Funny',
      album: 'xy',
      type: 'Electronica',
      singer: 'Zedd'
      },
      {
      name:'Stay',
      path:'assets/audio/Electronica/Zedd_ Alessia Cara - Stay',
      album: 'xy',
      type: 'Electronica',
      singer: 'Zedd'
      },
      {
      name:'Inside Out',
      path:'assets/audio/Electronica/Zedd_ Griff - Inside Out',
      album: 'xy',
      type: 'Electronica',
      singer: 'Zedd'
      },
      {
      name:'Get Low',
      path:'assets/audio/Electronica/Zedd_ Liam Payne - Get Low',
      album: 'xy',
      type: 'Electronica',
      singer: 'Zedd'
      },
      {
      name:'The Middle8',
      path:'assets/audio/Electronica/Zedd_ Maren Morris_ Grey - The Middle',
      album: 'xy',
      type: 'Electronica',
      singer: 'Zedd'
      },
    
  ]
  cout: number;
  acumulador: number;
  numberOfSong: number;
  audio = new Audio();
  @Input() allPlaylistUsers: AllPlaylistUser[];
  ngOnInit(): void {
    this.cout = 0;
    this.acumulador = 0;
    this.msgAlert = false;
    this.allPlaylistUsers= this.userServices.getAllPlaylist();
  }

  reproducir(i) {

    if (this.cout === 0) {
      this.numberOfSong = i;
      console.log(this.numberOfSong);
      this.audio = new Audio(this.playlist[i].path)
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
  agregar(i) {
    let userSession = sessionStorage.getItem('currentUser');
    let userJ = JSON.parse(userSession);
    let findUser= this.allPlaylistUsers.filter(x=>x.codUSer=== userJ.cod);
    console.log(findUser);
    
    this.userServices.addPlaylist({
      name: this.playlist[i].name,
      path: this.playlist[i].path,
      album: this.playlist[i].album,
      singer: this.playlist[i].singer,
      type: this.playlist[i].type,
      codUser: userJ.cod,
      codSong: i,
      idUser: userJ.cod,
      nameUser: userJ.name
    })
    console.log(findUser.length);
    if(findUser.length===0){
      console.log("1");
      this.userServices.addAllPlaylist({
        nameUser: userJ.name,
        codUSer: userJ.cod,
        email: userJ.email
      }) 
          
    }
    console.log("sadjn");
    
  }
  like(i) {
    let userSession = sessionStorage.getItem('currentUser');
    let userJ = JSON.parse(userSession);
    let par = localStorage.getItem("likeSongs");
    let s = JSON.parse(par);/* 
    let ss = s.filter(x=>x.codSong===i).filter(y=>y.length===null); */

    if (par === null || par.length === 0) {
      this.userServices.addLike({
        nameSong: this.playlist[i].name,
        path: this.playlist[i].path,
        album: this.playlist[i].album,
        singer: this.playlist[i].singer,
        type: this.playlist[i].type,
        codSong: i,
        countLike: 1,

      });
    } else {
      for (var x in s) {
        if (s[x].codSong == i) {
          s[x].countLike += 1;
        }
        localStorage.setItem('likeSongs', JSON.stringify(s));
      }
    }
  }
}
