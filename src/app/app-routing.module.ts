import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { PlaylistuserComponent} from './playlistuser/playlistuser.component';
  import { from } from 'rxjs';

const routes: Routes = [
{path:'', redirectTo:'Home',pathMatch:'full'},
{path:'Home', component:HomeComponent},
{path:'Albumes', component:AlbumesComponent},
{path:'Contactanos', component:ContactanosComponent},
{path:'About', component:AboutComponent},
{path:'Canciones', component:CancionesComponent},
{path:'Topaplaylist', component:TopaplaylistComponent},
{path:'Usuarios', component:UsuariosComponent},
{path:'Artistas', component:ArtistasComponent},
{path: 'Registrarse', component:RegistrarseComponent},
{path: 'Iniciosesion', component: IniciosesionComponent},
{path: 'MyPlaylist', component:PlaylistuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
