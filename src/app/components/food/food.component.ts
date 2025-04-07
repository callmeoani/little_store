import { Component, input } from '@angular/core';
import { ProductType } from '../../types/productType';

@Component({
  selector: 'app-food',
  imports: [],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  foodDetails = input<ProductType>();
  
}
