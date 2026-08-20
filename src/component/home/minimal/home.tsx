import { useStyle } from '@context/global/style-context';
import Hero from './hero';
import Intro from './intro';
import Expertise from './expertise';
import Spotlight from './spotlight';
import ConnectV1 from './connect/connect.v1';
import FinisherV1 from './finisher/finisher.v1';
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
      <section data-component="home-section-3">
        <Expertise content={content.expertise} />
      </section>
      <section data-component="home-section-4">
        <Spotlight content={content.spotlight} />
      </section>
      <section data-component="home-section-6">
        <ConnectV1 content={content.connect} />
      </section>
      <section data-component="home-section-7">
        <FinisherV1 />
      </section>
    </>
  );
}
