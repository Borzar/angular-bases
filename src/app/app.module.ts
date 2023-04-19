import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {CounterModule} from './counter/counter.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  // importar componentes
  declarations: [
    AppComponent,
  ],
  // modulos de componentes
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
