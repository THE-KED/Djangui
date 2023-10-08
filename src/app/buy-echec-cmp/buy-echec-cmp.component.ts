import {Component, Inject, OnInit} from '@angular/core';
import {TontineServiceService} from "../Services/tontine-service.service";
import {ActivatedRoute} from "@angular/router";
import {Participation} from "../../Models/Entitys/Participation";
import {Tontine} from "../../Models/Abstracts/Tontine";
import {Cotisation} from "../../Models/Entitys/Cotisation";
import {ParticipationEchec} from "../../Models/ParticipationEchec";
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {BuyEchecComponent} from "../dialogbox/buy-echec/buy-echec.component";



@Component({
  selector: 'app-buy-echec-cmp',
  templateUrl: './buy-echec-cmp.component.html',
  styleUrls: ['./buy-echec-cmp.component.scss']
})
export class BuyEchecCmpComponent implements OnInit{

  displayedColumns: string[] = ['position', 'name', 'cotisation', 'retard', 'echec'];

  dataSource:Participation[]=[];
  idCot!:number;
  idTontine!:number;
  tontine:Tontine|undefined;
  cot:Cotisation;
  Echecs:ParticipationEchec|undefined;


  constructor(private tontineService:TontineServiceService,
  private route:ActivatedRoute,public dialog: MatDialog) {
    // @ts-ignore
    this.cot=null;
  }


  ngOnInit() {

    this.idCot = this.route.snapshot.params["id"];
    this.idTontine = this.route.snapshot.params["idTon"];
    console.log("idTon",this.idTontine);
    console.log("id",this.idCot);
    this.tontineService.getCotisationById(this.idCot).subscribe(
      data=>{
        this.cot=data;
      }
    );
    this.tontineService.getechecBeforeCot(this.idCot).subscribe(
      data => {
        this.dataSource=data;
      }
    );


  }

  checkBuy(part:Participation){
    if(part.tontine == part.echec == false){
      return true;
    }
    return false;
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, echec:Participation): void {
    this.dialog.open(BuyDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:echec,
    });
  }

}

@Component({
  selector: 'app-buy-echec',
  templateUrl: '../dialogbox/buy-echec/buy-echec.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class BuyDialog {
  constructor(public dialogRef: MatDialogRef<BuyEchecComponent>,
              @Inject(MAT_DIALOG_DATA)
               public data:Participation,private tontineServ:TontineServiceService) {}

  buy(){
    this.data.echec=false;
    this.data.updatedAt=new Date;
    console.log("data",this.data);
    this.tontineServ.saveParticipation(this.data).subscribe(
      data =>{
        console.log("finish",data);
      }
    );
  }
}
