import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {


  constructor( private spotify: SpotifyService){
    this.spotify.getNewReleases();
  } 


}

//ejercicio solicitud http
/**private http: HttpClient) {
    
    console.log('Constructor del Home Hecho');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (resp: any ) => {
      this.paises = resp;
      console.log(resp); **/
