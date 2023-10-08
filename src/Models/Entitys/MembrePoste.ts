import {Membre} from "./Membre";
import {Poste} from "./Poste";

export class MembrePoste{

  id:number;
  membre:Membre;
  poste:Poste;
  createdAt:Date;
  updatedAt:Date;


  constructor(id: number, membre: Membre, poste: Poste, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.membre = membre;
    this.poste = poste;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
