import { Dayjs } from 'dayjs';

export interface Application {
  id: string;
  timestamp: Dayjs;
  channel: string;
}

export interface ApplicationResponse {
  [key: number]: number;
}
