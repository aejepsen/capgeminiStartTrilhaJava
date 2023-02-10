import { Component, Input, OnInit, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnInit, OnChanges, OnDestroy {
  horario = new Date();
  timer: any = null!;

  @Input() texto = '';

  ngOnInit(): void {
    alert('Componente foi inicializado');
    this.timer = setInterval(() => {
      this.horario = new Date();
    }, 1000);

  }

  ngOnChanges(changes: SimpleChanges): void {
    alert('Componente foi alterado');
  }

  ngOnDestroy(): void {
    alert('Componente foi destruído');
    clearInterval(this.timer);
  }

}
