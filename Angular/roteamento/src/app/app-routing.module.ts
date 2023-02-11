import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginasComParametrosComponent } from './paginas-com-parametros/paginas-com-parametros.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';

const routes: Routes = [
  { path: "primeira-pagina",  component: PrimeiraPaginaComponent },
  { path: "segunda-pagina",  component: SegundaPaginaComponent },
  { path: "", redirectTo: "primeira-pagina", pathMatch: "full" },
  { path: "paginas-com-parametros/:id", component: PaginasComParametrosComponent },
  { path: "**", component: PaginaNaoEncontradaComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
