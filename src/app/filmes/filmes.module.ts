import { NgModule } from '@angular/core';
import { MaterialRouting } from './material-routing.module';
import { VisualizarFilmesComponent } from './visualizar-filmes/visualizar-filmes.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { GaleriaDeFilmesComponent } from './galeria-de-filmes/galeria-de-filmes.component';
import { StarModulesModule } from '../share/star/star-modules.module';
import { CommonModule } from '@angular/common';
import { CamposModule } from '../share/campos/campos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
     VisualizarFilmesComponent,
     CadastroFilmesComponent,
     GaleriaDeFilmesComponent
  ],
  imports: [
    CommonModule,
    MaterialRouting,
    StarModulesModule,
    CamposModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    VisualizarFilmesComponent,
    CadastroFilmesComponent,
    GaleriaDeFilmesComponent

 ],

})
export class FilmesModule { }
