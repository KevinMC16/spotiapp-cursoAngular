import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Servicio Spotify listo');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDXL8gujLmFNGEuWWPcbewrLHkqRDsqyHpqPAnA3ng88jS4Mzhds5MlSBbj2N4kImowtZfW1IQmKKmPF5c'
    });
    

    this.http.get('https://api.spotify.com/v1/browse/new-releases',{ headers })
    .subscribe( data =>{
      console.log(data);
    });
  }
}
