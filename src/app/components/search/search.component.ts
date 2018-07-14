import { Component, OnInit } from '@angular/core';
import { PelisserviceService } from './../../providers/pelisservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // public texto: string = 'batman';
  buscar: string = '';

  constructor( public _ps: PelisserviceService,
               private _activated: ActivatedRoute,
              private _router: Router ) {
      this._activated.params.subscribe( params => {
                                                  if (params['texto']) {
                                                      this.buscar = params['texto'];
                                                      this.buscarPelicula();
                                                  }
                                                });
   }

  ngOnInit() {
  }


  buscarPelicula() {
    console.log(this.buscar);
    if (this.buscar.length === 0) {
      return;
    }
    this._ps.searchMovie(this.buscar)
    .subscribe( res => {
                          console.log(res);
                          // this.peliculas = res;
                        });
  }

  verDetalles(idx: number) {
     this._router.navigate(['/pelicula', idx]);
    // console.log(idx);

  }
}
