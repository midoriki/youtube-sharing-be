import axios from 'axios';
import { GOOGLE_API_KEY } from '@config/config';

const API_ENDPOINT = 'https://youtube.googleapis.com/youtube/v3/videos';

export interface YoutubeApiResponse {
  items: {
    id: string;
    snippet: {
      title: string;
      description: string;
    };
  }[];
}

export interface YoutubeVideoInfo {
  id: string;
  title: string;
  description: string;
}

export async function findVideoById(id: string): Promise<YoutubeVideoInfo | null> {
  try {
    const response = await axios.get<YoutubeApiResponse>(API_ENDPOINT, {
      params: {
        key: GOOGLE_API_KEY,
        part: 'snippet',
        id
      }
    });
    const { data } = response;
    if (data.items.length > 0) {
      const video = data.items[0];
      return {
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description
      };
    }
    return null;
  } catch (e) {
    console.log(`[Youtube] Failed to find video with id ${id}.`, e);
    return null;
  }
}