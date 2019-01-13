import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: HomeComponent,
  data: {
    title: 'Home | PHPConfAsia 2019',
    description: 'Welcome to PHPConfAsia 2019! Our theme for this year is Framework Wars!'
  },
}];
