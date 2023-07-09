import { Injectable } from '@angular/core';
import {Membre} from "../../Models/Entitys/Membre";
import {Subject} from "rxjs";
import {Simple} from "../../Models/Entitys/Simple";
import {Vente} from "../../Models/Entitys/Vente";

import * as MembesData from '../../TestData/MembersData.json';
import * as VentesData from '../../TestData/VentesData.json';
import * as SimpleData from '../../TestData/SimplesData.json';

@Injectable({
  providedIn: 'root'
})
export class DataTestService {

  private MemberList:Membre[]=[];
  private Simples:Simple[]=[];
  private Ventes:Vente[]=[];

  public MemberSubject:Subject<Membre[]> = new Subject<Membre[]>();
  public SimpleSubject:Subject<Simple[]> = new Subject<Simple[]>();
  public VenteSubject:Subject<Vente[]> = new Subject<Vente[]>();
  constructor() {
    Object.assign(this.MemberList,MembesData);
    Object.assign(this.Simples,SimpleData);
    Object.assign(this.Ventes,VentesData);
  }

  public emit(){

    this.MemberSubject.next(this.MemberList);
    this.SimpleSubject.next(this.Simples);
    this.VenteSubject.next(this.Ventes);

  }

  public logdatasize(){
    console.log("length:"+this.MemberList.length);
  }
}
