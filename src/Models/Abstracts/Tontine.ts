import {TypeTontine} from "../Entitys/TypeTontine";

export abstract class Tontine{

  id: number;
  actif: boolean;
  nom: string;
  type:TypeTontine;
  tauxTontine: number ;
  tauxEchec: number;
  tauxRetard: number;
  frequence: number;
  createdAt: Date | null;
  updatedAt: Date | null;
  nbSeances: number;
  tauxEchecB: number|null;

  constructor(id:number, actif: boolean, nom: string, type:TypeTontine, taux_tontine: number, taux_echec: number, taux_retard: number, frequence: number, created_at: Date | null, updated_at: Date | null , max: number,tauxEchecb:number|null) {
    this.id=id;
    this.actif = actif;
    this.nom = nom;
    this.type=type;
    this.tauxTontine = taux_tontine;
    this.tauxEchec = taux_echec;
    this.tauxRetard = taux_retard;
    this.frequence = frequence;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
    this.nbSeances = max;
    this.tauxEchecB = tauxEchecb
  }
}
