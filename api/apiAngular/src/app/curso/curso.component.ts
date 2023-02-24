import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
 
  url = "http://localhost:8080/api/php/";

  vetor: Curso[] = [];

  constructor(
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
  }

  // cadastro
  cadastrar() {
    alert("Cadastro realizado com sucesso !!!");
  }

  // selecionar
  selecionar() {
    alert("Selecionado com sucesso !!!");
  }

  //alterar
  alterar() {
    alert("Alterado com sucesso !!!");  
  }

  //excluir
  excluir() {
    alert("Excluído com sucesso !!!");
  }

}
