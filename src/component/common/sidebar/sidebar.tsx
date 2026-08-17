import { Link } from 'react-router-dom';
import { navContent } from '@content/common/nav.content';

/**
 * Reusable sidebar, positioned by whichever layout declares a "sidebar"
 * slot (currently only layout/minimal). Carries no layout opinion of its
 * own - fixed positioning, width, and scroll behavior are the layout's
 * responsibility, not this component's.
 */
export default function Sidebar() {
  return (
    <nav aria-label="Sidebar navigation">
      <ul>
        {navContent.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
