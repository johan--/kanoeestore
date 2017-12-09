import { Component, OnInit } from '@angular/core';
import { MoltinService } from '../moltin.service';
import { Cart } from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartContents : Cart;
  constructor(private _moltin : MoltinService) { }

  ngOnInit() {
    this._moltin.getCartItems().then(res => {
      this.cartContents = res.data;
      console.log(res.data);
    });
  }

  deleteProduct(id:string){
    
  }


}
