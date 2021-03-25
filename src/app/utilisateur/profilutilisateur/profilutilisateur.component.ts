import {Component, Input, OnInit, Output} from '@angular/core';
import {ListeService} from '../../liste-boutique/liste.service';
import {Boutique} from '../../Model/Boutique';
import {AffService} from './aff.service';
import {Utilisateur} from '../../Model/Utilisateur';
import {NgForm} from '@angular/forms';
import {ImageService} from './image.service';
import {UploadService} from './upload.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profilutilisateur',
  templateUrl: './profilutilisateur.component.html',
  styleUrls: ['./profilutilisateur.component.css']
})
export class ProfilutilisateurComponent implements OnInit {
   user: Utilisateur;
  constructor(private profiluserservice: AffService,
              private imageservice: ImageService,
              private activatedRoute: ActivatedRoute,
              private uploadService: UploadService) { }
  ngOnInit(): void {
    this.profiluserservice.getUtilisateur().subscribe(
      (user) => {this.user = user; },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    ); }
  UploadImage(formulaire: NgForm){
    this.uploadService.UploadImage(formulaire.value).subscribe(
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
  getImageProfil(){
    this.imageservice.getImageProfil().subscribe(
      () => {
      },
      (error) => {
        alert(`erreur d'accés à l'api`);
        console.log(error);
      }
    );

  }

}
