import { useState } from 'react';
import { faEnvelope, faCalendar, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { ContactChannel } from '@content/contact';

export interface ChannelsV1Props {
  channels: ContactChannel[];
}

// lucide-react 1.0 removed all trademarked brand icons (GitHub, LinkedIn,
// X/Twitter, etc.) for legal reasons - see https://lucide.dev/guide/react/migration.
// Mapped to generic equivalents here rather than pulling in a separate
// brand-icon package; swap for real logos later if desired.
const ICONS: Record<string, IconProp> = {
  email: faEnvelope,
  mail: faEnvelope,
  github: faGithub,
  linkedin: faLinkedin,
  calendar: faCalendar,
  cal: faCalendar,
};

const FALLBACK_ICON = faArrowUpRightFromSquare;

const getIcon = (platform: string): IconProp => {
  return (
    ICONS[platform.toLowerCase().trim()] ?? FALLBACK_ICON
  );
};

export default function ChannelsV1({ channels }: ChannelsV1Props) {
  const [hoveredIndex, setHoveredIndex] = useState<string | number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div data-component="contact-channels">
      <ul data-channels-list>
        {channels.map(({ number, href, value, note, platform }) => (
          <li
            data-channel-item
            key={number}
            onMouseEnter={() => setHoveredIndex(number)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-icon-link
              aria-label={value || platform}
            >
              <FontAwesomeIcon
                icon={getIcon(platform)}
                aria-hidden="true"
              />
            </a>

            {/* Floating description active on hover */}
            {hoveredIndex === number && (
              <div
                data-tooltip
                style={{
                  left: `${mousePos.x + 12}px`,
                  top: `${mousePos.y + 12}px`,
                }}
              >
                {note}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}