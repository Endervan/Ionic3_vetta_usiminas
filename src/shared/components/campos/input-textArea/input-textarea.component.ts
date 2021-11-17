import {Component, Input} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {ValidarCamposService} from "../../../../services/validar-campos.service";

@Component({
  selector: 'app-input-textarea',
  template: `
    <div [formGroup]="formGroup">
      <mat-form-field class="full_widthPersonalite">
                <textarea matInput
                          [rows]="row"
                          [cols]="cols"
                          [placeholder]="titulo"
                          [name]="controlName"
                          [formControlName]="controlName">
                </textarea>
        <mat-error *ngIf="validacao.hasErrorValidate(formControl,'required')">Obrigátorio</mat-error>
        <mat-error *ngIf="validacao.hasErrorValidate(formControl,'minlength')">
          Campo Deve ter Minimo {{validacao.lenghtValidar(formControl, 'minlength')}} caracteres
        </mat-error>
        <mat-error *ngIf="validacao.hasErrorValidate(formControl,'maxlength')">
          Campo Deve ter Maximo {{validacao.lenghtValidar(formControl, 'maxlength')}} caracteres
        </mat-error>
      </mat-form-field>
    </div>
  `,
  styles: ['.mat-form-field-infix {padding: 5px;line-height: 8px;}.mat-form-field-infix{padding: 0 !important;}.mat-form-field{min-height: 52px}']
})
export class InputTextareaComponent {

  @Input() titulo: string;
  @Input() row: string;
  @Input() cols: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validacao: ValidarCamposService) {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
