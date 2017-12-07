import { Injectable } from '@angular/core';

// import stripePackage from 'stripe';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";



@Injectable()
export class stripeService {
  elements: Elements;
  card: StripeElement;
  constructor() { 
    // const stripe = stripePackage('pk_test_TbZCfLT11bqdXU4NI5VpTFI6');
    
    // const elements = stripe.elements();
  }

}
