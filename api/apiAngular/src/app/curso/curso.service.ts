import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
}
