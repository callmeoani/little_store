import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../types/productType';
import { FOODS } from '../../data/products/products';
import { FoodComponent } from "../food/food.component";

@Component({
  selector: 'app-food-list',
  imports: [FoodComponent],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css',
})
export class FoodListComponent implements OnInit {
  foods: ProductType[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.foods = FOODS;
    }, 2000);
  }
}
