import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl} from "@angular/forms";
import {MembrePoste} from "../../../Models/Entitys/MembrePoste";
import {Membre} from "../../../Models/Entitys/Membre";
import {DatePipe} from "@angular/common";
import {MembreServiceService} from "../../Services/membre-service.service";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-user-save',
  templateUrl: './user-save.component.html',
  styleUrls: ['./user-save.component.scss']
})
export class UserSaveComponent implements OnInit{

  form=this.fb.group({
    nom:new FormControl(this.memberPoste.membre.nom),
    born:new FormControl(this.memberPoste.membre.ddn),
    residance:new FormControl(this.memberPoste.membre.adresse),
    profession:new FormControl(this.memberPoste.membre.profession),
    contact:new FormControl(this.memberPoste.membre.tel),
    sexe:new FormControl(this.getSexe()),
    CNI:new FormControl(this.memberPoste.membre.cni),
    delivre:new FormControl(this.memberPoste.membre.dcni),
    pass:new FormControl("")
  });
  membre:Membre|undefined;

  ngOnInit() {
    this.membre=this.memberPoste.membre;
    console.log("membrePoste",this.memberPoste);
  }

  constructor(public dialogRef:MatDialogRef<UserSaveComponent>,
              private fb:FormBuilder,
              @Inject(MAT_DIALOG_DATA)
              public memberPoste:MembrePoste,
              private memberService:MembreServiceService,
              private authService:AuthService
    ) {
  }

  getSexe(){
    if(this.memberPoste.membre.sexe==="Homme")
      return "1";
    return  "2";
  }

  saveUser(){
    let membre= this.memberPoste.membre;
    let pass= String(this.form.controls.pass.value);
    membre.nom=String(this.form.controls.nom.value);
    membre.ddn=new Date(String(this.form.controls.born.value));
    membre.cni=String(this.form.controls.CNI.value);
    membre.adresse=String(this.form.controls.residance.value);
    membre.profession=String(this.form.controls.profession.value);
    membre.sexe=String(this.form.controls.sexe.value)=="1"?"Homme":"Femme";
    membre.tel=String(this.form.controls.contact.value);
    membre.dcni=String(this.form.controls.delivre.value);
    membre.updatedAt=new Date();

    console.log(membre);

    this.save(membre).then(data=>{
      this.dialogRef.close();

      if(pass.length>0){
        this.authService.changePass(membre.nom,pass).subscribe(
          data=>{


            localStorage.setItem("appUser",JSON.stringify(data));

            this.authService.loadProfile(data).then(
              data=>{
                console.log("data");
              }
            );

          }
        );
      }
    });
  }

  public async save(mem:Membre){
    this.memberService.save(mem);
  }
}
