import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  public name:string = 'ironman'
  public age:number = 45
    
  get capitalizedName():string {
    return this.name.toUpperCase() 
  }

  getHeroesDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHeroeName():void {
    this.name = 'spiderman' 
  }

  changeHeroeAge():void {
    this.age = 31 
  }

}

