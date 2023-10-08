import {Tontine} from "../Abstracts/Tontine";
import {Beneficiaire} from "./Beneficiaire";

export class Cotisation {
  id: number|null;
  nom: string;
  rang: number;
  statut: number;
  tauxEchec: number;
  tauxVente: number;
  tauxTontine: number;
  complement: number;
  gratuit: number;
  tontine:Tontine;
  beneficiaire: Beneficiaire|null;
  createdAt: Date | null;
  updatedAt: Date | null;
  supplement:number;

  constructor(
    id: number|null,
    nom: string,
    rang: number,
    statut: number,
    taux_echec: number,
    taux_vente: number,
    complement: number,
    taux_tontine: number,
    gratuit: number,
    tontine: Tontine,
    beneficiaire: Beneficiaire|null,
    created_at: Date | null,
    updated_at: Date | null,
    supl:number
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
    this.createdAt = created_at;
    this.updatedAt = updated_at;
    this.supplement = supl;
  }
}
