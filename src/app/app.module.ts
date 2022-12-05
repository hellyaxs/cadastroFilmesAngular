import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './share/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE_FACTORY } from '@angular/material/core';
import { CamposModule } from './share/campos/campos.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './share/modal/modal.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StarModulesModule } from './share/star/star-modules.module';
import { DemoMaterialModule } from './filmes/material.module';
import { FilmesModule } from './filmes/filmes.module';
import { GaleriaDeFilmesComponent } from './filmes/galeria-de-filmes/galeria-de-filmes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ModalComponent,
    


  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InfiniteScrollModule,
    StarModulesModule,
    DemoMaterialModule,
    FilmesModule,

    CamposModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  entryComponents:[ModalComponent],
  providers: [{provide: MAT_DATE_LOCALE_FACTORY , useValue:'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
