import { Injectable } from "@angular/core";
import { PersonajeProps } from "../interfaces/dbz.interfaces";

@Injectable()
export class  DbzService {

    private _personajes: PersonajeProps[] = [
        {
        nombre: 'Goku',
        poder: 15000
        },
        {
        nombre: 'Vegeta',
        poder: 7500
        }
    ]

    get personajes(): PersonajeProps[] {
        return [...this._personajes]
    }

    agregarPersonajes(personaje: PersonajeProps) {
        this._personajes.push( personaje )
    }
  
}