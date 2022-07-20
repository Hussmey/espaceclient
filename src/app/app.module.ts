import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ComptComponent } from './pages/compt/compt.component';
import { ConsoComponent } from './pages/conso/conso.component';
import { AbonnementsComponent } from './pages/abonnements/abonnements.component';
import { FacturesComponent } from './pages/factures/factures.component';
import { VehiculesComponent } from './pages/vehicules/vehicules.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashbordComponent,
    ComptComponent,
    ConsoComponent,
    AbonnementsComponent,
    FacturesComponent,
    VehiculesComponent,
    AssistanceComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
