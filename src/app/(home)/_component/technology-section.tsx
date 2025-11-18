import TitleSection from '@/components/public/title-section';
import Image from 'next/image';
import Link from 'next/link';
import dummy from '@/dummy/data.json';

const TechnologySection = () => {
  const datas = dummy.technology;
  return (
    <section>
      <TitleSection url="#" title="technology news" />
      <div className="grid grid-cols-4 gap-6 space-y-2.5 my-5">
        {datas.map((i) => (
          <div key={i.id}>
            <div className="relative w-full h-[300px]">
              <Image
                src={i.imagePath}
                alt="image"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <p className="text-xs text-primary/70 my-2.5">
                Guy hawkins &nbsp;—&nbsp; Sep 9, 2025
              </p>
              <h4 className="font-medium text-lg">
                <Link href={i.postUrl}>{i.title}</Link>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;
