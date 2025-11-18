import { RightCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

interface Props {
  url?: string;
  title: string;
  textButton?: string;
  isShowButton?: boolean;
}

const TitleSection = ({
  url = '#',
  title,
  textButton = 'view all',
  isShowButton = true,
}: Props) => {
  return (
    <div className="border-b-[1px] flex items-center justify-between py-2">
      <h4 className="uppercase font-medium text-4xl">{title}</h4>
      {isShowButton && (
        <Link href={url} className="flex gap-2">
          <span className="text-sm capitalize">{textButton}</span>
          <RightCircleOutlined />
        </Link>
      )}
    </div>
  );
};

export default TitleSection;
