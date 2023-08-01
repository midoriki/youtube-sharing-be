import User from '@domain/entities/User';
import db from '@db/db';

const Repo = db.getRepository(User);

async function findByEmail(email: string): Promise<User | null> {
  return await Repo.findOneBy({ email });
}

async function save(user: User): Promise<User> {
  return await Repo.save(user);
}

export default {
  save,
  findByEmail
};