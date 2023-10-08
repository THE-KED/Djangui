import {Membre} from "./Membre";
import {TypeCredit} from "./TypeCredit";

export class Credit {
  id: number;
  membre: Membre;
  type_credit: TypeCredit;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    id: number,
    membre: Membre,
    type_credit: TypeCredit,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.membre = membre;
    this.type_credit = type_credit;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}
