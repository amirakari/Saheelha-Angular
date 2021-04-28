import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListeService} from '../liste-boutique/liste.service';
import {UploadService} from '../boutique/afficher/upload.service';
import {Boutique} from '../Model/Boutique';
import {CalendarModule} from 'primeng/calendar';
import {NgForm} from '@angular/forms';
import {AjProduitService} from './aj-produit.service';
import Quagga from 'quagga';
import {$} from 'protractor';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  boutique1: Boutique;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private listeService: ListeService,
              private uploadService: AjProduitService) { }
   mindate = new Date();
  value: Date;
  codeabare: any;
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
    if ( navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function'){
      Quagga.init({
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          numOfWorkers: navigator.hardwareConcurrency,
          target: document.querySelector('#camera'),
        },
        decoder: {
          readers: ['ean_reader', 'ean_8_reader', 'code_39_reader', 'code_39_vin_reader', 'codabar_reader', 'upc_reader', 'upc_e_reader']
        }
      },  (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Initialization finished. Ready to start');
        Quagga.start();
      });
      Quagga.onDetected( (result) => {
        console.log(result.codeResult.code);
        this.codeabare = result.codeResult.code;
      });
    }
  }
  gotoajout(){
    const link = ['boutique'];
    this.router.navigate(link);
  }
  gotodon(){
    const link = ['boutique' + `/${this.boutique1.id}` + '/' + 'produitboutique' + '/' + 'don'];
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
  addProduit(formulaire: NgForm){
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params);
        this.uploadService.addUtilisateur(formulaire.value, this.codeabare, params.id).subscribe(
      (response) => {
        console.log(formulaire);
      },
      (error) => {
        console.log(formulaire.value);
      }
    ); }
    );

  }
}
