import React, { useState } from 'react';
import { BrandEmblem, resolveDriveOrImageUrl } from './BrandEmblem';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'w-full h-full',
}) => {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = resolveDriveOrImageUrl(src);

  if (hasError || !resolvedSrc) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#3B1B0E] via-[#4A2414] to-[#24140E] text-[#FFF9F2] p-6 text-center ${containerClassName}`}
      >
        <BrandEmblem size="md" className="mb-3 opacity-90" />
        <span className="font-serif-editorial text-lg font-medium tracking-wide text-[#F7E6D7]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
