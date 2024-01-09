import {Component, OnInit} from '@angular/core';
import {TontineServiceService} from "../../Services/tontine-service.service";
import {Tontine} from "../../../Models/Abstracts/Tontine";
import {TypeTontine} from "../../../Models/Entitys/TypeTontine";
import {Router} from "@angular/router";



@Component({
  selector: 'app-tontine-list',
  templateUrl: './tontine-list.component.html',
  styleUrls: ['./tontine-list.component.scss']
})

export class TontineListComponent implements OnInit{

  types:TypeTontine[]=[];
  tontines:Tontine[][]=[];
  constructor(private tontineService:TontineServiceService,private route :Router) {
  }
  ngOnInit() {

    this.tontineService.getTypes().subscribe(
      types=>{
        this.types=types;
        for (let type of this.types){
          this.tontines.push([]);
        }

        this.tontineService.LoadTontine().subscribe(
          data=>{
            if(this.route.url.includes("/start") || this.route.url.includes("/echec")){
              for(let i=0 ;i<data.length ;i++){
                for(let j=0;j<this.types.length;j++){
                  if(data[i].type.id==this.types[j].id){
                    if(data[i].actif)
                    this.tontines[j].push(data[i]);
                  }
                }
              }
            }else {
              for(let i=0 ;i<data.length ;i++){
                for(let j=0;j<this.types.length;j++){
                  if(data[i].type.id==this.types[j].id){
                    this.tontines[j].push(data[i]);
                  }
                }
              }
            }


          }
        );
      },
      error => {
        console.log("ERROR",error);
      },
      ()=>{

      }
    );
  }

}
