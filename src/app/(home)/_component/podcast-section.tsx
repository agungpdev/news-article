import TitleSection from '@/components/public/title-section';
import Image from 'next/image';
import Link from 'next/link';
import dummy from '@/dummy/data.json';

const PodcastSection = () => {
  const datas = dummy.latest;
  return (
    <section className="my-25">
      <TitleSection url="#" title="podcast" />
      <div className="grid grid-cols-3 gap-6 my-5 space-y-2.5">
        {datas.map((i) => (
          <div key={i.id} className="flex items-center gap-4">
            <div className="relative w-full h-[250px]">
              <Image
                src={i.imagePath}
                alt="image"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <h4 className="text-lg">
                <Link href={i.postUrl}>{i.title}</Link>
              </h4>
              <p className="text-sm font-light my-2.5">
                The latest trends, creative breakthroughs, and the visionary
                minds driving change
              </p>
              <p className="text-xs text-primary/70 mt-5">
                10 Minutes &nbsp;—&nbsp; Guy hawkins
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PodcastSection;
