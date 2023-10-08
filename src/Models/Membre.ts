import {Poste} from "./Entitys/Poste";

export class MembreData{

  id:number|null;
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
  createdAt:string|Date;
  updatedAt:string|Date;
  postes:Poste[]|null;


  constructor(id: number|null, nom: string, ddn: string | Date, ldn: string, sexe: string, profession: string, cni: string, dcni: string | Date, tel: string, adresse: string, image: File | null, actif: string | number, p1: string | null, p2: string | null, p3: string | null, p4: string | null, p5: string | null, created_at: string | Date, updated_at: string | Date, poste:Poste[]|null) {
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
    this.createdAt = created_at;
    this.updatedAt = updated_at;
    this.postes=poste;
  }


}
