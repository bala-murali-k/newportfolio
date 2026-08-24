export function truncate(str: string | undefined | null, max: number = 100): string {
  if (!str) return '';
  return str.length > max ? `${str.slice(0, max)}...` : str;
}