import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Home, Mail, User } from 'lucide-react';
import type { ComponentType } from 'react';
import { navContent } from '@content/common/nav.content';

const ICONS: Record<string, ComponentType<any>> = {
  '/': Home,
  '/about': User,
  '/projects': Briefcase,
  '/contact': Mail,
};

/**
 * No CSS Module here on purpose - this component's look is a style
 * concern, not a component concern, so its rules live in
 * @styles/minimal/sidebar.css and hook in via the [data-slot='sidebar']
 * attribute the layout's Slot already renders, plus the data-active flag
 * below for the current-route highlight.
 */
export default function Sidebar() {
  const location = useLocation();

  return (
    <nav>
      {navContent.map((item) => {
        const Icon = ICONS[item.to] ?? Home;
        const isActive = location.pathname === item.to;
        return (
          <Link key={item.to} to={item.to} data-active={isActive || undefined}>
            <Icon size={18} aria-hidden="true" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
