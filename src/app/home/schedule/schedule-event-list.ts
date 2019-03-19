import {ScheduleEvent} from './schedule-event';

export const dayOneEventList: ScheduleEvent[] = [
  {
    title: 'Registration',
    description: 'Doors are open and registration is ready!',
    dateTime: new Date(2019, 5, 24, 8, 0 , 0)
  },
  {
    title: 'Opening Address',
    author: 'Michael Cheng',
    description: 'An opening speech for the conference, thanking our sponsors.',
    dateTime: new Date(2019, 5, 24, 8, 45 , 0),
    dateTimeEnd: new Date(2019, 5, 24, 9, 0 , 0)
  }
];

export const dayTwoEventList: ScheduleEvent[] = [

];

