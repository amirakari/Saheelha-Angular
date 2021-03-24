import {RouterModule, Routes} from '@angular/router';
import {ListeBoutiqueComponent} from './liste-boutique/liste-boutique.component';
import {PageBoutiqueComponent} from './page-boutique/page-boutique.component';
import {DetailsProduitComponent} from './details-produit/details-produit.component';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {PayementComponent} from './payement/payement.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {ProfilComponent} from './boutique/profil/profil.component';
import {AfficherComponent} from './boutique/afficher/afficher.component';
import {ProduitBoutiqueComponent} from './boutique/produit-boutique/produit-boutique.component';
import {ProfilutilisateurComponent} from './utilisateur/profilutilisateur/profilutilisateur.component';
import {LoginGuard} from './guard/login.guard';
import {LogoutGuard} from './guard/logout.guard';
import {AbonnementComponent} from './boutique/abonnement/abonnement.component';


const APP_ROUTING: Routes = [
  {path: 'profilBoutique/:id', component:  AfficherComponent, canActivate: [LoginGuard]},
  {path: 'login', component:  UtilisateurComponent, canActivate: [LogoutGuard]},
  {path: 'profilutilisateur', component: ProfilutilisateurComponent , canActivate: [LoginGuard]},
  {path: 'produitboutique', component:  ProduitBoutiqueComponent},
  {path: 'boutique', component:  ProfilComponent},
  {path: 'acceuil', component:  AcceuilComponent},
  {path: 'pageBoutique', component:  PageBoutiqueComponent},
  {path: 'listeBoutique' , component : ListeBoutiqueComponent},
  {path: 'detailProduit' , component : DetailsProduitComponent},
  {path: 'Abonnement' , component : AbonnementComponent},
  {path: 'payementabo' , component : PayementComponent}
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
