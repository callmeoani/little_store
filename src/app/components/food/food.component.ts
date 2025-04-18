import { Component, input, output } from '@angular/core';
import { ProductType } from '../../types/productType';
import { CartType } from '../../types/cartTypes';
import { CurrencyPipe, NgClass, NgOptimizedImage } from "@angular/common";
import { KebabCasePipe } from "../../pipes/kebab-case/kebab-case.pipe";

@Component({
  selector: 'app-food',
  imports: [CurrencyPipe, NgClass, NgOptimizedImage],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css',
})
export class FoodComponent {
  foodDetails = input<ProductType>();
  addedToCart = output<void>();
}
