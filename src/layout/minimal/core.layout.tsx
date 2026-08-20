import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import Slot from './slot';
import styles from './core.layout.module.css';

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
 * Minimal's layout: header, sidebar, and footer are fixed chrome - they
 * never move. Only the main content region scrolls.
 *
 * Desktop-only for now: sidebar sits as a left column, and vertical mouse
 * wheel input over the content is redirected into horizontal scroll
 * (left <-> right), since the page itself doesn't scroll vertically.
 * Mobile behavior is deferred.
 */
export default function CoreLayout({ slots = {}, children }: CoreLayoutProps) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const handleWheel = (e: WheelEvent) => {
      const SCROLL_SPEED = 1.5;
      if (e.deltaY === 0) return;
      e.preventDefault();
      main.scrollLeft += e.deltaY * SCROLL_SPEED;
    };

    const handleScroll = () => {
      const maxScroll = main.scrollWidth - main.clientWidth;

      if (maxScroll <= 0) return;

      const progress = main.scrollLeft / maxScroll;

      main.parentElement?.style.setProperty(
        '--scroll-progress',
        `${progress * 100}%`
      );
    };

    main.addEventListener('wheel', handleWheel, { passive: false });
    main.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      main.removeEventListener('wheel', handleWheel);
      main.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.layout} data-layout="minimal">
      <Slot name="header" data-region="header">{slots.header}</Slot>
      <Slot name="sidebar" data-region="sidebar">{slots.sidebar}</Slot>
      <main ref={mainRef} data-region="main">
        {children}
      </main>
      <div className="scroll-progress" data-region="scroll-progress"></div>
      <Slot name="footer" data-region="footer">{slots.footer}</Slot>
    </div>
  );
}
