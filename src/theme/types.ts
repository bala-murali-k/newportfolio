export interface Theme {
  id: string;
  label: string;
  colors: {
    background: string;
    foreground: string;
    [key: string]: string;
  };
}
