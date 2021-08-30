import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './share/nav-bar/nav-bar.component';
import { GaleriaDeFilmesComponent } from './filmes/galeria-de-filmes/galeria-de-filmes.component';
import { CadastroFilmesComponent } from './filmes/cadastro-filmes/cadastro-filmes.component';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from './filmes/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE_FACTORY } from '@angular/material/core';
import { CamposModule } from './share/campos/campos.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './share/modal/modal.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StarModulesModule } from './share/star/star-modules.module';
import { VisualizarFilmesComponent } from './filmes/visualizar-filmes/visualizar-filmes.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GaleriaDeFilmesComponent,
    CadastroFilmesComponent,
    ModalComponent,
    VisualizarFilmesComponent
    
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CamposModule,
    HttpClientModule,
    InfiniteScrollModule,
    StarModulesModule

  ],
  entryComponents:[ModalComponent],
  providers: [{provide: MAT_DATE_LOCALE_FACTORY , useValue:'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
