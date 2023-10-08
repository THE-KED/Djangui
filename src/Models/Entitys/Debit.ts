import {Membre} from "./Membre";
import {TypeDebit} from "./TypeDebit";

export class Debit {
  id: number;
  membre: Membre;
  type_debit: TypeDebit;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    id: number,
    membre: Membre,
    type_debit: TypeDebit,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.membre = membre;
    this.type_debit = type_debit;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}
