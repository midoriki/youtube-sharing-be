import VideoShare from '@domain/entities/VideoShare';
import db from '@db/db';

const Repo = db.getRepository(VideoShare);

function load(id: string): Promise<VideoShare | null> {
  return Repo.findOneBy({ id });
}

function save(videoShare: VideoShare): Promise<VideoShare> {
  return Repo.save(videoShare);
}

function all(page: number = 1, perPage = 10): Promise<VideoShare[]> {
  const skip = (page - 1) * perPage;
  return Repo.createQueryBuilder('videoShare')
    .leftJoinAndSelect('videoShare.user', 'user')
    .leftJoinAndSelect('videoShare.votes', 'vote')
    .leftJoinAndSelect('vote.user', 'voteUser')
    .skip(skip)
    .take(perPage)
    .getMany();
}

export default {
  load,
  all,
  save
};