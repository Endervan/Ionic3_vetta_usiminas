import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvaliacaoPage } from './avaliacao';
import {MaterialModule} from "../../shared/material/material.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    declarations: [
        AvaliacaoPage
    ],
    imports: [
        MaterialModule,
        IonicPageModule.forChild(AvaliacaoPage),
        SharedModule,
    ],
    exports: [
        AvaliacaoPage
    ]
})
export class AvaliacaoPageModule {}
