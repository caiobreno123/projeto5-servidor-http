import request from 'supertest';
import app from '../src/server';

describe('Servidor HTTP', () => {
  it('Deve responder com status 200 e uma mensagem', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Servidor funcionando');
  });
});
