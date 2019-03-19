export interface ScheduleEvent {
  title: string;
  description: string;
  imgUrl?: string;
  author?: string;
  authorUrl?: string;
  dateTime: Date;
  dateTimeEnd?: Date;
}
