'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
  github: string;
}

export function Sponsor({ github }: Props) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      className="flex flex-col items-center gap-1 text-sm"
      href={`https://github.com/${github}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {imageError ? (
        <div className="size-11 rounded-full border" />
      ) : (
        <Image
          className="size-11 rounded-full"
          width={44}
          height={44}
          src={`https://github.com/${github}.png`}
          alt={`${github}'s avatar`}
          title={`sponsor by ${github}`}
          priority
          onError={() => setImageError(true)}
        />
      )}
      <span>{github}</span>
    </Link>
  );
}
