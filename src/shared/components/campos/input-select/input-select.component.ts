import {Component, Input} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {ValidarCamposService} from "../../../../services/validar-campos.service";

@Component({
  selector: 'app-input-select',
  template: `
    <div [formGroup]="formGroup">
      <mat-form-field class="full-width">
        <mat-select
          [multiple]="multiple"
          [placeholder]="titulo"
          [formControlName]="controlName">
          <mat-option *ngFor="let opcao of opcoes" [value]="opcao">
            {{opcao}}
          </mat-option>
        </mat-select>
        <mat-error *ngIf="validacao.hasError(formControl,'required')">Obrigátorio</mat-error>
      </mat-form-field>
    </div> `
})
export class InputSelectComponent {
  @Input() multiple: boolean
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() opcoes: Array<string>; // criando array componentizado

  constructor(public validacao: ValidarCamposService) {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
