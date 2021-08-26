import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmesService } from 'src/app/core/filmes.service';
import { ValidorCamposService } from 'src/app/share/campos/validor-campos.service';
import { Filmes } from 'src/app/share/models/filmes';

@Component({
  selector: 'app-galeria-de-filmes',
  templateUrl: './galeria-de-filmes.component.html',
  styleUrls: ['./galeria-de-filmes.component.css']
})
export class GaleriaDeFilmesComponent implements OnInit {

  LiFilmes!: Filmes[];
  paginas = 0;
  readonly limite = 4;
  generos!: Array<string>;
  filtroFilmes!:FormGroup;

  constructor(public listar:FilmesService,
              private fb:FormBuilder,
              public validation:ValidorCamposService) { }

  ngOnInit(): void {
  this.listarScrollFilmes();
   
  this.filtroFilmes = this.fb.group({
   texto:[''],
   genero:['']
  });
    this.generos =['ação','drama','suspense','terror','aventura'];

  }
  onScroll(){
    this.listarScrollFilmes();
  }

  listarScrollFilmes(){
    this.listar.listarfilmes(this.paginas,this.limite).subscribe((dados:Filmes[])=>this.LiFilmes.push(...dados))
  }

}
