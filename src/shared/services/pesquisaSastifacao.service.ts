import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pesquisas} from "../models/pesquisas";

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable()

export class PesquisaSastifacaoService {

  url: string = "http://localhost:3000/pesquisas";

  constructor(private httpClient: HttpClient) {
  }

  // salvar(filme: Filme): Observable<Filme> {
  //   return this.httpClient.post<Filme>(url, filme);
  // }
  //
  // editar(filme: Filme): Observable<Filme> {
  //   return this.httpClient.put<Filme>(url + filme.id, filme);
  //
  // }


  // buscando todas as pesquisas de sastifação
  getAllPesquisas(): Observable<Pesquisas[]> {
    return this.httpClient.get<Pesquisas[]>(this.url);
  }

  // visualizar(id: number): Observable<Filme> {
  //   return this.httpClient.get<Filme>(url + id);
  // }
  //
  // excluir(id: number): Observable<void> {
  //   return this.httpClient.delete<void>(url + id);
  // }

}
