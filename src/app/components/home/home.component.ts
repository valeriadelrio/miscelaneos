import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h2 style="color:blue">Uso del NgStyle</h2>
  <app-ng-style> </app-ng-style>
  <hr><br>
  <h2 style="color:blue">Uso de css a diferentes componentes</h2>
  <app-css></app-css>

  <p>
    Hola mundo desde app.component
  </p>
  <hr><br>
  <h2 style="color:blue">Uso de NgClass</h2>
  <app-clases></app-clases>
  <hr><br>

  <h2  style="color:blue"> Directivas personalizadas</h2>
  <p [appResaltado]="'red'">
    Hola mundo
  </p>
  <hr><br>
  <h2  style="color:blue"> Directiva ngSwitch</h2>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
