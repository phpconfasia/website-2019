import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Organizer} from './organizer';
import {organizers} from './organizers';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizersComponent implements OnInit {
  public organizersList: Organizer[] = organizers;

  constructor() {
  }

  ngOnInit() {
  }

}
