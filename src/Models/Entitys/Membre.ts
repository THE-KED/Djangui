export class Membre{

  id:string|number;
  nom:string;
  ddn:string|Date;
  ldn:string;
  sexe:string;
  profession:string;
  cni:string;
  dcni:string|Date;
  tel:string;
  adresse:string;
  image:File|null;
  actif:string|number;
  p1:string|null;
  p2:string|null;
  p3:string|null;
  p4:string|null;
  p5:string|null;
  created_at:string|Date;
  updated_at:string|Date


  constructor(id: string | number, nom: string, ddn: string | Date, ldn: string, sexe: string, profession: string, cni: string, dcni: string | Date, tel: string, adresse: string, image: File | null, actif: string | number, p1: string | null, p2: string | null, p3: string | null, p4: string | null, p5: string | null, created_at: string | Date, updated_at: string | Date) {
    this.id = id;
    this.nom = nom;
    this.ddn = ddn;
    this.ldn = ldn;
    this.sexe = sexe;
    this.profession = profession;
    this.cni = cni;
    this.dcni = dcni;
    this.tel = tel;
    this.adresse = adresse;
    this.image = image;
    this.actif = actif;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
    this.p5 = p5;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

// constructor() {
  //   this.id=0;
  //   this.nom="";
  //   this.
  //   this.created_at= new Date(Date.now());
  // }

}
