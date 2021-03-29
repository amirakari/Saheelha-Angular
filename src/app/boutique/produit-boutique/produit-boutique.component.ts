import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeService} from '../../liste-boutique/liste.service';
import {Boutique} from '../../Model/Boutique';
import {ProduitBoutiqueService} from './produit-boutique.service';
import {Produit} from '../../Model/Produit';

@Component({
  selector: 'app-produit-boutique',
  templateUrl: './produit-boutique.component.html',
  styleUrls: ['./produit-boutique.component.css']
})
export class ProduitBoutiqueComponent implements OnInit {
  @Input() boutique: Produit[];
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private listeService: ProduitBoutiqueService, ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.id);
        this.listeService.getBoutique().subscribe(
      (boutique) => { this.boutique = boutique; }
    );
  });
  }
  gotoajout(){
    const link = ['boutique'];
    this.router.navigate(link);
  }
  gotomodifier(){}
  gotoproduit(){
    const link = ['produitboutique'];
    this.router.navigate(link);
  }
  gotoabonnement(){
    const link = ['Abonnement'];
    this.router.navigate(link);
  }
}
