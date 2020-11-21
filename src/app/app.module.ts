import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AboutComponent } from './about/about.component';
import { CancionesComponent } from './canciones/canciones.component';
import { TopaplaylistComponent } from './topaplaylist/topaplaylist.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ArtistasComponent } from './artistas/artistas.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    AlbumesComponent,
    ContactanosComponent,
    AboutComponent,
    CancionesComponent,
    TopaplaylistComponent,
    UsuariosComponent,
    ArtistasComponent,
    RegistrarseComponent,
    IniciosesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
