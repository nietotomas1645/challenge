import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactService {

  private apiUrl = 'https://6428b5205a40b82da4c68b52.mockapi.io/api/transacts';
  

  constructor(private http: HttpClient) { }

  getTransacts() {
    return this.http.get(this.apiUrl);
  }
  
}
