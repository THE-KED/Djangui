import {Component, OnInit} from '@angular/core';
import {Membre} from "../../../Models/Entitys/Membre";
import {ActivatedRoute} from "@angular/router";
import {Tontine} from "../../../Models/Abstracts/Tontine";
import {TontineServiceService} from "../../Services/tontine-service.service";
import {MembreServiceService} from "../../Services/membre-service.service";
import {Enrg} from "../../../Models/Enrg";
import {Observable} from "rxjs";
import {Cotisation} from "../../../Models/Entitys/Cotisation";
import {Participation} from "../../../Models/Entitys/Participation";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})

export class AddMemberComponent implements OnInit{

  datasource:Membre[]=[];
  displayedColumns: string[] = ['position', 'name', 'profession', 'participation','add'];
  displayedFooter: string[] = ['footer'];

  tontine!:Tontine;
  member:Membre[]=[];
  nbRang:number[][]=[];
  lastCot: Cotisation[]=[];
  constructor(
              private route:ActivatedRoute,
              private tontineService:TontineServiceService,
              private memberService:MembreServiceService) {

  }

  ngOnInit() {

    let idTon:number = this.route.snapshot.params["id"];
    this.tontineService.getCotisation(idTon).subscribe(
      data =>{
        this.lastCot=data;
      }
    );
    this.memberService.LoadMembres().subscribe(
      data=>{

        this.datasource=data;
        this.member=data;
        this.tontineService.getTontineById(idTon).subscribe(
          data=>{
            this.tontine=data;
        });

        this.tontineService.getRangEnrg(idTon).subscribe(
          data => {
            let isAdd=false;
          for (let elm of this.datasource){
            isAdd=false;
            for (let rang of data){
              if(rang[0]==elm.id){
                this.nbRang.push(rang);
                isAdd=true;
              }
            }
            if (!isAdd){
              this.nbRang.push([elm.id,0]);
            }

          }

        });
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue.trim().toLowerCase());
    this.datasource=this.member;
    this.datasource = this.datasource.filter((obj)=>{

      if(filterValue.trim().toLowerCase().length==0)
        return obj.nom.length!=0;
      return obj.nom.toLowerCase().includes(filterValue.trim().toLowerCase());
    })
  }

  checkMyRang(member:Membre){
    for (let rg of this.nbRang){

      if(rg[0]==member.id)
        return rg[1];
    }
    return 0;
  }

  addMyrang(member:Membre){
    for (let rg of this.nbRang){

      if(rg[0]==member.id)
        rg[1]++;
    }
  }

  add(membre:Membre,rang:number){

    let enr = new Enrg(null,rang,membre,this.tontine,new Date(),new Date());
    let parts :Participation[] = [];



    this.tontineService.saveEnrg(enr).subscribe(data=>{
      console.log(data);

      for (let cot of this.lastCot){
        parts.push(new Participation(null,false,true,false,cot,data,new Date(),new Date()));
      }
      this.tontineService.saveParticipationList(parts).subscribe(
        data=>{
          console.log("save part");
          this.addMyrang(membre);

        }
      );

    });

  }

}
