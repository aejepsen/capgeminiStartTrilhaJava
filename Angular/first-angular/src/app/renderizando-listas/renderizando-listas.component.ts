import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {
      id: 1,
      nome: "Iphone 10",
      descricao: "128 gb",
      esgotado: false, 
    },
    {
      id: 2,
      nome: "Samsung S10",
      descricao: "128 gb",
      esgotado: false,
    },
    {
      id: 3,
      nome: "Motorola G8",
      descricao: "128 gb",
      esgotado: true,
    }
  ]

}
