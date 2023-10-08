import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Participation} from "../../Models/Entitys/Participation";
import {Cotisation} from "../../Models/Entitys/Cotisation";
import {TontineServiceService} from "../Services/tontine-service.service";

@Component({
  selector: 'app-cotisation-db',
  templateUrl: './cotisation-db.component.html',
  styleUrls: ['./cotisation-db.component.scss']
})
export class CotisationDBComponent {


  constructor(public dialogRef:MatDialogRef<CotisationDBComponent>,
              @Inject(MAT_DIALOG_DATA) public participation:Participation,
              private tontineService:TontineServiceService) {

  }

  cotiser(){
    if(this.participation.cotisation.statut==0){
      this.participation.echec=false;
      this.participation.tontine=true;
    }else if(this.participation.cotisation.statut==1){
      this.participation.echec=false;
      this.participation.tontine=true;
      this.participation.retard=true;
    }
    if(this.participation.cotisation.id==null){
      this.tontineService.saveCotisation(this.participation.cotisation).subscribe(
        data =>{
          console.log("saveCotisation:",data);
          this.participation.cotisation=data;

          this.tontineService.saveParticipation(this.participation).subscribe(
            data=>{
              console.log("save part",data);
              this.dialogRef.close({ data: this.participation });
            }
          );
        }
      );

    }else {
      this.tontineService.saveParticipation(this.participation).subscribe(
        data=>{
          console.log("save part",data);
          this.dialogRef.close({ data: this.participation });
        }
      );
    }
  }
}
