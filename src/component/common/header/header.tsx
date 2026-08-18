import { Link } from 'react-router-dom';
import { useStyle } from '@context/global/style-context';
import { navContent } from '@content/common/nav.content';
import ThemeSwitcher from '../theme-switcher';
import StyleSwitcher from '../style-switcher';
import styles from './header.module.css';

export default function Header() {
  const { styleId } = useStyle();
  const isMinimal = styleId === 'minimal';

  return (
    <header className={styles.header}>
      <span className={styles.brand}>Dev</span>

      {!isMinimal && (
        <nav className={styles.nav}>
          {navContent.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      <div className={styles.controls}>
        <StyleSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
