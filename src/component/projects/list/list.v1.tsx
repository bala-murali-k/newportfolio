import type { Project } from '@content/projects/projects.content';

interface ListProps {
  projects: Project[];
}

export default function ListV1({ projects }: ListProps) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>{project.tags.join(', ')}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer">
              View
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
