import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';



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


  botonDeshacer: HTMLElement | null = null;

  elementos: ElementRef<HTMLElement>;

  rolloAleatorio: Rollo | null;

     //Los ingredientes seleccionados por el usuario
  ingredientesSeleccionados: string[];
  
  
  constructor(elementos: ElementRef<HTMLElement>){
   
    this.rolloAleatorio = null;
    this.ingredientesSeleccionados = [];
    this.nombreRollo = '';
    this.elementos = elementos;
   
  }

  deshacerIngrediente: () => void = () => {
    // Elimina el último ingrediente del arreglo de ingredientes seleccionados
    if (this.ingredientesSeleccionados.length > 0) {
      this.ingredientesSeleccionados.pop();
    }
  };
 
  ngOnInit() {
   
    this.generarRolloAleatorio();    
  }
  
 
  
  //Los rollos disponibles
  private rollos = [
    {
      nombre: 'Golden Crunchy Roll',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Golden crunchy', 'Eel sauce', 'Spicy sauce']
    },
    {
      nombre: 'Ikura Norimaki',
      ingredientes: ['Cucumber', 'Ikura']
    },
    {
      nombre: 'Spider Roll',
      ingredientes: ['Shrimp mayo', 'Green leaf', 'Cucumber', 'Carrot', 'Soft shell crab tempure', 'Crunchy', 'Eel sauce']
    },
    {
      nombre: 'Crunchy Roll',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Shrimp tempra', 'Eel sauce', 'Crunchy']
    },
    {
      nombre: 'Real Crab California Roll',
      ingredientes: ['Avocado', 'Crab mayo']
    },
    {
      nombre: 'Shrimp Avocado Roll',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Shrimp', 'Avocado', 'Yuzu cream sauce']
    },
    {
      nombre: 'Philadelphia Roll',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Cream cheese', 'Salmon']
    },
    {
      nombre: 'Spicy Tuna Roll',
      ingredientes: ['Cucumber', 'Spicy tuna']
    },
    {
      nombre: 'Caterpillar Roll',
      ingredientes: ['Cucumber', 'Eel', 'Avocado', 'Sesame', 'Eel sauce']
    },
    {
      nombre: 'Salmon Golden Crunchy Roll',
      ingredientes: ['Cucumber', 'Spicy salmon', 'Golden crunchy', 'Eel sauce', 'Spicy sauce']
    },
    {
      nombre: 'Red Dragon Roll',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Tuna', 'Spicy sauce', 'Cruncy']
    },
    {
      nombre: 'Tiger Roll',
      ingredientes: ['Avocado', 'Shrip mayo', 'Shrimp', 'Spicy sauce', 'Eel sauce', 'Jalapeño']
    },
    {
      nombre: 'Spicy Popcorn Shrimp Roll',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Popcorn Shrimp', 'Spicy sauce', 'Masago', 'Green onion']
    },
    {
      nombre: 'Spicy Garlic Popcorn Shrimp Roll',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Popcorn Shrimp', 'Shichimi Garlic', 'Masago', 'Green onion']
    },
    {
      nombre: 'Kura Roll',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Seared salmon', 'Salt', 'Cut lemon']
    },
    {
      nombre: 'Rainbow Roll',
      ingredientes: ['Avocado', 'Shrimp mayo', 'Tuna', 'Red Snapper', 'Shrimp', 'Avocado', 'Yellowtail', 'Salmon']
    },
    {
      nombre: 'Tekka Maki',
      ingredientes: ['Tuna']
    },
    {
      nombre: 'Kappa Maki',
      ingredientes: ['Cucumber']
    },
    {
      nombre: 'Salmon Skin Roll',
      ingredientes: ['Green leaf', 'Cucumber', 'Carrot', 'Salmon skin', 'Bonito flakes']
    },
    {
      nombre: 'Texan Roll',
      ingredientes: ['Avocado', 'Spicy tuna', 'Cream cheese', 'Tuna', 'Fried onion', 'Yuzu cream sauce', 'Spicy sauce']
    }
  ];
  
  formatNombreRollo(rollo: string | undefined ): string {
    return rollo ? rollo.replace(/\s/g, '') : '';
  }
  //El nombre del rollo aleatorio
  nombreRollo: string 

  

  //Funcion que genera un rollo aleatorio
  generarRolloAleatorio() {
    const rolloAleatorioIndex = Math.floor(Math.random() * this.rollos.length);
    this.rolloAleatorio = this.rollos[rolloAleatorioIndex]; // Asigna el objeto Rollo completo
    this.nombreRollo = this.rolloAleatorio.nombre;
     // Actualiza la propiedad src de la etiqueta img
    
     //console.log(this.rolloAleatorio.nombre)

    this.ingredientesSeleccionados = []; //Reinicia los valores de  los ingredientes
}


  //funcion que añade un ingrediente al rollo
  anadirIngrediente(event: MouseEvent){
    const ingredienteSeleccionado = (event.target as HTMLElement).textContent;
   if (ingredienteSeleccionado){
    this.ingredientesSeleccionados.push(ingredienteSeleccionado);
   
     // Si el arreglo de ingredientes seleccionados tiene más de un elemento, agrega un botón de deshacer
     if (this.ingredientesSeleccionados.length > 1){
      this.botonDeshacer = document.createElement('button');
     // this.botonDeshacer.textContent = 'Deshacer';
      this.botonDeshacer.addEventListener('click', this.deshacerIngrediente);
      // Convertir el valor de la propiedad 'elementos' a un objeto 'HTMLElement'
      const elemento = this.elementos.nativeElement;
      elemento.appendChild(this.botonDeshacer);
    }
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
        Swal.fire({
          title: '¡Éxito!',
          text: 'El rollo está armado correctamente.',
          icon: 'success',
        });
      } else {
        // Los ingredientes seleccionados no coinciden con los ingredientes del rollo aleatorio
        Swal.fire({
          title: '¡Incorrecto!',
          text: 'Los ingredientes no son correctos',
          icon: 'error',
          
        });
      }
    } else {
      // "rolloAleatorio" es "undefined"
      Swal.fire({
        title: '¡Advertencia!',
        text: 'No hay rollo aleatorio disponible.',
        icon: 'warning',
      });
    }
  }

  
}
