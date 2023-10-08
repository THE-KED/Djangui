import { Injectable } from '@angular/core';
import {TontineServiceService} from "./tontine-service.service";
import {HttpClient} from "@angular/common/http";
import {COTISATION_URL, PARTICIPATION_URL, TONTINE_URL} from "../../Conf/Http";
import {Participation} from "../../Models/Entitys/Participation";

@Injectable({
  providedIn: 'root'
})
export class BilanServiceService {

  constructor(private tontineServ:TontineServiceService,private http:HttpClient) {
  }

  getNbCotisation(idTon:number){
    return  this.http.get<number[][]>(PARTICIPATION_URL+"/tontine/participation/"+idTon);
  }

  getNbRetard(idTon:number){
    return  this.http.get<number[][]>(PARTICIPATION_URL+"/retard/"+idTon);
  }

  getNbPaidEchec(idTon:number){
    return  this.http.get<number[][]>(PARTICIPATION_URL+"/echec/paid/"+idTon);
  }

  getNbNonPaidEchec(idTon:number){
    return  this.http.get<number[][]>(PARTICIPATION_URL+"/echec/nopaid/"+idTon);
  }

  getParts(idTon:number){
    console.log("idTon",idTon);
    return this.http.get<Participation[]>(PARTICIPATION_URL+"/participationByTontine/"+idTon);
  }
}
