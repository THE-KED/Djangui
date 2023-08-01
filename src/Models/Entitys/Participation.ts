import {Cotisation} from "./Cotisation";
import {Enregistrement} from "./Enregistrement";

export class Participation {
  id: number;
  retard: boolean;
  echec: boolean;
  tontine: boolean;
  cotisation: Cotisation;
  enregistrement: Enregistrement;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: number,
    retard: boolean,
    echec: boolean,
    tontine: boolean,
    cotisation: Cotisation,
    enregistrement: Enregistrement,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.retard = retard;
    this.echec = echec;
    this.tontine = tontine;
    this.cotisation = cotisation;
    this.enregistrement = enregistrement;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
