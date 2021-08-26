import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidorCamposService } from '../validor-campos.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent {

  @Input() formGroup!: FormGroup;
  @Input() controlName!:string;
  @Input() titulo!:string;

  constructor(public validation: ValidorCamposService) { }

  get oberDados():AbstractControl {
    return this.formGroup.controls[this.controlName];
  }


 

}
