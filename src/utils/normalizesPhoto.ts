import { IPhoto } from '@/interfaces/IPhoto';
import { IUnsplashPhoto } from '@/interfaces/IUnsplashPhoto';

export function normalizeData(data: IUnsplashPhoto[]): IPhoto[] {
  return data.map(item => ({
    id: item.id,
    created_at: item.created_at,
    width: item.width,
    height: item.height,
    blur_hash: item.blur_hash,
    likes: item.likes,
    ulr: item.urls.regular,
  }));
}
