import { Component, OnInit } from '@angular/core';
import {LoginService} from '../utilisateur/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }
logout(){
    this.loginService.logout();
}
login(){
  const link = ['login'];
  this.router.navigate(link);
}
}
