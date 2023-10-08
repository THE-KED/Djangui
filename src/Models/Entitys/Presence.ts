import {Membre} from "./Membre";
import {Seance} from "./Seance";

export class Presence {
  id: number;
  membre: Membre;
  seance: Seance;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    id: number,
    membre: Membre,
    seance: Seance,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.membre = membre;
    this.seance = seance;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}
