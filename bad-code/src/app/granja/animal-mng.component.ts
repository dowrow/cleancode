import { Component, OnInit, Input } from '@angular/core';
import { Animal } from "app/granja/animal";

@Component({
  selector: 'animal-mng',
  templateUrl: './animal-mng.component.html'
})
/* Componente que gestiona los animales de una granja */
export class AnimalMngCmp {

  animales = [];
  
  constructor() { 
    this.animales.push(new Animal('perro'));
    this.animales.push(new Animal('gato'));
    this.animales.push(new Animal('vaca'));  
    this.animales.push(new Animal('perro'));
    this.animales.push(new Animal('gato'));
    this.animales.push(new Animal('vaca'));  
    this.animales.push(new Animal('perro'));
    this.animales.push(new Animal('gato'));
    this.animales.push(new Animal('vaca'));  
    this.animales.push(new Animal('perro'));
    this.animales.push(new Animal('gato'));
  }

  
  // encuentra el animal con el sonido más corto
  o() {
    // Ordenamos los animales la longitud de sus cantos
    let o = this.animales.sort((x, j) => x.getSonido().length - j.getSonido().length);
    // devuelve el animal de menor longitud
    if (o.length > 0) {
      return o[0];
    }
    return null;
  }

  // jeje
  w() {
    // Ordenamos los animales la longitud de sus cantos
    let o = this.animales.sort((x, j) => x.getSonido().length - j.getSonido().length);
    // devuelve array con las cadenas dadas la vuelta
    return o.map(a => a.getSonido().split('').reverse().join(''));
  }

}
