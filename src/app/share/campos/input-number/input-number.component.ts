import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidorCamposService } from '../validor-campos.service';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent{

  @Input() formGroup!: FormGroup;
  @Input() ControlName!: string;
  @Input() tituloPlacehouder!:string;
  @Input() minimo = 0;
  @Input() contador!:number;

  constructor(public validacao:ValidorCamposService) { }

  get oberDados():AbstractControl{
    return this.formGroup.controls[this.ControlName];
  }

}
