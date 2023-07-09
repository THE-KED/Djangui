export class Presence {
  id: number;
  membre_id: number;
  seance_id: number;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: number,
    membre_id: number,
    seance_id: number,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.membre_id = membre_id;
    this.seance_id = seance_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
