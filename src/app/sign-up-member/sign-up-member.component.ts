import { Component } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {AuthService} from "../Services/auth.service";
import {MembreServiceService} from "../Services/membre-service.service";
import {MembreData} from "../../Models/Membre";

@Component({
  selector: 'app-sign-up-member',
  templateUrl: './sign-up-member.component.html',
  styleUrls: ['./sign-up-member.component.scss']
})
export class SignUpMemberComponent {

  form = this.fb.group({
    nom:new FormControl(""),
    born:new FormControl(new Date()),
    ldn:new FormControl(""),
    sexe:new FormControl(""),
    profession:new FormControl(""),
    cni:new FormControl(""),
    dcni:new FormControl(new Date()),
    tel:new FormControl(""),
    adresse:new FormControl(""),
    image:new FormControl(""),
    actif:new FormControl(""),
    email:new FormControl(""),
    parrin:new FormControl(""),
  });
  constructor(private fb:FormBuilder,
              private authService:AuthService,private membreService:MembreServiceService
              ) {
  }

  saveUser(){
     let nom = String(this.form.controls.nom.value);
     let born = new Date(String(this.form.controls.born.value));
     let ldn = String(this.form.controls.ldn.value);
     let sexe = String(this.form.controls.sexe.value);
     let profession = String(this.form.controls.profession.value);
     let cni = String(this.form.controls.cni.value);
     let dcni = new Date(String(this.form.controls.dcni.value));
     let tel = String(this.form.controls.tel.value);
     let adresse = String(this.form.controls.adresse.value);
     // let image = String(this.form.controls.image.value);
     // let actif = String(this.form.controls.actif.value);
     let email = String(this.form.controls.email.value);
     let parrin = String(this.form.controls.parrin.value);

     let membre = new MembreData(null,nom,born,ldn,sexe,profession,cni,dcni,tel,adresse,null,1,parrin,null,null,null,null,new Date(),new Date(),[]);

      this.membreService.signMember(membre).subscribe(
        data => {
          console.log(data);
        }
      );

  }
}
