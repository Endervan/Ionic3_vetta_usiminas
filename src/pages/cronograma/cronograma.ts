import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {CalculoMetas} from "../../shared/models/calculoMetas";

@IonicPage()
@Component({
  selector: 'page-cronograma',
  templateUrl: 'cronograma.html',
})
export class CronogramaPage {
  cronograma: FormGroup;
  cronogramaSelect: Array<string>;

  columnsGerais = ['nome', 'setor', 'ultimaNota', 'ultimaParticipacao', 'dataDaVisita', 'localizacao'];
  dataSourceCronograma = new MatTableDataSource(ELEMENT_DATA1);
  @ViewChild('sortCronograma') sortCronograma: MatSort;
  @ViewChild(MatPaginator) paginatorCronograma: MatPaginator;

  dataTeste = new MatTableDataSource(ELEMENT_DATA2);

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
  }

  // garante a inicializacao do paginacao antes de view iniciar
  ngAfterViewInit() {
    this.dataSourceCronograma.paginator = this.paginatorCronograma;
    this.dataSourceCronograma.sort = this.sortCronograma;
  }


  ngOnInit(): void {
    this.cronograma = this.fb.group({
      cronograma: [''],
      date: [''],
    });
    this.cronogramaSelect = ['Betim (MG)', 'São Paulo (SP)', 'Jundiaí (SP)', 'São José dos Campos (SP)'];
  }

}



// parte local teste
const ELEMENT_DATA1: CalculoMetas[] = [
  {
    nome: 'FIAT',
    setor: 'Auto',
    ultimaNota: 90.5,
    ultimaParticipacao: '10/10/2021',
    dataDaVisita: 'Agosto/2021',
    localizacao: 'Betim(MG)'
  },
  {
    nome: 'Jeep',
    setor: 'Siderurgia',
    ultimaNota: 91.2,
    ultimaParticipacao: '08/10/2021',
    dataDaVisita: 'setembro/2021',
    localizacao: 'Betim(MG)'
  },
  {
    nome: 'ACME',
    setor: 'Auto',
    ultimaNota: 90.5,
    ultimaParticipacao: '12/10/2019',
    dataDaVisita: 'Dezembro/2021',
    localizacao: 'Betim(MG)'
  },
  {
    nome: 'Honda',
    setor: 'Auto',
    ultimaNota: 90.5,
    ultimaParticipacao: '30/01/2011',
    dataDaVisita: 'Janeiro/2021',
    localizacao: 'Betim(MG)'
  },
  {
    nome: 'GM',
    setor: 'Siderurgia',
    ultimaNota: 78,
    ultimaParticipacao: '05/05/2004',
    dataDaVisita: 'Maio/2021',
    localizacao: 'Betim(MG)'
  },
  {
    nome: 'FIAT',
    setor: 'Auto',
    ultimaNota: 90.5,
    ultimaParticipacao: '07/10/2018',
    dataDaVisita: 'Julho/2021',
    localizacao: 'Betim(MG)'
  },
  {
    nome: 'FIAT',
    setor: 'Auto',
    ultimaNota: 92.5,
    ultimaParticipacao: '06/06/2009',
    dataDaVisita: 'Junho/2021',
    localizacao: 'Betim(MG)'
  },
];

export interface teste {
  id: number,
  name: string
}

// parte local teste
const ELEMENT_DATA2: teste[] = [
  {id: 1, name: 'Ender'},
  {id: 2, name: 'Alves'},
  {id: 3, name: 'Cruz'},

];
