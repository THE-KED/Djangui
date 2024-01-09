import {Component, Input, OnInit} from '@angular/core';
import {Tontine} from "../../../../Models/Abstracts/Tontine";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tontine',
  templateUrl: './tontine.component.html',
  styleUrls: ['./tontine.component.scss']
})
export class TontineComponent implements OnInit{

  @Input("tontine")
  tontine!:Tontine;

  name="Tontine vente";
  begginDate = new Date(Date.now());
  isFinish = true;
  classeName="Btn"
  nextRoute="./seances"
  jsonTon="";

  constructor(private route:Router) {

  }

  ngOnInit() {

    this.jsonTon=JSON.stringify(this.tontine);

    if (this.tontine.actif)
      this.classeName="encour";

    if(this.route.url=="/public/start")
      this.nextRoute="./check"
  }
}
