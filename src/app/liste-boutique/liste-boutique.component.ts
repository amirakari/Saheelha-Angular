import {Component, Input, OnInit} from '@angular/core';
import {ListeService} from './liste.service';
import {Boutique} from '../Model/Boutique';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-liste-boutique',
  templateUrl: './liste-boutique.component.html',
  styleUrls: ['./liste-boutique.component.css']
})
export class ListeBoutiqueComponent implements OnInit {
@Input() boutique: Boutique[];
  @Input() boutique1: Boutique;
  constructor(private listeService: ListeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.listeService.getBoutique().subscribe(
      (boutique) => { this.boutique = boutique; },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
  }
  afficherboutique(){
    const link = [ 'profilBoutique' , 5 ];
    this.router.navigate(link);
  }
}
