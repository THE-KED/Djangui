import {Component, DoCheck, OnInit} from '@angular/core';
import {Participation} from "../../../Models/Entitys/Participation";
import {Beneficiaire} from "../../../Models/Entitys/Beneficiaire";
import {Tontine} from "../../../Models/Abstracts/Tontine";
import {Cotisation} from "../../../Models/Entitys/Cotisation";
import {TontineServiceService} from "../../Services/tontine-service.service";
import {ActivatedRoute} from "@angular/router";
import jsPDF, {TableConfig} from "jspdf";

@Component({
  selector: 'app-cotisation-detail',
  templateUrl: './cotisation-detail.component.html',
  styleUrls: ['./cotisation-detail.component.scss']
})
export class CotisationDetailComponent implements OnInit,DoCheck{


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'echec'];
  dataSource:Participation[]=[];
  benefs:Map<number,Beneficiaire> = new Map<number, Beneficiaire>();
  idCot!:number;
  idTontine!:number;
  tontine:Tontine|undefined;
  cot!:Cotisation;
  isEnd:string="No";
  tauxTontine=0;
  tauxEchec=0;
  tauxRetard=0;
  total:number=0;
  totalExpet:number=0;
  totalEchec:number=0;
  totalRetard:number=0;
  nbE=0;
  nbR=0;
  type: boolean = false;

  constructor(private tontineService:TontineServiceService,
              private route:ActivatedRoute) {

  }
  ngOnInit() {

    this.idCot=this.route.snapshot.params["id"];
    this.idTontine=this.route.snapshot.params["idTon"];
    this.tontine=JSON.parse(this.route.snapshot.queryParams["ton"]);
    this.cot=JSON.parse(this.route.snapshot.queryParams["cot"]);


    this.tontineService.getParticipation(this.idCot).subscribe(
      data=>{
        this.dataSource = data;
      }
    );
    this.tontineService.getAllLastbenef(this.idCot).subscribe(
      data=>{
        for (let ben of data){
          if(ben.enregistrement)
          this.benefs.set(ben.enregistrement.id,ben);
        }
      }
    );

  }

  ngDoCheck() {
        console.log("tontine",this.tontine);
        this.tontine?.actif? this.isEnd="No":this.isEnd="finish";
        this.tauxTontine=Number(this.tontine?.tauxTontine);
        this.tauxEchec=Number(this.tontine?.tauxEchec);
        this.tauxRetard=Number(this.tontine?.tauxRetard);


    this.setTotal();
    this.setType();
  }

  getclass(id:number):string{
    if(this.cot.beneficiaire?.enregistrement)
    if(this.benefs.has(id) && this.cot.beneficiaire?.enregistrement.id!=id)
      return "ben";
    return "nonBen";
  }

  setTotal(){

    this.total=0;
    this.totalEchec=0;
    this.totalRetard=0;
    this.totalExpet=0;
    this.nbE=0;
    this.nbR=0;

    for(let data of this.dataSource ){
      if (data.tontine){
        this.total+=this.tauxTontine;
        if(data.retard){
          this.totalRetard+=(this.cot.tauxEchec+this.cot.tauxTontine);
          this.nbR++;
        }
      }
      else {
        this.totalEchec+=(this.cot.tauxEchec+this.cot.tauxTontine);
        this.nbE++;
      }
      this.totalExpet+=this.tauxTontine;
    }
    console.log(this.totalEchec)
  }

  setType(){
    if (this.tontine?.type.code==1)
      this.type= true;
    else
      this.type=false;
  }


  public openPDF(): void {

    var part=[];
    let i =0;
    for(let element of this.dataSource){
      i++;
      var tempObj = {"N.": String(i),
        "Nom":element.enregistrement.membre.nom,
        "Tontine":element.tontine?"OUI":"NON",
        "Retard":element.retard?"OUI":"NON",
        "Echec":element.echec?"OUI":"NON",
      };

      part.push(tempObj);
    }
    const options = {
      startY: 20, // Vertical position to start the table (in mm)
    };
    const doc = new jsPDF();
    doc.table(0,0,part,
      ['N.','Nom','Tontine','Retard','Echec'],
      new class implements TableConfig {});
    doc.save('Vehicules_List' + '.pdf');
    console.log("imprime");
  }

}

