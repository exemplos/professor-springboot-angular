import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




const endpoint = 'http://localhost:8080/cadastro/';


@Injectable({
  providedIn: 'root'
})
export class CadastroRestService {

  constructor(private http: HttpClient) { }

  save(cadastro: any): Observable<any> {
    return this.http.post(endpoint + 'pessoa/save', cadastro);
  }


}
