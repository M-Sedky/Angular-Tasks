import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { BorderBoxDirective } from './Directives/border-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderComponent } from './Components/order/order.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AddProductComponent } from './Components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    ProductsComponent,
    BorderBoxDirective,
    USDtoEGPPipe,
    OrderComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    AddProductComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
