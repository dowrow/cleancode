import { Component, OnInit, Input } from '@angular/core';
import { Animal } from "app/granja/animal";
import { Perro } from "app/granja/perro";
import { Gato } from "app/granja/gato";
import { Vaca } from "app/granja/vaca";

@Component({
  selector: 'granja',
  templateUrl: './granja.component.html'
})
export class GranjaComponent {

  animales: Array<Animal> = [];
  
  constructor() { 
    this.animales.push(new Perro());
    this.animales.push(new Gato());
    this.animales.push(new Vaca());  
    this.animales.push(new Perro());
    this.animales.push(new Gato());
    this.animales.push(new Vaca());  
    this.animales.push(new Perro());
    this.animales.push(new Gato());
    this.animales.push(new Vaca());  
    this.animales.push(new Perro());
    this.animales.push(new Gato());
  }

  getAnimalConSonidoMasCorto() {
    let animalesOrdenados = this.animales.sort(this.compararLongitudDeSonido);
    if (animalesOrdenados.length > 0) {
      return animalesOrdenados[0];
    }
    return null;
  }

  compararLongitudDeSonido(primerAnimal: Animal, segundoAnimal: Animal) {
    return primerAnimal.getSonido().length - segundoAnimal.getSonido().length;
  }

  getSonidosInvertidosOrdenados() {
    let animalesOrdenados = this.animales.sort(this.compararLongitudDeSonido); 
    return animalesOrdenados.map(animal=> this.invertirSonido(animal.getSonido()));
  }

  invertirSonido(sonido: string) {
    return sonido.split('').reverse().join('');
  }
  
}
