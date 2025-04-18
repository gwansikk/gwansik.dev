import Image from 'next/image';
import Link from 'next/link';

interface Props {
  github: string;
}

export default function Sponsor({ github }: Props) {
  return (
    <Link
      className="flex flex-col items-center gap-1 text-sm"
      href={`https://github.com/${github}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="size-11 rounded-full"
        width={44}
        height={44}
        src={`https://github.com/${github}.png`}
        alt={`${github}'s avatar`}
        title={`sponsor by ${github}`}
        priority
      />
      <span>{github}</span>
    </Link>
  );
}
