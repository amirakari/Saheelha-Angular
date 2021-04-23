import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Commande} from '../Model/commande';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  link = 'http://localhost:3000/commande';
  constructor(private http: HttpClient) { }
  getCommande(quantite: number): Observable<Commande[]>{
    return this.http.get<Commande[]>(this.link + `/${quantite}`);
  }
}
