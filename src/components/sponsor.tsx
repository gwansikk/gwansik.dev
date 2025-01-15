import Image from 'next/image';
import Link from 'next/link';

interface Props {
  src: string;
  name: string;
}

const Sponsor = ({ src, name }: Props) => {
  return (
    <Link
      className="flex flex-col items-center gap-1 text-xs"
      href={`https://github.com/${name}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        width={36}
        height={36}
        className="size-9 rounded-full"
        src={src}
        alt={`${name}'s avatar`}
        title={`sponsor by ${name}`}
        priority
      />
      <span>{name}</span>
    </Link>
  );
};

export default Sponsor;
