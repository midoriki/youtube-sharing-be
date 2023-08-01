import User from '@domain/entities/User';
import Vote from '@domain/entities/Vote';
import VideoShareRepo from '@infrastructure/repo/VideoShareRepo';
import VoteRepo from '@infrastructure/repo/VoteRepo';
import { Request, Response } from 'express';

export async function create(req: Request, res: Response) {
  const { videoShareId, type } = req.body;

  const videoShare = await VideoShareRepo.load(videoShareId);

  if (!videoShare) {
    return res.status(400).json({
      success: false,
      message: 'Video share not exists'
    });
  }

  const currentVote = await VoteRepo.findByUserAndVideo(req.user.id, videoShareId);

  if (currentVote && currentVote.type === type) {
    return res.status(400).json({
      success: false,
      message: 'You have already voted this'
    });
  }

  let vote;
  if (currentVote) {
    vote = currentVote;
  } else {
    vote = new Vote();
    vote.user = req.user as User;
    vote.videoShare = videoShare;
  }
  
  vote.type = type;
  
  await VoteRepo.save(vote);

  return res.json({
    success: true,
    message: 'Vote successfully'
  });
}