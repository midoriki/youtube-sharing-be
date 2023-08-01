import User from '@domain/entities/User';
import db from '@db/db';

const Repo = db.getRepository(User);

function findByEmail(email: string): Promise<User | null> {
  return Repo.findOneBy({ email });
}

function save(user: User): Promise<User> {
  return Repo.save(user);
}

export default {
  save,
  findByEmail
};