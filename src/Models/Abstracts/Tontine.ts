export abstract class Tontine{

  actif: boolean;
  nom: string;
  taux_tontine: number | null;
  taux_echec: number | null;
  taux_retard: number | null;
  frequence: number;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(actif: boolean, nom: string, taux_tontine: number | null, taux_echec: number | null, taux_retard: number | null, frequence: number, created_at: Date | null, updated_at: Date | null) {
    this.actif = actif;
    this.nom = nom;
    this.taux_tontine = taux_tontine;
    this.taux_echec = taux_echec;
    this.taux_retard = taux_retard;
    this.frequence = frequence;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
