import {Component} from '@angular/core';
import {Participation} from "../../../Models/Entitys/Participation";
import {TontineServiceService} from "../../Services/tontine-service.service";


@Component({
  selector: 'app-buy-echec',
  templateUrl: './buy-echec.component.html',
  styleUrls: ['./buy-echec.component.scss']
})
export class BuyEchecComponent {

constructor(public data:Participation,private tontineServ:TontineServiceService) {
}

buy(){

}

}
