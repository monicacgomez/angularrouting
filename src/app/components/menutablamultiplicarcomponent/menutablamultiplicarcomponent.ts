import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './menutablamultiplicarcomponent.css',
  templateUrl: './menutablamultiplicarcomponent.html',
})
export class MenuTablaMultiplicarComponent {
  public numeros!: Array<number>;

  constructor() {
    this.numeros = new Array<number>();
    for (let i = 1; i <= 5; i++){
      let random = Math.floor((Math.random() * 100) + 1);
      this.numeros.push(random);
    }
  }
}