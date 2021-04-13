import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ProduitBoutiqueService} from '../boutique/produit-boutique/produit-boutique.service';
import {Produit} from '../Model/Produit';
import {PbService} from './pb.service';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {Boutique} from '../Model/Boutique';
import {ListeService} from '../liste-boutique/liste.service';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-page-boutique',
  templateUrl: './page-boutique.component.html',
  styleUrls: ['./page-boutique.component.css']
})
export class PageBoutiqueComponent implements OnInit {
  @Input() boutique: Produit[];
  @Input() boutique1: Boutique[];
  totalRecords: number;
  page = 1;
  val: number;
  lat: number;
  lng: number;
  inputSearchpartype: string = null;
  constructor(private router: Router,
              private listeService: PbService,
              private listeService1: ListeService, ) {
  }
  @ViewChild('placesRef', {static: false}) placesRef: GooglePlaceDirective;

  public handleAddressChange(address: Address) {
    // Do some stuff
    console.log(address);
  }
  ngOnInit(): void {
    this.lat = 36.87736913231115;
    this.lng = 10.100964380174375;
    this.listeService.getBoutique().subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length; },
      (error) => {alert(`erreur d'accés à l'api`);
        }
    );
    this.listeService1.getBoutique().subscribe(
      (boutique1) => { this.boutique1 = boutique1; },
      (error) => {alert(`erreur d'accés à l'api`);
                  console.log(error); }
    );
  }
  gotodetails(idBoutique: number, idProduit: number){
    const link = ['boutique' + `/${idBoutique}` + '/produitboutique' + `/${idProduit}` ];
    this.router.navigate(link);
  }
  private getUserLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }
findByName(nom){
    console.log(nom.value);
    this.listeService.findByName(nom).subscribe(
      (boutique) => { this.boutique = boutique;
                      console.log(this.boutique);
                      this.totalRecords = boutique.length; },
      (error) => {alert(`erreur d'accés à l'api`);
      }
    );
}
  findBytype(type){
    console.log(type);
    this.listeService.findByType(type).subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length;
                      console.log(type); },
      (error) => {alert(`erreur d'accés à l'api`);
      }
    );
  }findByStatus(type){
    console.log(type);
    this.listeService.findByStatus(type).subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length;
                      console.log(type); },
      (error) => {alert(`erreur d'accés à l'api`);
      }
    );
  }

}
