import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonajeProps } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input()
  nuevo: PersonajeProps = {
    nombre: '',
    poder: 0
  }
  
  // Para emitir eventos del hijo al padre
  // @Output() onNuevoPersonaje: EventEmitter<PersonajeProps> = new EventEmitter()
  
  constructor( private dbzService: DbzService) {}


  agregar() {
    if ( this.nuevo.nombre.trim().length === 0){ return }
  
    // this.onNuevoPersonaje.emit( this.nuevo)
    this.dbzService.agregarPersonajes( this.nuevo )

    this.nuevo = { nombre: '', poder: 0}
    
    console.log(this.nuevo.nombre)
  }
}
