import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from '../../theme-switcher/core.theme-switcher';
import StyleSwitcher from '../../style-switcher/core.style-switcher';

export default function Header() {

  return (
    <header>
      <Link to={'/'}>Dev</Link>
      <StyleSwitcher />
      <ThemeSwitcher />
    </header>
  );
}
