import { Component, OnInit } from '@angular/core';
import { CustomerAddress } from '../customer-address';
import { Customer } from '../customer';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  customer : Customer;
  customerAddress : CustomerAddress;
  countries : string[];
  selectedCountry: Object = {};
  constructor() { }

  ngOnInit() {
    this.countries = ["USA"];
    this.customerAddress = {
      first_name: "",
      last_name: "",
      line_1: "",
      line_2: "",
      county: "",
      postcode: "",
      country: ""
    }
    this.customer = {
      email : "",
      name : ""
    }
  }

  submitUser(){
    console.log(this.customerAddress);
  }

}
