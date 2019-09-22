import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {
  flight = {
    departureLocation: 'Paris (CDG)',
    arrivalLocation: 'Los Angeles (LAX)',
    departureTime: '13:00',
    arrivalTime: '14:20',
    journeyTime: '13h50'
  };

  constructor() { }

  ngOnInit() {
  }

}
