import {Component, OnInit} from '@angular/core';
import {DataTestService} from "../Services/data-test.service";
import {Simple} from "../../Models/Entitys/Simple";
import {Vente} from "../../Models/Entitys/Vente";
import {TontineServiceService} from "../Services/tontine-service.service";
import {Tontine} from "../../Models/Abstracts/Tontine";
import {TypeTontine} from "../../Models/Entitys/TypeTontine";


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-tontine-list',
  templateUrl: './tontine-list.component.html',
  styleUrls: ['./tontine-list.component.scss']
})

export class TontineListComponent implements OnInit{

  simples:Simple[]=[];
  ventes:Vente[]=[];
  types:TypeTontine[]=[];
  tontines:Tontine[][]=[];
  constructor(private tontineService:TontineServiceService) {
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
            for(let i=0 ;i<data.length ;i++){
              for(let j=0;j<this.types.length;j++){
                if(data[i].type.id==this.types[j].id){
                  this.tontines[j].push(data[i]);
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


    // this.dataServ.SimpleSubject.subscribe(data=>{
    //   this.simples=data;
    //   console.log("simple :",data)
    // });
    // this.dataServ.VenteSubject.subscribe(data=>{
    //   this.ventes=data;
    //   console.log("ventes :",data)
    // });
    // this.dataServ.emit();
  }

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}
