import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ProduitBoutiqueService} from '../boutique/produit-boutique/produit-boutique.service';
import {Produit} from '../Model/Produit';
import {PbService} from './pb.service';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';



@Component({
  selector: 'app-page-boutique',
  templateUrl: './page-boutique.component.html',
  styleUrls: ['./page-boutique.component.css']
})
export class PageBoutiqueComponent implements OnInit {
  @Input() boutique: Produit[];
  totalRecords: number;
  page = 1;
  val: number;
  lat: number;
  lng: number;
  inputSearchpartype: string = null;
  constructor(private router: Router,
              private listeService: PbService, ) {
  }
  @ViewChild('placesRef', {static: false}) placesRef: GooglePlaceDirective;

  public handleAddressChange(address: Address) {
    // Do some stuff
    console.log(address);
  }
  ngOnInit(): void {
    this.lat = 36.89938215729048;
    this.lng = 10.189356669083528;
    this.listeService.getBoutique().subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length; },
      (error) => {alert(`erreur d'accés à l'api`);
        }
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
    console.log(type.value);
    this.listeService.findByType(type).subscribe(
      (boutique) => { this.boutique = boutique;
                      console.log(this.boutique);
                      this.totalRecords = boutique.length; },
      (error) => {alert(`erreur d'accés à l'api`);
      }
    );
  }
}
