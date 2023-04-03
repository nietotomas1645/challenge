import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardInterface } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'https://6428b5205a40b82da4c68b52.mockapi.io/api/card';

  constructor(private http: HttpClient) { }

  getCards(): Observable<CardInterface[]> {
    return this.http.get<CardInterface[]>("https://6428b5205a40b82da4c68b52.mockapi.io/api/card");
  }
}
