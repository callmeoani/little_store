import { Component, input, output } from '@angular/core';
import { ProductType } from '../../types/productType';
import { CartType } from '../../types/cartTypes';

@Component({
  selector: 'app-food',
  imports: [],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  foodDetails = input<ProductType>();
  addedToCart = output<void>();
}
