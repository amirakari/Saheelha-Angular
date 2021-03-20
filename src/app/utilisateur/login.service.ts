import { Injectable } from '@angular/core';
import {Utilisateur} from '../Model/Utilisateur';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private utilisateurs: Utilisateur[];
  link = 'http://localhost:3000/utilisateur/login';
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }
  islogged(){
    return !! localStorage.getItem('token');
  }
  login(credentials): Observable<any>{
    return  this.http.post(this.link, credentials);
  }
  logout(){
    localStorage.removeItem('token');
    const link = ['login'];
    this.router.navigate(link);
  }
}
