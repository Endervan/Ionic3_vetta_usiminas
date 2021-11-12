import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {CalculoMetas} from "../../shared/models/calculoMetas";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@IonicPage({
  name:'metas',
  segment:'metas'
})
@Component({
  selector: 'page-calculo-de-metas',
  templateUrl: 'calculo-de-metas.html',
})
export class CalculoDeMetasPage {
  info1: string = 'Informações gerais';
  info2: string = 'Seleção de clientes';
  info3: string = 'Cálculo de meta';
  info4: string = 'Cronograma';
  displayedColumns = ['melhoria', 'nota', 'comparacao'];
  displayedColumns1 = ['nome', 'ultimaParticipacao', 'nota', 'comparacao'];
  displayedColumns2 = ['nome', 'ultimaParticipacao', 'nota', 'comparacao'];
  dataSourceMelhoria = new MatTableDataSource(ELEMENT_DATA);
  dataSourceGeral = new MatTableDataSource(ELEMENT_DATA1);
  dataSourceGeral2 = new MatTableDataSource(ELEMENT_DATA2);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  elaboracao: FormGroup;
  panelOpenState: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
  }

  // garante a inicializacao do paginacao antes de view iniciar
  ngAfterViewInit() {
    this.dataSourceGeral.paginator = this.paginator;
    this.dataSourceGeral.sort = this.sort;
    this.dataSourceGeral2.paginator = this.paginator;
    this.dataSourceGeral2.sort = this.sort;
  }

  ngOnInit(): void {
    this.elaboracao = this.fb.group({
      date: [''],
    });
  }


}

// parte local teste
const ELEMENT_DATA: CalculoMetas[] = [
  {melhoria: 'Média geral obtida em 2021', nota: 91.9, comparacao: 17.8},
  {melhoria: 'Média geral projetada para 2022', nota: 86.9, comparacao: 21.6},
  {melhoria: 'Meta proposta para 2022', nota: 93.9, comparacao: 21.8},

];

// parte local teste
const ELEMENT_DATA1: CalculoMetas[] = [
  {nome: 'FIAT', ultimaParticipacao: 2021, nota: 91.9, comparacao: -1.7},
  {nome: 'Toyota', ultimaParticipacao: 2021, nota: 93.9, comparacao: 'Exclusivo'},
  {nome: 'Honda', ultimaParticipacao: 2021, nota: 71.9, comparacao: 11.9},

];

// parte local teste
const ELEMENT_DATA2: CalculoMetas[] = [
  {nome: 'FIAT', ultimaParticipacao: 2021, nota: 91.9, comparacao: -1.7},
  {nome: 'Toyota', ultimaParticipacao: 2021, nota: 93.9, comparacao: 'Exclusivo'},
  {nome: 'Honda', ultimaParticipacao: 2021, nota: 71.9, comparacao: 11.9},

];
