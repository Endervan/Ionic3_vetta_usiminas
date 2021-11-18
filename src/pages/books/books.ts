import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AlertComponent} from "../../shared/components/campos/alert/alert.component";
import {Alert} from "../../shared/models/alert";
import {GenericaService} from "../../services/generico.service";
import {HomePage} from "../home/home";
import {MatTableDataSource} from "@angular/material/table";
import {PesquisaSastifacaoService} from "../../services/pesquisaSastifacao.service";
import {Pesquisas} from "../../shared/models/pesquisas";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'page-books1',
  templateUrl: 'books.html',
})
export class BooksPage {
  cadastro: FormGroup;
  displayedColumns = ['avaliacao', 'ciclo', 'clientes', 'responsavel', 'media', 'status'];
  // dataSource: MatTableDataSource<Pesquisas>; // parte service
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private fb: FormBuilder, private pesquisa_S: PesquisaSastifacaoService,
              public genericaService: GenericaService, public dialog: MatDialog,
              public navParams: NavParams) {
  }


  // garante a inicializacao do paginacao antes de view iniciar
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // filtragem lista
  Filter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches

    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      dtLacamento: ['', [Validators.required]],
    });

    // this.getAllPesquisas();

  }

  // getAllPesquisas(){
  //   // parte service
  //   // this.pesquisa_S.getAllPesquisas().subscribe(data => {
  //   //   this.dataSource = new MatTableDataSource(data);
  //   //   this.dataSource.paginator = this.paginator;
  //   //   this.dataSource.sort = this.sort;
  //   // });
  // }

  modal(): void {
    const config = {
      data: {
        btnSucesso: 'Ir para alguma pagina',
        btnCancelar: 'Fechar',
        corBntCancelar: 'warn',
        possuirBtnFechar: true
      } as Alert
    };
    const dialogRef = this.dialog.open(AlertComponent, config);
  }

  async alertIonic(): Promise<void> {
    await this.genericaService.alert({message: 'teste alert ionic 3', buttons: ['OK'], title: 'resolve'}); //  msg erro
  }

  async loadingIonic(): Promise<void> {
    await this.genericaService.loading({duration: 1000,}); //  msg erro
  }

  async toastIonic(): Promise<void> {
    await this.genericaService.toast({message: 'toast personalizado', position: 'top', closeButtonText: 'sair'}); //  toast
  }

  async testeNavegacao() {
    await this.genericaService.irPagina(HomePage); //  toast
  }


}


// parte local teste
const ELEMENT_DATA: Pesquisas[] = [
  {avaliacao: '10/11/2021', ciclo: 25, clientes: 60, responsavel: 'Daniel', media: 0, status: 'EmAndamento'},
  {avaliacao: 2020, ciclo: 24, clientes: 45, responsavel: 'josue', media: 10.5, status: 'Concluida'},
  {avaliacao: 2019, ciclo: 23, clientes: 30, responsavel: 'Daniel', media: 10.5, status: 'Concluida'},
  {avaliacao: 2018, ciclo: 22, clientes: 5, responsavel: 'Daniel', media: 10.5, status: 'Concluida'},
  {avaliacao: 2016, ciclo: 21, clientes: 100, responsavel: 'Daniel', media: 20, status: 'Concluida'},
  {avaliacao: 2015, ciclo: 20, clientes: 2, responsavel: 'Daniel', media: 11, status: 'Concluida'},
  {avaliacao: 2014, ciclo: 19, clientes: 2, responsavel: 'Daniel', media: 12, status: 'Concluida'},
];



