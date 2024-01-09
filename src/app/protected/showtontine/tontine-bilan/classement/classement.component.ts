import {Component, OnDestroy, OnInit} from '@angular/core';
import {Participation} from "../../../../../Models/Entitys/Participation";
import {BilanServiceService} from "../../../../Services/bilan-service.service";
import {ActivatedRoute} from "@angular/router";
import {Enregistrement} from "../../../../../Models/Entitys/Enregistrement";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})

export class ClassementComponent implements OnInit,OnDestroy{

  parts:Participation[]=[];
  displayedColumns: string[] = ['position', 'name', 'E.N.P', 'echecs'];
  dataSource:Enregistrement[]=[];
  tab:Array<Enregistrement[]>=[];
  map:Map<number,Participation[]>= new Map<number, Participation[]>();
  idTontine=0;
  keys:number[]=[];
  index=0;
  PartsCall:Subscription = new Subscription();
  liste:number[][]=[];

  constructor(private bilanService:BilanServiceService,private router:ActivatedRoute) {
  }

  ngOnInit() {
    this.idTontine=Number(this.router.snapshot.params["id"]);
    console.log("id",this.idTontine);

    this.PartsCall=this.bilanService.getParts(this.idTontine).subscribe(
      data=>{
        this.parts=data;

        let key:number;

        for(let part of this.parts){
          key=part.enregistrement.id
          if(!this.map.has(key)){
            this.map.set(key,[part]);
          }
          else {
            let parts= this.map.get(key);
            if(parts){
              parts.push(part);
              this.map.set(key,parts);
            }
          }
        }
        this.dispatchData();
      }
    );

  }
ngOnDestroy() {
    this.PartsCall.unsubscribe();
}

  dispatchData(){

    let nbEchecs=0;
    let nbRetard=0;
    let nbEchecsPaid=0;
    let dette:number =0;

    for (let key of this.map.keys()){


      let parts=this.map.get(key);
      if(parts){
        nbEchecs=0;
        nbEchecsPaid=0;
        nbRetard=0;
        dette=0;

        for (let part of parts){
          let cotDate=part.cotisation.createdAt;
          let enrgDate =part.enregistrement.createdAt;
          if(cotDate && enrgDate){
            if(!part.tontine){
              nbEchecs++;
            }
            if (!part.tontine && !part.echec && enrgDate<cotDate){
              nbEchecsPaid++;
            }
            if (part.retard){
              nbRetard++;
            }

          }
        }
        dette = nbEchecs-nbEchecsPaid;

        this.liste.push([key,nbEchecs,dette]);

      }

    }

    this.liste.sort((a,b)=>{
      if (a[2] !== b[2]) {
        return a[2] - b[2]; // Tri par dette croissante
      } else {
        return a[1] - b[1]; // Si les dettes sont égales, trie par nbEchecs croissants
      }
    });
    for (let det of this.liste){

      let enrg=this.map.get(det[0])

      if(enrg)
          this.dataSource.push(enrg[0].enregistrement);
    }


  }

}
