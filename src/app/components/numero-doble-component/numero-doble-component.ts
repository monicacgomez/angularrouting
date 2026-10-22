import { Component, OnInit } from '@angular/core';

//Estas dos librerías para los parámetros
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit {
  public doble!: number;
  public numero!: number;

  // En el constructor, recibimos el objeto inyectado de las rutas
  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.doble = 0;
  }

  redirect(num: number): void {
    this._router.navigate(["/doble", num]);
  }

  goToHome(): void {
    this._router.navigate(["/"]);
  }

  ngOnInit(): void {
    
    //Aquí nos vamos a suscribir a la recuperación del parámetro
    this._activeRoute.params.subscribe((parametros: Params) => {
      
      //Dentro de params, es donde recibimos los parámetros por su :name
      // La sintaxis es parametros['parametername'] - el parametro es opcional, por lo que preguntamos
    if (parametros ['numero'] !=null){
      // Params siempre es string
      this.numero = parseInt(parametros['numero']);
      this.doble = this.numero *2;
    } 
  })
}
}