import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProduitBoutiqueService} from '../boutique/produit-boutique/produit-boutique.service';
import {DetailsProduitService} from './details-produit.service';
import {Produit} from '../Model/Produit';
import {NgForm} from '@angular/forms';
import {CommentaireService} from './commentaire.service';
import {Commentaire} from '../Model/Commentaire';
import {EvaluationService} from '../page-boutique/evaluation.service';
import {SupprimerproduitService} from './supprimerproduit.service';
import {AjProduitService} from '../ajouter-produit/aj-produit.service';

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
  file1: any;
  file2: any;
  file3: any;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private evaluationService: EvaluationService,
              private listeService: DetailsProduitService,
              private commentaireService: CommentaireService,
              private supprimerService: SupprimerproduitService,
              private uploadService: AjProduitService) { }
quantite: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.listeService.getBoutique(params.idproduit).subscribe(
          (boutique) => { this.boutique = boutique;
                          console.log(this.boutique); }
        );
      });
    this.activatedRoute.params.subscribe(
      (params) => {
    this.commentaireService.getBoutique(params.idproduit).subscribe(
      (boutique) => { this.commentaire = boutique;
                      this.totalRecords = boutique.length;
                       }
    ); });
    this.activatedRoute.params.subscribe(
      (params) => {
        this.evaluationService.getBoutique(params.idproduit).subscribe(
          (boutique) => { this.val = boutique;
                          console.log(boutique);
          }
        );
      });
  }
  addCommentaire(Ajouterboutique: NgForm){
    this.activatedRoute.params.subscribe(
      (params) => {
    this.commentaireService.addBoutique(Ajouterboutique.value, params.idproduit).subscribe(
      (response) => {
        console.log(Ajouterboutique);
      },
      (error) => {
        console.log(error);
      }
    ); });
  }
  UploadImage(event: any){
    this.file1 = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.file1);
    this.activatedRoute.params.subscribe(
      (params) => {
    this.uploadService.uploadfiles(formData, params.idproduit).subscribe(
      () => {
        console.log(formData);
      } ,
      (error) => {
        alert(`erreur d'accés à l'api`);
        console.log(error);
      }
    ); });
  }
  supprimerCommentaire(id){
    this.activatedRoute.params.subscribe(
      (params) => {
        this.commentaireService.supprimerCommentaire(id).subscribe(
          (response) => {
            console.log();
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
    this.listeService.PasserCommande(this.quantite, params.idproduit, null).subscribe(
      (response) => {
        this.listeService.CommandeProduit(params.idproduit, this.quantite, null).subscribe(
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
  modifier(boutiqueId: number, produitId: number){
        const link = ['boutique' + `/${boutiqueId}` + '/produitboutique' + `/${produitId}` + `/update` ];
        this.router.navigate(link);

   }
  supprimerProduit(){
    this.activatedRoute.params.subscribe(
      (params) => {
        this.supprimerService.supprimerUtilisateur(params.idproduit).subscribe(
          (response) => {
            if (this.boutique.status === 'à vendre'){
              const link = ['boutique' + `/${params.id}` + '/produitboutique' ];
              this.router.navigate(link);
            } else {
              const link = ['boutique' + `/${params.id}` + '/produitboutique' + '/don' ];
              this.router.navigate(link);
            }
            console.log();
          },
          (error) => {
            console.log(error);
          }
        ); });
  }
}
