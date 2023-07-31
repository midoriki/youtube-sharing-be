import User from '@domain/User';

function findByEmail(email: string) {
  return new User(email);
}

export default {
  findByEmail
};