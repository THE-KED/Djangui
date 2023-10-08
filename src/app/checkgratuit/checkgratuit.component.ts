import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TontineServiceService} from "../Services/tontine-service.service";
import {BilanServiceService} from "../Services/bilan-service.service";
import {Cotisation} from "../../Models/Entitys/Cotisation";
import {Tontine} from "../../Models/Abstracts/Tontine";
import {Enregistrement} from "../../Models/Entitys/Enregistrement";

@Component({
  selector: 'app-checkgratuit',
  templateUrl: './checkgratuit.component.html',
  styleUrls: ['./checkgratuit.component.scss']
})
export class CheckgratuitComponent implements OnInit , DoCheck{


  dataSource : Cotisation[] = [];
  nbParts:number[][]=[];
  nbRetards:number[][]=[]
  nbPaidEchec:number[][]=[];
  nbNonPaidEchec:number[][]=[];
  idTontine!:number;
  nom:string="";
  nbToureGratuit:number=0;
  totalRetrad =0 ;totalEchecPaid =0; TotalComplement  = 0;
  totalTontine =0; totalEchecNonPaid=0;
  total=0;
  supplement=0;
  totalSupplement=0;
  totalBoisson=0;
  totalGratuit=0;
  tontine!:Tontine;
  type="Vente";
  membres:Enregistrement[]=[];
  visibility: string ="invisible";

  constructor(
    private router:ActivatedRoute,private tontineService:TontineServiceService,
    private bilanServ:BilanServiceService,private route:Router) {
  }
  ngOnInit() {

    this.idTontine=this.router.snapshot.params["id"];

    this.tontineService.getTontineById(this.idTontine).subscribe(
      data =>{
        this.tontine=data;
        this.type=data.type.nom;



        this.tontineService.loadMembre(this.idTontine).subscribe(
          data =>{
            this.membres=data;


            this.tontineService.getCotisation(this.idTontine).subscribe(
              data =>{
                this.dataSource = data;
                if(this.dataSource.length>0)
                  this.nom=data[0].nom;
                for (let cot of data){
                  if(cot.gratuit)
                    this.nbToureGratuit++;
                }


                this.bilanServ.getNbCotisation(this.idTontine).subscribe(
                  data => {
                    // console.log(data);
                    this.nbParts = data;


                    this.bilanServ.getNbRetard(this.idTontine).subscribe(
                      data =>{
                        this.nbRetards = data;

                        this.bilanServ.getNbPaidEchec(this.idTontine).subscribe(
                          data =>{
                            this.nbPaidEchec =data;


                            this.bilanServ.getNbNonPaidEchec(this.idTontine).subscribe(
                              data =>{
                                this.nbNonPaidEchec =data;


                                let seuil:number =this.tontine.nbSeances*this.tontine.tauxTontine;
                                console.log("membres:",this.membres.length,"seuil:",seuil,"total:",this.getTotal());
                                if((this.getTotal())<seuil){
                                  this.route.navigateByUrl("public/start/seances/"+this.idTontine);
                                }
                                this.visibility="visible";
                              }
                            );
                          }
                        );
                      });

                  });

              });

          }
        );

      },
    );









  }

  ngDoCheck() {

  }


  // renvoie le nombre de participation qu'il y'a eu lors d'un une cotiastion
  nbPart(idCot:number,rang:number){
    let cot =this.dataSource[rang-1];
    for(let part of this.nbParts ){

      if(part[0]==idCot){
        return part[1];
      }
    }
    return 0;
  }


  getTotal(){
    this.total=0;
    this.totalTontine = 0;
    this.totalEchecPaid = 0;
    this.totalRetrad =0;
    this.TotalComplement = 0;
    this.totalBoisson=0;
    this.totalGratuit=0;
    this.totalEchecNonPaid=0;
    for (let cot of this.dataSource){

      if (this.type=="Vente")
        this.totalTontine += cot.tauxVente;
      if (this.type=="Simple")
        this.totalTontine += this.tontine.tauxTontine;
      this.TotalComplement +=cot.complement;
      if (cot.id)
            if(this.nbPart(cot.id,cot.rang)>this.tontine.nbSeances){
              console.log("nb_part:",this.nbPart(cot.id,cot.rang));

              this.totalSupplement+=(cot.tauxTontine*(this.nbPart(cot.id,cot.rang)-this.tontine.nbSeances))
            }
      this.totalBoisson +=cot.tauxTontine;
      if (cot.gratuit && cot.id){
        this.totalGratuit+=(cot.tauxTontine*this.nbPart(cot.id,cot.rang));
      }

      for(let retar of this.nbRetards ){
        if(retar[0]==cot.id){
          if(this.type=="Vente")
            this.totalRetrad += retar[1]*cot.tauxEchec;
          if(this.type=="Simple")
            this.totalRetrad += retar[1]*this.tontine.tauxRetard;
        }
      }
      for(let echec of this.nbPaidEchec ){

        if(echec[0]==cot.id){
          if(this.type=="Vente")
            this.totalEchecPaid += echec[1]*(cot.tauxEchec+cot.tauxTontine);
          if(this.type=="Simple")
            this.totalEchecPaid += echec[1]*(this.tontine.tauxEchec+cot.tauxTontine);
        }
      }
      for(let echec of this.nbNonPaidEchec ){

        if(echec[0]==cot.id){
          if(this.type=="Vente")
            this.totalEchecNonPaid += echec[1]*(cot.tauxEchec);
          if(this.type=="Simple")
            this.totalEchecNonPaid += echec[1]*(this.tontine.tauxEchec);
        }
      }

    }
    console.log("supp:",this.totalSupplement);
    return ((this.totalTontine+this.totalRetrad+this.totalEchecPaid+this.totalSupplement) - (this.TotalComplement+this.totalBoisson+this.totalGratuit));
  }


}
