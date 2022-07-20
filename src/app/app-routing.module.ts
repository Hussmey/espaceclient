import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonnementsComponent } from './pages/abonnements/abonnements.component';
import { AssistanceComponent } from './pages/assistance/assistance.component';
import { ComptComponent } from './pages/compt/compt.component';
import { ConsoComponent } from './pages/conso/conso.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { FacturesComponent } from './pages/factures/factures.component';
import { VehiculesComponent } from './pages/vehicules/vehicules.component';

const routes: Routes = [
  {path:'', component:DashbordComponent},
  {path:'compt', component:ComptComponent},
  {path:'conso', component:ConsoComponent},
  {path:'abonnements', component:AbonnementsComponent},
  {path:'factures', component:FacturesComponent},
  {path:'vehicules', component:VehiculesComponent},
  {path:'assistance', component:AssistanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
