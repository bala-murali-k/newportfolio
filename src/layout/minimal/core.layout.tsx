import type { ReactNode } from 'react';
import Slot from '../slot';
import './core.layout.css';

interface LayoutSlots {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
}

interface CoreLayoutProps {
  slots?: LayoutSlots;
  children: ReactNode;
}

/**
 * Minimal's layout (experimental):
 *
 *   +----------------------------------------+
 *   |                 Header                 |
 *   +--------------+---------------------------+
 *   |              |                           |
 *   |   Sidebar    |          Content          |
 *   |              |                           |
 *   +--------------+---------------------------+
 *   |                 Footer                  |
 *   +----------------------------------------+
 *
 * Header, sidebar and footer are fixed in place (see core.layout.css);
 * only the content region scrolls, and it scrolls horizontally. This file
 * only declares structure/slots - all sizing, positioning and scroll
 * behavior live in core.layout.css, which is this layout's concern, not
 * style's.
 */
export default function CoreLayout({ slots = {}, children }: CoreLayoutProps) {
  return (
    <div data-layout="minimal">
      <Slot name="header">{slots.header}</Slot>

      <div data-region="body">
        <Slot name="sidebar">{slots.sidebar}</Slot>
        <main data-region="main">{children}</main>
      </div>

      <Slot name="footer">{slots.footer}</Slot>
    </div>
  );
}
