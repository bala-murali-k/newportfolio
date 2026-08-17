/**
 * Resolves which content variant to use for the active style.
 * variants: content authored specifically for one or more style ids
 * (content/<page>/<style-id>/<page>.<style-id>.content.ts).
 * fallback: content/<page>/<page>.content.ts, used when the active
 * style hasn't defined its own content for this page yet.
 */
export function resolveContent<T>(styleId: string, variants: Record<string, T>, fallback: T): T {
  return variants[styleId] ?? fallback;
}
