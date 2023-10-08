import {Membre} from "./Membre";
import {Tontine} from "../Abstracts/Tontine";

export class Enregistrement {
  id: number;
  rang: number;
  membre: Membre;
  tontine: Tontine |null
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    id: number,
    rang: number,
    membre: Membre,
    tontine: Tontine | null,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.rang = rang;
    this.membre = membre;
    this.tontine = tontine;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}
