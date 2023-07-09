export class Enregistrement {
  id: number;
  rang: number;
  membre_id: number | null;
  vente_id: number | null;
  simple_id: number | null;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: number,
    rang: number,
    membre_id: number | null,
    vente_id: number | null,
    simple_id: number | null,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.rang = rang;
    this.membre_id = membre_id;
    this.vente_id = vente_id;
    this.simple_id = simple_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
