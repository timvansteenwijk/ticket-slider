import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  ticketList = [
    {
      ticketType: 'Standard',
      luggage: 1,
      price: 249
    },
    {
      ticketType: 'Comfort',
      luggage: 2,
      price: 399
    }
  ];

  constructor() {}

  ngOnInit() {}
}
