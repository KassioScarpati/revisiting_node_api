import request from 'supertest';
import app from '../../src/app';

describe('Controllers - Ping', () => {
  describe('GET /ping', () => {
    it('should return PONG', async () => {
      const response = await request(app).get('/ping');
      expect(response.body.message).toBe('PONG');
    });
  });
});
