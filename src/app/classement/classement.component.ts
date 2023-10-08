import {Component, OnInit} from '@angular/core';
import {Participation} from "../../Models/Entitys/Participation";
import {BilanServiceService} from "../Services/bilan-service.service";
import {ActivatedRoute} from "@angular/router";
import {Enregistrement} from "../../Models/Entitys/Enregistrement";

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.scss']
})
export class ClassementComponent implements OnInit{

  parts:Participation[]=[];
  displayedColumns: string[] = ['position', 'name', 'echecs',];
  dataSource:Enregistrement[]=[];
  tab:Array<Enregistrement[]>=[];
  map:Map<number,Participation[]>= new Map<number, Participation[]>();
  echecs:Map<number,Enregistrement[]>= new Map<number, Enregistrement[]>();
  idTontine=0;
  keys:number[]=[];
  index=0;
  echecsDatas:number[]=[];

  constructor(private bilanService:BilanServiceService,private router:ActivatedRoute) {
  }

  ngOnInit() {
    this.idTontine=Number(this.router.snapshot.params["id"]);
    console.log("id",this.idTontine);
    this.bilanService.getParts(this.idTontine).subscribe(
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


  dispatchData(){

    let userPart:Participation[]=[];
    let nbEchecs=0;
    let nbRetard=0;
    let nbEchecsPaid=0;
    let clean:Enregistrement[]=[];
    let retard:Enregistrement[]=[];
    let justRetard:Enregistrement[]=[];

    for (let key of this.map.keys()){

      let parts=this.map.get(key);
      let buyechecs:number[]=[];
      if(parts){
        nbEchecs=0;
        nbEchecsPaid=0;
        nbRetard=0;

        for (let part of parts){
          let cotDate=part.cotisation.createdAt;
          let enrgDate =part.enregistrement.createdAt;
          console.log("cotDate",cotDate,"enrgDate",enrgDate);
          if(cotDate && enrgDate){
            console.log("a");
            if(part.echec){
              console.log("aa");
              nbEchecs++;
            }
            if (!part.tontine && !part.echec && enrgDate<cotDate){
              console.log("aaa");
              nbEchecsPaid++;
            }
            if (part.retard){
              console.log("aaaa");
              nbRetard++;
            }

          }

        }
        if(nbEchecs==0 && nbEchecsPaid==0){
          console.log("b");
          if(nbRetard==0){
            console.log("bb");
            clean.push(parts[0].enregistrement);
          }
          else {
            console.log("bbb");
            justRetard.push(parts[0].enregistrement);
          }
        }else {
          console.log("E");
          if(this.echecs.has(nbEchecs)){
            console.log("e");
            let ecs=this.echecs.get(nbEchecs);
            if (ecs){
              console.log("ee");
              ecs.push(parts[0].enregistrement);
              this.echecs.set(nbEchecs,ecs);
            }
          }else {
            console.log("eee");
            this.echecs.set(nbEchecs,[parts[0].enregistrement]);
          }
        }

      }

    }
    console.log("clean",clean,"retard",justRetard);
    this.tab.push(clean);
    this.tab.push(justRetard);
    for(let data of clean){
      this.dataSource.push(data);
      this.echecsDatas.push(0);
    }
    for(let data of justRetard){
      this.dataSource.push(data);
      this.echecsDatas.push(0);

    }
    let keys:Array<number>=[];
    for (let key of this.echecs.keys()){
      keys.push(key);
    }
    keys.sort((n1,n2) => n1 - n2);
    this.keys=keys;
    for (let key of keys){
      let ech=this.echecs.get(key)

      if(ech){
        for(let data of ech){
          this.dataSource.push(data);
          this.echecsDatas.push(key);
        }
        this.tab.push(ech);
      }
    }


    console.log("tab",this.dataSource);
    console.log("echecs",this.echecsDatas);

  }

  ind(i: number) {
    this.index= (i+2);
  }
}
