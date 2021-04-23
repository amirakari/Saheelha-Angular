import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AfficherComponent} from './boutique/afficher/afficher.component';
import {LoginGuard} from './guard/login.guard';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {LogoutGuard} from './guard/logout.guard';
import {ProfilutilisateurComponent} from './utilisateur/profilutilisateur/profilutilisateur.component';
import {ProduitBoutiqueComponent} from './boutique/produit-boutique/produit-boutique.component';
import {ProfilComponent} from './boutique/profil/profil.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
import {PageBoutiqueComponent} from './page-boutique/page-boutique.component';
import {ListeBoutiqueComponent} from './liste-boutique/liste-boutique.component';
import {DetailsProduitComponent} from './details-produit/details-produit.component';
import {AbonnementComponent} from './boutique/abonnement/abonnement.component';
import {PayementComponent} from './payement/payement.component';
import {AjouterProduitComponent} from './ajouter-produit/ajouter-produit.component';
import {CommandeComponent} from './commande/commande.component';
import {BoutiqueUserComponent} from './utilisateur/boutique-user/boutique-user.component';
import {BoutiqueDonComponent} from './boutique/boutique-don/boutique-don.component';
import {PdfComponent} from './pdf/pdf.component';
const Routes: Routes = [
  {path: '', component:  AcceuilComponent},
  {path: 'login', component:  UtilisateurComponent, canActivate: [LogoutGuard]},
  {path: 'profilutilisateur', children : [
      {path: '', component: ProfilutilisateurComponent , canActivate: [LoginGuard]},
      {path: 'boutique', component: BoutiqueUserComponent , canActivate: [LoginGuard]},
    ]},
  {path: 'pageBoutique', component:  PageBoutiqueComponent},
  {path: 'commande', children : [
      {path: '', component:  CommandeComponent},
      {path: ':id', component:  PdfComponent},
    ]},
  {path: 'boutique', children : [
      {path: '' , component : ListeBoutiqueComponent},
      {path: 'addBoutique', component:  ProfilComponent},
      {path: ':id', children : [
          {path: '', component:  AfficherComponent, canActivate: [LoginGuard]},
          {path: 'ajouterProduit', component:  AjouterProduitComponent},
          {path: 'produitboutique', children : [
              {path: '', component:  ProduitBoutiqueComponent},
              {path: 'don', component:  BoutiqueDonComponent},
              {path: ':id' , component : DetailsProduitComponent},
            ]},
          {path: 'Abonnement' , component : AbonnementComponent},
        ]}
    ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
