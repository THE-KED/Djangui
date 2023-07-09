export class Beneficiaire {
  id: number;
  taux_cotise: number | null;
  taux_remis: number | null;
  taux_du: number | null;
  taux_retranche: number | null;
  enregistrement_id: number | null;
  avaliste: number | null;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: number,
    taux_cotise: number | null,
    taux_remis: number | null,
    taux_du: number | null,
    taux_retranche: number | null,
    enregistrement_id: number | null,
    avaliste: number | null,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.taux_cotise = taux_cotise;
    this.taux_remis = taux_remis;
    this.taux_du = taux_du;
    this.taux_retranche = taux_retranche;
    this.enregistrement_id = enregistrement_id;
    this.avaliste = avaliste;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

