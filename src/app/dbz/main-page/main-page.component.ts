import { Component } from '@angular/core';
import { PersonajeProps } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
 
  nuevo: PersonajeProps = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor() {}

}
 