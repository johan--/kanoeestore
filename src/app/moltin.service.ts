import { Injectable } from '@angular/core';
import { gateway as MoltinGateway } from '@moltin/sdk';

@Injectable()
export class MoltinService {
  Moltin;
  constructor() { 
    this.Moltin = MoltinGateway({
      client_id: 'C43rUyC2pgESGklyQh4rQuCDkpQhMN4gw8Rq0RhKez'
    });
  }

  getProducts (){
    return this.Moltin.Products.With('main_image').All().then(res => res);
  }

  getCartItems (){
    return this.Moltin.Cart().Items().then(res => res);
  }
  addProduct(productID){
    return this.Moltin.Cart().AddProduct(productID, 1).then(res => res);
  }
  moltinCheckout(customer, address, billing){
    return this.Moltin.Cart().Checkout(customer, address, billing);
  }
  moltinOrder(orderID){
    return this.Moltin.Orders.Payment(orderID, {
      gateway: "stripe",
      method: "purchase",
      payment: "tok_visa"
    }).then(res => res);
  }
  moltinRemoveCartItem(itemId:string){
    return this.Moltin.Cart().RemoveItem(itemId).then(res => res);
  }
  moltinUpdateItemQuantity(itemId : string, quantity: number){
    return this.Moltin.Cart().UpdateItemQuantity(itemId, quantity).then(res => res);
  }
  

}
