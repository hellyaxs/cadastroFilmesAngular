import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { VisualizarFilmesComponent } from './visualizar-filmes/visualizar-filmes.component';
import { GaleriaDeFilmesComponent } from './galeria-de-filmes/galeria-de-filmes.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';

const routes:Routes = [
     { path:'', redirectTo:'filmes'},
      {
        path: '',
        component: GaleriaDeFilmesComponent
      },
      {
        path: 'cadastro',
        children: [
          {
            path: '',
            component: CadastroFilmesComponent
          },
          {
            path: ':id',
            component: CadastroFilmesComponent
          }
        ]
      },
      {
        path: ':id',
        component: VisualizarFilmesComponent,
        pathMatch: 'full'
      }


]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class MaterialRouting{}
