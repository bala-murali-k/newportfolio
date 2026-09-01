import type { About } from '@content/about/about.content';

interface BioProps {
  content: About;
}

export default function BioV1({ content }: BioProps) {
  return (
    <div data-component="bio">
    </div>
  );
}
