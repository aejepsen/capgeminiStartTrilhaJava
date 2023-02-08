import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Allan Eric Jepsen";
  frase = "Somos filhos do Deus Altíssimo !!!";
  dataNascimento = "1964-12-26";
  urlImagem = "/assets/efesios_3_16.png";
  
  mostrarDataNascimento(){
    alert(`Data Nascimento de ${this.nome} é ${this.dataNascimento}`);
  }
}
