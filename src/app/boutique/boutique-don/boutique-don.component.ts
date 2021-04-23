import {Component, Input, OnInit} from '@angular/core';
import {Produit} from '../../Model/Produit';
import {Boutique} from '../../Model/Boutique';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeService} from '../../liste-boutique/liste.service';
import {ProduitBoutiqueService} from '../produit-boutique/produit-boutique.service';
import {BoutiqueDonService} from './boutique-don.service';

@Component({
  selector: 'app-boutique-don',
  templateUrl: './boutique-don.component.html',
  styleUrls: ['./boutique-don.component.css']
})
export class BoutiqueDonComponent implements OnInit {
  @Input() boutique: Produit[];
  boutique1: Boutique;
  totalRecords: number;
  page = 1;
  val: number;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private listemService: ListeService,
              private listeService: BoutiqueDonService, ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.id);
        this.listeService.getBoutique(params.id).subscribe(
          (boutique) => { this.boutique = boutique;
                          this.totalRecords = boutique.length; }
        );
      });
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.listemService.getBoutiqueByid(params.id).subscribe(
          (boutique) => {
            this.boutique1 = boutique;
          }
        );
      }
    );
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
