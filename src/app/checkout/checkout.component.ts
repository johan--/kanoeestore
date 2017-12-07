import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CustomerInfoAddress } from '../customer-address';
import { MoltinService } from '../moltin.service';

import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  CustomerInfoAddress : CustomerInfoAddress;
  countries : string[];
  isBillingChecked : boolean = false;
  selectedCountry: Object = {};
  elements: Elements;
  card: StripeElement;
  @ViewChild('card') cardRef: ElementRef;

  stripeTest: FormGroup;
  constructor(private _moltin : MoltinService, private stripeService: StripeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.stripeTest = this.fb.group({
      customerName :  ['', [Validators.required]],
      customerEmail : ['', [Validators.required]],
      billingAddressFirstname:  ['', [Validators.required]],
      billingAddressLastname:  ['', [Validators.required]],
      billingAddressCompanyname:  ['', []],
      billingAddressLine1:  ['', [Validators.required]],
      billingAddressLine2:  ['', [Validators.required]],
      billingAddressCity:  ['', [Validators.required]],
      billingAddressPostcode:  ['', [Validators.required]],
      billingAddressCounty:  ['', [Validators.required]],
      billingAddressCountry:  ['', [Validators.required]],
      shippingAddressFirstname:  ['', [Validators.required]],
      shippingAddressLastname:  ['', [Validators.required]],
      shippingAddressCompanyname:  ['', []],
      shippingAddressLine1:  ['', [Validators.required]],
      shippingAddressLine2:  ['', [Validators.required]],
      shippingAddressCity:  ['', [Validators.required]],
      shippingAddressPostcode:  ['', [Validators.required]],
      shippingAddressCounty:  ['', [Validators.required]],
      shippingAddressCountry:  ['', [Validators.required]],
      shippingAddressInstructions:  ['', []]
    });
    this.stripeService.elements().subscribe( elements => {
      this.elements = elements;
      let style: {
        base: {
          color: "#32325D",
          fontWeight: 500,
          fontFamily: "Inter UI, Open Sans, Segoe UI, sans-serif",
          fontSize: "15px",
          fontSmoothing: "antialiased",
  
          "::placeholder": {
            color: "#CFD7DF"
          }
        },
        invalid: {
          color: "#E25950"
        }
      };
      if (!this.card) {
        this.card = this.elements.create('card', {style: style});
      }
      this.card.mount(this.cardRef.nativeElement);
    });

    this.countries = ["USA"];
    this.CustomerInfoAddress = {
      data: {
        customer: {
          name: "",
          email: ""
        },
        billing_address: {
          first_name: "",
          last_name: "",
          company_name: "",
          line_1: "",
          line_2: "",
          city: "",
          postcode: "",
          county: "",
          country: ""
        },
        shipping_address: {
          first_name: "",
          last_name: "",
          company_name: "",
          line_1: "",
          line_2: "",
          city: "",
          postcode:"",
          county: "",
          country: "",
          instructions: " "
        }
    }
    }
  }

  buy(){
    this.stripeTest.value.customerName = `${this.stripeTest.value.billingAddressFirstname} ${this.stripeTest.value.billingAddressLastname}`;
    this.CustomerInfoAddress = {
      data: {
        customer: {
          name: this.stripeTest.value.customerName ,
          email: this.stripeTest.value.customerEmail 
        },
        billing_address: {
          first_name: this.stripeTest.value.billingAddressFirstname,
          last_name: this.stripeTest.value.billingAddressLastname,
          line_1: this.stripeTest.value.billingAddressLine1,
          line_2: this.stripeTest.value.billingAddressLine2,
          city: this.stripeTest.value.billingAddressCity,
          postcode: this.stripeTest.value.billingAddressPostcode,
          county: this.stripeTest.value.billingAddressCounty,
          country: this.stripeTest.value.billingAddressCountry
        },
        shipping_address: {
          first_name: this.stripeTest.value.shippingAddressFirstname,
          last_name: this.stripeTest.value.shippingAddressLastname,
          line_1: this.stripeTest.value.shippingAddressLine1,
          line_2: this.stripeTest.value.shippingAddressLine2,
          city: this.stripeTest.value.shippingAddressCity,
          postcode: this.stripeTest.value.shippingAddressPostcode,
          county: this.stripeTest.value.shippingAddressCounty,
          country: this.stripeTest.value.shippingAddressCountry,
          instructions: this.stripeTest.value.shippingAddressInstructions
        }
      }
    }
    

    if(this.isBillingChecked){
      this.CustomerInfoAddress.data.shipping_address.first_name = this.CustomerInfoAddress.data.billing_address.first_name ;
      this.CustomerInfoAddress.data.shipping_address.last_name = this.CustomerInfoAddress.data.billing_address.last_name ;
      this.CustomerInfoAddress.data.shipping_address.company_name = this.CustomerInfoAddress.data.billing_address.company_name ;
      this.CustomerInfoAddress.data.shipping_address.line_1 = this.CustomerInfoAddress.data.billing_address.line_1 ;
      this.CustomerInfoAddress.data.shipping_address.line_2 = this.CustomerInfoAddress.data.billing_address.line_2 ;
      this.CustomerInfoAddress.data.shipping_address.city = this.CustomerInfoAddress.data.billing_address.city ;
      this.CustomerInfoAddress.data.shipping_address.postcode = this.CustomerInfoAddress.data.billing_address.postcode ;
      this.CustomerInfoAddress.data.shipping_address.county = this.CustomerInfoAddress.data.billing_address.county ;
      this.CustomerInfoAddress.data.shipping_address.country = this.CustomerInfoAddress.data.billing_address.country ;
    }else{
      this.CustomerInfoAddress.data.shipping_address.instructions = '';
    }
    
    this._moltin.moltinCheckout(this.CustomerInfoAddress.data.customer, this.CustomerInfoAddress.data.billing_address, this.CustomerInfoAddress.data.shipping_address).then(res => {
      this._moltin.moltinOrder(res.data.id).then(order => {
        console.log(order);
        this.stripeService
          .createToken(this.card, { 
            name : this.stripeTest.value.customerName,
            address_line1 : this.stripeTest.value.billingAddressLine1,
            address_line2 : this.stripeTest.value.billingAddressLine2,
            address_city : this.stripeTest.value.billingAddressCity,
            address_state : this.stripeTest.value.billingAddressCounty,
            address_zip : this.stripeTest.value.billingAddressPostcode,
            address_country : this.stripeTest.value.billingAddressCountry
           })
          .subscribe(token => {
            console.log(token);
          });
      }).catch(err => {
        console.log(err);
      });
    });
  }
  onChange(event){
    this.isBillingChecked = event.checked;
    console.log(this.isBillingChecked);
  }

}
