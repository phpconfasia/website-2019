import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Ticket} from './ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent implements OnInit {
  public tickets: Ticket[];

  constructor() {
    this.tickets = [
      {
        imageUrl: '/assets/img/student.svg',
        title: 'STUDENT',
        price: 49.00,
        description: 'For students & NSFs',
        url: ''
      },
      {
        imageUrl: '/assets/img/dove.svg',
        title: 'EARLY BIRD',
        price: 249.00,
        description: 'For folks who buy it early',
        url: ''
      },
      {
        imageUrl: '/assets/img/robot.svg',
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
