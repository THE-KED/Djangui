export class Seance {
  id: number;
  lieu: string;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    id: number,
    lieu: string,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.lieu = lieu;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}
