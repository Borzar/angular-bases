import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CharacterProps} from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: CharacterProps[] = [{
    // valor por defecto
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public myEventId = new EventEmitter<string>()

  onDeleteCharacter(id?: string): void {
    if (!id) return
    this.myEventId.emit(id)
  }

}
 
