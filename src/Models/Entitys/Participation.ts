import {Cotisation} from "./Cotisation";
import {Enregistrement} from "./Enregistrement";

export class Participation {
  id: number|null;
  retard: boolean;
  echec: boolean;
  tontine: boolean;
  cotisation: Cotisation;
  enregistrement: Enregistrement;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    id: number|null,
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
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}
