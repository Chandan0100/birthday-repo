import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getProfilePhotoUrl, PHOTO_URL } from '../../config/content-assets';

interface ProfilePhotoProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'rounded';
  showGlow?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-20 h-20 sm:w-24 sm:h-24',
  lg: 'w-28 h-28 sm:w-36 sm:h-36',
  xl: 'w-36 h-36 sm:w-44 sm:h-44',
};

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  src,
  alt = "Profile",
  size = 'md',
  shape = 'circle',
  showGlow = true,
  className = '',
}) => {
  const [imgSrc, setImgSrc] = useState<string>(getProfilePhotoUrl(src));
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  const roundedClass = shape === 'circle' ? 'rounded-full' : 'rounded-3xl';

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Subtle warm orange ambient glow */}
      {showGlow && (
        <div
          className={`absolute inset-0 bg-[#F97316] opacity-25 blur-xl -z-10 transform scale-110 ${roundedClass}`}
        />
      )}

      {/* Main photo container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`relative overflow-hidden bg-[#FFF4E8] border-4 border-white shadow-xl shadow-orange-500/10 ${roundedClass} ${sizeClasses[size]}`}
      >
        <img
          src={imgSrc}
          alt={alt}
          onLoad={() => setHasLoaded(true)}
          onError={() => {
            if (imgSrc !== PHOTO_URL) {
              setImgSrc(PHOTO_URL);
            }
          }}
          className={`w-full h-full object-cover object-center transition-opacity duration-300 ${
            hasLoaded ? 'opacity-100' : 'opacity-80'
          }`}
          loading="eager"
        />
      </motion.div>
    </div>
  );
};

export default ProfilePhoto;

