import {Utilisateur} from './Utilisateur';
import {Boutique} from './Boutique';
import {Produit} from './Produit';

export class Commentaire{
  id: number;
  message: string;
  nbrelike: number;
  nbredislike: number;
  nbreemojis: number;
  produit: Produit;
  user: Utilisateur;

  constructor( id, message, nbrelike, nbredislike, nbreemojis, produit, user) {
    this.id = id;
    this.message = message;
    this.nbrelike = nbrelike;
    this.nbredislike = nbredislike;
    this.nbreemojis = nbreemojis;
    this.produit = produit;
    this.user = user;
  }
}
