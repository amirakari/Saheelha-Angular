import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitBoutiqueService} from '../boutique/produit-boutique/produit-boutique.service';
import {DetailsProduitService} from './details-produit.service';
import {Produit} from '../Model/Produit';
import {NgForm} from '@angular/forms';
import {CommentaireService} from './commentaire.service';
import {Commentaire} from '../Model/Commentaire';
import {EvaluationService} from '../page-boutique/evaluation.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {
  @Input() boutique: Produit;
  @Input() commentaire: Commentaire[];
  val: object;
  totalRecords: number;
  page = 1;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private evaluationService: EvaluationService,
              private listeService: DetailsProduitService,
              private commentaireService: CommentaireService, ) { }
quantite: any;
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
    this.activatedRoute.params.subscribe(
      (params) => {
        this.evaluationService.getBoutique(params.id).subscribe(
          (boutique) => { this.val = boutique;
                          console.log(boutique);
          }
        );
      });
  }
  addCommentaire(Ajouterboutique: NgForm){
    this.activatedRoute.params.subscribe(
      (params) => {
    this.commentaireService.addBoutique(Ajouterboutique.value, params.id).subscribe(
      (response) => {
        console.log(Ajouterboutique);
      },
      (error) => {
        console.log(error);
      }
    ); });
  }
  PasserUneCommande(){
    this.activatedRoute.params.subscribe(
      (params) => {
    console.log(this.quantite);
    this.listeService.PasserCommande(this.quantite, params.id, null).subscribe(
      (response) => {
        this.listeService.CommandeProduit(params.id, this.quantite, null).subscribe(
          (boutique) => {
            const link = ['commande'];
            this.router.navigate(link);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    ); });
  }
}
