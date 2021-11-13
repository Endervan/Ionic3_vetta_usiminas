import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import {ValidarCamposService} from "../../../../services/validar-campos.service";

@Component({
  selector: 'app-input-number',
  template:`
    <div [formGroup]="formGroup">
        <mat-form-field class="full-width">
            <input matInput
                type="number"
                [min]="minimo"
                [max]="maximo"
                [step]="step"
                [placeholder]="titulo"
                [name]="controlName"
                [formControlName]="controlName">
            <mat-error *ngIf="validacao.hasError(formControl,'required')">Obrigátorio</mat-error>
            <mat-error *ngIf="validacao.hasError(formControl,'min')">
            Precisa ter minimo valor {{validacao.lenghtValidar(formControl,'min')}}
            </mat-error>
            <mat-error *ngIf="validacao.hasError(formControl,'max')">
            Campo valor maximo a {{validacao.lenghtValidar(formControl,'max')}}
            </mat-error>
        </mat-form-field>
    </div>
    `
})
export class InputNumberComponent {
  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() minimo = 0;
  @Input() maximo = 10;
  @Input() step = 1;

  constructor(public validacao: ValidarCamposService) {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
