import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ScheduleEvent} from './schedule-event';
import {scheduleEventList} from './schedule-event-list';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit {
  public selectedDay$: BehaviorSubject<Number>;
  public scheduleEventList: Array<ScheduleEvent[]> = scheduleEventList;

  constructor() {
    this.selectedDay$ = new BehaviorSubject<Number>(this.getCurrentDay());
  }

  ngOnInit() {
  }

  public selectDay(selectedDay: number): void {
    if (selectedDay >= 0 && selectedDay <= 2) {
      this.selectedDay$.next(selectedDay);
    }
  }

  public isDaySelected(day: number): boolean {
    return day === this.selectedDay$.getValue();
  }

  public getCurrentDay(): number {
    const dateNow = new Date();

    switch (dateNow.getDate()) {
      case 25:
        return 1;
      case 26:
        return 2;
      case 24:
      default:
        return 0;
    }
  }

}
