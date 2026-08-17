import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { getStyleConfig, listStyleConfigs, defaultStyleId } from '@styles/index';
import type { StyleConfig } from '@styles/default/config';
import type { Theme } from '@theme/types';

const DEFAULT_THEME_ID = 'light';

interface StyleContextValue {
  style: StyleConfig;
  theme: Theme;
  styleId: string;
  themeId: string;
  availableStyles: StyleConfig[];
  availableThemes: Theme[];
  toggleTheme: () => void;
  switchStyle: (styleId: string) => void;
}

const StyleContext = createContext<StyleContextValue | null>(null);

export function StyleProvider({ children }: { children: ReactNode }) {
  const [styleId, setStyleId] = useState(defaultStyleId);
  const [themeId, setThemeId] = useState(DEFAULT_THEME_ID);

  const style = getStyleConfig(styleId);
  const theme = style.themes[themeId] ?? style.themes[DEFAULT_THEME_ID];

  // Reflect active style/theme on <html> as the hook point future CSS attaches to.
  useEffect(() => {
    document.documentElement.setAttribute('data-style', style.id);
    document.documentElement.setAttribute('data-theme', theme.id);
  }, [style.id, theme.id]);

  function toggleTheme() {
    setThemeId((current) => (current === 'light' ? 'dark' : 'light'));
  }

  function switchStyle(nextStyleId: string) {
    const next = getStyleConfig(nextStyleId);
    setStyleId(next.id);
    setThemeId(next.themes[DEFAULT_THEME_ID] ? DEFAULT_THEME_ID : Object.keys(next.themes)[0]);
  }

  const value = useMemo<StyleContextValue>(
    () => ({
      style,
      theme,
      styleId: style.id,
      themeId: theme.id,
      availableStyles: listStyleConfigs(),
      availableThemes: Object.values(style.themes),
      toggleTheme,
      switchStyle,
    }),
    [style, theme]
  );

  return <StyleContext.Provider value={value}>{children}</StyleContext.Provider>;
}

export function useStyle() {
  const ctx = useContext(StyleContext);
  if (!ctx) throw new Error('useStyle must be used within a StyleProvider');
  return ctx;
}
