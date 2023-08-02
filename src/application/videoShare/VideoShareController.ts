import User from '@domain/entities/User';
import VideoShare from '@domain/entities/VideoShare';
import VideoShareRepo from '@infrastructure/repo/VideoShareRepo';
import { findVideoById } from '@libs/youtube/api';
import { extractVideoIdFromURL } from '@libs/youtube/extractor';
import { Request, Response } from 'express';

export async function create(req: Request, res: Response) {
  const { url } = req.body;

  const videoId = extractVideoIdFromURL(url);

  if (!videoId) {
    return res.status(400).json({
      success: false,
      message: 'URL is not from Youtube or has not been supported yet'
    });
  }

  const video = await findVideoById(videoId);

  if (!video) {
    return res.status(400).json({
      success: false,
      message: 'Can not find this video from Youtube'
    });
  }

  const videoShare = new VideoShare();
  videoShare.videoId = video.id;
  videoShare.title = video.title;
  videoShare.description = video.description;
  videoShare.url = url;
  videoShare.user = req.user as User;

  await VideoShareRepo.save(videoShare);

  return res.json({
    success: true,
    message: 'Share video successfully'
  });
}

export async function all(req: Request, res: Response) {
  const page = parseInt(req.query.page as string || '1');
  const perPage = parseInt(req.query.perPage as string || '10');

  const [videoShares, totalRecord] = await VideoShareRepo.all(page, perPage);
  const totalPage = Math.ceil(totalRecord / perPage);
  return res.json({
    success: true,
    data: videoShares.map(v => v.toJSON(req.user)),
    totalPage
  });
}