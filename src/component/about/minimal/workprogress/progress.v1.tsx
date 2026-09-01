import React from 'react';
import type { MinimalWorkProgressContent } from '@content/about/minimal/about.content';

interface WorkProcessProps {
  content: MinimalWorkProgressContent[];
}

export default function WorkProcess({ content }: WorkProcessProps) {
  return (
    <div data-component="about-inside-mind-section">
      {content.map((item, index) => (
        <div key={index} data-component-section="mind-item">
          <span data-slot="mind-step">{item.step}</span>
          <h3 data-slot="mind-title">{item.title}</h3>
          <p data-slot="mind-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
}