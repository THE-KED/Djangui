import { Injectable } from '@angular/core';
import {Membre} from "../../Models/Entitys/Membre";
import {Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MEMBER_URL} from "../../Conf/Http";
import {MembrePoste} from "../../Models/Entitys/MembrePoste";
import {MembreData} from "../../Models/Membre";

@Injectable({
  providedIn: 'root'
})
export class MembreServiceService {

  private membres: Membre[]=[];
  public membreSub:Subject<Membre[]> = new Subject<Membre[]>();
  constructor(private http:HttpClient) { }

  // public setMembres(value: Membre[]) {
  //   this.membres = value;
  // }
  public emit(){
    this.membreSub.next(this.membres);
  }

  public LoadMembres(){

    // let hd = {
    //   headers: new HttpHeaders().set('Authorization','Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJLRUQiLCJleHAiOjE2OTU5NDczNjAsImlhdCI6MTY5NTA4MzM2MCwic2NvcGUiOiJVU0VSIn0.tuVP5LEFQQFhUt4WWTQfJ7SCidryvXbvuL5vEwEdbsX3l-oHbMIqHA-Bgn8i9_LAT5Rw62nclf5lv3Po2qfPhQ')
    // };
    return  this.http.get<Membre[]>(MEMBER_URL+"/");
  }

  public save(membre:Membre){

    return this.http.post<Membre>(MEMBER_URL+"/save",membre);
  }

  public signMember(membre:MembreData){

    return this.http.post<MembrePoste>(MEMBER_URL+"/sign",membre);
  }
}
