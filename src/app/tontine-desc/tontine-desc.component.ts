import {Component, DoCheck, OnInit} from '@angular/core';
import {Cotisation} from "../../Models/Entitys/Cotisation";
import {ActivatedRoute} from "@angular/router";
import {TontineServiceService} from "../Services/tontine-service.service";
import {Tontine} from "../../Models/Abstracts/Tontine";
import {BilanServiceService} from "../Services/bilan-service.service";

@Component({
  selector: 'app-tontine-desc',
  templateUrl: './tontine-desc.component.html',
  styleUrls: ['./tontine-desc.component.scss']
})
export class TontineDescComponent implements OnInit,DoCheck{


  displayedColumns: string[] = ['S','Date','Cot.','T.V.','Comp.','Supl.','Boi.','Ret.','E.P.','E.N.P.','bt'];
  displayedSimpleColumns: string[] = ['S','Date','Cot.','Comp.','Ret.','E.P.','E.N.P.','bt'];
  dataSource : Cotisation[] = [];
  nbParts:number[][]=[];
  nbRetards:number[][]=[]
  nbPaidEchec:number[][]=[];
  nbNonPaidEchec:number[][]=[];
  idTontine!:number;
  nom:string="";
  nbToureGratuit:number=0;
  totalRetrad =0 ;totalEchecPaid =0; TotalComplement  = 0;
  totalTontine =0; totalEchecNonPaid=0;
  total=0;
  totalBoisson=0;
  totalGratuit=0;
  displayedFooterColumns= ['label','total','totalComplement','totalSuplement','boisson','totalRt','totalE.P','totalE.N.P','space'];
  displayedFooterSimpleColumns= ['label','total','totalComplement','totalRt','totalE.P','totalE.N.P','space'];
  tontine!:Tontine;
  type="Vente";
  lableColspan=3;
  totalSupplement=0;

  constructor(
    private router:ActivatedRoute,private tontineService:TontineServiceService,
    private bilanServ:BilanServiceService) {
  }
  ngOnInit() {

    this.idTontine=this.router.snapshot.params["id"];

    this.tontineService.getTontineById(this.idTontine).subscribe(
      data =>{
        this.tontine=data;
        this.type=data.type.nom;
        if(this.type=="Vente")
          this.lableColspan=3;
        if (this.type=="Simple")
          this.lableColspan=2;
        console.log(this.type);
      }
    );
    this.tontineService.getCotisation(this.idTontine).subscribe(
      data =>{
        this.dataSource = data;
        if(this.dataSource.length>0)
          this.nom=data[0].nom;
        for (let cot of data){
          if(cot.gratuit)
            this.nbToureGratuit++;
        }
      });
    this.bilanServ.getNbCotisation(this.idTontine).subscribe(
      data => {
        // console.log(data);
        this.nbParts = data;
      });

    this.bilanServ.getNbRetard(this.idTontine).subscribe(
      data =>{
        this.nbRetards = data;
    });

    this.bilanServ.getNbPaidEchec(this.idTontine).subscribe(
      data =>{
        this.nbPaidEchec =data;
      }
    );

    this.bilanServ.getNbNonPaidEchec(this.idTontine).subscribe(
      data =>{
        this.nbNonPaidEchec =data;

      }
    );
  }

  ngDoCheck() {
    // this.total=this.getTotal();

  }


  getTableHeader(){
    if (this.type=="Vente")
      return this.displayedColumns;
    else
      return this.displayedSimpleColumns;
  }
  getTableFooter(){
    if (this.type=="Vente")
      return this.displayedFooterColumns;
    else
      return this.displayedFooterSimpleColumns;
  }

  // renvoi le nombre de participation qu'il y'a eu a une cotisation
  nbPart(idCot:number,rang:number){
    let cot =this.dataSource[rang-1];
    for(let part of this.nbParts ){

      if(part[0]==idCot){
        return part[1];
      }
    }
    return 0;
  }

  nbPaid(idCot:number,rang:number){
    let cot =this.dataSource[rang-1];
    for(let echec of this.nbPaidEchec ){

      if(echec[0]==idCot){
        return echec[1]*(cot.tauxEchec+cot.tauxTontine);
      }
    }
    return 0;
  }

  // renvoi le suplement a une cotisation
  getSupl(rang:number){

    let cot = this.dataSource[rang-1];
    let nbcotise = this.nbPart(Number(cot.id),rang);
    let dif= nbcotise-this.tontine.nbSeances;
    if (dif<=0)
      return 0;

    return dif*this.tontine.tauxTontine;

  }
  nbNonPaid(idCot:number,rang:number){
    let cot :Cotisation= this.dataSource[rang-1];
    for(let ct of this.dataSource){
      if(ct.id==idCot)
        cot=ct;
    }
    // console.log(rang);
    for(let echec of this.nbNonPaidEchec ){

      if(echec[0]==idCot){
        // console.log("echec",echec[1]*cot.tauxEchec);
        return echec[1]*cot.tauxEchec;

      }
    }
    // console.log(0);
    return 0;

  }

  nbRetard(idCot:number,rang:number){
    let cot =this.dataSource[rang-1];
    for(let retar of this.nbRetards ){

      if(retar[0]==idCot){
        if(this.type=="Vente")
          return retar[1]*cot.tauxEchec;
        if(this.type=="Simple")
          return retar[1]*this.tontine.tauxRetard;
      }
    }
    return 0;
  }

  getTotal(){
    this.total=0;
    this.totalTontine = 0;
    this.totalEchecPaid = 0;
    this.totalRetrad =0;
    this.TotalComplement = 0;
    this.totalBoisson=0;
    this.totalGratuit=0;
    this.totalEchecNonPaid=0;
    this.totalSupplement=0;
    for (let cot of this.dataSource){

      if (this.type=="Vente"){
        this.totalTontine += cot.tauxVente;
        if(cot.id)
        if(this.nbPart(cot.id,cot.rang)>this.tontine.nbSeances){
          this.totalSupplement+= ((this.nbPart(cot.id,cot.rang)-this.tontine.nbSeances)*cot.tauxTontine);
        }
      }
      if (this.type=="Simple")
        this.totalTontine += this.tontine.tauxTontine;
      this.TotalComplement +=cot.complement;
      this.totalBoisson +=cot.tauxTontine;
      if (cot.gratuit && cot.id){
        this.totalGratuit+=(cot.tauxTontine*this.nbPart(cot.id,cot.rang));
      }

        for(let retar of this.nbRetards ){
          if(retar[0]==cot.id){
            if(this.type=="Vente")
              this.totalRetrad += retar[1]*cot.tauxEchec;
            if(this.type=="Simple")
              this.totalRetrad += retar[1]*this.tontine.tauxRetard;
          }
        }
      for(let echec of this.nbPaidEchec ){

        if(echec[0]==cot.id){
          if(this.type=="Vente")
            this.totalEchecPaid += echec[1]*(cot.tauxEchec+cot.tauxTontine);
          if(this.type=="Simple")
            this.totalEchecPaid += echec[1]*(this.tontine.tauxEchec+cot.tauxTontine);
        }
      }
      for(let echec of this.nbNonPaidEchec ){

        if(echec[0]==cot.id){
          if(this.type=="Vente")
            this.totalEchecNonPaid += echec[1]*(cot.tauxEchec);
          if(this.type=="Simple")
            this.totalEchecNonPaid += echec[1]*(this.tontine.tauxEchec);
        }
      }

    }
    // console.log(this.totalGratuit);
    return ((this.totalTontine+this.totalRetrad+this.totalEchecPaid+this.totalSupplement) - (this.TotalComplement+this.totalBoisson+this.totalGratuit));

  }

  getClass(elm:Cotisation){
    if(elm.gratuit)
      return "gratuit";
    return "nonGratuit";
  }

}
