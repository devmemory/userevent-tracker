export interface EventModel {
  time?: number;
  action?: string;
  target?: string;
  url?: string;
  referrer?: string;
  os?: string;
  browserInfo?: string;
  data?: string;
  uuid?: string;
}