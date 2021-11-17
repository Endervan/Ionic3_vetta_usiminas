import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import {ValidarCamposService} from "../../../../services/validar-campos.service";

@Component({
  selector: 'app-input-text',
  template: `
    <div [formGroup]="formGroup">
      <mat-form-field class="full_widthPersonalite">
        <input matInput
               [placeholder]="titulo"
               [name]="controlName"
               [formControlName]="controlName">
        <mat-error *ngIf="validacao.hasErrorValidate(formControl,'required')">Obrigátorio</mat-error>
        <mat-error *ngIf="validacao.hasErrorValidate(formControl,'minlength')">
          Campo Deve ter Minimo {{validacao.lenghtValidar(formControl,'minlength')}} Caracteres
        </mat-error>
        <mat-error *ngIf="validacao.hasErrorValidate(formControl,'maxlength')">
          Campo Deve ter Máximo {{validacao.lenghtValidar(formControl,'maxlength')}} Caracteres
        </mat-error>
      </mat-form-field>
    </div>
  `
})
export class InputTextComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validacao: ValidarCamposService) {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
