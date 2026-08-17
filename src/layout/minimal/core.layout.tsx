import type { ReactNode } from 'react';
import Slot from '../slot';

interface LayoutSlots {
  header?: ReactNode;
  footer?: ReactNode;
}

interface CoreLayoutProps {
  slots?: LayoutSlots;
  children: ReactNode;
}

/**
 * Minimal's layout is intentionally sparser than modern's - no sidebar
 * concept at all, content given more room. Still follows the shared slot
 * convention (header/footer), just arranges fewer of them.
 */
export default function CoreLayout({ slots = {}, children }: CoreLayoutProps) {
  return (
    <div data-layout="minimal">
      <Slot name="header">{slots.header}</Slot>
      <main data-region="main">{children}</main>
      <Slot name="footer">{slots.footer}</Slot>
    </div>
  );
}
