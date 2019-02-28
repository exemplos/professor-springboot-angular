import { Component } from '@angular/core';
import { CadastroRestService } from './cadastro-rest.service';

@Component({
  selector: 'c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro';

  cadastro = {nome: '', telefone: ''};

  constructor(private cadastroRest: CadastroRestService) {}

  public save() {
    this.cadastroRest.save(this.cadastro).subscribe();
  }

}
