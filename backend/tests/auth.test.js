const request = require('supertest');
const app = require('../app');

// Mock sendEmail utility so tests don't try to send real emails
jest.mock('../src/services/emailService', () => {
  return jest.fn().mockResolvedValue(true);
});

describe('Auth Endpoints', () => {
  const testUser = {
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser123@example.com',
    password: 'password123'
  };

  it('should register a new user successfully', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(testUser);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('success', true);
  });

  it('should not register user with existing email', async () => {
    // Already registered in the first test
    const res = await request(app)
      .post('/api/auth/register')
      .send(testUser);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('success', false);
  });

  it('should fail login if email is not verified', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: testUser.email,
        password: testUser.password
      });

    // In this app, users need OTP verification before login
    expect(res.statusCode).not.toEqual(200);
  });
});
