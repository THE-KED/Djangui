export class PasswordReset {
  email: string;
  token: string;
  created_at: Date | null;

  constructor(email: string, token: string, created_at: Date | null) {
    this.email = email;
    this.token = token;
    this.created_at = created_at;
  }
}
