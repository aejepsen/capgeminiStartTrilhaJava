import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {
  descricao = '';

  constructor(private logger: LoggerService ) { }
  
  adicionarDescricao() {
    this.logger.mostrarDescricao(`Sr. ${this.descricao}`); 
  }

  listarMensagens() {
    this.logger.listarMensagens();
  }

}
