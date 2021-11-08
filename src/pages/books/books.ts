import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AlertComponent} from "../../shared/components/campos/alert/alert.component";
import {Alert} from "../../shared/models/alert";
import {GenericaService} from "../../shared/services/generico.service";
import {HomePage} from "../home/home";
import {MatTableDataSource} from "@angular/material/table";
import {PesquisaSastifacaoService} from "../../shared/services/pesquisaSastifacao.service";
import {Pesquisas} from "../../shared/models/pesquisas";


@Component({
  selector: 'page-books1',
  templateUrl: 'books.html',
})
export class BooksPage {
  cadastro: FormGroup;
  displayedColumns: string[] = ['avaliacao', 'ciclo', 'clientes', 'responsavel', 'media', 'status'];
  dataSource: MatTableDataSource<Pesquisas>;


  constructor(private fb: FormBuilder, private pesquisa_S: PesquisaSastifacaoService,
              public genericaService: GenericaService,
              public dialog: MatDialog,
              public navParams: NavParams) {

  }

  // filtragem lista
  Filter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  get f() {
    return this.cadastro.controls;
  }

  ngOnInit(): void {
    this.cadastro = this.fb.group({
      dtLacamento: ['', [Validators.required]],
    });

    this.pesquisa_S.getAllPesquisas().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    });

  }

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



