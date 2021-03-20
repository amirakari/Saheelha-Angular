import {Component, Input, OnInit} from '@angular/core';
import {ListeService} from './liste.service';
import {Boutique} from '../Model/Boutique';

@Component({
  selector: 'app-liste-boutique',
  templateUrl: './liste-boutique.component.html',
  styleUrls: ['./liste-boutique.component.css']
})
export class ListeBoutiqueComponent implements OnInit {
@Input() boutique: Boutique[];
  constructor(private listeService: ListeService) {
  }

  ngOnInit(): void {
    this.listeService.getBoutique().subscribe(
      (boutique) => { this.boutique = boutique; },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
  }

}
