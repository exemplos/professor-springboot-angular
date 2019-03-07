import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoint } from './const';

@Injectable({
  providedIn: 'root'
})
export class ProdutoRestService {

  constructor(private http: HttpClient) { }

  save(cadastro: any): Observable<any> {
    return this.http.post(endpoint + 'produto/save', cadastro);
  }

  list(): Observable<any> {
    return this.http.get(endpoint + 'produto/list');
  }

  delete(id: any): Observable<any> {
    return this.http.delete(endpoint + 'produto/delete/' + id);
  }

}
