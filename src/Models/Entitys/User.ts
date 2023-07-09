export class User {
  id: bigint;
  name: string;
  email: string;
  email_verified_at: Date | null;
  password: string;
  remember_token: string | null;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: bigint,
    name: string,
    email: string,
    email_verified_at: Date | null,
    password: string,
    remember_token: string | null,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.email_verified_at = email_verified_at;
    this.password = password;
    this.remember_token = remember_token;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
