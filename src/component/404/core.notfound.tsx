import type { ComponentType } from 'react';
import { useStyle } from '@context/global/style-context';
import { defaultStyleId } from '@styles/index';
import ModernNotFound from './modern/notfound';
import MinimalNotFound from './minimal/notfound';

/**
 * Registry of style id -> that style's own Contact implementation. Add a
 * new style by creating component/contact/<id>/contact.tsx (+ index.ts)
 * and registering it here - nothing outside this file needs to change.
 *
 * No backend exists yet (per architecture: frontend-only for v1) - each
 * variant handles its own local-only submission state.
 */
const variants: Record<string, ComponentType> = {
  modern: ModernNotFound,
  minimal: MinimalNotFound,
};

export default function CoreNotFound() {
  const { styleId } = useStyle();
  const Variant = variants[styleId] ?? variants[defaultStyleId];
  return <Variant />;
}
