import supertest from 'supertest';
import app from "../../../app";
import { mockDatabase } from '../../../shared/testUtils/mockDb';
import { mockData } from '../../../shared/testUtils/fixtures';
import { createAuthToken } from '../../../utils/tokenManager';
import { Types } from "mongoose";

const db = mockDatabase();
const postRoute = "/api/v1/payment";

describe('Payments', () => {
  //Antes de todo
  beforeAll(async () => {
    (await db).connect;
  })


  //AL terminar
  afterAll(async () => {
    (await db).closeDatabase;
  });

  describe('POST', () => {
    it('should return status 200 when a payment is created ', async () => {
      const fakeToken = createAuthToken({ id: '6226e62b6704430fce4eacf6' });
      const { body } = await supertest(app)
        .post(postRoute)
        .set('Authorization', fakeToken)
        .send({
          user: "6226e62b6704430fce4eacf6",
          cart: "6226e6dc6704430fce4eacf8"
        })
        .expect(200);
      expect(body).toEqual({ data: mockData.fakePayment }); // jest
    },20000);
  })

})