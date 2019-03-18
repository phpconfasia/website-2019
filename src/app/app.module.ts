import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SponsorsComponent} from './sponsors/sponsors.component';
import {CodeOfConductComponent} from './code-of-conduct/code-of-conduct.component';
import {VenueComponent} from './venue/venue.component';
import {OrganizersComponent} from './organizers/organizers.component';
import {ScheduleComponent} from './home/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SponsorsComponent,
    CodeOfConductComponent,
    VenueComponent,
    OrganizersComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
