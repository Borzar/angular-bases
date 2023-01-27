import { Component } from "@angular/core";
//Decorador
 @Component({
     selector: 'app-contador',
     template: `
     <h1> {{ titulo }} </h1>
     <button (click)=" numero = numero + 1; " > +1 </button>
     <p>{{ numero }}</p>
     <button (click)=" numero = numero -1 " > -1 </button>
     `
 })
 
 export class ContadorComponent {

    titulo: string = 'bases';
    numero: number = 3;
  
    acumular( valor: number) {
      this.numero += valor
    }

 }