import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  error = false;
  hide = true;
  Form=this.formBuilder.group({
    nom:this.formBuilder.control(""),
    pass:this.formBuilder.control(""),
  });

  constructor(private formBuilder:FormBuilder,private authService:AuthService,
              private router:Router,public dialog: MatDialog) {
  }
  ngOnInit() {
    let json = localStorage.getItem("appUser");
    if(json!=null){
      console.log("json",json);

      this.authService.loadProfile(JSON.parse(json)).then(
        data=>{
          this.router.navigateByUrl("/public/profile");
        }
      );
    }
  }

  auth() {
    let user= String(this.Form.value.nom);
    let pass = String(this.Form.value.pass);
    console.log("SEND AUTH","user",user,"pass",pass);
    this.authService.Login(user,pass).subscribe(
      data =>{
        this.error=true;
        console.log("auth",data);

        localStorage.setItem("appUser",JSON.stringify(data));

        this.authService.loadProfile(data).then(
          data=>{
            this.router.navigateByUrl("/public/profile");
          }
        );
      },
      error => {
        console.log("err")
        this.error= true;
      }
    );
  }

  getErrorMessage(){
    return "Non d'utilisateur ou mot de passe incorrecte.";
  }
}
