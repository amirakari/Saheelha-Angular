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
                      this.totalRecords = boutique.length;
                      console.log(this.boutique); },
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
  }
  findByStatus(type){
    console.log(type);
    this.listeService.findByStatus(type).subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length;
                      console.log(type); },
      (error) => {alert(`erreur d'accés à l'api`);
      }
    );
  }
  findByLocalisation(adreese){
    console.log(adreese);
    this.listeService.findByLocalisation(adreese).subscribe(
      (boutique) => { this.boutique = boutique;
                      this.totalRecords = boutique.length;
                      console.log(adreese); },
      (error) => {alert(`erreur d'accés à l'api`);
      }
    );
    if (adreese.value === 'Manouba'){
      this.lat = 36.80857712009718;
      this.lng = 10.086972566367914;
    }
    if (adreese.value === 'Zarzis'){
      this.lat = 33.50745259366173;
      this.lng = 11.084637966991847;
    }
    if (adreese.value === 'Mornaguia'){
      this.lat = 36.758318117523906;
      this.lng = 10.017444497419682;
    }
    if (adreese.value === 'Borj amri'){
      this.lat = 36.71347415450484;
      this.lng = 9.882975386789939;
    }
    if (adreese.value === 'Jedaida'){
      this.lat = 36.85074971683339;
      this.lng = 9.928105713358464;
    }
    if (adreese.value === 'Douar Hicher'){
      this.lat = 36.82484681601563;
      this.lng = 10.09643539155119;
    }
    if (adreese.value === 'El Battan'){
      this.lat = 36.80244902848408;
      this.lng = 9.843175043545404;
    }
    if (adreese.value === 'Oued Ellil'){
      this.lat = 36.84252944111365;
      this.lng = 10.038688985131163;
    }
    if (adreese.value === 'Tebourba'){
      this.lat = 36.84018199461443;
      this.lng = 9.850938147059658;
    }
    if (adreese.value === 'Tunis'){
      this.lat = 36.802285106321875;
      this.lng = 10.170054531920181;
    }
    if (adreese.value === 'Bab El Bhar'){
      this.lat = 36.801159216018675;
      this.lng = 10.180136528414927;
    }
    if (adreese.value === 'Bab Souika'){
      this.lat = 36.8040350751332;
      this.lng = 10.16678352390585;
    }
    if (adreese.value === 'Carthage'){
      this.lat = 36.854500804183104;
      this.lng = 10.332996374336178;
    }
    if (adreese.value === 'Cité El Khadra'){
      this.lat = 36.83242901710824;
      this.lng = 10.20864532171872;
    }
    if (adreese.value === 'Djebel Djelloud'){
      this.lat = 36.77246825635621;
      this.lng = 10.205717766257122;
    }
    if (adreese.value === 'El Kabaria'){
      this.lat = 36.76134054889024;
      this.lng = 10.192029766697118;
    }
    if (adreese.value === 'El Hrairia'){
      this.lat = 36.79152789916304;
      this.lng = 10.089892603059447;
    }
    if (adreese.value === 'El Menzah'){
      this.lat = 36.836573827992794;
      this.lng = 10.19263015891721;
    }
    if (adreese.value === 'El Omrane'){
      this.lat = 36.81618382680715;
      this.lng = 10.162353185625054;
    }
    if (adreese.value === 'El Omrane Supérieur'){
      this.lat = 36.84426522601611;
      this.lng = 10.131795133694798;
    }
    if (adreese.value === 'El Ouardia'){
      this.lat = 36.76628532684794;
      this.lng = 10.189254906779924;
    }
    if (adreese.value === 'Ettahrir'){
      this.lat = 36.824599091912525;
      this.lng = 10.127007911879241;
    }
    if (adreese.value === 'Ezzouhour(Tunis)'){
      this.lat = 36.79801626670141;
      this.lng = 10.136097550462289;
    }
    if (adreese.value === 'La Goulette'){
      this.lat = 36.81965676480891;
      this.lng = 10.304032924759037;
    }
    if (adreese.value === 'La Marsa'){
      this.lat = 36.889111864488775;
      this.lng = 10.321572242701476;
    }
    if (adreese.value === 'Medina'){
      this.lat = 36.79784158966093;
      this.lng = 10.168707631158485;
    }
    if (adreese.value === 'Le Bardo'){
      this.lat = 36.81448747567415;
      this.lng = 10.140538723258002;
    }
    if (adreese.value === 'Sijoumi'){
      this.lat = 36.77147258316551;
      this.lng = 10.170445337207445;
    }
    if (adreese.value === 'Sidi El Béchir'){
      this.lat = 36.79277908774087;
      this.lng = 10.179018217836505;
    }
    if (adreese.value === 'Sidi Hassine'){
      this.lat = 36.7573948801937;
      this.lng = 10.107308195827684;
    }
    if (adreese.value === 'Ben arous'){
      this.lat = 36.75755449465264;
      this.lng = 10.23052688700854;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'El Mourouj'){
      this.lat = 36.736839654214016;
      this.lng = 10.208463179550364;
    }
    if (adreese.value === 'Ezzahra'){
      this.lat = 36.744829621729856;
      this.lng = 10.307361142519051;
    }
    if (adreese.value === 'Fouchana'){
      this.lat = 36.696892352853034;
      this.lng = 10.165806557713633;
    }
    if (adreese.value === 'Hammam Chott'){
      this.lat = 36.717987806134396;
      this.lng = 10.369012352900015;
    }
    if (adreese.value === 'Hammam Lif'){
      this.lat = 36.72331159047002;
      this.lng = 10.34547985380342;
    }
    if (adreese.value === 'La Nouvelle Medina'){
      this.lat = 36.74461184744988;
      this.lng = 10.245268469175246;
    }
    if (adreese.value === 'Megrine'){
      this.lat = 36.77622802658982;
      this.lng = 10.231974576157471;
    }
    if (adreese.value === 'Mohamedia'){
      this.lat = 36.67614553243354;
      this.lng = 10.15348765023274;
    }
    if (adreese.value === 'Mornag'){
      this.lat = 36.68474490677659;
      this.lng = 10.28714727203345;
    }
    if (adreese.value === 'Rades'){
      this.lat = 36.77308711061307;
      this.lng = 10.2773399672118;
    }
    if (adreese.value === 'Ariana'){
      this.lat = 36.866243579951906;
      this.lng = 10.165724482825217;
    }
    if (adreese.value === 'Ettadhamen'){
      this.lat = 36.8359390509493;
      this.lng = 10.1002549158887;
    }
    if (adreese.value === 'Kalaat el Andalous'){
      this.lat = 37.06141631128517;
      this.lng = 10.118984285232687;
    }
    if (adreese.value === 'Mnihla'){
      this.lat = 36.84653756710231;
      this.lng = 10.117320785062683;
    }
    if (adreese.value === 'Raoued'){
      this.lat = 36.94852296257177;
      this.lng = 10.19729688002629;
    }
    if (adreese.value === 'Sidi Thabet'){
      this.lat = 36.92495028815047;
      this.lng = 36.92495028815047;
    }
    if (adreese.value === 'Soukra'){
      this.lat = 36.87895276260946;
      this.lng = 10.26503106991116;
    }
    if (adreese.value === 'Bizerte Nord'){
      this.lat = 37.27642848587209;
      this.lng = 9.8635763607326;
    }
    if (adreese.value === 'Bizerte Sud'){
      this.lat = 37.25683970853218;
      this.lng = 9.67006275592922;
    }
    if (adreese.value === 'Djoumine'){
      this.lat = 36.92803246318601;
      this.lng = 9.384031939427015;
    }
    if (adreese.value === 'El Alia'){
      this.lat = 37.17293476175481;
      this.lng = 10.032684646677028;
    }
    if (adreese.value === 'Ghezala'){
      this.lat = 37.08450467732325;
      this.lng = 9.534115642329926;
    }
    if (adreese.value === 'Mateur'){
      this.lat = 37.039058935600515;
      this.lng = 9.664415175665443;
    }
    if (adreese.value === 'Menzel Bourguiba'){
      this.lat = 37.14440192442013;
      this.lng = 9.787530348772373;
    }
    if (adreese.value === 'Menzel Jemil'){
      this.lat = 37.23802344583091;
      this.lng = 9.91900405336067;
    }
    if (adreese.value === 'Ras Jabel'){
      this.lat = 37.22540359500104;
      this.lng = 10.12617564826305;
    }
    if (adreese.value === 'Sejenane'){
      this.lat = 37.059851293182724;
      this.lng = 9.2402100788063;
    }
    if (adreese.value === 'Tinja'){
      this.lat = 37.163541984368095;
      this.lng = 9.76508609964091;
    }
    if (adreese.value === 'Utique'){
      this.lat = 36.99569454428368;
      this.lng = 9.879237729033214;
    }
    if (adreese.value === 'Zarzouna'){
      this.lat = 37.25041733306394;
      this.lng = 9.877829348719205;
    }
    if (adreese.value === 'Béja Nord'){
      this.lat = 36.80229592661394;
      this.lng = 9.227955225471257;
    }
    if (adreese.value === 'Béja Sud'){
      this.lat = 36.659232423953384;
      this.lng = 9.181486642651112;
    }
    if (adreese.value === 'Amdoun'){
      this.lat = 36.773201265712586;
      this.lng = 9.083280960821659;
    }
    if (adreese.value === 'Goubellat'){
      this.lat = 36.54562507530009;
      this.lng = 9.660397043128796;
    }
    if (adreese.value === 'Medjez El Bab'){
      this.lat = 36.648518032498195;
      this.lng = 9.617113885335241;
    }
    if (adreese.value === 'Nefza'){
      this.lat = 36.97759745972463;
      this.lng = 9.077753911438164;
    }
    if (adreese.value === 'Teboursouk'){
      this.lat = 36.46083603822377;
      this.lng = 9.243401753800566;
    }
    if (adreese.value === 'Testour'){
      this.lat = 36.55036148004976;
      this.lng = 9.442942092925103;
    }
    if (adreese.value === 'Tibar'){
      this.lat = 36.52336463550682;
      this.lng = 9.101829103854413;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }
    if (adreese.value === 'Bou Mhel El Bassatine'){
      this.lat = 36.72658947037501;
      this.lng = 10.299908531012743;
    }

  }

}
