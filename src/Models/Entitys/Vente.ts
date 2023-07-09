import {Tontine} from "../Abstracts/Tontine";

export class Vente extends Tontine{
  id: number;


  constructor(
    id: number,
    actif: boolean,
    nom: string,
    taux_tontine: number | null,
    taux_echec: number | null,
    taux_retard: number | null,
    frequence: number,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    super(actif,nom,taux_tontine,taux_echec,taux_retard,
      frequence,created_at,updated_at);
    this.id = id;
  }
}
