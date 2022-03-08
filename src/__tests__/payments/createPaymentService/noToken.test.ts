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

    it('should return status 401 when no token is provided', async () => {
      const { body } = await supertest(app)
        .post(postRoute)
        .set('Authorization', '')
        .expect(401);
      expect(body).toEqual({ message: 'No token provided' }); // jest
    })
  })

})