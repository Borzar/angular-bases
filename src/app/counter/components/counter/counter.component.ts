import {Component} from "@angular/core";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  public title:string = 'nuevo proyecto';
  public counter:number = 0;

  increaseBy( value:number ) {
    this.counter = this.counter + value 
  }

  reset() {
    this.counter = 10 
  }
}
