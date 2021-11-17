import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {CalculoMetas} from "../../shared/models/calculoMetas";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";


@IonicPage()
@Component({
  selector: 'page-calculo-de-metas',
  templateUrl: 'calculo-de-metas.html',
})
export class CalculoDeMetasPage {

  cadastroForm: FormGroup;


  info1: string = 'Informações gerais';
  info2: string = 'Seleção de clientes';
  info3: string = 'Cálculo de meta';
  info4: string = 'Cronograma';

  columnsMelhorias = ['melhoria', 'nota', 'comparacao'];
  dataSourceMelhoria = new MatTableDataSource(ELEMENT_DATA);

  columnsGerais = ['nome', 'ultimaParticipacao', 'nota', 'comparacao'];

  dataSourceAutomitivo = new MatTableDataSource(ELEMENT_DATA1);
  @ViewChild('sortAutomotivo') sortAutomotivo: MatSort;
  @ViewChild(MatPaginator) paginatorAutomotivo: MatPaginator;


  dataSourceAutopartes = new MatTableDataSource(ELEMENT_DATA2);
  @ViewChild(MatPaginator) paginatorAutopartes: MatPaginator;
  @ViewChild('sortAutopartes') sortAutopartes: MatSort;

  panelOpenState: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
  }

  // garante a inicializacao do paginacao antes de view iniciar
  ngAfterViewInit() {
    this.dataSourceAutomitivo.paginator = this.paginatorAutomotivo;
    this.dataSourceAutomitivo.sort = this.sortAutomotivo;

    this.dataSourceAutopartes.paginator = this.paginatorAutopartes;
    this.dataSourceAutopartes.sort = this.sortAutopartes;
  }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      descricao: ['',[Validators.minLength(10)]],
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
  {nome: 'Honda', ultimaParticipacao: 2018, nota: 71.9, comparacao: 11.9},

];

// parte local teste
const ELEMENT_DATA2: CalculoMetas[] = [
  {nome: 'FIAT', ultimaParticipacao: 2050, nota: 91.9, comparacao: -1.7},
  {nome: 'Toyota', ultimaParticipacao: 2021, nota: 93.9, comparacao: 'Exclusivo'},
  {nome: 'Honda', ultimaParticipacao: 2021, nota: 71.9, comparacao: 11.9},

];
