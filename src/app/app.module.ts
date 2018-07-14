import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importamos JsonpModele, para poder usar la api de themovieDB
import { HttpModule, JsonpModule } from '@angular/http';
// importamos FormsModule para poder usar ngform
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { DetallesComponent } from './components/detalles/detalles.component';

// servicio para las peliculas
import { PelisserviceService } from './providers/pelisservice.service';
// importamos el router
import { APP_ROUTING } from './app.routes';

// importamos los pipes
import { PeliImagePipe } from './pipes/peli-image.pipe';
import { GaleriaComponent } from './components/galeria/galeria.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    DetallesComponent,
    PeliImagePipe,
    GaleriaComponent
  ],
  imports: [
  BrowserModule,
  APP_ROUTING,
  HttpModule,
  JsonpModule,
  FormsModule
  ],
  providers: [
    PelisserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
