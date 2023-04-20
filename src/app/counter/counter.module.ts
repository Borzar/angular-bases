import {NgModule} from "@angular/core";
import {CounterComponent} from "./components/counter/counter.component";

@NgModule({
  declarations: [
    // declarar nuestros componentes
    CounterComponent
  ],
  exports: [
    // exportar nuestros componentes
    CounterComponent
  ]
})
export class CounterModule {}
