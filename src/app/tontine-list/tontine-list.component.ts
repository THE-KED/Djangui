import {Component, OnInit} from '@angular/core';
import {DataTestService} from "../Services/data-test.service";
import {Simple} from "../../Models/Entitys/Simple";
import {Vente} from "../../Models/Entitys/Vente";


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
  constructor(private dataServ:DataTestService) {
  }
  ngOnInit() {

    this.dataServ.SimpleSubject.subscribe(data=>{
      this.simples=data;
      console.log("simple :",data)
    });
    this.dataServ.VenteSubject.subscribe(data=>{
      this.ventes=data;
      console.log("ventes :",data)
    });
    this.dataServ.emit();
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
