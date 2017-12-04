import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MoltinService } from './moltin.service';


import { AppComponent } from './app.component';
import { StoreFrontComponent } from './store-front/store-front.component';
import { CheckoutComponent } from './checkout/checkout.component';  
import { CartComponent } from './cart/cart.component';

const appRoutes: Routes = [
  {path : "", component:AppComponent},
  {path : "store", component:StoreFrontComponent},
  {path : "checkout", component:CheckoutComponent},
  {path : "cart", component:CartComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    StoreFrontComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoltinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
