export class Seance {
  id: number;
  lieu: string;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: number,
    lieu: string,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.lieu = lieu;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
