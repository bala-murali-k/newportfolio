import { useStyle } from '@context/global/style-context';
import Bio from './bio';
import { getAboutContent } from '@content/about';

export default function CoreAbout() {
  const { styleId } = useStyle();
  const content = getAboutContent(styleId);

  return (
    <section data-component="core.about">
      <h1>About</h1>
      <Bio content={content} />
    </section>
  );
}
