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
  file: any;
  lat: number;
  lng: number;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private listeService: ListeService,
              private uploadService: UploadService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params.value);
        this.listeService.getBoutiqueByid(params.id).subscribe(
          (boutique) => {
            this.boutique1 = boutique;
            this.lat = boutique.mapLat;
            this.lng = boutique.mapLng;
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
  gotoajoutProduit(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'ajouterProduit'];
    this.router.navigate(link);
  }
  gotomodifier(){
    }
  gotoproduit(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique'];
    this.router.navigate(link);
  }
  gotoabonnement(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'Abonnement'];
    this.router.navigate(link);
  }
  UploadImage(event: any){
    this.file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', this.file);
    this.uploadService.UploadImage(this.boutique1.id, formData).subscribe(
      (response) => {
        console.log(this.file.name);
      },
      (error) => {
        alert(`erreur d'accés à l'api`);
        console.log(error);
      }
    );
  }
}
