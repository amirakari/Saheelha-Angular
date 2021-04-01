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
  totalRecords: number;
  page = 1;
  val: number;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private listeService: ProduitBoutiqueService, ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.id);
        this.listeService.getBoutique(params.id).subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length;
                      console.log(this.boutique); }
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
  gotoDetailsProduit( produitId: number){
    this.activatedRoute.params.subscribe(
      (params) => {
        const link = ['boutique' + `/${params.id}` + '/produitboutique' + `/${produitId}` ];
        this.router.navigate(link);

        console.log(params.id); });

  }
}
