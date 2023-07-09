export class Poste {
  id: number;
  nom: string;
  validite: number;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: number,
    nom: string,
    validite: number,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.nom = nom;
    this.validite = validite;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
