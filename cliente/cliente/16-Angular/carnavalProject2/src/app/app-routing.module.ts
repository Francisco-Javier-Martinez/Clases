import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparsaListComponent } from './componentes/comparsa-list/comparsa-list.component';
import { JuradoComponent } from './componentes/jurado/jurado.component';

const routes: Routes = [
  {path:'comparsas',component:ComparsaListComponent},
  {path:'jurado',component:JuradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
