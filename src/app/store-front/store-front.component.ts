import { Component, OnInit } from '@angular/core';
import { gateway as MoltinGateway } from '@moltin/sdk';

import { UserProducts } from '../user-products'
import { UserProductsImages } from '../user-products-images';
import { MoltinService } from '../moltin.service';

import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.css']
})
export class StoreFrontComponent implements OnInit {
  userProducts : UserProducts;
  userProductImages : UserProductsImages;

  constructor(private _moltin : MoltinService, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this._moltin.getProducts().then(data => {
      this.userProducts = data.data;
      this.userProductImages = data.included;
    });
    
  }
  addProductToCart(productID){
    this._moltin.addProduct(productID).then(res => {
      
      for(var i=0; i < res.data.length; i++){
        if(res.data[i].product_id === productID){
            let snackBarRef = this.snackBar.open(`${res.data[i].name} has been added to your cart.`);
            setTimeout(() =>{
              snackBarRef.dismiss();
            },3000);
            return;
        }
      }
      
    });
    
  }

}
