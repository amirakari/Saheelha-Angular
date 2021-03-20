import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoajout(){
    const link = ['boutique'];
    this.router.navigate(link);
  }
  gotoprofil(){
    const link = ['profilBoutique'];
    this.router.navigate(link);
  }
  gotomodifier(){
    const link = ['detailProduit'];
    this.router.navigate(link);
  }
  gotoproduit(){
    const link = ['produitboutique'];
    this.router.navigate(link);
  }
}
