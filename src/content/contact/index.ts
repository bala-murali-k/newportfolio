import { resolveContent } from '../resolveContent';
import type { ContactContent } from './contact.content';
import { contactContent as baseContent } from './contact.content';
import { contactContent as modernStyleContent } from './modern/contact.modern.content';
import { contactContent as minimalStyleContent } from './minimal/contact.minimal.content';

const variants: Record<string, ContactContent> = {
  modern: modernStyleContent,
  minimal: minimalStyleContent,
};

export function getContactContent(styleId: string): ContactContent {
  return resolveContent(styleId, variants, baseContent);
}

export type { ContactContent } from './contact.content';
