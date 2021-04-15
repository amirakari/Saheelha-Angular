import {Utilisateur} from './Utilisateur';
import {Produit} from './Produit';

export class Commande{
  id: number;
  date: Date;
  quantite: number;
  user: Utilisateur;
  produit: Produit;
  constructor( id, date, quantite, user, produit) {
    this.id = id;
    this.date = date;
    this.quantite = quantite;
    this.user = user;
    this.produit = produit;
  }
}
