import {Enregistrement} from "./Enregistrement";

export class Beneficiaire {
  id: number;
  taux_cotise: number | null;
  taux_remis: number | null;
  taux_du: number | null;
  taux_retranche: number | null;
  enregistrement: Enregistrement;
  avaliste: Enregistrement;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: number,
    taux_cotise: number | null,
    taux_remis: number | null,
    taux_du: number | null,
    taux_retranche: number | null,
    enregistrement: Enregistrement,
    avaliste: Enregistrement,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.taux_cotise = taux_cotise;
    this.taux_remis = taux_remis;
    this.taux_du = taux_du;
    this.taux_retranche = taux_retranche;
    this.enregistrement = enregistrement;
    this.avaliste = avaliste;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

