import {Tontine} from "../Abstracts/Tontine";
import {TypeTontine} from "./TypeTontine";

export class Simple extends Tontine{

  constructor(
    id:number,
    actif: boolean,
    nom: string,
    type: TypeTontine,
    taux_tontine: number,
    taux_echec: number,
    taux_echec_b: number,
    taux_retard: number,
    frequence: number,
    created_at: Date | null,
    updated_at: Date | null,
    max:number,
  ) {
    super(id,actif,nom,type,taux_tontine,taux_echec,taux_retard,
      frequence,created_at,updated_at,max,taux_echec_b);
  }
}
