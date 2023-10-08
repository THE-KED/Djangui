import {TypeTontine} from "./Entitys/TypeTontine";

export abstract class TontineData{

  id: number|null;
  actif: boolean;
  nom: string|null;
  type:TypeTontine;
  tauxTontine: number|null ;
  tauxEchec: number|null ;
  tauxRetard: number|null;
  frequence: number;
  created_at: Date | null;
  updated_at: Date | null;
  nbSeances:number;
  tauxEchecB:number|null

  constructor(id:number|null, actif: boolean, nom: string|null, type:TypeTontine, taux_tontine: number|null, taux_echec: number|null, taux_retard: number|null, frequence: number, created_at: Date | null, updated_at: Date | null,max:number , taux_echec_b:number|null
) {
    this.id=id;
    this.actif = actif;
    this.nom = nom;
    this.type=type;
    this.tauxTontine = taux_tontine;
    this.tauxEchec = taux_echec;
    this.tauxRetard = taux_retard;
    this.frequence = frequence;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.nbSeances = max;
    this.tauxEchecB = taux_echec_b;
  }
}
