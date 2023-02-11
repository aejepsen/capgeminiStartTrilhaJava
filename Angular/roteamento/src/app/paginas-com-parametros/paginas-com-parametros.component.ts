import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginas-com-parametros',
  templateUrl: './paginas-com-parametros.component.html',
  styleUrls: ['./paginas-com-parametros.component.css']
})
export class PaginasComParametrosComponent implements OnInit {
  id: number | null = null;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));

  });
}

}
