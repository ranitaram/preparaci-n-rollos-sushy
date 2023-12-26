import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.css']
})
export class RollsComponent implements OnInit {
  
  constructor(){
    this.nombreRollo = ''
  }
  
  
  ngOnInit() {
    this.generarRolloAleatorio()
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

  //Funcion que genera un rollo aleatorio
  generarRolloAleatorio(){
    const rolloAleatorio = Math.floor(Math.random() * this.rollos.length);
    this.nombreRollo = this.rollos[rolloAleatorio].nombre;
  }

}
