import dotenv from 'dotenv';
dotenv.config({ path: '../../configs/.env' });
import request from 'supertest';
import { createApp } from '../../api/app';
import { Express } from 'express';

describe('/api/v1/users', () => {
  let app: Express;

  beforeAll(() => {
    app = createApp();
  });

  describe('[GET] /', () => {
    it('should return 200 and count is 8', async () => {
      const response = await request(app).get('/api/v1/users'); // Assuming 123 is an invalid user ID
      expect(response.status).toBe(200);
      expect(response.body.count).toBe(8);
    });
  });
  describe('[GET] /:id', () => {
    it('should return 404 if user is not found', async () => {
      const response = await request(app).get('/api/v1/users/10'); // Assuming 123 is an invalid user ID
      expect(response.status).toBe(404);
      expect(response.body.message).toBe(
        'There is no user associated with this id.'
      );
    });

    it('should return 200 and get user id', async () => {
      const response = await request(app).get('/api/v1/users/1'); // Assuming 123 is an invalid user ID
      expect(response.status).toBe(200);
      expect(response.body.data.id).toBe(1);
    });
  });
});
