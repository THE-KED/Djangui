import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Tontine} from "../../Models/Abstracts/Tontine";
import {COTISTION_URL, TONTINE_URL} from "../../Conf/Http";
import {TypeTontine} from "../../Models/Entitys/TypeTontine";
import {Cotisation} from "../../Models/Entitys/Cotisation";
import {Participation} from "../../Models/Entitys/Participation";
import {Beneficiaire} from "../../Models/Entitys/Beneficiaire";

@Injectable({
  providedIn: 'root'
})
export class TontineServiceService {

  constructor(private http:HttpClient) { }

  public LoadTontine(){

    return this.http.get<Tontine[]>(TONTINE_URL+"/");
  }

  public  getTypes(){

    return this.http.get<TypeTontine[]>(TONTINE_URL+"/types");
  }

  public  getCotisation(idTontine:number){

    return this.http.get<Cotisation[]>(COTISTION_URL+"/tontine/"+idTontine);
  }

  public getParticipation(idCot:number){

    return this.http.get<Participation[]>(COTISTION_URL+"/participation/"+idCot);
  }

  public getAllLastbenef(idCot:number){
    return this.http.get<Beneficiaire[]>(COTISTION_URL+"/beneficiaire/"+idCot);
  }

  public getechec(idCot:number){
    return this.http.get<Participation[]>(COTISTION_URL+"/participation/echec/"+idCot);
  }

  public getCotisationById(id:number){
    return this.http.get<Cotisation>(COTISTION_URL+"/"+id);
  }
  public getTontineById(id:number){
    return this.http.get<Tontine>(TONTINE_URL+"/"+id);
  }
}
