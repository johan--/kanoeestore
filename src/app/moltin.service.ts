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

}
