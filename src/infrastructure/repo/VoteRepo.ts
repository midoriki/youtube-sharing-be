import db from '@db/db';
import Vote from '@domain/entities/Vote';

const Repo = db.getRepository(Vote);

function save(vote: Vote) {
  return Repo.save(vote);
}

function findByUserAndVideo(userId: string, videoShareId: string): Promise<Vote | null> {
  return Repo.createQueryBuilder('vote')
    .leftJoinAndSelect('vote.user', 'user')
    .leftJoinAndSelect('vote.videoShare', 'videoShare')
    .where('user.id = :userId AND videoShare.id = :videoShareId', { userId, videoShareId })
    .getOne();
}

export default {
  save,
  findByUserAndVideo
};