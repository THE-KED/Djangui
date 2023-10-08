import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberListComponent} from "./member-list/member-list.component";
import {SignUpMemberComponent} from "./sign-up-member/sign-up-member.component";
import {TontineListComponent} from "./tontine-list/tontine-list.component";
import {TontineDetailComponent} from "./tontine-detail/tontine-detail.component";
import {SeanceListComponent} from "./seance-list/seance-list.component";
import {ShowtontineComponent} from "./showtontine/showtontine.component";
import {CotisationDetailComponent} from "./cotisation-detail/cotisation-detail.component";
import {TontineDescComponent} from "./tontine-desc/tontine-desc.component";
import {BuyEchecCmpComponent} from "./buy-echec-cmp/buy-echec-cmp.component";
import {CreatTontineComponent} from "./creat-tontine/creat-tontine.component";
import {AddMemberComponent} from "./add-member/add-member.component";
import {CheckgratuitComponent} from "./checkgratuit/checkgratuit.component";
import {GratuitCotComponent} from "./gratuit-cot/gratuit-cot.component";
import {LoginComponent} from "./Auth/login/login.component";
import {authGuard} from "./gaurds/auth.guard";
import {ProfilComponent} from "./Presonal/profil/profil.component";
import {PersonalTontineListComponent} from "./Presonal/tontine-list/personal-tontine-list.component";
import {EtatComponent} from "./Presonal/etat/etat.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path:"",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"public",
    canActivate:[authGuard],
    component:HomeComponent,
    children:[
      {
        path:"profile",
        component:ProfilComponent,
        canActivate:[authGuard],
      },
      {
        path:"etat",
        component:EtatComponent,
        canActivate:[authGuard],
      },
      {
        path:"mytontine",
        component:PersonalTontineListComponent
      },
      {
        path:"mytontine/seances/:id",
        component: SeanceListComponent,
        canActivate: [authGuard]

      },
      {
        path:"members",
        component: MemberListComponent,
        canActivate: [authGuard]
      },
      {
        path:"tontines",
        component: TontineListComponent,
        canActivate: [authGuard]

      },
      {
        path:"start",
        component: TontineListComponent,
        canActivate: [authGuard]

      },
      {
        path:"tontines/seances/:id",
        component: SeanceListComponent,
        canActivate: [authGuard]

      },
      {
        path:"creat",
        component: CreatTontineComponent,
        canActivate: [authGuard]

      },
      {
        path:"member/add/:id",
        component: AddMemberComponent,
        canActivate: [authGuard]

      },
      {
        path:"tontine/desc/:id",
        component: TontineDescComponent,
        canActivate: [authGuard]

      },
      {
        path:"echec",
        component: TontineListComponent,
        canActivate: [authGuard]

      },
      {
        path:"echec/seances/:id",
        component: SeanceListComponent,
        canActivate: [authGuard]

      },
      {
        path:"echec/seances/:idTon/:id",
        component: BuyEchecCmpComponent,
        canActivate: [authGuard]

      },
      {
        path:"start/seances/:id",
        component: TontineDetailComponent,
        canActivate: [authGuard]

      },
      {
        path:"start/check/:id",
        component: CheckgratuitComponent,
        canActivate: [authGuard]

      },
      {
        path:"start/gratuit/:id",
        component: GratuitCotComponent,
        canActivate: [authGuard]

      },
      {
        path:"tontine/affiche/:idTon/:id",
        component:CotisationDetailComponent,
        canActivate: [authGuard]

      },
      {
        path:"show/tontine",
        component: ShowtontineComponent,
        canActivate: [authGuard]

      },
      {
        path:"addMember",
        component: SignUpMemberComponent,
        canActivate: [authGuard]
      },
    ]
  },

  {
    path:"**",
    redirectTo: "/login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
