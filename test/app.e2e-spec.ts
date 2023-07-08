import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/application-report', () => {
    const expectedResult = {
      '0': 2,
      '1': 3,
      '2': 3,
      '3': 3,
      '4': 1,
      '5': 2,
      '6': 1,
      '7': 2,
      '8': 2,
      '9': 5,
      '10': 3,
      '11': 5,
      '12': 4,
      '13': 5,
      '14': 3,
      '15': 3,
      '16': 2,
      '17': 4,
      '18': 3,
      '19': 3,
      '20': 4,
      '21': 5,
      '22': 2,
      '23': 4,
    };
    return request(app.getHttpServer())
      .get('/application-report')
      .expect(200)
      .expect(expectedResult);
  });

  it('/application-report?channel=all', () => {
    const expectedResult = {
      '0': 2,
      '1': 3,
      '2': 3,
      '3': 3,
      '4': 1,
      '5': 2,
      '6': 1,
      '7': 2,
      '8': 2,
      '9': 5,
      '10': 3,
      '11': 5,
      '12': 4,
      '13': 5,
      '14': 3,
      '15': 3,
      '16': 2,
      '17': 4,
      '18': 3,
      '19': 3,
      '20': 4,
      '21': 5,
      '22': 2,
      '23': 4,
    };
    return request(app.getHttpServer())
      .get('/application-report?channel=all')
      .expect(200)
      .expect(expectedResult);
  });

  it('/application-report?channel=all', () => {
    const expectedResult = {
      '0': 2,
      '1': 3,
      '2': 3,
      '3': 3,
      '4': 1,
      '5': 2,
      '6': 1,
      '7': 2,
      '8': 2,
      '9': 5,
      '10': 3,
      '11': 5,
      '12': 4,
      '13': 5,
      '14': 3,
      '15': 3,
      '16': 2,
      '17': 4,
      '18': 3,
      '19': 3,
      '20': 4,
      '21': 5,
      '22': 2,
      '23': 4,
    };
    return request(app.getHttpServer())
      .get('/application-report?channel=all')
      .expect(200)
      .expect(expectedResult);
  });

  it('/application-report?channel=sales', () => {
    const expectedResult = {
      '0': 1,
      '1': 1,
      '2': 2,
      '3': 2,
      '4': 0,
      '5': 1,
      '6': 1,
      '7': 0,
      '8': 1,
      '9': 2,
      '10': 2,
      '11': 2,
      '12': 2,
      '13': 1,
      '14': 1,
      '15': 1,
      '16': 1,
      '17': 1,
      '18': 1,
      '19': 1,
      '20': 3,
      '21': 1,
      '22': 0,
      '23': 1,
    };
    return request(app.getHttpServer())
      .get('/application-report?channel=sales')
      .expect(200)
      .expect(expectedResult);
  });

  it('/application-report?channel=website', () => {
    const expectedResult = {
      '0': 1,
      '1': 2,
      '2': 1,
      '3': 1,
      '4': 1,
      '5': 1,
      '6': 1,
      '7': 1,
      '8': 1,
      '9': 2,
      '10': 1,
      '11': 1,
      '12': 1,
      '13': 2,
      '14': 1,
      '15': 1,
      '16': 1,
      '17': 2,
      '18': 0,
      '19': 1,
      '20': 1,
      '21': 2,
      '22': 2,
      '23': 1,
    };
    return request(app.getHttpServer())
      .get('/application-report?channel=website')
      .expect(200)
      .expect(expectedResult);
  });

  it('/application-report?channel=qr', () => {
    const expectedResult = {
      '0': 1,
      '1': 1,
      '2': 1,
      '3': 1,
      '4': 1,
      '5': 1,
      '6': 1,
      '7': 1,
      '8': 0,
      '9': 2,
      '10': 1,
      '11': 2,
      '12': 1,
      '13': 2,
      '14': 1,
      '15': 1,
      '16': 1,
      '17': 1,
      '18': 2,
      '19': 2,
      '20': 1,
      '21': 2,
      '22': 0,
      '23': 2,
    };
    return request(app.getHttpServer())
      .get('/application-report?channel=qr')
      .expect(200)
      .expect(expectedResult);
  });
});
