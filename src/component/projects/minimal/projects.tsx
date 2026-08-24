import { useStyle } from '@context/global/style-context';
import { getProjectsContent } from '@content/projects';
import type { MinimalProject } from '@/content/projects/minimal/projects.content';
import { MoveUpRight } from 'lucide-react';
import { truncate } from '@/utils/functions/common.helper.functions';

const MAX_DESCRIPTION_CHARS = 150;

export default function CoreProjects() {
  const { styleId } = useStyle();
  const projects: MinimalProject[] = getProjectsContent(styleId);

  return (
    <section data-component="projects-component">
      <div data-component="project-deco">
        <h1>Projects</h1>
      </div>
      <ul>
        {
          projects.map((project) => (
            <li key={project.id}>
              <div data-component-section="project-meta">
                <h2>{project.title}</h2>
                <span>{project.status}</span>
                <p>{truncate(project.description, MAX_DESCRIPTION_CHARS)}</p>
              </div>
              <div data-component-section="project-body">
                <div data-preview-box>
                  {
                    project.imageSource && project.isImageAvailable ?
                      <img src={project.imageSource} alt={project.imageAltText || "No Alternate"} /> :
                      <p>{project.title}</p>
                  }
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Explore <MoveUpRight />
                </a>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}