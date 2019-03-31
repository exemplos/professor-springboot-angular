import { Component, OnInit } from '@angular/core';
import { AlunoRestService } from '../aluno-rest.service';

@Component({
  selector: 'c-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno = {nome: '', cpf: '', matricula: ''};

  alunos: any;

  constructor(private alunoRest: AlunoRestService) { }

  ngOnInit() {
    this.list();
  }

  save() {
    this.alunoRest.save(this.aluno).subscribe(p => {
      this.list();
      this.aluno = {nome: '', cpf: '', matricula: ''};
    });
  }

  list() {
    this.alunoRest.list().subscribe(p => {this.alunos = p});
  }
}
