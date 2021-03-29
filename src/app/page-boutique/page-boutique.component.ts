import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProduitBoutiqueService} from '../boutique/produit-boutique/produit-boutique.service';
import {Produit} from '../Model/Produit';
import {PbService} from './pb.service';

@Component({
  selector: 'app-page-boutique',
  templateUrl: './page-boutique.component.html',
  styleUrls: ['./page-boutique.component.css']
})
export class PageBoutiqueComponent implements OnInit {
  @Input() boutique: Produit[];
  constructor(private router: Router,
              private listeService: PbService, ) {
  }

  ngOnInit(): void {
    this.listeService.getBoutique().subscribe(
      (boutique) => { this.boutique = boutique;
                      console.log(this.boutique); },
      (error) => {alert(`erreur d'accés à l'api`);
        }
    );
  }
  gotodetails(){
    const link = ['detailProduit'];
    this.router.navigate(link);
  }

}
