import { useStyle } from '@context/global/style-context';
import Hero from './hero';
import Intro from './intro';
import { getHomeContent } from '@content/home';

export default function CoreHome() {
  const { styleId } = useStyle();
  const content = getHomeContent(styleId);

  return (
    <>
      <section data-component="home-section-1">
        <Hero content={content.hero} />
      </section>
      <section data-component="home-section-2">
        <Intro content={content.intro} />
      </section>
    </>
  );
}
