import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TontineServiceService} from "../Services/tontine-service.service";
import {Cotisation} from "../../Models/Entitys/Cotisation";
import {Tontine} from "../../Models/Abstracts/Tontine";

@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.scss']
})
export class SeanceListComponent implements OnInit{

  displayedColumns: string[] = ['intitule', 'seance', 'tontine'];
  dataSource : Cotisation[] = [];

  idTontine!:number;
  nextRoute:string ="/public/tontine/affiche/";
  tontine!:Tontine
  constructor(private router:ActivatedRoute,private route:Router,private tontineService:TontineServiceService) {
  }
  ngOnInit() {
    if(this.route.url.slice(0,22)=="/public/echec/seances/"){
      this.nextRoute="/public/echec/seances/";
    }
    this.idTontine=this.router.snapshot.params["id"];
    this.tontineService.getTontineById(this.idTontine).subscribe(
      data=>{
        this.tontine=data;
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
        });
    });



  }

  endCotisation(cot:Cotisation){
    cot.statut=3;
    cot.tontine=this.tontine;
    this.tontineService.saveCotisation(cot).subscribe(
      data =>{
        console.log("end",data);
      }
    );
  }

}
