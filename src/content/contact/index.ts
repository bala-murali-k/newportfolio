import type { ContactContent } from './contact.content';
import { contactContent as defaultContent } from './contact.content';
import { contactContent as minimalContent } from './minimal/contact.content';
import { contactContent as modernContent } from './modern/contact.content';

const contentMap: Record<string, ContactContent> = {
  minimal: minimalContent,
  modern: modernContent,
};

export function getContactContent(styleId: string): ContactContent {
  return contentMap[styleId] ?? defaultContent;
}

export type { ContactContent } from './contact.content';
