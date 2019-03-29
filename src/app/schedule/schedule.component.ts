import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject, Observable, Observer} from 'rxjs';
import {ScheduleEvent} from './schedule-event';
import {scheduleEventList} from './schedule-event-list';
import {Day} from './day';
import {dayList} from './day-list';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit {
  public selectedDay$: BehaviorSubject<Number>;
  public scheduleEventList: Array<ScheduleEvent[]> = scheduleEventList;
  public dayList: Day[] = dayList;
  public dateNow: Date = new Date();

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
    switch (this.dateNow.getDate() + "0" + this.dateNow.getMonth()) {
      case "2506":
        return 1;
      case "2606":
        return 2;
      case "2406":
      default:
        return 0;
    }
  }

  public getCurrentScheduleEvent(): Observable<ScheduleEvent | null> {
    return new Observable((observer: Observer<ScheduleEvent | null>) => {
      const scheduleEventDay: ScheduleEvent[] = scheduleEventList[this.getCurrentDay()];
      for (let i = 0; i < scheduleEventDay.length; i++) {
        const scheduleEvent = scheduleEventDay[i];

        if (scheduleEvent.dateTime.getTime() <= this.dateNow.getTime() && scheduleEvent.dateTimeEnd.getTime() >= this.dateNow.getTime()) {
          observer.next(scheduleEvent);
          observer.complete();
          return;
        }
      }

      observer.next(null);
      observer.complete();
    });
  }
}
