import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.css']
})
export class RollsComponent implements OnInit {
  
  constructor(){
    this.ingredientesSeleccionados = [];
    this.nombreRollo = ''
  }
  

  
  ngOnInit() {
    this.generarRolloAleatorio();

    
  }

  //Los rollos disponibles
  private rollos = [
    {
      nombre: 'Golden Crunchy',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Golden crunchy', 'Eel sauce', 'Spicy sauce']
    },
    {
      nombre: 'Ikura Norimaki',
      ingredientes: ['Cucumber', 'Ikura']
    }
  ];

  //El nombre del rollo aleatorio
  nombreRollo: string 

  //Los ingredientes seleccionados por el usuario
  ingredientesSeleccionados: string[];

  //Funcion que genera un rollo aleatorio
  generarRolloAleatorio(){
    const rolloAleatorio = Math.floor(Math.random() * this.rollos.length);
    this.nombreRollo = this.rollos[rolloAleatorio].nombre;
  }

  //funcion que añade un ingrediente al rollo
  anadirIngrediente(event: MouseEvent){
    const ingredienteSeleccionado = (event.target as HTMLElement).textContent;
   if (ingredienteSeleccionado){
    this.ingredientesSeleccionados.push(ingredienteSeleccionado);
   }
  }

  // Función que valida el rollo
  validarRollo() {
    // Aquí debes implementar la lógica de validación del rollo
    // Puedes comparar los ingredientes seleccionados con los ingredientes del rollo aleatorio
    // y mostrar un mensaje al usuario indicando si el rollo está armado correctamente o no.
  }
}
