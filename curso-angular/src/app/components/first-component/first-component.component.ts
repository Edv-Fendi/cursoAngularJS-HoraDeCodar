import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
name: string = "Edvaldo";
age: number = 22;
job = 'programador';
hobbies = ["Games", "Futebol", "Estudar"];
carro = {
  name: "BMW",
  year: 2022,
}
}
