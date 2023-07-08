import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dayjs from 'dayjs';

const MOCK_APPLICATION_DATA = [
  {
    id: 'id1',
    timestamp: dayjs('2022-08-01 0:01:00 +1200', 'YYYY-MM-DD H:mm:ss ZZ'),
    channel: 'sales',
  },
  {
    id: 'id2',
    timestamp: dayjs('2022-08-01 0:02:00 +1200', 'YYYY-MM-DD H:mm:ss ZZ'),
    channel: 'qr',
  },
  {
    id: 'id3',
    timestamp: dayjs('2022-08-02 0:03:00 +1200', 'YYYY-MM-DD H:mm:ss ZZ'),
    channel: 'qr',
  },
  {
    id: 'id4',
    timestamp: dayjs('2022-08-02 0:04:00 +1200', 'YYYY-MM-DD H:mm:ss ZZ'),
    channel: 'qr',
  },
  {
    id: 'id5',
    timestamp: dayjs('2022-08-02 0:05:00 +1200', 'YYYY-MM-DD H:mm:ss ZZ'),
    channel: 'website',
  },
  {
    id: 'id6',
    timestamp: dayjs('2022-08-03 0:06:00 +1200', 'YYYY-MM-DD H:mm:ss ZZ'),
    channel: 'sales',
  },
  {
    id: 'id7',
    timestamp: dayjs('2022-08-03 0:07:00 +1200', 'YYYY-MM-DD H:mm:ss ZZ'),
    channel: 'qr',
  },
];

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('application report', () => {
    it('should return zeros when there is no application data', async () => {
      jest.spyOn(appService, 'getApplications').mockResolvedValueOnce([]);
      const expectedResult = {
        '0': 0,
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        '10': 0,
        '11': 0,
        '12': 0,
        '13': 0,
        '14': 0,
        '15': 0,
        '16': 0,
        '17': 0,
        '18': 0,
        '19': 0,
        '20': 0,
        '21': 0,
        '22': 0,
        '23': 0,
      };
      const result = await appController.getApplicationReport();

      expect(result).toEqual(expectedResult);
    });

    it('should return correct application report', async () => {
      jest
        .spyOn(appService, 'getApplications')
        .mockResolvedValueOnce(MOCK_APPLICATION_DATA);

      const result = await appController.getApplicationReport();

      expect(result[0]).toEqual(3);
    });

    it('should return correct application report with filter', async () => {
      const channel = 'qr';
      jest
        .spyOn(appService, 'getApplications')
        .mockResolvedValueOnce(
          MOCK_APPLICATION_DATA.filter((app) => app.channel === channel),
        );

      const result = await appController.getApplicationReport(channel);

      expect(result[0]).toEqual(2);
    });
  });
});
