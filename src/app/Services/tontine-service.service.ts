import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Tontine} from "../../Models/Abstracts/Tontine";
import {COTISATION_URL, MEMBER_URL, PARTICIPATION_URL, TONTINE_URL} from "../../Conf/Http";
import {TypeTontine} from "../../Models/Entitys/TypeTontine";
import {Cotisation} from "../../Models/Entitys/Cotisation";
import {Participation} from "../../Models/Entitys/Participation";
import {Beneficiaire} from "../../Models/Entitys/Beneficiaire";
import {Enregistrement} from "../../Models/Entitys/Enregistrement";
import {Enrg} from "../../Models/Enrg";
import {TontineData} from "../../Models/TontineData";
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class TontineServiceService {

  constructor(private http:HttpClient, private authService:AuthService) { }

  public LoadTontine(){

    return this.http.get<Tontine[]>(TONTINE_URL+"/");
  }

  public LoadMyTontine(){
    let id=-1;
    if(this.authService.appUser)
      id=this.authService.appUser.membre.id
    let params = new HttpParams().set("id",id);

    return this.http.post<Tontine[]>(TONTINE_URL+"/my",params);
  }

  public getMyEchecs(id:number){

    return this.http.get<Participation[]>(PARTICIPATION_URL+"/myEchecs/"+id);
  }

  public getMyRetards(id:number){

    return this.http.get<Participation[]>(PARTICIPATION_URL+"/myRetards/"+id);
  }

  public  getTypes(){

    return this.http.get<TypeTontine[]>(TONTINE_URL+"/types");
  }

  public  getCotisation(idTontine:number){

    return this.http.get<Cotisation[]>(COTISATION_URL+"/tontine/"+idTontine);
  }

  public getParticipation(idCot:number){

    return this.http.get<Participation[]>(PARTICIPATION_URL+"/"+idCot);
  }
  public getActualParticipation(idCot: number, cot: Cotisation | undefined){

    return this.http.post<Participation[]>(PARTICIPATION_URL+"/actual/participation/"+idCot,cot);
  }

  public getAllLastbenef(idCot:number){
    console.log("idCot",idCot);
    return this.http.get<Beneficiaire[]>(COTISATION_URL+"/beneficiaire/"+idCot);
  }

  public AllLastbenef(idTon:number){
    console.log("idTon",idTon);
    return this.http.get<Beneficiaire[]>(COTISATION_URL+"/tontine/beneficiaire/"+idTon);
  }

  public getechec(idCot:number){
    return this.http.get<Participation[]>(PARTICIPATION_URL+"/echec/"+idCot);
  }

  public getCotisationById(id:number){
    return this.http.get<Cotisation>(COTISATION_URL+"/"+id);
  }


  public getLastCot(idTon:number){
    return this.http.get<Cotisation>(COTISATION_URL+"/last/"+idTon);
  }

  public getLastNormalCot(idTon:number){
    return this.http.get<Cotisation>(COTISATION_URL+"/lastNormal/"+idTon);
  }

  public getActualCotisation(id:number){
    console.log(COTISATION_URL+"/actual/"+id);
    return this.http.get<Cotisation>(COTISATION_URL+"/actual/"+id);
  }
  public getTontineById(id:number){
    return this.http.get<Tontine>(TONTINE_URL+"/"+id);
  }

  public getechecBeforeCot(idCot:number){

    return this.http.get<Participation[]>(PARTICIPATION_URL+"/echec/cot/"+idCot);
  }

  public saveParticipation(data: Participation) {

    return this.http.post<Participation>(PARTICIPATION_URL+"/save",data);
  }
  public saveParticipationList(data: Participation[]) {

    return this.http.post<Participation[]>(PARTICIPATION_URL+"/saveList",data);
  }

  public saveCotisation(data: Cotisation) {

    return this.http.post<Cotisation>(COTISATION_URL+"/save/"+data.tontine.id,data);
  }


  public checkEchecsCot(idTon:number,idCot:number){

    return this.http.get<number[][]>(PARTICIPATION_URL+"/echec/cot/"+idTon+"/"+idCot);
  }

  public loadMembre(idTon:number){

    return this.http.get<Enregistrement[]>(TONTINE_URL+"/membres/"+idTon);
  }

  saveEnrg(enr: Enrg) {

    return this.http.post<Enregistrement>(TONTINE_URL+"/save/enrg",enr);
  }

  save(ton: TontineData) {

    return this.http.post<Tontine>(TONTINE_URL+"/save",ton);

  }
  saveTontine(ton: Tontine) {

    return this.http.post<Tontine>(TONTINE_URL+"/save",ton);

  }

  getRangEnrg(idTon:number){

    return this.http.get<number[][]>(MEMBER_URL+"/rang/enrg/"+idTon);
  }

  getben(id:number){

    return this.http.get<Beneficiaire[]>(COTISATION_URL+"/ben/"+id);
  }
}
