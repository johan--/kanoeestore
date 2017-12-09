import { Component, OnInit } from '@angular/core';

import { MoltinService } from './moltin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartItemsLength : number;
  constructor(private _moltin : MoltinService) {}
  ngOnInit (){
    this._moltin.getCartItems().then( res => {
      this.cartItemsLength = res.data.length;
    });
  }
}
