import CardPost from '@/components/public/card-post';
import TitleSection from '@/components/public/title-section';
import dummy from '@/dummy/data.json';

const PoliticsPage = () => {
  const data = dummy.world;
  return (
    <div className="my-25">
      <TitleSection title="politics news" isShowButton={false} />
      <div className="grid grid-cols-3 gap-6 my-5">
        {data.map((i) => (
          <CardPost
            key={i.id}
            title={i.title}
            category={i.category}
            imageUrl={i.imagePath}
            postDate="Sep 9, 2025"
          />
        ))}
      </div>
    </div>
  );
};

export default PoliticsPage;
