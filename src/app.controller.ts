import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ceil, range } from 'lodash';
import { ApplicationResponse } from './applications.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('application-report')
  async getApplicationReport(
    @Query('channel') channel?: string,
  ): Promise<ApplicationResponse> {
    try {
      const applications = await this.appService.getApplications(channel);
      const allDates = applications?.map((application) =>
        application.timestamp.format('YYYY-MM-DD'),
      );

      const uniqDates = new Set(allDates);
      const dayCounts = uniqDates.size;

      const applicationReport: ApplicationResponse = {};

      range(24).forEach((hour: number) => {
        applicationReport[hour] = dayCounts
          ? ceil(
              applications.filter(
                (application) => application.timestamp.hour() === hour,
              ).length / dayCounts,
            )
          : 0;
      });

      return applicationReport;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch application report',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
