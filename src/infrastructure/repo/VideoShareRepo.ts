import VideoShare from '@domain/entities/VideoShare';
import db from '@db/db';

const Repo = db.getRepository(VideoShare);

function save(videoShare: VideoShare): Promise<VideoShare> {
  return Repo.save(videoShare);
}

function all(page: number = 1, perPage = 10): Promise<VideoShare[]> {
  const skip = (page - 1) * perPage;
  return Repo.createQueryBuilder('videoShare')
    .leftJoinAndSelect('videoShare.user', 'user')
    .leftJoinAndSelect('videoShare.votes', 'vote')
    .skip(skip)
    .take(perPage)
    .getMany();
}

export default {
  all,
  save
};