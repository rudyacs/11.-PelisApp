import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
// hay que instalar el rxjs: npm install rxjs@6 rxjs-compat@6 --save
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class PelisserviceService {

  private apikey: string = 'e27718c6f188f410f8b277fef33842a8';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';
  public peliculas: any;
  public url = 'http://image.tmdb.org/t/p/w500';

  // injectamos los modulos para poder usar sus propiedades y metodos
  constructor( private jsonp: Jsonp,
               private http: Http
              ) { }
  // metodo para obtener las peliculas en cartelera
  getInTheatres() {
    let desde = new Date();
    let hasta = new Date();
    let fecha1 = hasta.getDate() + 7;
    let fechaf: number;
    let mesf: number;
    // verificamos si la fecha final es mayor a 30, pasamos a l siguiente mes
    if ( fecha1 > 30 ) {
      fechaf = fecha1 - 30;
      // console.log(fecha1);
      mesf = hasta.getMonth() + 2;
    } else {
      fechaf = fecha1;
      // console.log(fecha1);
      mesf = hasta.getMonth() + 1;
    }
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${ desde.getDate() }`;
    let hastaStr = `${hasta.getFullYear()}-${ mesf }-${ fechaf }`;
     // console.log(desdeStr);
     // console.log(hastaStr);
      let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es`; // &callback=JSON_CALLBACK
      return this.http.get ( url )
                                   .map( res => res.json().results);
    }
  // metodo para obtener las peliculas mas popula
  getMostPopular() {
      let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`; // &callback=JSON_CALLBACK
      return this.http.get ( url )
                                   .map( res => res.json().results );
    }
  // metodo para obtener las peliculas mas populares para los pequeños
  getMostPopularForKids() {
      let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`; // &callback=JSON_CALLBACK
      return this.http.get ( url )
                                   .map( res => res.json().results );
    }
  // metodo para hacer la busqueda de peliculas
  searchMovie( texto: string) {
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`; // &callback=JSON_CALLBACK
    return this.http.get( url ).map( res =>  this.peliculas = res.json().results);
  }
  searchMovieById( id: string) {
    // console.log(this.searchArray[id]);
    // return this.searchArray[id];
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`; // &callback=JSON_CALLBACK
    return this.http.get( url ).map( res =>  res.json() );
  }
  // link para obtener la imagenes w300, maximo w600
  // http://image.tmdb.org/t/p/w300/
}
