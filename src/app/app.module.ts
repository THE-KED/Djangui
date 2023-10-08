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
import { MemberListComponent } from './member-list/member-list.component';
import {MatTableModule} from "@angular/material/table";
import { SignUpMemberComponent } from './sign-up-member/sign-up-member.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import { TontineListComponent } from './tontine-list/tontine-list.component';
import {MatListModule} from "@angular/material/list";
import { TontineComponent } from './tontine/tontine.component';
import { TontineDetailComponent } from './tontine-detail/tontine-detail.component';
import {MatBadgeModule} from "@angular/material/badge";
import { CotisationDBComponent } from './cotisation-db/cotisation-db.component';
import {MatDialogModule} from "@angular/material/dialog";
import { SeanceListComponent } from './seance-list/seance-list.component';
import { BuyEchecCmpComponent } from './buy-echec-cmp/buy-echec-cmp.component';
import { ProfilTontineComponent } from './profil-tontine/profil-tontine.component';
import { ProfiluserComponent } from './profiluser/profiluser.component';
import { ShowtontineComponent } from './showtontine/showtontine.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CotisationDetailComponent } from './cotisation-detail/cotisation-detail.component';
import { MoneyPipe } from './money.pipe';
import { TontineDescComponent } from './tontine-desc/tontine-desc.component';
import { EndCotisationComponent } from './dialogbox/end-cotisation/end-cotisation.component';
import { BuyEchecComponent } from './dialogbox/buy-echec/buy-echec.component';
import {MatSelectModule} from "@angular/material/select";
import { CreatTontineComponent } from './creat-tontine/creat-tontine.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { CheckgratuitComponent } from './checkgratuit/checkgratuit.component';
import { GratuitCotComponent } from './gratuit-cot/gratuit-cot.component';
import { EnNumberPipe } from './en-number.pipe';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { LoaderComponent } from './loader/loader.component';
import {httpInterceptProviders} from "./http-interceptor";
import { LoginComponent } from './Auth/login/login.component';
import { ProfilComponent } from './Presonal/profil/profil.component';
import {httpErrorInterceptor} from "./http-interceptor/HttpErrorInterceptor";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {PersonalTontineListComponent} from "./Presonal/tontine-list/personal-tontine-list.component";
import { UserSaveComponent } from './dialogbox/user-save/user-save.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { EtatComponent } from './Presonal/etat/etat.component';
import { ClassementComponent } from './classement/classement.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatExpansionModule} from "@angular/material/expansion";
import { HomeComponent } from './home/home.component';

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
    ProfilTontineComponent,
    ProfiluserComponent,
    ShowtontineComponent,
    CotisationDetailComponent,
    MoneyPipe,
    TontineDescComponent,
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
    MatExpansionModule
  ],
  providers: [httpInterceptProviders,
    {provide:HTTP_INTERCEPTORS ,useClass:httpErrorInterceptor,multi:true}
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
