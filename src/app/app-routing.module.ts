import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberListComponent} from "./member-list/member-list.component";
import {SignUpMemberComponent} from "./sign-up-member/sign-up-member.component";
import {TontineListComponent} from "./tontine-list/tontine-list.component";
import {TontineDetailComponent} from "./tontine-detail/tontine-detail.component";
import {SeanceListComponent} from "./seance-list/seance-list.component";
import {BuyEchecCmpComponent} from "./buy-echec-cmp/buy-echec-cmp.component";
import {ShowtontineComponent} from "./showtontine/showtontine.component";
import {CotisationDetailComponent} from "./cotisation-detail/cotisation-detail.component";
import {TontineDescComponent} from "./tontine-desc/tontine-desc.component";

const routes: Routes = [
  {
    path:"",
    component: TontineDetailComponent
  },
  {
    path:"members",
    component: MemberListComponent
  },
  {
    path:"tontines",
    component: TontineListComponent
  },
  {
    path:"seances/:id",
    component: SeanceListComponent
  },
  {
    path:"tontine/desc/:id",
    component: TontineDescComponent
  },
  {
    path:"echec",
    component: BuyEchecCmpComponent
  },
  {
    path:"tontine/detail/:idTon/:id",
    component: TontineDetailComponent
  },
  {
    path:"tontine/affiche/:idTon/:id",
    component:CotisationDetailComponent
  },
  {
    path:"show/tontine",
    component: ShowtontineComponent
  },
  {
    path:"addMember",
    component: SignUpMemberComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
