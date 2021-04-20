import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitBoutiqueService} from '../boutique/produit-boutique/produit-boutique.service';
import {DetailsProduitService} from './details-produit.service';
import {Produit} from '../Model/Produit';
import {NgForm} from '@angular/forms';
import {CommentaireService} from './commentaire.service';
import {Commentaire} from '../Model/Commentaire';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {
  @Input() boutique: Produit;
  @Input() commentaire: Commentaire[];
  val: number;
  totalRecords: number;
  page = 1;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private listeService: DetailsProduitService,
              private commentaireService: CommentaireService, ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.listeService.getBoutique(params.id).subscribe(
          (boutique) => { this.boutique = boutique;
                          console.log(this.boutique); }
        );
      });
    console.log(this.val);
    this.activatedRoute.params.subscribe(
      (params) => {
    this.commentaireService.getBoutique(params.id).subscribe(
      (boutique) => { this.commentaire = boutique;
                      this.totalRecords = boutique.length;
                      console.log(this.commentaire); }
    ); });
  }
  addCommentaire(Ajouterboutique: NgForm){
    this.commentaireService.addBoutique(Ajouterboutique.value).subscribe(
      (response) => {
        console.log(Ajouterboutique);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  PasserUneCommande(form: NgForm){
    console.log(form.value);
    this.listeService.PasserCommande(form.value, null).subscribe(
      (response) => {
      },
      (error) => {
        console.log(error);
      }
    );
    this.activatedRoute.params.subscribe(
      (params) => {
        this.listeService.CommandeProduit(params.id, form.value, null).subscribe(
          (boutique) => {}
        );
      });
  }
}
