import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidorCamposService {

  constructor() { }
   
  hasErrorValidation(controle:AbstractControl,ErrorName:string): boolean{
    if((controle.dirty || controle.touched) && this.hasError(controle,ErrorName)){
      return true;
    }
    return false;
  }

  hasError(controle:AbstractControl,ErrorName:string):boolean{
    return controle.hasError(ErrorName)
  }

  
}
