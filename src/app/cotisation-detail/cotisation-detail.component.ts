import {Component, OnInit} from '@angular/core';
import {Participation} from "../../Models/Entitys/Participation";
import {Beneficiaire} from "../../Models/Entitys/Beneficiaire";
import {Tontine} from "../../Models/Abstracts/Tontine";
import {Cotisation} from "../../Models/Entitys/Cotisation";
import {TontineServiceService} from "../Services/tontine-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cotisation-detail',
  templateUrl: './cotisation-detail.component.html',
  styleUrls: ['./cotisation-detail.component.scss']
})
export class CotisationDetailComponent implements OnInit{


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'echec'];
  dataSource:Participation[]=[];
  benefs:Map<number,Beneficiaire> = new Map<number, Beneficiaire>();
  idCot!:number;
  idTontine!:number;
  tontine:Tontine|undefined;
  cot:Cotisation;
  isEnd:string="No";
  tauxTontine=0;
  tauxEchec=0;
  tauxRetard=0;
  total:number=0;
  totalExpet:number=0;
  totalEchec:number=0;
  totalRetard:number=0;

  constructor(private tontineService:TontineServiceService,
              private route:ActivatedRoute) {
    // @ts-ignore
    this.cot=null;

  }

  ngOnInit() {

    this.idCot=this.route.snapshot.params["id"];
    this.idTontine=this.route.snapshot.params["idTon"];

    this.tontineService.getTontineById(this.idTontine).subscribe(
      data=>{
        this.tontine = data;
        data.actif? this.isEnd="No":this.isEnd="finish";
        this.tauxTontine=data.tauxTontine;
        this.tauxEchec=data.tauxEchec;
        this.tauxRetard=data.tauxRetard;
      }
    );

    this.tontineService.getCotisationById(this.idCot).subscribe(
      data=>{
        this.cot = data;
        console.log(data);
      }
    );

    this.tontineService.getParticipation(this.idCot).subscribe(
      data=>{
        this.dataSource = data;
        this.cot=data[0].cotisation;
        this.tontine=data[0].cotisation.tontine;
        this.setTotal();
      }
    );
    this.tontineService.getAllLastbenef(this.idCot).subscribe(
      data=>{
        for (let ben of data){
          this.benefs.set(ben.enregistrement.id,ben);
        }
      }
    );

  }

  getclass(id:number):string{

    if(this.benefs.has(id) && this.cot.beneficiaire.enregistrement.id!=id)
      return "ben";
    return "nonBen";
  }

  setTotal(){

    for(let data of this.dataSource ){
      if (data.tontine){
        this.total+=this.tauxTontine;
        if(data.retard)
          this.totalRetard+=this.tauxRetard;
      }
      else {
        this.totalEchec+=this.tauxEchec;
      }
      this.totalExpet+=this.tauxTontine;
    }

  }
}

