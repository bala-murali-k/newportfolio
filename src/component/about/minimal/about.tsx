import { useStyle } from '@context/global/style-context';
import Bio from './bio';
import { getAboutContent } from '@content/about';
import type { MinimalAboutContent } from '@content/about/minimal/about.content';
import FinisherV1 from './finisher/finisher.v1';
import ProfessionalTimeline from './timeline/timeline.v1';
import WorkProcess from './workprogress/progress.v1';

export default function CoreAbout() {
  const { styleId } = useStyle();
  const content = getAboutContent<MinimalAboutContent>(styleId);

  return (
    <>
      <section data-component="about-section-1">
        <Bio content={content.hero} />
      </section>
      {/* <section data-component="about-section-2">
        <ProfessionalTimeline content={content.professionalTimeline} />
      </section> */}
      {/* <section data-component="about-section-3">
        <WorkProcess content={content.workProgress} />
      </section> */}
      <section data-component="about-section-5">
        <FinisherV1 />
      </section>
    </>
  );
}