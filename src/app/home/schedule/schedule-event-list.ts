import {ScheduleEvent} from './schedule-event';
import {authorList} from './author-list';

export const scheduleEventList: Array<ScheduleEvent[]> = [
  [
    {
      title: 'Registration',
      description: 'Doors are open and registration is ready!',
      dateTime: new Date(2019, 5, 24, 8, 0),
      dateTimeEnd: new Date(2019, 5, 24, 8, 45)
    },
    {
      title: 'Opening Address',
      author: authorList[0],
      description: 'An opening speech for the conference, thanking our sponsors.',
      dateTime: new Date(2019, 5, 24, 8, 45),
      dateTimeEnd: new Date(2019, 5, 24, 9, 0)
    },
    {
      title: 'Keynote: Welcome to the PHP community',
      author: authorList[1],
      description: '',
      dateTime: new Date(2019, 5, 24, 9, 0),
      dateTimeEnd: new Date(2019, 5, 24, 9, 40)
    },
    {
      title: 'Foundations of Zend Framework',
      author: authorList[2],
      description: '',
      dateTime: new Date(2019, 5, 24, 9, 40),
      dateTimeEnd: new Date(2019, 5, 24, 10, 20)
    },
    {
      title: 'Tea Break',
      description: '',
      dateTime: new Date(2019, 5, 24, 10, 20),
      dateTimeEnd: new Date(2019, 5, 24, 10, 50)
    },
    {
      title: 'Framework Love, not War: don\'t lock yourself in when it comes to security',
      author: authorList[3],
      description: '',
      dateTime: new Date(2019, 5, 24, 10, 50),
      dateTimeEnd: new Date(2019, 5, 24, 11, 30)
    },
    {
      title: 'Let phalcon jump into the wars',
      author: authorList[4],
      description: '',
      dateTime: new Date(2019, 5, 24, 11, 30),
      dateTimeEnd: new Date(2019, 5, 24, 12, 10)
    },
    {
      title: 'Lunch',
      description: '',
      dateTime: new Date(2019, 5, 24, 12, 10),
      dateTimeEnd: new Date(2019, 5, 24, 13, 30)
    },
    {
      title: 'How I do TDD in Laravel',
      author: authorList[5],
      description: '',
      dateTime: new Date(2019, 5, 24, 13, 30),
      dateTimeEnd: new Date(2019, 5, 24, 14, 10)
    },
    {
      title: 'Sylius Everlasting Journey with Symfony',
      author: authorList[6],
      description: '',
      dateTime: new Date(2019, 5, 24, 14, 10),
      dateTimeEnd: new Date(2019, 5, 24, 14, 50)
    },
    {
      title: 'Tea Break',
      description: '',
      dateTime: new Date(2019, 5, 24, 14, 50),
      dateTimeEnd: new Date(2019, 5, 24, 15, 30)
    },
    {
      title: 'Yii2 Framework - The King of The North',
      author: authorList[7],
      description: '',
      dateTime: new Date(2019, 5, 24, 15, 50),
      dateTimeEnd: new Date(2019, 5, 24, 16, 20)
    },
    {
      title: 'Fuel your web applications with FuelPHP',
      author: authorList[8],
      description: '',
      dateTime: new Date(2019, 5, 24, 16, 20),
      dateTimeEnd: new Date(2019, 5, 24, 17, 0)
    },
    {
      title: 'Closing Address',
      author: authorList[0],
      description: 'A summary speech to mark the end of day 1 and also to thank our sponsors.',
      dateTime: new Date(2019, 5, 24, 17, 0),
      dateTimeEnd: new Date(2019, 5, 24, 17, 15)
    }
  ],
  [
    {
      title: 'Registration',
      description: 'Doors are open and registration is ready!',
      dateTime: new Date(2019, 5, 25, 8, 0),
      dateTimeEnd: new Date(2019, 5, 25, 8, 45)
    },
    {
      title: 'Opening Address',
      author: authorList[0],
      description: 'An opening speech for the conference, thanking our sponsors.',
      dateTime: new Date(2019, 5, 25, 8, 45),
      dateTimeEnd: new Date(2019, 5, 25, 9, 0)
    },
    {
      title: 'Keynote: CodeIgniter Easy and Simple',
      author: authorList[9],
      description: '',
      dateTime: new Date(2019, 5, 25, 9, 0),
      dateTimeEnd: new Date(2019, 5, 25, 9, 40)
    },
    {
      title: 'Building Web APIs Using Zend Expressive',
      author: authorList[10],
      description: '',
      dateTime: new Date(2019, 5, 25, 9, 40),
      dateTimeEnd: new Date(2019, 5, 25, 10, 20)
    },
    {
      title: 'Tea Break',
      description: '',
      dateTime: new Date(2019, 5, 25, 10, 20),
      dateTimeEnd: new Date(2019, 5, 25, 10, 50)
    },
    {
      title: 'Battle of the testing frameworks: Behat versus NightwatchJS',
      author: authorList[11],
      description: '',
      dateTime: new Date(2019, 5, 25, 10, 50),
      dateTimeEnd: new Date(2019, 5, 25, 11, 30)
    },
    {
      title: 'How do you structure your apps?',
      author: authorList[12],
      description: '',
      dateTime: new Date(2019, 5, 25, 11, 30),
      dateTimeEnd: new Date(2019, 5, 25, 12, 10)
    },
    {
      title: 'Lunch',
      description: '',
      dateTime: new Date(2019, 5, 25, 12, 10),
      dateTimeEnd: new Date(2019, 5, 25, 13, 30)
    },
    {
      title: 'TBA',
      description: '',
      dateTime: new Date(2019, 5, 25, 13, 30),
      dateTimeEnd: new Date(2019, 5, 25, 14, 50)
    },
    {
      title: 'Tea Break',
      description: '',
      dateTime: new Date(2019, 5, 25, 14, 50),
      dateTimeEnd: new Date(2019, 5, 25, 15, 30)
    },
    {
      title: 'Bake a cake',
      author: authorList[13],
      description: '',
      dateTime: new Date(2019, 5, 25, 15, 30),
      dateTimeEnd: new Date(2019, 5, 25, 16, 10)
    },
    {
      title: 'Closing Keynote: Groupies, Roadies, Rockstars',
      author: authorList[14],
      description: '',
      dateTime: new Date(2019, 5, 25, 16, 20),
      dateTimeEnd: new Date(2019, 5, 25, 17, 20)
    }
  ]
];
