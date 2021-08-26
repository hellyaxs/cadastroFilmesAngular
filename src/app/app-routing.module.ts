import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { GaleriaDeFilmesComponent } from './filmes/galeria-de-filmes/galeria-de-filmes.component';


const routes: Routes = [
  {
    path: '', redirectTo:'filmes/galeria' , pathMatch:'full' 
  },
  {
    path:'filmes/galeria', component: GaleriaDeFilmesComponent
  },{
     path:'filmes/cadastro', component: CadastroFilmesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule,

  ]
})
export class AppRoutingModule { }
