import { FilmesModule } from './filmes/filmes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { GaleriaDeFilmesComponent } from './filmes/galeria-de-filmes/galeria-de-filmes.component';
import { VisualizarFilmesComponent } from './filmes/visualizar-filmes/visualizar-filmes.component';


const routes: Routes = [
  {
   path: 'filmes',
     loadChildren: () => import("./filmes/filmes.module").then(m => m.FilmesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule,

  ]
})
export class AppRoutingModule { }
