export class PasswordReset {
  email: string;
  token: string;
  createdAt: Date | null;

  constructor(email: string, token: string, created_at: Date | null) {
    this.email = email;
    this.token = token;
    this.createdAt = created_at;
  }
}
