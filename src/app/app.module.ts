import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MoltinService } from './moltin.service';


import { AppComponent } from './app.component';
import { StoreFrontComponent } from './store-front/store-front.component';
import { CheckoutComponent } from './checkout/checkout.component';  
import { CartComponent } from './cart/cart.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { NgxStripeModule } from 'ngx-stripe';
import { stripeService } from './stripe.service';



const appRoutes: Routes = [
  {path : "", component:StoreFrontComponent},
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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxStripeModule.forRoot('pk_test_TbZCfLT11bqdXU4NI5VpTFI6'),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoltinService, stripeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
