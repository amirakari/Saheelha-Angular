export class Boutique{
  nom: string;
  domaine: string;
  mailprofessionnelle: string;
  adresse: string;
  horaire: string;
  photo: string;
  visite: string;

  constructor( nom, domaine, mailprofessionnelle, adresse, horaire, photo, visite) {
    this.nom = nom;
    this.domaine = domaine;
    this.mailprofessionnelle = mailprofessionnelle;
    this.adresse = adresse;
    this.horaire = horaire;
    this.photo = photo;
    this.visite = visite;
  }
}
