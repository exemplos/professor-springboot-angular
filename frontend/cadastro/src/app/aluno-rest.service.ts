import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoint } from './const';

@Injectable({
  providedIn: 'root'
})
export class AlunoRestService {

  constructor(private http: HttpClient) { }

  save(cadastro: any): Observable<any> {
    return this.http.post(endpoint + 'aluno/save', cadastro);
  }

  list(): Observable<any> {
    return this.http.get(endpoint + 'aluno/list');
  }

  delete(id: any): Observable<any> {
    return this.http.delete(endpoint + 'aluno/delete/' + id);
  }

}
