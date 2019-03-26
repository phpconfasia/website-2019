import {Sponsor} from './sponsor';

export const sponsorList: { [rank: string]: Sponsor[] } = {
  'gold': [],
  'silver': [
    {
      name: 'Microsoft Singapore',
      description: '',
      sponsorTitle: 'Venue Sponsor',
      imgUrl: '/assets/img/sponsoring-companies/microsoft.png'
    }
  ],
  'supporter': [],
  'community': []
};
