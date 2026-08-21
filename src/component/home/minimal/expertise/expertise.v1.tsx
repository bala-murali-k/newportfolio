import { useState } from 'react';
import { useMousePosition } from '@/utils/hooks/common/mouse.position';

interface ExpertiseItem {
  number: string;
  title: string;
  description: string;
  level: number;
}

interface ExpertiseProps {
  content: ExpertiseItem[];
}

export default function ExpertiseV1({ content }: ExpertiseProps) {
  const [hoveredIndex, setHoveredIndex] = useState<string | number | null>(null);
  const mousePos = useMousePosition();

  return (
    <div data-component="expertise">
      <div>
        <h2>Expertise</h2>
        <ul>
          {content.map((item) => (
            <li
              key={item.number}
              onMouseEnter={() => setHoveredIndex(item.number)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div data-heading>
                <span data-index>{item.number}</span>
                <h3>{item.title}</h3>
                <div data-bar>
                  <span data-bar-value>{item.level}%</span>
                  <div data-bar-track>
                    <div data-bar-fill style={{ width: `${item.level}%` }} />
                  </div>
                </div>
              </div>

              {/* Floating description active on hover */}
              {hoveredIndex === item.number && (
                <div
                  data-tooltip
                  style={{
                    left: `${mousePos.x + 12}px`,
                    top: `${mousePos.y + 12}px`,
                  }}
                >
                  {item.description}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}