import {Component, OnInit} from '@angular/core';
import {TontineServiceService} from "../../Services/tontine-service.service";
import {Tontine} from "../../../Models/Abstracts/Tontine";
import {TypeTontine} from "../../../Models/Entitys/TypeTontine";

@Component({
  selector: 'app-showtontine',
  templateUrl: './tontine-bilan-list.component.html',
  styleUrls: ['./tontine-bilan-list.component.scss']
})
export class TontineBilanListComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'cotisation','type','retard', 'echec'];
  dataSource:Tontine[]=[];
  types:TypeTontine[]=[];
  tontines:Array<Tontine[]>=[];
  constructor(private tontineService:TontineServiceService) {

  }

  ngOnInit() {

    this.tontineService.getTypes().subscribe(
      types=>{
        this.types=types;
        for (let type of this.types){
          this.tontines.push(new Array<Tontine>());
        }

        this.tontineService.LoadTontine().subscribe(
          data=>{
            for(let i=0 ;i<data.length ;i++){
              for(let j=0;j<this.types.length;j++){
                if(data[i].type.id==this.types[j].id){
                  this.tontines[j].push(data[i]);
                }
              }
            }
          }
        );
        console.log(this.tontines);
      },
    );

  }

  getClass(tontine:Tontine ){

    return tontine.actif? "actif" : "inactif";
  }

  getTontine(j: number) {
    return this.tontines[j];
  }
}
