import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Prueba1Component } from './componentes/prueba1/prueba1.component';
import { Prueba2Component } from './componentes/prueba2/prueba2.component';

const routes: Routes = [
  {path:'prueba1',component:Prueba1Component},
  {path:'prueba2',component:Prueba2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
