import { TypeEpargne } from "./TypeEpargne";
import {Epargnant} from "./Epargnant";

export class Epargne {

  id:number|null = null;
  nom:string|null = null;
  dateCreation:Date|null = null;
  dateCassation:Date|null = null;
  coefPret:number = 1;
  tauxInteretPret:number = 1;
  minDep:number = 1;
  basePret:number|null = null;
  delaisRemboursement:number|null = null;
  type:TypeEpargne|null = null;
  epargnants:Epargnant[]=[];


  constructor() {
  }



}
