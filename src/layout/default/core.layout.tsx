import type { ReactNode } from 'react';
import Slot from '../slot';

interface LayoutSlots {
  header?: ReactNode;
  footer?: ReactNode;
  sidebar?: ReactNode;
}

interface CoreLayoutProps {
  slots?: LayoutSlots;
  children: ReactNode;
}

export default function CoreLayout({ slots = {}, children }: CoreLayoutProps) {
  return (
    <div data-layout="default">
      <Slot name="header">{slots.header}</Slot>

      <div data-region="body">
        <Slot name="sidebar">{slots.sidebar}</Slot>
        <main data-region="main">{children}</main>
      </div>

      <Slot name="footer">{slots.footer}</Slot>
    </div>
  );
}
