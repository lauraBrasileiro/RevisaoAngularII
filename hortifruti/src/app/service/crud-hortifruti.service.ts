import { ProdutosComponent } from './../produtos/produtos.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../hortifruti-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudHortifrutiService {

  constructor(private http: HttpClient) { 


  }
  // Endpoins = conexão com o servidor
/*
Todos são metodos do HTTPclient;
Create : salvar, incluir um novo itEm na API; metodo: POST;
Read : ler algo da API; Metodo GET;
Update : Editar algo que já esta na API; metodo PUT;
Delete: exclui algum objeto da API; Metodo: Delete;
*/
    // READ
  getAllProdutos(){
    return this.http.get('http://31.220.57.121:9080/produtos/')
  }
    // CREATE
  addProdutos(produto: Produtos): Observable<Produtos>{
    return this.http.post<Produtos>('http://31.220.57.121:9080/produtos/', produto)
  }
}
