import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pagina de pruebas Alejandro Monteseirin, Karma Jasmine';
  botonPulsado=false



  pulsar(){
    this.botonPulsado=!this.botonPulsado
  }
}
