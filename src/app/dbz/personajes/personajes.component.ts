import { Component, Input } from '@angular/core';
import { PersonajeProps } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  // @Input()
  // personajes: PersonajeProps[] = []

  get personajes() {
    return this.dbzService.personajes
  }

  constructor( private dbzService: DbzService) {}
}
