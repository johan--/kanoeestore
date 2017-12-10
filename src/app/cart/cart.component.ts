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
  cartItemsLength : number;
  quantityMax: number[] = [1, 2, 3, 4, 5];
  contentsQuantity : number;
  quantitySelect : number;
  isLoading : boolean = false;
  constructor(private _moltin : MoltinService, public _snackbar: MatSnackBar) { }

  ngOnInit() {
    this._moltin.getCartItems().then(res => {
      this.cartContents = res.data;
    });
  }

  deleteProduct(id:string){
    this.isLoading = true;
    this._moltin.moltinRemoveCartItem(id).then(res => {
      let snackBarRef = this._snackbar.open('Item has been deleted from your cart.');
      this.cartContents = res.data;
      this.isLoading = false;
      setTimeout(() => {
        snackBarRef.dismiss();
      }, 3000);
    }).catch(err => {
      let snackBarRef = this._snackbar.open('An error has occured. Please reload and try again.');
      setTimeout(() => {
        snackBarRef.dismiss();
      }, 3000);
      this.isLoading = false;
    });;
  }
  updateCart(itemId: string){
    this.isLoading = true;
    this._moltin.moltinUpdateItemQuantity(itemId, this.quantitySelect).then(res => {
      let snackBarRef = this._snackbar.open('Item quantity has succesfully updated');
      this.cartContents = res.data;
      this.isLoading = false;
      setTimeout(() => {
        snackBarRef.dismiss();
      }, 3000);
    }).catch(err => {
      let snackBarRef = this._snackbar.open('An error has occured. Please reload and try again.');
      setTimeout(() => {
        snackBarRef.dismiss();
      }, 3000);
    });
  }


}
