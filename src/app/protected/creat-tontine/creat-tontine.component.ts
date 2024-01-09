import { Component } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {TypeTontine} from "../../../Models/Entitys/TypeTontine";
import {TontineData} from "../../../Models/TontineData";
import {Vente} from "../../../Models/Vente";
import {Simple} from "../../../Models/Simple";
import {TontineServiceService} from "../../Services/tontine-service.service";

@Component({
  selector: 'app-creat-tontine',
  templateUrl: './creat-tontine.component.html',
  styleUrls: ['./creat-tontine.component.scss']
})
export class CreatTontineComponent {

  Form=this.formBuilder.group({
    intituler:"",
    type:"",
    tauxTontine:new FormControl(0),
    tauxEchecB:new FormControl(0),
    tauxRetard:new FormControl(0),
    tauxEchec:new FormControl(0),
    frequence:"",
    nbSeances:new FormControl(0),
  });

  constructor(private formBuilder:FormBuilder,private router:Router,
              private tontineService:TontineServiceService) {

  }

  creat(){
    console.log(this.Form);
      let today =  new Date();
      let type=String(this.Form.value.type);
      let tauxTontine=Number(this.Form.value.tauxTontine);
      let tauxEchecB=Number(this.Form.value.tauxEchecB);
      let tauxRetard=Number(this.Form.value.tauxRetard);
      let tauxEchec=Number(this.Form.value.tauxEchec);
      let frequence=this.Form.value.frequence;
      let maxSceances=Number(this.Form.value.nbSeances);
      let intituler=""


        let typeTontine:TypeTontine;
        let ton:TontineData;

        if (type=='1'){
          typeTontine= new TypeTontine(1,"Vente",1);
          intituler=today.toLocaleString().slice(0,10)+"V"+today.toLocaleString().slice(3,5)+today.getFullYear().toString().slice(2,4)+"-"+String(this.Form.value.intituler)+" ( "+tauxTontine+"F )";
          ton = new Vente(null,true,intituler,typeTontine,tauxTontine,0,0,1,new Date(),new Date(),maxSceances,null);
        }else {
          typeTontine = new TypeTontine(2,"Simple",2);
          intituler=today.toLocaleString().slice(0,10)+"S"+today.toLocaleString().slice(3,5)+today.getFullYear().toString().slice(2,4)+"-"+String(this.Form.value.intituler)+" ( "+tauxTontine+"F )";
          ton = new Simple(null,true,intituler,typeTontine,tauxTontine,tauxEchec,tauxEchecB,tauxRetard,1,new Date(),new Date(),maxSceances);

        }

        console.log("intitule:",intituler);
        this.tontineService.save(ton).subscribe(
          data=>{
            console.log(data);
            this.router.navigateByUrl("public/member/add/"+data.id);
          });
      }

}
