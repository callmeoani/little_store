import { Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
