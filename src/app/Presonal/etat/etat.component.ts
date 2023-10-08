import {Component, OnInit} from '@angular/core';
import {TontineServiceService} from "../../Services/tontine-service.service";
import {Participation} from "../../../Models/Entitys/Participation";
import {AuthService} from "../../Services/auth.service";
import {Enregistrement} from "../../../Models/Entitys/Enregistrement";
import {Beneficiaire} from "../../../Models/Entitys/Beneficiaire";
import {Tontine} from "../../../Models/Abstracts/Tontine";

@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.scss']
})
export class EtatComponent implements OnInit{

  displayedColumns: string[] = ['No', 'Tontine', 'Seance' ,"Etat","Montant"];
  dataSource:Participation[]=[];
  echecs:Participation[]=[];
  retards:Participation[]=[];
  montants:number[]=[];
  ben:Beneficiaire[]=[];
  tontines:Tontine[]=[];
  tontid:number[]=[];
  id:number=0;

  constructor(private tontineService:TontineServiceService,private authService:AuthService) {
  }
  ngOnInit() {
    this.id=Number(this.authService.appUser?.membrePostes.membre.id);
    console.log("id",this.id);
    this.tontineService.getMyEchecs(this.id).subscribe(
      data=>{
        this.echecs=data;
        for(let echec of data){
          this.dataSource.push(echec);
        }
        console.log("Echecs",data);
      }
    );

    this.tontineService.getMyRetards(this.id).subscribe(
      data=>{
        this.retards=data;
        for(let retard of data){
          this.dataSource.push(retard);
        }
        console.log("Retard",data);
      }
    );
    this.tontineService.getben(this.id).subscribe(
      data=>{
        this.ben=data;
        for (let benef of data){
          if(benef.enregistrement?.tontine){
            this.tontines.push(benef.enregistrement.tontine);
            this.tontid.push(benef.enregistrement.tontine.id);
          }
        }
        console.log("ben" ,data);
      }
    )

  }

  checkMontant(part:Participation) {
    let ton = part.enregistrement.tontine
    if (ton)
      return ton.tauxTontine + part.cotisation.tauxEchec;
    return 0;
  }

  getClass(part:Participation){
    if(part.echec)
      return "echec";
    if (part.retard)
      return "retard";

    return "echecP"
  };
}
