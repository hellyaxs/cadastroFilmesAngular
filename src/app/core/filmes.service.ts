import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filmes } from '../share/models/filmes';
import { ParamsConfig } from '../share/models/params-config';
import { ConfigParamsService } from './config-params.service';

 const baseD= 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  constructor(private http:HttpClient,
              private configParams:ConfigParamsService) { }

   salvar(filmes: Filmes): Observable<Filmes>{
     return this.http.post<Filmes>(baseD,filmes);
   }
   
   editar(filme:Filmes):Observable<Filmes>{
     return this.http.put<Filmes>(baseD + filme.id, filme)
   }

   listarfilmes(config:ParamsConfig): Observable<Filmes[]>{
    const configParams = this.configParams.ConfiguraParams(config);
    return this.http.get<Filmes[]>(baseD,{params: configParams});
   }

   vusualizarFilmes(id:number):Observable<Filmes>{
     return this.http.get<Filmes>(baseD + id);
   }

   excluir(id:number):Observable<void>{
      return this.http.delete<void>(baseD + id);
   }
}
