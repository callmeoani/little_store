import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductType } from "./types/productType";
import { FOODS } from "./data/products/products";
import { FoodListComponent } from "./components/food-list/food-list.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FoodListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
})
export class AppComponent {
  storeName = "Foodie's Store";
  // foods: ProductType[] = [];
  foods: ProductType[] = FOODS;
}
