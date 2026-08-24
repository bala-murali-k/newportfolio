import { useState, useMemo, type ReactNode } from 'react';
import { useStyle } from '@context/global/style-context';
import { getProjectsContent } from '@content/projects';
import type { MinimalProject } from '@/content/projects/minimal/projects.content';
import { ChevronsLeft, ChevronsRight, MoveUpRight } from 'lucide-react';
import { truncate } from '@/utils/functions/common.helper.functions';

const MAX_DESCRIPTION_CHARS = 150;

type TooltipType = 'version' | 'features' | 'architecture' | 'description' | 'image';

interface ProjectCardProps {
  initialProject: MinimalProject;
}

function ProjectCard({ initialProject }: ProjectCardProps) {
  const allVersions = useMemo(() => {
    const historical = initialProject.versions || [];
    return [...historical, initialProject];
  }, [initialProject]);

  const [activeIndex, setActiveIndex] = useState(allVersions.length - 1);
  const currentProject = allVersions[activeIndex];

  const [tooltipContent, setTooltipContent] = useState<ReactNode | null>(null);
  const [tooltipType, setTooltipType] = useState<TooltipType | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (type: TooltipType, content: ReactNode) => {
    setTooltipType(type);
    setTooltipContent(content);
  };

  const handleMouseLeave = () => {
    setTooltipType(null);
    setTooltipContent(null);
  };

  const hasLowerVersion = activeIndex > 0;
  const hasHigherVersion = activeIndex < allVersions.length - 1;
  const allVersionsText = allVersions.map((v) => `v${v.version}`).join(', ');

  // Northwest (top-left) offset for image hover, standard Southeast for other elements
  const tooltipStyle =
    tooltipType === 'image'
      ? {
          left: `${mousePos.x - 14}px`,
          top: `${mousePos.y - 14}px`,
          transform: 'translate(-100%, -100%)',
        }
      : {
          left: `${mousePos.x + 14}px`,
          top: `${mousePos.y + 14}px`,
          transform: 'none',
        };

  return (
    <li onMouseMove={handleMouseMove}>
      <div data-component-section="project-meta">
        <h2>{currentProject.title}</h2>
        <div data-component-section="project-meta-helper">
          <span>{currentProject.status}</span>

          <div data-component-section="project-meta-version">
            <button
              type="button"
              onClick={() => hasLowerVersion && setActiveIndex((prev) => prev - 1)}
              disabled={!hasLowerVersion}
              aria-label="Previous version"
            >
              <ChevronsLeft />
            </button>

            {/* Version Text Hover */}
            <span
              data-hoverable-text
              onMouseEnter={() =>
                handleMouseEnter(
                  'version',
                  <div data-tooltip-group>
                    <span>{allVersionsText}</span>
                  </div>
                )
              }
              onMouseLeave={handleMouseLeave}
            >
              v{currentProject.version}
            </span>

            <button
              type="button"
              onClick={() => hasHigherVersion && setActiveIndex((prev) => prev + 1)}
              disabled={!hasHigherVersion}
              aria-label="Next version"
            >
              <ChevronsRight />
            </button>
          </div>

          {/* Features Button Hover */}
          <button
            type="button"
            onMouseEnter={() => handleMouseEnter('features', 'Click to see features')}
            onMouseLeave={handleMouseLeave}
          >
            features
          </button>

          {/* Architecture Button Hover */}
          <button
            type="button"
            onMouseEnter={() => handleMouseEnter('architecture', 'Click to see architecture')}
            onMouseLeave={handleMouseLeave}
          >
            architecture
          </button>
        </div>

        {/* Description Hover */}
        <p
          data-hoverable-desc
          onMouseEnter={() =>
            handleMouseEnter(
              'description',
              <div data-tooltip-details>
                <div><strong>Year:</strong> {currentProject.year ?? 'N/A'}</div>
                <div><strong>Hosted:</strong> {currentProject.hostedLink || 'Not hosted / Local'}</div>
                <div><strong>Code:</strong> {currentProject.isCodePublic ? 'Public' : 'Private'}</div>
              </div>
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          {truncate(currentProject.description, MAX_DESCRIPTION_CHARS)}
        </p>
      </div>

      <div data-component-section="project-body">
        {/* Image Preview Hover */}
        <div
          data-preview-box
          onMouseEnter={() =>
            handleMouseEnter(
              'image',
              <div data-tooltip-chart>
                {/* <span data-tooltip-label>Tech Stack Expertise</span> */}
                {currentProject.techStack && currentProject.techStack.length > 0 ? (
                  <div data-chart-list>
                    {currentProject.techStack.map((item) => (
                      <div key={item.index} data-chart-row>
                        <span data-stack-name>{item.stack}</span>
                        <div data-bar-track>
                          <div
                            data-bar-fill
                            style={{ width: `${item.stackExpert}%` }}
                          />
                        </div>
                        <span data-stack-value>{item.stackExpert}%</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span>No tech stack specified</span>
                )}
              </div>
            )
          }
          onMouseLeave={handleMouseLeave}
        >
          {currentProject.imageSource && currentProject.isImageAvailable ? (
            <img
              src={currentProject.imageSource}
              alt={currentProject.imageAltText || `${currentProject.title} screenshot`}
            />
          ) : (
            <p>{currentProject.title}</p>
          )}
        </div>

        <a href={currentProject.link} target="_blank" rel="noreferrer">
          Explore <MoveUpRight />
        </a>
      </div>

      {/* Floating Cursor Tooltip */}
      {tooltipContent && tooltipType && (
        <div
          data-tooltip
          data-tooltip-type={tooltipType}
          style={tooltipStyle}
        >
          {tooltipContent}
        </div>
      )}
    </li>
  );
}

export default function CoreProjects() {
  const { styleId } = useStyle();
  const rawProjects: MinimalProject[] = getProjectsContent(styleId);

  return (
    <section data-component="projects-component">
      <div data-component="project-deco">
        <h1>Projects</h1>
      </div>
      <ul>
        {rawProjects.map((project) => (
          <ProjectCard key={project.id} initialProject={project} />
        ))}
      </ul>
    </section>
  );
}