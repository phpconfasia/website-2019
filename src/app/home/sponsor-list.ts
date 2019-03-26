import {Sponsor} from './sponsor';

export const sponsorList: { [rank: string]: Sponsor[] } = {
  'gold': [],
  'silver': [
    {
      name: 'Microsoft Singapore',
      sponsorTitle: 'Venue Sponsor',
      imgUrl: '/assets/img/sponsoring-companies/microsoft.png',
      websiteUrl: 'https://www.microsoft.com/'
    }
  ],
  'supporter': [
    {
      name: 'Nexmo',
      sponsorTitle: 'Coffee Sponsor',
      imgUrl: '/assets/img/sponsoring-companies/nexmo.svg',
      websiteUrl: 'https://nexmo.com/'
    }
  ],
  'community': [
    {
      name: 'Beach Casts',
      sponsorTitle: 'Community Partner',
      imgUrl: '/assets/img/sponsoring-companies/beachcasts.jpg',
      websiteUrl: 'https://beachcasts.com/'
    }
  ]
};
