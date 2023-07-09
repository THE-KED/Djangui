export class Cotisation {
  id: number;
  nom: string;
  rang: number;
  statut: number;
  taux_echec: number | null;
  taux_vente: number | null;
  complement: number;
  gratuit: number;
  vente_id: number | null;
  simple_id: number | null;
  beneficiaire_id: number | null;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: number,
    nom: string,
    rang: number,
    statut: number,
    taux_echec: number | null,
    taux_vente: number | null,
    complement: number,
    gratuit: number,
    vente_id: number | null,
    simple_id: number | null,
    beneficiaire_id: number | null,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.nom = nom;
    this.rang = rang;
    this.statut = statut;
    this.taux_echec = taux_echec;
    this.taux_vente = taux_vente;
    this.complement = complement;
    this.gratuit = gratuit;
    this.vente_id = vente_id;
    this.simple_id = simple_id;
    this.beneficiaire_id = beneficiaire_id;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
