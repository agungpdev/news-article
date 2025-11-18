import TitleSection from '@/components/public/title-section';
import Image from 'next/image';
import Link from 'next/link';
import dummy from '@/dummy/data.json';

const WorldNewsSection = () => {
  const datas = dummy.world;
  const hero = datas[0];
  const gridCards = datas.slice(1);

  return (
    <section className="my-25">
      <TitleSection url="#" title="world news" />
      <div className="grid grid-cols-3 gap-6 space-y-2.5 my-5">
        <div
          className="bg-cover bg-center h-[640px] relative rounded-sm col-span-2 p-10"
          style={{ backgroundImage: `url(${hero.imagePath})` }}
        >
          <div className="absolute inset-5 bg-white w-1/2 rounded-md px-5 py-7">
            <span className="outline p-2.5 bg-primary text-white rounded-md">
              Oct 14, 2025
            </span>
            <h4 className="font-medium text-3xl my-5">
              <Link href={hero.postUrl}>{hero.title}</Link>
            </h4>
            <div className="absolute bottom-0 left-0 px-5 py-10">
              <Link href="#" className="underline">
                by. Agung
              </Link>
              <span>&nbsp;</span>
              <Link href="#" className="underline">
                / Publisher
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {gridCards.map((i) => (
            <div key={i.id} className="flex items-center gap-4">
              <div className="relative w-[300px] h-[200px]">
                <Image
                  src={i.imagePath}
                  alt="image"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <div>
                <p className="text-xs capitalize leading-3.5 text-primary/70 my-2.5">
                  {i.category} &nbsp;—&nbsp; Sep 9, 2025
                </p>
                <h4 className="text-xl leading-6 font-medium">
                  <Link href={i.postUrl}>{i.title}</Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldNewsSection;
