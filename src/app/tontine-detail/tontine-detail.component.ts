import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CotisationDBComponent} from "../cotisation-db/cotisation-db.component";
import {TontineServiceService} from "../Services/tontine-service.service";
import {ActivatedRoute} from "@angular/router";
import {Participation} from "../../Models/Entitys/Participation";
import {Beneficiaire} from "../../Models/Entitys/Beneficiaire";
import {Tontine} from "../../Models/Abstracts/Tontine";
import {Cotisation} from "../../Models/Entitys/Cotisation";


@Component({
  selector: 'app-tontine-detail',
  templateUrl: './tontine-detail.component.html',
  styleUrls: ['./tontine-detail.component.scss']
})
export class TontineDetailComponent implements OnInit{


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'echec'];
  dataSource:Participation[]=[];
  benefs:Map<number,Beneficiaire> = new Map<number, Beneficiaire>();
  echecs:Map<number,Participation[]> = new Map<number, Participation[]>();
  idCot!:number;
  idTontine!:number;
  tontine:Tontine|undefined;
  cot:Cotisation|undefined;
  total:number=0;
  totalExpet:number=0;
  totalEchec:number=0;
  totalRetard:number=0;
  constructor(private tontineService:TontineServiceService,
              private route:ActivatedRoute,
              private dialogBox:MatDialog) {

  }

  ngOnInit() {

    this.idCot=this.route.snapshot.params["id"];
    this.idTontine=this.route.snapshot.params["idTon"];
    this.tontineService.getParticipation(this.idCot).subscribe(
      data=>{
        this.dataSource = data;
        this.cot=data[0].cotisation;
        this.tontine=data[0].cotisation.tontine;
      }
    );
    this.tontineService.getAllLastbenef(this.idCot).subscribe(
      data=>{
        for (let ben of data){
          this.benefs.set(ben.enregistrement.id,ben);
        }
      }
    );
    this.tontineService.getechec(this.idTontine).subscribe(
      data=>{
        console.log("yo",data.length);
        for (let part of data){
          let tab:Participation[]=[];
          if(!this.echecs.has(part.enregistrement.id)){
            tab.push(part);
            this.echecs.set(part.enregistrement.id,tab);
          }
          else{
            console.log("RRRRRRRRRR");
            // @ts-ignore
            tab=this.echecs.get(part.enregistrement.id);
            tab.push(part);
            this.echecs.set(part.enregistrement.id,tab);
          }
          tab=[];
        }

        console.log("echecs:",this.echecs);
      }
    );
  }

  getclass(id:number):string{

    if(this.benefs.has(id))
      return "ben";
    return "nonBen";
  }

  giveMyEchecMum(id:number){

    if(this.echecs.get(id)?.length){

      // @ts-ignore
      return this.echecs.get(id).length;
    }else
      return -1;

  }
  // setTotal(){
  //
  //   for(let data of this.dataSource ){
  //     if (data.tontine){
  //       // @ts-ignore
  //       this.total+=this.cot?.tauxTontine;
  //       if(data.retard)
  //         this.totalRetard+=c;
  //     }
  //     else {
  //       this.totalEchec+=this.tauxEchec;
  //     }
  //     this.totalExpet+=this.tauxTontine;
  //   }
  //
  // }

  openDialogBox(enterDuration:number,exitDuration:number){
    this.dialogBox.open(CotisationDBComponent,{
      width:'400px',
      enterAnimationDuration:enterDuration,
      exitAnimationDuration:exitDuration,
    })

  }

}
