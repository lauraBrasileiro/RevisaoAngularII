import { Produtos } from './../hortifruti-models';
import { CrudHortifrutiService } from './../service/crud-hortifruti.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  

  listaProdutos: Produtos[];
  produto: Produtos = new Produtos();

  constructor( private crudService: CrudHortifrutiService) { }

  ngOnInit() {
    this.readAllProdutos();
    
  }
  // subscribe: divide todas as partes da API
  readAllProdutos() {
    this.crudService.getAllProdutos().subscribe((res: Produtos[])=>{
      this.listaProdutos = res
    })
  }

  createProdutos(){
    this.crudService.addProdutos(this.produto).subscribe((res: Produtos) => {
      this.produto = res
    })
  }
}
