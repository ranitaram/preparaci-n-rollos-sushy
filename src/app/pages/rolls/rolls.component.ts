import { Component, OnInit } from '@angular/core';


interface Rollo {
  nombre: string;
  ingredientes: string[];
}
@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.css']
})

export class RollsComponent implements OnInit {
  //rolloAleatorio: any;

    rolloAleatorio: Rollo | null;
  
  constructor(){
    this.rolloAleatorio = null;
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
  generarRolloAleatorio() {
    const rolloAleatorioIndex = Math.floor(Math.random() * this.rollos.length);
    this.rolloAleatorio = this.rollos[rolloAleatorioIndex]; // Asigna el objeto Rollo completo
    this.nombreRollo = this.rolloAleatorio.nombre;
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
    if (this.rolloAleatorio) {
      // Comprueba si los ingredientes seleccionados coinciden con los ingredientes del rollo aleatorio
      const ingredientesRolloAleatorio = this.rolloAleatorio.ingredientes;
      const ingredientesSeleccionados = this.ingredientesSeleccionados;

      const coinciden = ingredientesRolloAleatorio.every(ingrediente => ingredientesSeleccionados.includes(ingrediente));

      if (coinciden) {
        // El rollo está armado correctamente
        alert('El rollo está armado correctamente.');
      } else {
        // Los ingredientes seleccionados no coinciden con los ingredientes del rollo aleatorio
        alert('Los ingredientes seleccionados no coinciden con los ingredientes del rollo aleatorio.');
      }
    } else {
      // "rolloAleatorio" es "undefined"
      alert('No hay rollo aleatorio disponible.');
    }
  }
  
}
