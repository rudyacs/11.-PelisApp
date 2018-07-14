// pipe para gestionar la imagen a mostrar segun el caso
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliImage'
})
export class PeliImagePipe implements PipeTransform {
  // ruta de las imagenes
 url: string = 'http://image.tmdb.org/t/p/w500';

  transform(pelicula: any, poster: boolean = false): any {
    if (poster) {
      return this.url + pelicula.poster_path;
    }
    if (pelicula.backdrop_path) {
        return this.url + pelicula.backdrop_path;
    } else if (pelicula.poster_path) {
        return this.url + pelicula.poster_path;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
