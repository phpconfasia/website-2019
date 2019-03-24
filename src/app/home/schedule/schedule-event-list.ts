import {ScheduleEvent} from './schedule-event';
import {authorList} from './author-list';

export const scheduleEventList: Array<ScheduleEvent[]> = [
  [
    {
      title: 'Registration',
      description: 'Doors are open and registration is ready!',
      dateTime: new Date(2019, 5, 24, 8, 0, 0),
      dateTimeEnd: new Date(2019, 5, 24, 8, 45, 0)
    },
    {
      title: 'Opening Address',
      author: authorList[0],
      description: 'An opening speech for the conference, thanking our sponsors.',
      dateTime: new Date(2019, 5, 24, 8, 45, 0),
      dateTimeEnd: new Date(2019, 5, 24, 9, 0, 0)
    },
    {
      title: 'Welcome to the PHP community',
      author: authorList[1],
      description: '',
      dateTime: new Date(2019, 5, 24, 9, 0, 0),
      dateTimeEnd: new Date(2019, 5, 24, 9, 40, 0)
    },
    {
      title: 'Closing Address',
      author: authorList[0],
      description: 'A summary speech to mark the end of day 1 and also to thank our sponsors.',
      dateTime: new Date(2019, 5, 24, 17, 0, 0),
      dateTimeEnd: new Date(2019, 5, 24, 17, 15, 0)
    }
  ],
  [
    {
      title: 'Registration',
      description: 'Doors are open and registration is ready!',
      dateTime: new Date(2019, 5, 25, 8, 0, 0),
      dateTimeEnd: new Date(2019, 5, 25, 8, 45, 0)
    },
  ]
];
