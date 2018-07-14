import { Component, OnInit } from '@angular/core';
import { PelisserviceService } from './../../providers/pelisservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _ps: PelisserviceService, private router: Router) { }

  ngOnInit() {
  }

   buscarPelicula( texto: string ) {
    console.log(texto);
    if (texto.length === 0) {
      return;
    } else {
      this.router.navigate(['buscar', texto ]);
      /* this._ps.searchMovie(texto)
      .subscribe( res => {
                          console.log(res);
                          // this.peliculas = res;
                        });*/
        }
  }
}
