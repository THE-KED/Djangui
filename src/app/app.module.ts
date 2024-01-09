import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";
import { MemberListComponent } from './protected/member-list/member-list.component';
import {MatTableModule} from "@angular/material/table";
import { SignUpMemberComponent } from './protected/sign-up-member/sign-up-member.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import { TontineListComponent } from './protected/tontine-list/tontine-list.component';
import {MatListModule} from "@angular/material/list";
import { TontineComponent } from './protected/tontine-list/tontine/tontine.component';
import { TontineDetailComponent } from './protected/tontine-start/tontine-detail.component';
import {MatBadgeModule} from "@angular/material/badge";
import { CotisationDBComponent } from './dialogbox/cotisation-db/cotisation-db.component';
import {MatDialogModule} from "@angular/material/dialog";
import { SeanceListComponent } from './protected/seance-list/seance-list.component';
import { BuyEchecCmpComponent } from './protected/buy-echec-cmp/buy-echec-cmp.component';
import { TontineBilanListComponent } from './protected/showtontine/tontine-bilan-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CotisationDetailComponent } from './protected/cotisation-detail/cotisation-detail.component';
import { MoneyPipe } from './money.pipe';
import { TontineBilanComponent } from './protected/showtontine/tontine-bilan/tontine-bilan.component';
import { EndCotisationComponent } from './dialogbox/end-cotisation/end-cotisation.component';
import { BuyEchecComponent } from './dialogbox/buy-echec/buy-echec.component';
import {MatSelectModule} from "@angular/material/select";
import { CreatTontineComponent } from './protected/creat-tontine/creat-tontine.component';
import { AddMemberComponent } from './protected/add-member/add-member.component';
import { CheckgratuitComponent } from './protected/checkgratuit/checkgratuit.component';
import { GratuitCotComponent } from './protected/gratuit-cot/gratuit-cot.component';
import { EnNumberPipe } from './en-number.pipe';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { LoaderComponent } from './utils/loader/loader.component';
import {httpInterceptProviders} from "./http-interceptor";
import { LoginComponent } from './public/login/login.component';
import { ProfilComponent } from './private/profil/profil.component';
import {httpErrorInterceptor} from "./http-interceptor/HttpErrorInterceptor";
import { NavBarComponent } from './utils/nav-bar/nav-bar.component';
import {PersonalTontineListComponent} from "./private/tontine-list/personal-tontine-list.component";
import { UserSaveComponent } from './dialogbox/user-save/user-save.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { EtatComponent } from './private/etat/etat.component';
import { ClassementComponent } from './protected/showtontine/tontine-bilan/classement/classement.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import { HomeComponent } from './public/home/home.component';
import { DashboardComponent } from './utils/dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './utils/table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { CreateCaisseComponent } from './protected/Caisse/create-caisse/create-caisse.component';
import { ListeCaissesComponent } from './protected/Caisse/liste-caisses/liste-caisses.component';
import { CaisseComponent } from './protected/Caisse/caisse/caisse.component';
import { CaisseOperationComponent } from './protected/Caisse/caisse-operation/caisse-operation.component';
import {OpsFormComponent} from "./protected/Caisse/caisse-operation/ops-form/ops-form.component";
import {HttpCachingInterceptorInterceptor} from "./http-interceptor/http-caching-interceptor.interceptor";
import { SnackBarComponent } from './utils/snack-bar/snack-bar.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    SignUpMemberComponent,
    TontineListComponent,
    PersonalTontineListComponent,
    TontineComponent,
    TontineDetailComponent,
    CotisationDBComponent,
    SeanceListComponent,
    BuyEchecCmpComponent,
    TontineBilanListComponent,
    CotisationDetailComponent,
    MoneyPipe,
    TontineBilanComponent,
    EndCotisationComponent,
    BuyEchecComponent,
    CreatTontineComponent,
    AddMemberComponent,
    CheckgratuitComponent,
    GratuitCotComponent,
    EnNumberPipe,
    LoaderComponent,
    LoginComponent,
    ProfilComponent,
    NavBarComponent,
    UserSaveComponent,
    EtatComponent,
    ClassementComponent,
    HomeComponent,
    DashboardComponent,
    TableComponent,
    CreateCaisseComponent,
    ListeCaissesComponent,
    CaisseComponent,
    CaisseOperationComponent,
    OpsFormComponent,
    SnackBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatListModule,
    MatBadgeModule,
    MatDialogModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
  ],
  providers: [httpInterceptProviders,
    {provide: HTTP_INTERCEPTORS, useClass: httpErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpCachingInterceptorInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    MoneyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
