import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from './order.service';
import { RadioOption } from '../shared/radio/radio-option.model';
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 5;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService,
                private router: Router) { }

  ngOnInit() {
  }

  itemsValue(): number{
    return this.orderService.itemsValue();
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems();
  }

  increaseQtd(item: CartItem){
    this.orderService.increaseQtd(item);
  }

  decreaseQtd(item: CartItem){
    this.orderService.decreaseQtd(item);
  }

  remove(item: CartItem){
    this.orderService.remove(item);
  }

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))

    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        this.router.navigate(['/order-summary']);
        //console.log(`compra comcluida: ${ orderId }`)
        this.orderService.clear()
      })    
  }

}
