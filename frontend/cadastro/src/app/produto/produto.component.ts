import { Component, OnInit } from '@angular/core';
import { ProdutoRestService } from '../produto-rest.service';

@Component({
  selector: 'c-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto = {codigo: '', nome: '', valor: 0.0};

  produtos: any;

  constructor(private produtoRest: ProdutoRestService) { }

  ngOnInit() {
    this.list();
  }

  save() {
    this.produtoRest.save(this.produto).subscribe(p => {
      this.list();
      this.produto = {codigo: '', nome: '', valor: 0.0};
    });
  }

  list() {
    this.produtoRest.list().subscribe(p => {this.produtos = p});
  }

  edit(p) {
    this.produto = p;
  }

  delete(prod) {
    this.produtoRest.delete(prod.id).subscribe(p => {this.list()});
  }


}
