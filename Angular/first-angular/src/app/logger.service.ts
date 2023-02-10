import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  mensagens: string[] = [];

  logar(mensagem: string) {
    alert(mensagem);
    this.mensagens.push(mensagem);
  }

  mostrarDescricao(descricao: string) {
    alert(descricao);
    this.mensagens.push(descricao); 
  }

  listarMensagens() {
    alert(this.mensagens);
  }

}
