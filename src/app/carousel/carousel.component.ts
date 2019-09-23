import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  ticketList = [
    {
      ticketType: 'Light',
      luggage: 1,
      price: 233
    },
    {
      ticketType: 'Standard',
      luggage: 2,
      price: 427
    },
    {
      ticketType: 'Comfort',
      luggage: 2,
      price: 440
    },
    {
      ticketType: 'Flex',
      typeId: 4,
      luggage: 2,
      price: 627
    },
  ];

  constructor() {}

  ngOnInit() {}
}
