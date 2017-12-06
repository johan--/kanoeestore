import { Component, OnInit } from '@angular/core';
import { CustomerInfoAddress } from '../customer-address';
import { MoltinService } from '../moltin.service';
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
  constructor(private _moltin : MoltinService) { }

  ngOnInit() {
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
          instructions: ""
        }
    }
    }
  }

  submitUser(){
    // console.log(this.CustomerInfoAddress);
    this.CustomerInfoAddress.data.customer.name = this.CustomerInfoAddress.data.billing_address.first_name + " " + this.CustomerInfoAddress.data.billing_address.last_name;

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
        console.log(order)
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
