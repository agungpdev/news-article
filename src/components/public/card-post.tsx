import Image from 'next/image';
import Link from 'next/link';

interface Props {
  imageUrl: string;
  title: string;
  category: string;
  postDate: string;
}

const CardPost = ({ imageUrl, title, category, postDate }: Props) => {
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image
          src={imageUrl}
          alt="img"
          fill
          className="object-cover rounded-sm"
        />
      </div>
      <div className="my-4">
        <h4 className="text-lg font-medium">
          <Link href="#">{title}</Link>
        </h4>
        <span className="text-xs text-primary/70">
          {category} — {postDate}
        </span>
      </div>
    </div>
  );
};

export default CardPost;
