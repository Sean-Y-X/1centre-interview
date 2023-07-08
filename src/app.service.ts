import { Injectable } from '@nestjs/common';
import { Application } from './applications.interface';
import * as APPLICATIONS_JSON from './applications.json';
import * as dayjs from 'dayjs';

@Injectable()
export class AppService {
  async getApplications(filter = 'all'): Promise<Application[]> {
    const applications: Application[] = APPLICATIONS_JSON.applications?.map(
      (data) => ({
        ...data,
        timestamp: dayjs(data.timestamp, 'YYYY-MM-DD H:mm:ss ZZ'),
      }),
    );

    if (filter === 'all') {
      return applications;
    }

    return applications.filter((application) => {
      return application.channel === filter;
    });
  }
}
