import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TicketsComponent} from './tickets/tickets.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {
      title: 'Framework Wars | PHPConfAsia 2019',
      description: 'Welcome to PHPConfAsia 2019! Our theme for this year is Framework Wars!'
    }
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    data: {
      title: 'Tickets | PHPConfAsia 2019',
      description: 'Welcome to PHPConfAsia 2019! Our theme for this year is Framework Wars!'
    }
  }
];
