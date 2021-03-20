export class Utilisateur{
  nom: string;
  prenom: string;
  numtel: number;
  adresse: string;
  type: string;
  mail: string;
  password: string;

  constructor( nom, prenom, mail, password, adresse, numtel, type) {
    this.nom = nom;
    this.prenom = prenom;
    this.numtel = numtel;
    this.adresse = adresse;
    this.type = type;
    this.mail = mail;
    this.password = password;
  }
}
