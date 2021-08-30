import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilmesService } from 'src/app/core/filmes.service';
import { debounceTime } from 'rxjs/operators'
import { ValidorCamposService } from 'src/app/share/campos/validor-campos.service';
import { Filmes } from 'src/app/share/models/filmes';
import { ParamsConfig } from 'src/app/share/models/params-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galeria-de-filmes',
  templateUrl: './galeria-de-filmes.component.html',
  styleUrls: ['./galeria-de-filmes.component.css']
})
export class GaleriaDeFilmesComponent implements OnInit {
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';

  LiFilmes: Filmes[]=[];
  configPar: ParamsConfig = {
    paginas:0,
    limite: 4,
  }
  generos!: Array<string>;
  filtroFilmes!:FormGroup;
  

  constructor(public listar:FilmesService,
              private fb:FormBuilder,
              public validation:ValidorCamposService,
              public router: Router) { }

  ngOnInit(): void {
  this.listarScrollFilmes();
   
  this.filtroFilmes = this.fb.group({
   texto:[''],
   genero:['']
  });
    this.generos =['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];

    this.filtroFilmes.get('texto')?.valueChanges.pipe(debounceTime(400)).subscribe((val:string)=>{
    this.configPar.pesquisaT = val;
    this.ResetList();
    })

    this.filtroFilmes.get('genero')?.valueChanges.subscribe((val:string)=>{
      this.configPar.campoAdd = {tipo:'genero',valor:val};
      this.ResetList();
    })

  }
  onScroll(){
    this.listarScrollFilmes();
  }

  listarScrollFilmes(){
    this.configPar.paginas++;
    this.listar.listarfilmes(this.configPar).subscribe((dados:Filmes[]) =>this.LiFilmes.push(...dados))
  }

 private ResetList():void{
    this.configPar.paginas = 0;
    this.LiFilmes = [];
    this.listarScrollFilmes();

  }
  public visualizarF(id:number):void{
    this.router.navigateByUrl('/filmes/' + id);
  }

}
