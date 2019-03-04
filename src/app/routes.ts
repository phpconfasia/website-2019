import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {CodeOfConductComponent} from './code-of-conduct/code-of-conduct.component';
import {VenueComponent} from './venue/venue.component';

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
    path: 'sponsors',
    component: SponsorsComponent,
    data: {
      title: 'Sponsors | PHPConfAsia 2019',
      description: 'Welcome to PHPConfAsia 2019! Our theme for this year is Framework Wars!'
    }
  },
  {
    path: 'code-of-conduct',
    component: CodeOfConductComponent,
    data: {
      title: 'Code Of Conduct | PHPConfAsia 2019',
      description: 'Welcome to PHPConfAsia 2019! Our theme for this year is Framework Wars!'
    }
  },
  {
    path: 'venue',
    component: VenueComponent,
    data: {
      title: 'Venue | PHPConfAsia 2019',
      description: 'Welcome to PHPConfAsia 2019! Our theme for this year is Framework Wars!'
    }
  }
];
