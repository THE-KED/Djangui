import {Membre} from "./Membre";
import {TypeSanction} from "./TypeSanction";

export class Sanction {
  id: number;
  membre: Membre;
  type_sanction: TypeSanction;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    id: number,
    membre: Membre,
    type_sanction: TypeSanction,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.membre = membre;
    this.type_sanction = type_sanction;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}
