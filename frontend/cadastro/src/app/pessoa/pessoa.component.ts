import { Component, OnInit } from '@angular/core';
import { CadastroRestService } from '../cadastro-rest.service';

@Component({
  selector: 'c-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  title = 'cadastro';

  cadastro = {nome: '', telefone: ''};

  pessoas: any;

  constructor(private cadastroRest: CadastroRestService) {
    this.list();
  }

  ngOnInit() {
  }

  public save() {
    this.cadastroRest.save(this.cadastro).subscribe(r => {
      this.list();
      this.cadastro = {nome: '', telefone: ''};
    });
  }

  public list() {

    this.cadastroRest.list().subscribe( p => {
      this.pessoas = p;
      console.log(p);
    });
  }

  public edit(linha) {
    this.cadastro = linha;
  }

  public delete(linha) {
    this.cadastroRest.delete(linha.id).subscribe(p => {
      this.list();
    });
  }

}
