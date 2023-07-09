export class Credit {
  id: number;
  membre_id: number;
  type_credit_id: number;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: number,
    membre_id: number,
    type_credit_id: number,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.membre_id = membre_id;
    this.type_credit_id = type_credit_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
