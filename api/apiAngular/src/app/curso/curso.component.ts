import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
 
  url = "http://localhost:8080/api/php/";

  vetor: Curso[] | undefined;

  curso = new Curso();

  constructor(
    private curso_servico: CursoService
  ) {
  }

  ngOnInit() {
    this.selecionar();
  }

  // cadastro
  cadastrar() {
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = '';
        this.curso.valorCurso = 0;

        this.selecionar();

    })
  }

  // selecionar
  selecionar() {
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }

  //alterar
  alterar() {
    alert("Alterado com sucesso !!!");  
  }

  //excluir
  remover() {
    this.curso_servico.removerCurso(this.curso).subscribe(
      (res: Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = '';
        this.curso.valorCurso = 0;
        
      })
  }

  selecionarCurso(curso: Curso) {
    this.curso.idCurso = curso.idCurso;
    this.curso.nomeCurso = curso.nomeCurso;
    this.curso.valorCurso = curso.valorCurso;
  }

}
