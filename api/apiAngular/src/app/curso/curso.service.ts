import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, map, Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = "http://localhost:8080/api/php/";

  vetor: Curso[] = [];

  constructor(
    private http: HttpClient
  ) { }

  obterCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url + "listar").pipe(
      map((res) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
    );
  }

  cadastrarCurso(curso: Curso): Observable<Curso[]> {
    return this.http.post<Curso[]>(this.url + "cadastrar", curso).pipe(
      map((res) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
    );
  }

  removerCurso(curso: Curso): Observable<Curso[]> {
    const params = new HttpParams().set('idCurso', curso.idCurso.toString());
    return this.http.delete<Curso[]>(this.url + "excluir", { params: params }).pipe(
      map((_res) => {
        const filtro = this.vetor.filter((item) => item.idCurso !== curso.idCurso);
        this.vetor = filtro;
        return this.vetor;
      })
    );
  }

  atualizarCurso(curso: Curso): Observable<Curso[]> {
    return this.http.put<Curso[]>(this.url + "alterar", {cursos: curso})
    .pipe(map((_res) => {
        const cursoAlterado = this.vetor.find((item) => 
          {return +item['idCurso'] === +['idCurso'];
      });

      if (cursoAlterado) {
        cursoAlterado['nomeCurso'] = curso['nomeCurso'];
        cursoAlterado['valorCurso'] = curso['valorCurso'];
      }
      return this.vetor;
  }));
}
}
