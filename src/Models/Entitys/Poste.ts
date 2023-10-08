import {Membre} from "./Membre";

export class Poste {
  id: number;
  nom: string;
  validite: number;
  membre:Membre|null;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    id: number,
    nom: string,
    validite: number,
    membre:Membre|null,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.nom = nom;
    this.validite = validite;
    this.membre=membre;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}
