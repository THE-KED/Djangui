import {TypeTontine} from "./Entitys/TypeTontine";
import {TontineData} from "./TontineData";


export class Vente extends TontineData{
  constructor(
    id: number|null,
    actif: boolean,
    nom: string|null,
    type:TypeTontine,
    taux_tontine: number|null,
    taux_echec: number|null,
    taux_retard: number|null,
    frequence: number,
    created_at: Date | null,
    updated_at: Date | null,
    max:number,
    taux_echec_b:number|null
  ) {
    super(id,actif,nom,type,taux_tontine,taux_echec,taux_retard,
      frequence,created_at,updated_at,max,taux_echec_b);
  }
}
