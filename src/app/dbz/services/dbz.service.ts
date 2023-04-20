import { Injectable } from "@angular/core";
import {CharacterProps} from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: CharacterProps[]= [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },{
    id: uuid(),
    name: 'goku',
    power: 9500
  },{
    id: uuid(),
    name: 'vegeta',
    power: 7501
  }] 

  addCharacter( character: CharacterProps ):void {
    const newCharacter: CharacterProps = { id: uuid(), ... character }
    this.characters.push(newCharacter)
  }
   
  deleCharacterById(id: string) {
    this.characters = this.characters.filter( character => character.id !== id )
  }
}
