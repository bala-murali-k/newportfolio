import type { AboutContent } from '@content/about/about.content';

interface BioProps {
  content: AboutContent;
}

export default function BioV1({ content }: BioProps) {
  return (
    <div data-component="bio">
      <p data-bio="summary">{content.summary}</p>

      {content.socials.length > 0 && (
        <ul data-bio="socials">
          {content.socials.map((social) => (
            <li key={social.label}>
              <a href={social.url} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      )}

      {content.experience.length > 0 && (
        <section data-bio="experience">
          <h2>Experience</h2>
          {content.experience.map((item) => (
            <article key={`${item.organization}-${item.period}`}>
              <h3>{item.role}</h3>
              <p data-bio-meta="true">
                {item.organization} &middot; {item.location} &middot; {item.period}
              </p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      )}

      {content.education.length > 0 && (
        <section data-bio="education">
          <h2>Education</h2>
          {content.education.map((item) => (
            <article key={`${item.school}-${item.period}`}>
              <h3>{item.degree}</h3>
              <p data-bio-meta="true">
                {item.school} &middot; {item.location} &middot; {item.period}
                {item.gpa ? ` \u00b7 GPA ${item.gpa}` : ''}
              </p>
            </article>
          ))}
        </section>
      )}

      {content.skills.length > 0 && (
        <section data-bio="skills">
          <h2>Skills</h2>
          {content.skills.map((group) => (
            <div key={group.category}>
              <h3>{group.category}</h3>
              <ul data-skill-list="true">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
