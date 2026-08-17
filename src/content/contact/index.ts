import { resolveContent } from '../resolveContent';
import type { ContactContent } from './contact.content';
import { contactContent as baseContent } from './contact.content';
import { contactContent as defaultStyleContent } from './default/contact.default.content';

const variants: Record<string, ContactContent> = {
  default: defaultStyleContent,
};

export function getContactContent(styleId: string): ContactContent {
  return resolveContent(styleId, variants, baseContent);
}

export type { ContactContent } from './contact.content';
