import {Component, Input} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";
import {ValidarCamposService} from "../../../../services/validar-campos.service";

@Component({
  selector: 'app-input-date',
  template: `<div [formGroup]="formGroup">
    <mat-form-field class="full_widthPersonalite">
      <input matInput
             [matDatepicker]="picker"
             [placeholder]="titulo"
             [name]="controlName"
             [formControlName]="controlName"
             readonly
             (click)="picker.open()"/>
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker  #picker ></mat-datepicker>
      <mat-error *ngIf="validacao.hasErrorValidate(formControl,'required')">Obrigátorio</mat-error>
    </mat-form-field>
  </div>`
})
export class InputDateComponent {

  @Input() titulo?: string;
  @Input() formGroup?: FormGroup;
  @Input() controlName?: string;
  // @Input() startView?: 'month' | 'year'


  constructor(public validacao: ValidarCamposService) {

  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
