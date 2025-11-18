import CardPost from '@/components/public/card-post';
import TitleSection from '@/components/public/title-section';
import Image from 'next/image';
import Link from 'next/link';
import dummy from '@/dummy/data.json';

const LateNewsSection = () => {
  const datas = dummy.latest;
  const hero = datas[0];
  const twoSmall = datas.slice(1, 3);
  const gridCards = datas.slice(3);

  return (
    <section>
      <TitleSection url="#" title="latest news" />
      <div className="grid grid-cols-2 my-5 gap-10 space-y-2.5">
        <div
          className="bg-cover bg-center h-[500px] relative rounded-sm"
          style={{ backgroundImage: `url(${hero.imagePath})` }}
        >
          {/* Full overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-sm" />
          {/* Gradient khusus bawah */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent rounded-sm" />
          <div className="absolute bottom-0 left-0 text-white p-10">
            <Link href={hero.postUrl} className="underline font-medium text-xl">
              {hero.title}
            </Link>
            <p className="text-xs mt-2.5">{hero.category} — Sep 9, 2025</p>
          </div>
        </div>

        <div className="grid grid-flow-col grid-rows-2 gap-4">
          {twoSmall.map((i) => (
            <div key={i.id} className="flex items-center gap-4">
              <div>
                <h4 className="text-xl leading-6 font-medium">
                  <Link href={i.postUrl}>{i.title}</Link>
                </h4>
                <p className="text-xs capitalize leading-3.5 text-primary/70 my-2.5">
                  {i.category} — Sep 9, 2025
                </p>
              </div>
              <div className="relative w-[300px] h-[230px]">
                <Image
                  src={i.imagePath}
                  alt="image"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {gridCards.map((i) => (
          <CardPost
            key={i.id}
            imageUrl={i.imagePath}
            title={i.title}
            category={i.category}
            postDate="Sep 9, 2025"
          />
        ))}
      </div>
    </section>
  );
};

export default LateNewsSection;
