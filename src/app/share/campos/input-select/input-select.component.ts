import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidorCamposService } from '../validor-campos.service';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent  {

  @Input() titulo!: string;
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() opcoes!: Array<string> ;


  constructor(public validation:ValidorCamposService) { }

  get ControlName(): AbstractControl{
    return this.formGroup.controls[this.controlName];
  }

}
