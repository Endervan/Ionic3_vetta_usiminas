import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-tabela',
  template: `
    <div class="mat-elevation-z8">

      <mat-table  [dataSource]="dataSource" matSort aria-label="Elements">

        <ng-container matColumnDef="id">
          <mat-header-cell *matHeaderCellDef mat-sort-header>Id</mat-header-cell>
          <mat-cell *matCellDef="let row">{{row.id}}</mat-cell>
        </ng-container>


        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>
          <mat-cell *matCellDef="let row">{{row.name}}</mat-cell>
        </ng-container>

        <mat-header-row *matHeaderRowDef="displayedColumns "></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
      </mat-table>

      <mat-paginator #paginator
                     [pageIndex]="0"
                     [pageSize]="10"
                     [pageSizeOptions]="[10, 20, 30]">
      </mat-paginator>
    </div>`,
})
export class TabelaComponent implements OnInit {
  @Input() tipo: any;
  @Input() dataSource: any;
  @Input() colunas


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['id', 'name'];
  // colunas = ['ciclo', 'ano'];


  ngOnInit() {
    console.log(this.paginator);
  }

  paginaTrocada(pagina: any) {
    console.log(pagina);
  }
}
