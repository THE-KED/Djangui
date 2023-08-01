import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TontineServiceService} from "../Services/tontine-service.service";
import {Cotisation} from "../../Models/Entitys/Cotisation";

@Component({
  selector: 'app-seance-list',
  templateUrl: './seance-list.component.html',
  styleUrls: ['./seance-list.component.scss']
})
export class SeanceListComponent implements OnInit{

  displayedColumns: string[] = ['intitule', 'seance', 'tontine'];
  dataSource : Cotisation[] = [];

  idTontine!:number;
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
      },
      error => {
        console.log("ERROR",error);
      }
    )
  }
}
