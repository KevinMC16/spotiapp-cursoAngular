import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Servicio Spotify listo');
  }

  getQuery( query: string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAIPAv-J9vUOBCPj9jDFwJm5dU0OV9RrFwNdD9niuub-chWqFjGc-_UO0sjAruTAl66OHRYoQj0CAjYocg'
    });

    return this.http.get(url,{ headers } );

  }

    getNewReleases(){

    return this.getQuery('browse/new-releases')
        .pipe( map(data =>  data['albums'].items));
  }

  getArtista(termino: string){
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map(data => data['artists'].items));
  }
}
