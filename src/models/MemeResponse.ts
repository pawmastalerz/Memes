import { Meme } from './Meme';

export interface MemeResponse {
  success: boolean;
  data: { memes: Meme[] };
}
