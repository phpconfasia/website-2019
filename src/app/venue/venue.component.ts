import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VenueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
