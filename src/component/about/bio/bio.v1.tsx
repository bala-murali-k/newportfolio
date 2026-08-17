import type { AboutContent } from '@content/about/about.content';

interface BioProps {
  content: AboutContent;
}

export default function BioV1({ content }: BioProps) {
  return (
    <div data-component="bio">
      <p>{content.summary}</p>
      <ul>
        {content.socials.map((social: any) => (
          <li key={social.label}>
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
