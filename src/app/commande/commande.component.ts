import {Component, Input, OnInit} from '@angular/core';
import {Produit} from '../Model/Produit';
import {PbService} from '../page-boutique/pb.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {CommandeService} from './commande.service';
import {AffService} from '../utilisateur/profilutilisateur/aff.service';
import {Boutique} from '../Model/Boutique';
import {Utilisateur} from '../Model/Utilisateur';
import {Commande} from '../Model/commande';
import pdfMake from 'pdfmake/build/pdfmake';
import { map } from 'rxjs/operators';
import pdfFronts from 'pdfmake/build/vfs_fonts';
import {Router} from '@angular/router';
pdfMake.vfs = pdfFronts.pdfMake.vfs;
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  @Input() boutique1: Boutique;
  @Input() user1: Utilisateur;
  totalRecords: number;
  page = 1;
  @Input() boutique: Commande[];
  constructor(private listeService: CommandeService,
              private profiluserservice: AffService,
              private router: Router, ) { }

  ngOnInit(): void {
    this.profiluserservice.getUtilisateur().subscribe(
      (user) => {
        this.user1 = user;
        this.listeService.getCommande(user.id).subscribe(
          (boutique) => { this.boutique = boutique;
                          this.totalRecords = boutique.length; },
          (error) => {alert(`erreur d'accés à l'api`);
                      console.log(error); }
        ); });
  }
  generatePdf(id: number){
    const link = [ 'commande' , id ];
    this.router.navigate(link);
  }
}
