import { useStyle } from '@context/global/style-context';
import { getProjectsContent } from '@content/projects';

export default function CoreProjects() {
  const { styleId } = useStyle();
  const projects = getProjectsContent(styleId);

  return (
    <section data-component="core.projects">
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.tags.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
