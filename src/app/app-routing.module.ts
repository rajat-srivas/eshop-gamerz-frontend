import { AuthComponent } from './auth/auth.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path:'auth', component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
