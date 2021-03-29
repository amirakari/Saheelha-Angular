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
  constructor(private profiluserservice: AffService,
              private imageservice: ImageService,
              private activatedRoute: ActivatedRoute,
              private uploadService: UploadService) { }
   file: any;
   user: Utilisateur;
   userFile;
   imgURL: any;
   public imagePath;
  ngOnInit(): void {
    this.profiluserservice.getUtilisateur().subscribe(
      (user) => {this.user = user; },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
  }

  UploadImage(event: any){
       this.file = event.target.files[0];
       const formData = new FormData();
       formData.append('file', this.file);
       this.uploadService.UploadImage(this.user.id, formData).subscribe(
        (response) => {
          console.log(this.file.name);
        },
        (error) => {
          alert(`erreur d'accés à l'api`);
          console.log(error);
        }
      );
  }
  getPhotodeProfil(){
    this.imageservice.getImageProfil(this.user.photodeprofil).subscribe(
      (img) => {
        this.imgURL = img;
      },
      (error) => {
        console.log(this.user.photodeprofil);
        console.log(this.imgURL);
        alert(`erreur d'accés à l'api`);
        console.log(error);
      }
    );
  }
}
