import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProductComponent } from './componentes/product/product.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { ProductDetailComponent } from './componentes/product-detail/product-detail.component';

const routes: Routes = [
    { path: '',component: HomeComponent},
    { path: 'products',component: ProductComponent},
    { path: 'contact',component:ContactComponent},
    { path: 'product-detail',component:ProductDetailComponent},
    {path: '', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
