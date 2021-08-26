import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidorCamposService } from '../validor-campos.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  @Input() formGroup!: FormGroup;
  @Input() ControlName!: string;
  @Input() titulo!:string;

  constructor(public validation:ValidorCamposService) { }

  get formControl():AbstractControl{
    return this.formGroup.controls[this.ControlName];  
  }

}
