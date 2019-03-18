import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ScheduleEvent} from './schedule-event';
import {dayOneEventList, dayTwoEventList} from './schedule-event-list';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit {
  public selectedDay$: BehaviorSubject<Number>;
  public dayOneEventList: ScheduleEvent[] = dayOneEventList;
  public dayTwoEventList: ScheduleEvent[] = dayTwoEventList;

  constructor() {
    this.selectedDay$ = new BehaviorSubject<Number>(1);
  }

  ngOnInit() {
  }

  public selectDay(selectedDay: number): void {
    if (selectedDay >= 1 && selectedDay <= 2) {
      this.selectedDay$.next(selectedDay);
    }
  }

  public isDaySelected(day: number): boolean {
    if (day === this.selectedDay$.getValue()) {
      return true;
    }

    return false;
  }

}
