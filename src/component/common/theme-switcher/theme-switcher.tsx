import { useStyle } from '@context/global/style-context';

export default function ThemeSwitcher() {
  const { themeId, toggleTheme } = useStyle();

  return (
    <button type="button" onClick={toggleTheme} data-current-theme={themeId}>
      Theme: {themeId}
    </button>
  );
}
