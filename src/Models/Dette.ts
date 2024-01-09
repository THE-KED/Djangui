export class Dette {
  key:number;
  montant:number;
  next:Dette|null;
  prevrious:Dette|null;

  constructor() {
    this.montant=0;
    this.key=0;
    this.next=null;
    this.prevrious=null;
  }
}
