import { Component } from '@angular/core';
import { FoodListComponent } from "../../components/food-list/food-list.component";

@Component({
  selector: 'app-home',
  imports: [FoodListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
