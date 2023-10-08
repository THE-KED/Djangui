import {TontineData} from "./TontineData";
import {TypeTontine} from "./Entitys/TypeTontine";


export class Simple extends TontineData{

  constructor(
    id:number|null,
    actif: boolean,
    nom: string|null,
    type: TypeTontine,
    taux_tontine: number|null,
    taux_echec: number|null,
    taux_echec_b: number|null,
    taux_retard: number|null,
    frequence: number,
    created_at: Date | null,
    updated_at: Date | null,
    max:number,

) {
    super(id,actif,nom,type,taux_tontine,taux_echec,taux_retard,
      frequence,created_at,updated_at,max,taux_echec_b);
  }
}
