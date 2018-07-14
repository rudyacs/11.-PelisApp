import { Component, OnInit } from '@angular/core';
import { PelisserviceService } from './../../providers/pelisservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartelera: any;
  populares: any;
  popularesKids: any;
  constructor( public _ps: PelisserviceService) {

   }

  ngOnInit() {
      this._ps.getInTheatres().subscribe( data => { this.cartelera = data;
                                                     console.log(this.cartelera);
                                                  });
      this._ps.getMostPopular().subscribe( data2 => { this.populares = data2;
                                                     console.log(this.populares);
                                                   });
      this._ps.getMostPopularForKids().subscribe( data3 => { this.popularesKids = data3;
                                                     console.log(this.popularesKids);
                                                  });
  }
}
