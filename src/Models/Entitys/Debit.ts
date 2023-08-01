import {Membre} from "./Membre";
import {TypeDebit} from "./TypeDebit";

export class Debit {
  id: number;
  membre: Membre;
  type_debit: TypeDebit;
  created_at: Date | null;
  updated_at: Date | null;

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
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
