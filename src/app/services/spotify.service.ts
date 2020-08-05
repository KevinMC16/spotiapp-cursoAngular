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
      'Authorization': 'Bearer BQBhmq3wnAqfc3wlSFVu1AUdMdNX3D3GcFgEf_HvQphSBaWxSLrGsLQl6KjdDxXTog41TRB3JXURJ4BFjXw'
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
