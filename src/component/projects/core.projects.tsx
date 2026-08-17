import { useStyle } from '@context/global/style-context';
import List from './list';
import { getProjectsContent } from '@content/projects';

export default function CoreProjects() {
  const { styleId } = useStyle();
  const projects = getProjectsContent(styleId);

  return (
    <section data-component="core.projects">
      <h1>Projects</h1>
      <List projects={projects} />
    </section>
  );
}
