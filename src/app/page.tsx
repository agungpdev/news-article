import FeatureContentSection from './(home)/_component/feature-section';
import LateNewsSection from './(home)/_component/late-news-section';
import PodcastSection from './(home)/_component/podcast-section';
import TechnologySection from './(home)/_component/technology-section';
import WorldNewsSection from './(home)/_component/world-news-section';

export default function Home() {
  return (
    <>
      <FeatureContentSection />
      <LateNewsSection />
      <WorldNewsSection />
      <TechnologySection />
      <PodcastSection />
    </>
  );
}
