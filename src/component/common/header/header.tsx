import { Link } from 'react-router-dom';
import { navContent } from '@content/common/nav.content';
import ThemeSwitcher from '../theme-switcher';
import StyleSwitcher from '../style-switcher';

interface HeaderProps {
  /**
   * Whether the header renders its own nav links. Styles whose layout
   * puts navigation in a sidebar instead (see App.tsx) pass false here,
   * so the header is left with just the style/theme controls.
   */
  showNav?: boolean;
}

export default function Header({ showNav = true }: HeaderProps) {
  return (
    <header>
      {showNav && (
        <nav>
          {navContent.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
      <div data-controls="appearance">
        <StyleSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
