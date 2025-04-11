import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { FaqComponent } from "./pages/faq/faq.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AboutUsComponent, FaqComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
})
export class AppComponent {
  storeName = "Foodie's Store";
}
