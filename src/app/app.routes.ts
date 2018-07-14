import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { DetallesComponent } from './components/detalles/detalles.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: SearchComponent },
  { path: 'buscar/:texto', component: SearchComponent },
  { path: 'pelicula/:id', component: DetallesComponent },
  { path: '**', component: HomeComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
