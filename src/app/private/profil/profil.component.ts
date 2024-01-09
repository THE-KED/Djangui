import {Component, DoCheck} from '@angular/core';
import {AuthService} from "../../Services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {UserSaveComponent} from "../../dialogbox/user-save/user-save.component";
import {MembrePoste} from "../../../Models/Entitys/MembrePoste";
import {User} from "../../../Models/Entitys/User";
import {Membre} from "../../../Models/Entitys/Membre";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements DoCheck{

  born: string | Date ="";
  profession="";
  Contact="";
  Sexe="";
  CNI="";
  giveAt: string | Date ="";
  Parrain: string | null ="";
  nom="nom";

  membre:Membre|undefined;
  Residance="";
  username="";
  password="";
  user:User|undefined;
  constructor(public authService:AuthService, private dialogBox:MatDialog,) {
  }
  ngDoCheck() {
    this.loadData();
  }

  loadData(){
    if (this.authService.appUser){
      this.user=this.authService.appUser;
      let membre =this.authService.appUser.membre;
      this.nom = membre.nom;
      this.CNI = membre.cni;
      this.Sexe = membre.sexe;
      this.giveAt = membre.dcni;
      this.born = membre.ddn;
      this.Parrain = membre.p1;
      this.profession =membre.profession;
      this.Contact = membre.tel;
      this.Residance = membre.adresse
      this.membre = membre;
    }
  }
  openDialogBox(){
    console.log(this.membre);
    this.dialogBox.open(UserSaveComponent,{
      // width:'60%',
      panelClass:'save--form',
      data:this.membre,
    })
  }
}
