import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebtsService {

  private apiUrl = 'http://localhost:3000/debts';

  constructor(private http: HttpClient) { }

  obtenerDatos() {
    return this.http.get(this.apiUrl);
  }
}
