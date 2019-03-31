import { Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { AlunoComponent } from './aluno/aluno.component';
import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'pessoa', component: PessoaComponent},
  {path: 'aluno', component: AlunoComponent},
];
