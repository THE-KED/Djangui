import {Tontine} from "../Abstracts/Tontine";

export class Simple extends Tontine{
  id: number;
  taux_echec_b: number | null;


  constructor(
    id: number,
    actif: boolean,
    nom: string,
    taux_tontine: number | null,
    taux_echec: number | null,
    taux_echec_b: number | null,
    taux_retard: number | null,
    frequence: number,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    super(actif,nom,taux_tontine,taux_echec,taux_retard,
      frequence,created_at,updated_at);
    this.id = id;
    this.taux_echec_b = taux_echec_b;
  }
}
