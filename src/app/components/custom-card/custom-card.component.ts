import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  imports: [],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.css',
})
export class CustomCardComponent {
  cardName:string = "Foodie foodie card"
}
