import { Injectable } from '@angular/core';
import {Membre} from "../../Models/Entitys/Membre";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MEMBER_URL} from "../../Conf/Http";

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

    return  this.http.get<Membre[]>(MEMBER_URL+"/");
  }

}
