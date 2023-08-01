import {Tontine} from "../Abstracts/Tontine";
import {Beneficiaire} from "./Beneficiaire";

export class Cotisation {
  id: number;
  nom: string;
  rang: number;
  statut: number;
  tauxEchec: number;
  tauxVente: number;
  tauxTontine: number;
  complement: number;
  gratuit: number;
  tontine:Tontine;
  beneficiaire: Beneficiaire;
  created_at: Date | null;
  updated_at: Date | null;

  constructor(
    id: number,
    nom: string,
    rang: number,
    statut: number,
    taux_echec: number,
    taux_vente: number,
    complement: number,
    taux_tontine:number,
    gratuit: number,
    tontine:Tontine,
    beneficiaire: Beneficiaire,
    created_at: Date | null,
    updated_at: Date | null
  ) {
    this.id = id;
    this.nom = nom;
    this.rang = rang;
    this.statut = statut;
    this.tauxEchec = taux_echec;
    this.tauxVente = taux_vente;
    this.tauxTontine = taux_tontine;
    this.complement = complement;
    this.gratuit = gratuit;
    this.tontine =tontine;
    this.beneficiaire = beneficiaire;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
