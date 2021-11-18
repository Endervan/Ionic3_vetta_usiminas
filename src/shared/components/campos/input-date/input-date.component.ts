import {Component, Input} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";
import {ValidarCamposService} from "../../../../services/validar-campos.service";

@Component({
  selector: 'app-input-date',
  template: `
    <div [formGroup]="formGroup">
      <mat-form-field class="full_widthPersonalite">
        <input matInput
               [matDatepicker]="picker"
               [placeholder]="titulo"
               [name]="controlName"
               [formControlName]="controlName"
               readonly
               (click)="picker.open()"/>
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
        <mat-error *ngIf="validacao.hasErrorValidate(formControl,'required')">Obrigátorio</mat-error>
      </mat-form-field>
    </div>`
})
export class InputDateComponent {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 12);

  @Input() titulo?: string;
  @Input() formGroup?: FormGroup;
  @Input() controlName?: string;
  @Input() startView?: 'month' | 'year'


  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent domingo and sabado from being selected.
    return day !== 0 && day !== 6;
  }


  constructor(public validacao: ValidarCamposService) {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
