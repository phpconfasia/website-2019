import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TicketsComponent} from './tickets/tickets.component';
import { CodeOfConductComponent } from './code-of-conduct/code-of-conduct.component';
import { VenueComponent } from './venue/venue.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TicketsComponent,
    CodeOfConductComponent,
    VenueComponent
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
