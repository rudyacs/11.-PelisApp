import { Component, OnInit } from '@angular/core';
// importamos el router para poder enviar a otro componente con id
import { ActivatedRoute } from '@angular/router';
// importamos el servicio
import { PelisserviceService } from './../../providers/pelisservice.service';
// importamos location para poder regresar justo donde se estaba antes
import { Location } from '@angular/common';



@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  // id: string = '';

  peli: any;
  constructor( public _ps: PelisserviceService,
               private activatedRoute: ActivatedRoute,
               private location: Location) { }

  ngOnInit() {
    // cargamos el array de peliculas buscadas previamente
      this.activatedRoute.params.subscribe( param => {
      console.log('id pelicula a buscar' + param['id']);
      this._ps.searchMovieById(param['id']).subscribe(
        data => { this.peli = data; console.log(this.peli); }
      );
    });
    }
    goBack(): void {
      this.location.back();
    }
}
