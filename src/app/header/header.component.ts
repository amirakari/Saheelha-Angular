import { Component, OnInit } from '@angular/core';
import {LoginService} from '../utilisateur/login.service';
import {Router} from '@angular/router';
import {Utilisateur} from '../Model/Utilisateur';
import {AffService} from '../utilisateur/profilutilisateur/aff.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: Utilisateur;
  user1: Utilisateur;
  visibility = false;
  status: boolean;
  constructor(public loginService: LoginService,
              private profiluserservice: AffService,
              private router: Router) { }

  ngOnInit(): void {
    this.profiluserservice.getUtilisateur().subscribe(
      (user) => {this.user = user;
                 console.log(this.user);
                 if (this.user.type === 'user'){
                   this.status = true;
                 }else{
                   this.status = false;
                 }
      },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
  }
  gotoprofilutilisateur(){
    const link = ['profilutilisateur'];
    this.router.navigate(link);
  }
  gotopageboutique(){
    const link = ['pageBoutique'];
    this.router.navigate(link);
  }
  gotoboutique(){
    const link = ['boutique'];
    this.router.navigate(link);
  }
  gotoajboutique(){
    const link = ['boutique/addBoutique'];
    this.router.navigate(link);
  }
  gotocommande(){
    const link = ['commande'];
    this.router.navigate(link);
  }
  gotocontact(){
    const link = ['contact'];
    this.router.navigate(link);
  }
logout(){
    this.loginService.logout();
}
login(){
  const link = ['login'];
  this.router.navigate(link);
}
show(){
    console.log(this.visibility);
    this.visibility = !this.visibility;
    console.log(this.visibility);
}
getRole(): boolean{
  this.profiluserservice.getUtilisateur().subscribe(
    (user) => {this.user = user;
               console.log(this.user);
    },
    (error) => {alert(`erreur d'accés à l'api`);
                console.log(error); }
  );
  return this.status;
}
}
