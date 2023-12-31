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
    },
    {
      nombre: 'Spider',
      ingredientes: ['Shrimp mayo', 'Green leaf', 'Cucumber', 'Carrot', 'Soft shell crab tempure', 'Crunchy', 'Eel sauce']
    },
    {
      nombre: 'Crunchy',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Shrimp tempra', 'Eel sauce', 'Crunchy']
    },
    {
      nombre: 'Real crab california',
      ingredientes: ['Avocado', 'Crab mayo']
    },
    {
      nombre: 'Shrimp avocado',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Shrimp', 'Avocado', 'Yuzu cream sauce']
    },
    {
      nombre: 'Philadelphia',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Cream cheese', 'Salmon']
    },
    {
      nombre: 'Spicy tuna',
      ingredientes: ['Cucumber', 'Spicy tuna']
    },
    {
      nombre: 'Caterpillar',
      ingredientes: ['Cucumber', 'Eel', 'Avocado', 'Sesame', 'Eel sauce']
    },
    {
      nombre: 'Salmon golden crunchy',
      ingredientes: ['Cucumber', 'Spicy salmon', 'Golden crunchy', 'Eel sauce', 'Spicy sauce']
    },
    {
      nombre: 'Red dragon',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Tuna', 'Spicy sauce', 'Cruncy']
    },
    {
      nombre: 'Tiger',
      ingredientes: ['Avocado', 'Shrip mayo', 'Shrimp', 'Spicy sauce', 'Eel sauce', 'Jalapeño']
    },
    {
      nombre: 'Spicy popcorn shrimp',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Popcorn Shrimp', 'Spicy sauce', 'Masago', 'Green onion']
    },
    {
      nombre: 'Kura',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Seared salmon', 'Salt', 'Cut lemon']
    },
    {
      nombre: 'Rainbow',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Tuna', 'Red Snapper', 'Shrimp', 'Avocado', 'Yellowtail', 'Salmon']
    },
    {
      nombre: 'Tekka maki',
      ingredientes: ['Tuna']
    },
    {
      nombre: 'Kappa maki',
      ingredientes: ['Cucumber']
    },
    {
      nombre: 'Salmon skin',
      ingredientes: ['Green leaf', 'Cucumber', 'Carrot', 'Salmon skin', 'Bonito flakes']
    },
    {
      nombre: 'Texan',
      ingredientes: ['Avocado', 'Spicy tuna', 'Cream cheese', 'Tuna', 'Fried onion', 'Yuzu cream sauce', 'Spicy sauce']
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

    this.ingredientesSeleccionados = []; //Reinicia los valores de  los ingredientes
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
      // Comprueba si los ingredientes seleccionados son exactamente los mismos que los ingredientes del rollo aleatorio
      const ingredientesRolloAleatorio = this.rolloAleatorio.ingredientes;
      const ingredientesSeleccionados = this.ingredientesSeleccionados;

      if (ingredientesSeleccionados.length === ingredientesRolloAleatorio.length && ingredientesSeleccionados.every(ingrediente => ingredientesRolloAleatorio.includes(ingrediente))) {
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
