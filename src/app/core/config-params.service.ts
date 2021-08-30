import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParamsConfig } from '../share/models/params-config';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  ConfiguraParams(config:ParamsConfig): HttpParams{
    
  let parametros = new HttpParams();

  if(config.paginas){
     parametros = parametros.set('_page',config.paginas.toString());
  }
   if(config.limite){
     parametros = parametros.set('_limit',config.limite.toString());
   }
    if(config.pesquisaT){
      parametros = parametros.set('q',config.pesquisaT);
    }
   if(config.campoAdd){
    parametros = parametros.set(config.campoAdd.tipo,config.campoAdd.valor.toString());
   }
    parametros = parametros.set('_sort','id');
    parametros = parametros.set('_order','desc');

    return parametros;
  }
  
}
