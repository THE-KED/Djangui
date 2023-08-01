import { Component } from '@angular/core';
import {Cotisation} from "../../Models/Entitys/Cotisation";
import {ActivatedRoute} from "@angular/router";
import {TontineServiceService} from "../Services/tontine-service.service";
import {Tontine} from "../../Models/Abstracts/Tontine";
import {Participation} from "../../Models/Entitys/Participation";

@Component({
  selector: 'app-tontine-desc',
  templateUrl: './tontine-desc.component.html',
  styleUrls: ['./tontine-desc.component.scss']
})
export class TontineDescComponent {


  displayedColumns: string[] = ['S','Date','Cot.','T.V.','Comp.','Boi.','Ret.','E.P.','E.N.P.','bt'];
  dataSource : Cotisation[] = [];
  idTontine!:number;
  nom:string="";
  constructor(private router:ActivatedRoute,private tontineService:TontineServiceService) {
  }
  ngOnInit() {

    this.idTontine=this.router.snapshot.params["id"];

    this.tontineService.getCotisation(this.idTontine).subscribe(
      data =>{
        this.dataSource = data;
        this.dataSource.sort((a, b) => {
          if (a.rang>b.rang)
            return -1;
          else if (a.rang<b.rang)
            return 1;
          else
            return 0;
        });

        if(this.dataSource.length>0)
          this.nom=data[0].nom.slice(11);

      },
    )
  }

  getNbCot(idCot:number){
    let nbCot=0;
    this.tontineService.getParticipation(idCot).subscribe(
      data=>{
        data;
        console.log("data.length = ",data.length);
        for (let dat of data){
          if (dat.tontine)
            nbCot++;
        }
      });

    return nbCot;
  }

}
