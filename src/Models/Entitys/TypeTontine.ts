export class TypeTontine{

  id: number;
  nom: string;
  code: number;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(id:number,nom:string,code:number,created:Date,updated:Date) {
    this.id=id;
    this.code=code;
    this.created_at = created;
    this.updated_at = updated;
    this.nom = nom;
  }
}
