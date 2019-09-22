import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { TicketChoiceComponent } from './ticket-choice/ticket-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FlightDetailsComponent,
    TicketChoiceComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
