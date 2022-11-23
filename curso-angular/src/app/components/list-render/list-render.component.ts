import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [{name: 'Bob', type: 'Cat', age: 1}, {name: 'Toby', type: 'Dog',  age: 2},
  {name: 'Frida', type: 'Dog',  age: 5},
  {name: 'Tino', type: 'Horse',  age: 15}
  ];


  animalDetails = '';

  showAge(animal : Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`;
  }
}
