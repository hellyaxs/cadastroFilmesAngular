import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { GaleriaDeFilmesComponent } from './filmes/galeria-de-filmes/galeria-de-filmes.component';
import { VisualizarFilmesComponent } from './filmes/visualizar-filmes/visualizar-filmes.component';


const routes: Routes = [
  {
    path: '', redirectTo:'filmes' , pathMatch:'full' 
  },
  {
    path: 'filmes', children:[
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
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule,

  ]
})
export class AppRoutingModule { }
