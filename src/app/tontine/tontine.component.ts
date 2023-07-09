import {Component, Input, OnInit} from '@angular/core';
import {Tontine} from "../../Models/Abstracts/Tontine";

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

  constructor() {

  }

  ngOnInit() {
    if (this.tontine.actif)
      this.classeName="encour";
  }
}
