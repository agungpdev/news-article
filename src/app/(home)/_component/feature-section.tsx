import { cn } from '@/lib/utils';
import { RightCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';
import dummy from '@/dummy/data.json';

const date = new Date();
const dateFormatter = new Intl.DateTimeFormat('id', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});
const localeDate = dateFormatter.format(date);

interface PropsMain {
  title: string;
  category: string;
  postUrl: string;
}

const MainContent = ({ title, category, postUrl }: PropsMain) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-x-5">
          <span className="uppercase outline text-sm p-2 rounded-lg">
            {category}
          </span>
          <span className="uppercase outline text-sm p-2 rounded-lg">
            guy hawkins
          </span>
        </div>
        <div>
          <span className="text-xs">{localeDate}</span>
          <span className="text-xs mx-5">—</span>
          <span className="text-xs">06 Minute</span>
        </div>
      </div>
      <div className="grid grid-cols-3 my-6">
        <h2 className="text-4xl font-medium col-span-2">
          <Link href={postUrl} className="inline-block">
            {title}
          </Link>
        </h2>
        <div className="text-end">
          <Link href={postUrl}>
            <span className="text-sm">Read Article</span>{' '}
            <RightCircleOutlined />
          </Link>
        </div>
      </div>
    </>
  );
};

const FeatureContentSection = () => {
  const datas = dummy.feature;
  return (
    <section className="my-25">
      <div className="grid grid-cols-4 gap-6">
        {datas.map((i, idx) => {
          return (
            <div
              key={idx}
              className={cn(
                idx < 4 && 'flex items-center gap-2',
                idx === 4 && 'col-span-4'
              )}
            >
              <div
                className={cn(
                  'bg-cover bg-center rounded-sm',
                  idx < 4 && ' w-[84px] h-[84px]',
                  idx === 4 && ' w-full h-[580px] my-8 p-6'
                )}
                style={{ backgroundImage: `url(${i.imagePath})` }}
              >
                {idx === 4 && (
                  <span className="capitalize rounded-sm bg-white p-2.5 text-xs font-medium before:bg-red-500 before:w-[10px] before:h-[10px] before:rounded-full before:inline-block before:content-[' '] before:mr-2">
                    live updates
                  </span>
                )}
              </div>

              {idx === 4 ? (
                <MainContent {...i} />
              ) : (
                <div>
                  <Link
                    href={i.categoryUrl}
                    className="text-sm uppercase font-semibold mb-1 inline-block"
                  >
                    {i.category}
                  </Link>
                  <Link href={i.postUrl} className="text-xs leading-5 block">
                    {i.title}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureContentSection;
