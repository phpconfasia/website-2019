import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
