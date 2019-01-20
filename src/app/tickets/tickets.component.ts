import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent implements OnInit {
  public tickets;

  constructor() {
    this.tickets = [
      {
        title: 'STUDENT',
        price: 49.00,
        description: 'For students & NSFs',
        url: ''
      },
      {
        title: 'EARLY BIRD',
        price: 249.00,
        description: 'For folks who buy it early',
        url: ''
      },
      {
        title: 'REGULAR',
        price: 349.00,
        description: 'For folks who buy it just on time',
        url: ''
      }
    ];
  }

  ngOnInit() {
  }

}
