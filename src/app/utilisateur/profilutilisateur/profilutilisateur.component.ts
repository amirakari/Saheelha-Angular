import {Component, Input, OnInit, Output} from '@angular/core';
import {ListeService} from '../../liste-boutique/liste.service';
import {Boutique} from '../../Model/Boutique';
import {AffService} from './aff.service';
import {Utilisateur} from '../../Model/Utilisateur';

@Component({
  selector: 'app-profilutilisateur',
  templateUrl: './profilutilisateur.component.html',
  styleUrls: ['./profilutilisateur.component.css']
})
export class ProfilutilisateurComponent implements OnInit {
   user: Utilisateur;
  constructor(private profiluserservice: AffService) { }

  ngOnInit(): void {
    this.profiluserservice.getUtilisateur().subscribe(
      (user) => {this.user = user; },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
  }

}
