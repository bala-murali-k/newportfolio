import { Link } from 'react-router-dom';
import { navContent } from '@content/common/nav.content';
import ThemeSwitcher from '../theme-switcher';
import StyleSwitcher from '../style-switcher';

export default function Header() {
  return (
    <header>
      <nav>
        {navContent.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div data-controls="appearance">
        <StyleSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
