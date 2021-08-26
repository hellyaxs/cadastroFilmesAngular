import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filmes } from '../share/models/filmes';

 const baseD= 'http://localhost:3000/filmes/';

@Injectable({
  providedIn: 'root'
})

export class FilmesService {

  constructor(private http:HttpClient) { }

   salvar(filmes: Filmes): Observable<Filmes>{
     return this.http.post<Filmes>(baseD,filmes);
   }

   listarfilmes(pagina:number, limite:number): Observable<Filmes[]>{

    let parametros = new HttpParams();

    parametros = parametros.set('_page',pagina.toString());
    parametros = parametros.set('_limit',limite.toString());
    return this.http.get<Filmes[]>(baseD);
   }
}
