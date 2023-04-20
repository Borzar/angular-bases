import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    // declarar nuestros componentes
    MainPageComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    // exportar nuestros componentes
    MainPageComponent
  ]
})
export class DbzModule { }
