import React from 'react';
import type { MinimalProfessionalTimeline } from '@content/about/minimal/about.content';
import { ArrowRight } from "lucide-react";

interface TimelineProps {
  content: MinimalProfessionalTimeline[];
}

export default function ProfessionalTimeline({ content }: TimelineProps) {

  return (
    <div data-component="about-timeline-section">
      {content.map((item, index) => (
        <div key={index} data-component-section="timeline-item">
          <span data-slot="timeline-period">{item.period}</span>

          <div data-slot="timeline-icon">
            <ArrowRight size={16} />
          </div>

          <div data-slot="timeline-body">
            <h3 data-slot="timeline-role">{item.role}</h3>
            <span data-slot="timeline-org">{item.organization}</span>
            <p data-slot="timeline-summary">{item.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}