//import { StavkeulistiComponent } from './stavkeulisti/stavkeulisti.component';
import { ListaComponent } from './lista/lista.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ListaComponent },
 // { path: 'lista/:listaId', component: StavkeulistiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
