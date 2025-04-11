import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  TemplateRef,
  ViewChild,
  viewChild,
} from '@angular/core';
import { CustomCardComponent } from '../../components/custom-card/custom-card.component';

// @Component({
//   selector: 'custom-card-header',
//   template:""
// })
// export class CustomCardHeader {
//   text: string;
// }

@Component({
  selector: 'app-about-us',
  imports: [CustomCardComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutUsComponent {
  clickCount = 0;
  incrementClickCount() {
    console.log('you clicked!');
    this.clickCount++;
  }
}
