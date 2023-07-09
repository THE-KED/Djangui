export class Participation {
  id: number;
  retard: boolean;
  echec: boolean;
  tontine: boolean;
  cotisation_id: number;
  enregistrement_id: number;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: number,
    retard: boolean,
    echec: boolean,
    tontine: boolean,
    cotisation_id: number,
    enregistrement_id: number,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.retard = retard;
    this.echec = echec;
    this.tontine = tontine;
    this.cotisation_id = cotisation_id;
    this.enregistrement_id = enregistrement_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
