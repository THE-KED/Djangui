import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemberListComponent} from "./protected/member-list/member-list.component";
import {SignUpMemberComponent} from "./protected/sign-up-member/sign-up-member.component";
import {TontineListComponent} from "./protected/tontine-list/tontine-list.component";
import {TontineDetailComponent} from "./protected/tontine-start/tontine-detail.component";
import {SeanceListComponent} from "./protected/seance-list/seance-list.component";
import {TontineBilanListComponent} from "./protected/showtontine/tontine-bilan-list.component";
import {CotisationDetailComponent} from "./protected/cotisation-detail/cotisation-detail.component";
import {BuyEchecCmpComponent} from "./protected/buy-echec-cmp/buy-echec-cmp.component";
import {CreatTontineComponent} from "./protected/creat-tontine/creat-tontine.component";
import {AddMemberComponent} from "./protected/add-member/add-member.component";
import {CheckgratuitComponent} from "./protected/checkgratuit/checkgratuit.component";
import {GratuitCotComponent} from "./protected/gratuit-cot/gratuit-cot.component";
import {LoginComponent} from "./public/login/login.component";
import {authGuard} from "./gaurds/auth.guard";
import {ProfilComponent} from "./private/profil/profil.component";
import {PersonalTontineListComponent} from "./private/tontine-list/personal-tontine-list.component";
import {EtatComponent} from "./private/etat/etat.component";
import {HomeComponent} from "./public/home/home.component";
import {TontineBilanComponent} from "./protected/showtontine/tontine-bilan/tontine-bilan.component";
import {CreateCaisseComponent} from "./protected/Caisse/create-caisse/create-caisse.component";
import {CaisseEtatComponent} from "./protected/Caisse/etat/caisse-etat.component";
import {ListeCaissesComponent} from "./protected/Caisse/liste-caisses/liste-caisses.component";
import {CaisseOperationComponent} from "./protected/Caisse/caisse-operation/caisse-operation.component";
import {DashboardComponent} from "./utils/dashboard/dashboard.component";

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
        path:"dashboard",
        component:DashboardComponent,
        canActivate:[authGuard],
      },
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
        component:TontineBilanComponent,
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
        component:TontineBilanListComponent,
        canActivate: [authGuard]

      },
      {
        path:"addMember",
        component: SignUpMemberComponent,
        canActivate: [authGuard]
      },
      {
        path:"Caisse",
        canActivate:[authGuard],
        children:[
          {
            path:"",
            redirectTo:"etat",
            pathMatch:"full"
          },
          {
            path:"new",
            component:CreateCaisseComponent,
          },
          {
            path:"etat",
            component:CaisseEtatComponent,
          },
          {
            path:"depot",
            children:[
              {
                path:"",
                component:ListeCaissesComponent,
              },
              {
                path:"op",
                component:CaisseOperationComponent,
              }
            ],
          },
          {
            path:"pret",
            children:[
              {
                path:"",
                component:ListeCaissesComponent,
              },
              {
                path:"op",
                component:CaisseOperationComponent,
              }
            ],
          },
          {
            path:"operation",
            component:CaisseOperationComponent,
          }
        ]
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
