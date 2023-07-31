import UserRepo from '@infrastructure/repo/UserRepo';
import { faker } from '@faker-js/faker';

describe('UserRepo', () => {
  it('find by email', () => {
    const mockEmail = faker.internet.email();
    const user = UserRepo.findByEmail(mockEmail);
    expect(user).toEqual({ email: mockEmail });
  });
});