import { NgModule } from '@angular/core';
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
import {FormsModule} from "@angular/forms";
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

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    SignUpMemberComponent,
    TontineListComponent,
    TontineComponent,
    TontineDetailComponent,
    CotisationDBComponent,
    SeanceListComponent,
    BuyEchecCmpComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
