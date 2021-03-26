import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AfficheService} from './affiche.service';
import {Boutique} from '../../Model/Boutique';
import {ListeService} from '../../liste-boutique/liste.service';
import {NgForm} from '@angular/forms';
import {UploadService} from './upload.service';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {
  boutique1: Boutique;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private listeService: ListeService,
              private uploadService: UploadService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.listeService.getBoutiqueByid(params.id).subscribe(
          (boutique) => {
            this.boutique1 = boutique;
          }
        );
      }
    );
  }
  deleteBoutique(){
    this.listeService.deleteboutique(this.boutique1.id).subscribe(
      (response) => {
        const link = [ 'boutique' ];
        this.router.navigate(link);
      }
    );
  }
  gotoajout(){
    const link = ['boutique'];
    this.router.navigate(link);
  }
  gotomodifier(){
    }
  gotoproduit(){
    const link = ['produitboutique'];
    this.router.navigate(link);
  }
  gotoabonnement(){
    const link = ['Abonnement'];
    this.router.navigate(link);
  }
  UploadImage(formulaire: NgForm){
    this.uploadService.UploadImage(formulaire.value, this.boutique1.id).subscribe(
      (response) => {
        console.log(formulaire.value);
      },
      (error) => {
        alert(`erreur d'accés à l'api`);
        console.log(formulaire.value);
        console.log(error);
      }
    );

  }
}
