import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  public heroNames:string[] = ['spiderman', 'batman', 'superman', 'hulk', 'thor']
  public deleteHero?:string = ''

  removeHero(): void {
    this.deleteHero = this.heroNames.pop()
  }
  
}
