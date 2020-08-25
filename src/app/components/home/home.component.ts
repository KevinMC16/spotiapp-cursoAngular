import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent  {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService){
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message;
    
    });
  } 


}

//ejercicio solicitud http
/**private http: HttpClient) {
    
    console.log('Constructor del Home Hecho');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (resp: any ) => {
      this.paises = resp;
      console.log(resp); **/
