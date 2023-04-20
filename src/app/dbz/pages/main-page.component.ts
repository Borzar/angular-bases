import {Component} from "@angular/core";
import {CharacterProps} from "../interfaces/character.interface";
import {DbzService} from "../services/dbz.service";

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor( private dbzService: DbzService ){
  }

  get getCharacters(): CharacterProps[] {
    return [...this.dbzService.characters]
  } 

  onDeleteCharacter(id: string):void {
    this.dbzService.deleCharacterById(id)
  }

  onNewCharacter(character: CharacterProps):void {
    this.dbzService.addCharacter(character)
  }

}
