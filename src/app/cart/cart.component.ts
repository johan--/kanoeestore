import { Component, OnInit } from '@angular/core';
import { MoltinService } from '../moltin.service';
import { Cart } from '../cart';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartContents : Cart;
  constructor(private _moltin : MoltinService, public _snackbar: MatSnackBar) { }

  ngOnInit() {
    this._moltin.getCartItems().then(res => {
      this.cartContents = res.data;
    });
  }

  deleteProduct(id:string){
    this._moltin.moltinRemoveCartItem(id).then(res => {
      let snackBarRef = this._snackbar.open('Item has been deleted from your cart.');
      this.cartContents = res.data;
      setTimeout(() => {
        snackBarRef.dismiss();
      }, 3000);
    });
  }


}
