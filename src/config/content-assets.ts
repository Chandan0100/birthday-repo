// Central asset configuration for Kevin's profile photo
// Place 'kevin-profile.jpg' or 'kevin-profile.png' inside 'src/assets/' or set an external image URL here.
import placeholderAvatar from '../assets/kevin-profile-placeholder.svg';

export const DEFAULT_KEVIN_PHOTO = placeholderAvatar;

// You can easily swap this path or point to a local image in src/assets/
export const getProfilePhotoUrl = (customUrl?: string): string => {
  if (customUrl && customUrl.trim() !== '') {
    return customUrl;
  }
  return DEFAULT_KEVIN_PHOTO;
};
