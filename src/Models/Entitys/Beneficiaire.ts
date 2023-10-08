import {Enregistrement} from "./Enregistrement";

export class Beneficiaire {
  id: number|null;
  tauxCotise: number | undefined;
  tauxRemis: number | null;
  tauxDu: number | null;
  taux_retranche: number | null;
  enregistrement: Enregistrement|undefined;
  avaliste: Enregistrement|undefined;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    id: number|null,
    taux_cotise: number | undefined,
    taux_remis: number | null,
    taux_du: number | null,
    taux_retranche: number | null,
    enregistrement: Enregistrement|undefined,
    avaliste: Enregistrement|undefined,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.tauxCotise = taux_cotise;
    this.tauxRemis = taux_remis;
    this.tauxDu = taux_du;
    this.taux_retranche = taux_retranche;
    this.enregistrement = enregistrement;
    this.avaliste = avaliste;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}

