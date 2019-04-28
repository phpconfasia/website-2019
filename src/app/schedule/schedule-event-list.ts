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
      description: 'Congratulations! By attending PHPConf.Asia, you are now a full-fledged member of the PHP community. Your attendee badge is your membership card, proving your acceptance into this global society. My goal is to make that seem exciting instead of intimidating, especially if this is your first PHP conference (or perhaps even your first tech conference altogether!). But even if you’ve attended PHPConf.Asia before, there is probably more you can get out of the conference and give back to the community. The theme of this talk is leveling up: approaching membership in the PHP community to a degree that\'s appropriate for you based on your prior involvement.',
      dateTime: new Date(2019, 5, 24, 9, 0),
      dateTimeEnd: new Date(2019, 5, 24, 9, 40)
    },
    {
      title: 'Foundations of Zend Framework',
      author: authorList[2],
      description: 'Full frameworks are heavy, slow, and coupled internally, forcing us to create applications tightly coupled to a toolset. On the other hand are microframeworks leading to a NIH (Not invented here) approach because of missing functionality, with a minefield of tradeoffs to connect to other components. Zend Framework 3 (ZF3) features fully separated components, and is blazing fast (up to 15X) with newly rewritten Service and Event Managers. ',
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
      description: 'Frameworks are fantastic. They make your life easier, but it\'s unlikely you\'ll just use one. From large organisations with service oriented architectures, to small website redevelopment projects, you won\'t want to deal with the hassle of migrating and synchronising profiles and identities. In this talk and demo, you will learn will how using a third party identity management system can allow you to ramp up your prototypes and MVPs, integrate multiple platforms, and concentrate on the core business purpose of your software, rather than the layers of security that are a must in today\'s digital world.',
      dateTime: new Date(2019, 5, 24, 10, 50),
      dateTimeEnd: new Date(2019, 5, 24, 11, 30)
    },
    {
      title: 'Let Phalcon jump into the wars',
      author: authorList[4],
      description: 'An introductory talk to Phalcon and a simple demonstration to creating a basic API.',
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
      description: 'Most web developers cringe when they hear of TDD (test driven development), but it\'s not so hard when you\'re using Laravel framework. Laravel is built with testing in mind. In fact, support for testing with PHPUnit is included out of the box and a phpunit.xml file is already set up for your application. The framework also ships with convenient helper methods that allow you to expressively test your applications. I will talk how I do TDD on my day to day work.',
      dateTime: new Date(2019, 5, 24, 13, 30),
      dateTimeEnd: new Date(2019, 5, 24, 14, 10)
    },
    {
      title: 'Sylius Everlasting Journey with Symfony',
      author: authorList[6],
      description: 'Sylius is an eCommerce framework which was created in 2011 on top of Symfony 2. That time Composer hasn\'t been around. Over 7 years after, Symfony is still the building block of Sylius. I will talk about the history of both projects, the toughest moments during the journey, the backstage experiences of maintaining Open Source projects and the way both projects matured over the years.',
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
      description: 'While Laravel is popular and Symfony is big. Yii2 has fans in the North. Russia. While we\'re not a large house, we are a proud house. But that shouldn\'t stop you from finding out why Yii2 could be the best fit. Yii. Lord Lionel of house Yii2, make a pledge for you to join the North. Find out why you should at least consider House Yii.',
      dateTime: new Date(2019, 5, 24, 15, 50),
      dateTimeEnd: new Date(2019, 5, 24, 16, 20)
    },
    {
      title: 'Fuel your web applications with FuelPHP',
      author: authorList[8],
      description: 'The Fuel PHP Framework is a fast, simple and flexible PHP framework, born from the best ideas of other frameworks, with a fresh start! FuelPHP is created with a desire to incorporate best practices from frameworks such as CodeIgniter and Kohana with improvements and ideas of its own. FuelPHP database migration tool and scaffolding functionalities are inspired by the popular Ruby on Rails framework. The talk will cover all about FuelPHP, features that help create a full-fledged web application, advantages over other frameworks, HMVC pattern, email functionality, advanced form programming, validation and other cool features!',
      dateTime: new Date(2019, 5, 24, 16, 20),
      dateTimeEnd: new Date(2019, 5, 24, 17, 0)
    },
    {
      title: 'Closing Address',
      author: authorList[0],
      description: 'A summary speech to mark the end of day 1 and also to thank our sponsors.',
      dateTime: new Date(2019, 5, 24, 17, 0),
      dateTimeEnd: new Date(2019, 5, 24, 17, 15)
    },
    {
      title: 'Singapore PHP Community Combined Meetup 2019',
      author: authorList[15],
      description: 'Upsized version of our monthly local meetup.',
      dateTime: new Date(2019, 5, 24, 19, 0),
      dateTimeEnd: new Date(2019, 5, 24, 21, 0)
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
      description: 'There are a lot of frame-work around the world. What is the best? The answer is there is no the best frame-work, the best is how the framework help you to solve your problem, and meet customer need. Why do I chose Codeigniter? It is simple and easy for me.',
      dateTime: new Date(2019, 5, 25, 9, 0),
      dateTimeEnd: new Date(2019, 5, 25, 9, 40)
    },
    {
      title: 'Building Web APIs Using Zend Expressive',
      author: authorList[10],
      description: 'Lately there has been a lot of buzz about PHP HTTP Middleware. A middleware is a mechanism for filtering the HTTP requests on an application. It allows us to add additional layers to the business logic. It executes before and after the piece of code we want to reach to handle input and output communication. There are many frameworks in PHP available for building APIs. But they are mostly use MVC as the structure. Only a few frameworks use Middleware as the structure in PHP. At this event, I will talk about Zend Expressive for building APIs and what is actually benefit of PSR-7 and PSR-15 implementations on this Zend Expressive.',
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
      title: 'Battle of the testing frameworks: Behat versus Nightwatch JS',
      author: authorList[11],
      description: 'Automated testing is integral part of any continuous integration workflow. Introducing functional testing to the project as early as possible will lower the price and increase the quality of any web application. But how to choose the correct framework? Behat always was PHP native choice, but other frameworks introduced the alternatives: Drupal added NightwatchJS to it\'s core, Laravel invented Dusk. This session will focus on using selenium based automated testing frameworks including: introduction to selenium and web drivers, controlling selenium using Behat & NightwatchJS frameworks, using web based testing services services.',
      dateTime: new Date(2019, 5, 25, 10, 50),
      dateTimeEnd: new Date(2019, 5, 25, 11, 30)
    },
    {
      title: 'How do you structure your apps?',
      author: authorList[12],
      description: 'How should I structure my code? What works best for object-oriented design? Is there an alternative to MVC? This talk will answer those questions and give an overview of common layouts and best practices to make projects testable, maintainable and easy to understand. We will also look at DDD and hexagonal / clean / onion architectures and go through a few different implementations of the same app to illustrate the pros and cons of each approach.',
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
      description: 'How CakePHP survives over the years. Is it still a viable framework?',
      dateTime: new Date(2019, 5, 25, 15, 30),
      dateTimeEnd: new Date(2019, 5, 25, 16, 10)
    },
    {
      title: 'PHPUnit vs Mockery',
      author: authorList[14],
      description: 'Both of them are testing frameworks and have a completely different approach to mock objects. This talk will also cover mocking 3rd party services with both of them to complete the who scope. ',
      dateTime: new Date(2019, 5, 25, 16, 20),
      dateTimeEnd: new Date(2019, 5, 25, 17, 20)
    },
    {
      title: 'After Party',
      description: 'What\'s a conference without an after party?',
      dateTime: new Date(2019, 5, 25, 19, 0),
      dateTimeEnd: new Date(2019, 5, 25, 21, 0)
    }
  ],
  [
    {
      title: 'Registration',
      description: 'Doors are open and registration is ready!',
      dateTime: new Date(2019, 5, 26, 8, 45),
      dateTimeEnd: new Date(2019, 5, 26, 9, 30)
    },
    {
      title: 'Behat',
      author: authorList[11],
      description: '',
      dateTime: new Date(2019, 5, 26, 9, 30),
      dateTimeEnd: new Date(2019, 5, 26, 12, 30)
    },
    {
      title: 'Lunch',
      description: '',
      dateTime: new Date(2019, 5, 26, 12, 30),
      dateTimeEnd: new Date(2019, 5, 26, 14, 0)
    },
    {
      title: 'Zend Expressive',
      author: authorList[2],
      description: '',
      dateTime: new Date(2019, 5, 26, 14, 0),
      dateTimeEnd: new Date(2019, 5, 26, 17, 0)
    },
  ]
];
