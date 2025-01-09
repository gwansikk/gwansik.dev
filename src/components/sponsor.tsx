import Image from 'next/image';
import Link from 'next/link';

interface Props {
  src: string;
  name: string;
}

const Sponsor = ({ src, name }: Props) => {
  return (
    <Link
      href={`https://github.com/${name}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        width={36}
        height={36}
        className="size-9 rounded-full"
        src={src}
        alt={name}
        priority
      />
    </Link>
  );
};

export default Sponsor;
