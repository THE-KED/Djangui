import {Epargnant} from "./Epargnant";
import {Versement} from "./Versement";
import {Garrantie} from "./Garrantie";

export class Pret{

  id:number|null = null;
  epargnant:Epargnant|null = null;
  montant:number|null = null;
  datePret:Date|null = null;
  echeanche:Date|null = null;
  motif:string="";
  versements:Versement[] = [];
  garrantie:Garrantie[] = [];


  constructor() {
  }

}
