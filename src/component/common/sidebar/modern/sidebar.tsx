import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Home, Mail, User } from 'lucide-react';
import type { ComponentType } from 'react';
import { navContent } from '@content/common/nav.content';
// import styles from './sidebar.module.css';

const ICONS: Record<string, ComponentType<any>> = {
  '/': Home,
  '/about': User,
  '/projects': Briefcase,
  '/contact': Mail,
};

export default function Sidebar() {
  const location = useLocation();

  return (
    <></>
    // <nav className={styles.nav}>
    //   {navContent.map((item) => {
    //     const Icon = ICONS[item.to] ?? Home;
    //     const isActive = location.pathname === item.to;
    //     return (
    //       <Link
    //         key={item.to}
    //         to={item.to}
    //         className={styles.link}
    //         data-active={isActive || undefined}
    //       >
    //         <Icon size={18} />
    //         <span className={styles.label}>{item.label}</span>
    //       </Link>
    //     );
    //   })}
    // </nav>
  );
}
