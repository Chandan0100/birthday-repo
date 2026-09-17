import ctoPhoto from '../assets/cto.png';

// Central asset configuration for profile photo
export const PHOTO_URL = ctoPhoto;

// Resolves photo URL, prioritizing provided customUrl or bundled asset
export const getProfilePhotoUrl = (customUrl?: string): string => {
  if (customUrl && customUrl.trim() !== '') {
    return customUrl;
  }
  return PHOTO_URL;
};
