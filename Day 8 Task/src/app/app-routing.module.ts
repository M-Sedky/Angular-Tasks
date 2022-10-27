import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { OrderComponent } from './Components/order/order.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ReactiveAddProductComponent } from './Components/reactive-add-product/reactive-add-product.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent, canActivate: [AuthGuardGuard]},
    ],
  },

  {
    path: '',
    loadChildren: () =>
      import('src/app/userm/userm.module').then(user => user.UsermModule),
  },

  { path: 'product/add', component: AddProductComponent },
  { path: 'product/reactive-add', component: ReactiveAddProductComponent },
  { path: 'products/:pid', component: ProductDetailsComponent },
  { path: 'order', component: OrderComponent },
  { path: 'login', component: HomeComponent },
  { path: 'logout', component: HomeComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
