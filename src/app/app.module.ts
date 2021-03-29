import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageBoutiqueComponent } from './page-boutique/page-boutique.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ListeBoutiqueComponent } from './liste-boutique/liste-boutique.component';
import {NgxCaptchaModule} from 'ngx-captcha';
import { PayementComponent } from './payement/payement.component';
import { HttpComponent } from './http/http.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProfilComponent } from './boutique/profil/profil.component';
import { LoginInterceptorProvider} from './interceptors/login.interceptor';
import { AfficherComponent } from './boutique/afficher/afficher.component';
import { ProduitBoutiqueComponent } from './boutique/produit-boutique/produit-boutique.component';
import { ProfilutilisateurComponent } from './utilisateur/profilutilisateur/profilutilisateur.component';
import {LoginGuard} from './guard/login.guard';
import {LogoutGuard} from './guard/logout.guard';
import { AbonnementComponent } from './boutique/abonnement/abonnement.component';
import {APP_BASE_HREF} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    HeaderComponent,
    FooterComponent,
    PageBoutiqueComponent,
    DetailsProduitComponent,
    ListeBoutiqueComponent,
    PayementComponent,
    HttpComponent,
    AcceuilComponent,
    ProfilComponent,
    AfficherComponent,
    ProduitBoutiqueComponent,
    ProfilutilisateurComponent,
    AbonnementComponent,
    AjouterProduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxCaptchaModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [{provide: APP_BASE_HREF , useValue: '/'},
    LoginGuard, LogoutGuard, LoginInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
