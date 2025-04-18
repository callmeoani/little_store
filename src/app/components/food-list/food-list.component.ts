import { Component, input, model, OnInit, signal } from '@angular/core';
import { ProductType } from '../../types/productType';
import { FOODS } from '../../data/products/products';
import { FoodComponent } from '../food/food.component';
import { CartType } from '../../types/cartTypes';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-food-list',
  imports: [FoodComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css',
})
export class FoodListComponent implements OnInit {
  foods: ProductType[] = [];
  cart = <CartType>{};
  mySurname = input();

  ngOnInit(): void {
    setTimeout(() => {
      this.foods = FOODS;
    }, 500);
  }

  addToCart(details: ProductType) {
    console.log('We will now add to cart!:', details);
    if (details.quantity > 0) {
      if (this.cart[details.id]) {
        const oldValue = this.cart[details.id];
        const newInput = {
          [details.id]: {
            ...oldValue,
            chosenQuantity: oldValue.chosenQuantity + 1,
          },
        };
        this.cart = { ...this.cart, ...newInput };
      } else {
        const data = {
          id: details.id,
          chosenQuantity: 1,
          price: details.price,
          title: details.title,
          totalPrice: details.price ? details!.price * 0 : 0,
        };
        const newInput = {
          [details.id]: data,
        };
        this.cart = { ...this.cart, ...newInput };
      }
      // find the index of the what we want to change
      const itemIndex = this.foods.indexOf(details);
      const detailsNew = { ...details, quantity: details.quantity - 1 };
      this.foods[itemIndex] = detailsNew;
    } else {
      console.log('Sorry. No more product to add!');
    }
  }

  cartQuantity() {
    let total = 0;
    for (const key in this.cart) {
      total += this.cart[key].chosenQuantity;
    }
    return total;
  }

  updateField(event: KeyboardEvent): void {
    console.log('You pressed: ', event.key);
  }
}
