import { Component, EventEmitter, Output } from '@angular/core';
import {CharacterProps} from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output()
  public onNewCharacter: EventEmitter<CharacterProps> = new EventEmitter()

  public character: CharacterProps = {
    name: '',
    power: 0
  }

  emitCharacter():void {
    console.log(this.character) 
    if ( this.character.name.length === 0 ) return; 

    this.onNewCharacter.emit({...this.character});
    
    this.character.name = '' 
    this.character.power = 0 
  }
}

