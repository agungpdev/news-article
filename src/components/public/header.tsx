import {
  GlobalOutlined,
  RightOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

const menu = [
  { id: 1, label: 'world news', url: '/world-news' },
  { id: 2, label: 'politics', url: '/politics' },
  { id: 3, label: 'business', url: '/business' },
  { id: 4, label: 'technology', url: '/technology' },
  { id: 5, label: 'health', url: '/health' },
  { id: 6, label: 'sports', url: '/sports' },
  { id: 7, label: 'culture', url: '/culture' },
  { id: 8, label: 'podcast', url: '/podcast' },
];

const HomeHeader = () => {
  const date = new Date();
  const dateFormatter = new Intl.DateTimeFormat('id', {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  });
  const localeDate = dateFormatter.format(date);
  return (
    <header>
      <section className="border-t-[1px] border-b-[1px] py-2">
        <div className="flex items-center justify-between">
          <div>
            <GlobalOutlined />
            <span className="ml-2 text-sm">{localeDate}</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm">The menu</span>
            <RightOutlined />
            <SearchOutlined />
          </div>
        </div>
      </section>
      <section>
        <div className="py-6 text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/brand/brand.svg"
              alt="the news logo"
              width={343}
              height={82}
            />
          </Link>
        </div>
      </section>
      <section className="border-t-[1px] border-b-[1px] py-2">
        <nav>
          <ul className="flex item-center gap-4 justify-center">
            {menu.map((i) => (
              <li key={i.id}>
                <Link href={i.url} className="hover:text-secondary capitalize">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default HomeHeader;
