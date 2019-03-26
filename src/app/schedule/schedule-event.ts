import {Author} from './author';

export interface ScheduleEvent {
  title: string;
  description: string;
  imgUrl?: string;
  author?: Author;
  dateTime: Date;
  dateTimeEnd?: Date;
}
