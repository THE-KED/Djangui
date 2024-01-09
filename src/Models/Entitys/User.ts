import {MembrePoste} from "./MembrePoste";
import {Role} from "./Role";
import {Membre} from "./Membre";

export class User {
  id: bigint;
  name: string;
  email: string;
  email_verified_at: Date | null;
  password: string;
  remember_token: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  roles:Role[];
  membre:Membre;


  constructor(id: bigint, name: string, email: string, email_verified_at: Date | null, password: string, remember_token: string | null, created_at: Date | null, updated_at: Date | null, roles: Role[], membre: Membre) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.email_verified_at = email_verified_at;
    this.password = password;
    this.remember_token = remember_token;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
    this.roles = roles;
    this.membre = membre;
  }
}
